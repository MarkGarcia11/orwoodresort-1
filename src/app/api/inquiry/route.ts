import { db } from "@/db";
import { inquiries } from "@/db/schema";
import { forms, type FieldDef, type InquiryType } from "@/content/forms";
import { site } from "@/content/site";

export const dynamic = "force-dynamic";

/* Spam protection: honeypot field, minimum fill time and a per-visitor rate limit. */
const MIN_FILL_MS = 2500;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 6;
const attempts = new Map<string, number[]>();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const GENERIC_FAILURE = `We couldn't send your request just now. Please call the main resort at ${site.phone.main.display}.`;

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (attempts.get(key) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  attempts.set(key, recent);
  return recent.length > RATE_MAX;
}

function fail(message: string, status = 400, fieldErrors?: Record<string, string>) {
  return Response.json({ status: "error", message, fieldErrors }, { status });
}

function validate(fields: FieldDef[], data: Record<string, string>) {
  const errors: Record<string, string> = {};

  for (const field of fields) {
    const value = data[field.name] ?? "";

    if (!value) {
      if (field.required) errors[field.name] = `${field.label} is required.`;
      continue;
    }

    if (value.length > (field.max ?? 2000)) {
      errors[field.name] = `${field.label} is too long.`;
      continue;
    }

    switch (field.kind) {
      case "email":
        if (!EMAIL_RE.test(value)) errors[field.name] = "Enter a valid email address.";
        break;
      case "tel":
        if (value.replace(/\D/g, "").length < 10) errors[field.name] = "Enter a phone number with area code.";
        break;
      case "select":
        if (field.options && !field.options.includes(value)) errors[field.name] = "Choose one of the options.";
        break;
      case "date":
        if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || Number.isNaN(Date.parse(value))) {
          errors[field.name] = "Enter a valid date.";
        }
        break;
      case "number":
        if (!/^\d{1,3}$/.test(value) || Number(value) < 1) errors[field.name] = "Enter a number between 1 and 999.";
        break;
      default:
        break;
    }
  }

  return errors;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return fail(GENERIC_FAILURE);
  }

  const type = String(body.type ?? "") as InquiryType;
  const config = forms[type];
  if (!config) return fail(GENERIC_FAILURE);

  const values: Record<string, string> = {};
  for (const field of config.fields) {
    const raw = body[field.name];
    values[field.name] = typeof raw === "string" ? raw.trim() : raw == null ? "" : String(raw).trim();
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";

  // Honeypot: real visitors never see or fill this field.
  if (String(body.company ?? "").trim() !== "") return fail(GENERIC_FAILURE);

  const startedAt = Number(body.startedAt);
  if (!startedAt || Date.now() - startedAt < MIN_FILL_MS) {
    return fail("Please review your details, then send again.");
  }

  if (isRateLimited(ip)) {
    return fail(`We've received several messages from your connection recently. Please call ${site.phone.main.display}.`, 429);
  }

  const fieldErrors = validate(config.fields, values);

  if (type === "camping" && !fieldErrors.arrival && !fieldErrors.departure) {
    if (Date.parse(values.departure) <= Date.parse(values.arrival)) {
      fieldErrors.departure = "Departure must be after your arrival date.";
    }
  }

  if (Object.keys(fieldErrors).length > 0) {
    return fail("Please correct the highlighted fields.", 422, fieldErrors);
  }

  const known = new Set(["fullName", "email", "phone", "subject", "message"]);
  const details: Record<string, string> = {};
  for (const field of config.fields) {
    if (!known.has(field.name) && values[field.name]) details[field.name] = values[field.name];
  }

  try {
    await db.insert(inquiries).values({
      type,
      name: values.fullName,
      email: values.email,
      phone: values.phone || null,
      subject: values.subject || null,
      message: values.message || null,
      details,
      ipAddress: ip.slice(0, 64),
    });
  } catch (error) {
    console.error("[inquiry] could not save submission", error);
    return fail(GENERIC_FAILURE, 500);
  }

  // Optional notification hook (for example, a Zapier or email relay webhook).
  const webhook = process.env.INQUIRY_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ type, submittedAt: new Date().toISOString(), ...values }),
      });
    } catch (error) {
      console.error("[inquiry] webhook notification failed", error);
    }
  }

  return Response.json({ status: "success" });
}
