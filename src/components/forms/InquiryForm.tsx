"use client";

import { useState, type FormEvent } from "react";
import { Check, ChevronDown } from "lucide-react";
import { forms, type FieldDef, type InquiryType } from "@/content/forms";
import { site } from "@/content/site";

type SubmitResult = {
  status: "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
};

const inputBase =
  "w-full rounded-none border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-[1rem] text-ink placeholder:text-stone/55 transition-colors duration-500 focus:border-[var(--accent)] focus:outline-none aria-[invalid=true]:border-ember-700";

/**
 * Client-side form that posts JSON to /api/inquiry. The success message only appears
 * after the server confirms the request was saved.
 */
export function InquiryForm({ type }: { type: InquiryType }) {
  const config = forms[type];
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [startedAt] = useState(() => Date.now());

  const update = (name: string, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setFormError(null);
    setErrors({});

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...values, type, startedAt }),
      });
      const result = (await response.json()) as SubmitResult;

      if (response.ok && result.status === "success") {
        setSuccess(true);
      } else {
        setErrors(result.fieldErrors ?? {});
        setFormError(result.message ?? `We couldn't send your request. Please call ${site.phone.main.display}.`);
      }
    } catch {
      setFormError(`We couldn't send your request just now. Please call ${site.phone.main.display}.`);
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div role="status" aria-live="polite" className="border-l-2 border-[var(--accent)] bg-[var(--tint)] p-8 md:p-10">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--accent)] text-ivory">
          <Check aria-hidden="true" className="h-5 w-5" />
        </span>
        <h3 className="mt-6 font-display text-3xl leading-tight text-ink">{config.successTitle}</h3>
        <p className="mt-4 max-w-xl leading-relaxed text-stone">{config.successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-x-8 gap-y-7 md:grid-cols-2">
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label>
          Company (leave this field empty)
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.company ?? ""}
            onChange={(event) => update("company", event.target.value)}
          />
        </label>
      </div>

      {config.fields.map((field) => (
        <Field
          key={field.name}
          field={field}
          value={values[field.name] ?? ""}
          error={errors[field.name]}
          onChange={(value) => update(field.name, value)}
        />
      ))}

      <div className="flex flex-col gap-5 pt-2 md:col-span-2 md:flex-row md:items-center md:justify-between">
        <p className="max-w-md text-sm leading-relaxed text-stone">
          We use your details only to reply to your request. Read our{" "}
          <a href="/privacy" className="link-line text-[var(--accent-strong)]">
            privacy policy
          </a>
          .
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-[var(--accent)] px-8 py-3.5 text-[0.95rem] font-medium text-ivory transition-[background-color,transform,opacity] duration-500 ease-[var(--ease-orwood)] hover:-translate-y-0.5 hover:bg-[var(--accent-strong)] disabled:cursor-wait disabled:opacity-70"
        >
          {submitting ? "Sending your request…" : config.submitLabel}
        </button>
      </div>

      {formError && (
        <p role="alert" className="border-l-2 border-ember-700 bg-ember-100/60 px-5 py-4 text-sm leading-relaxed text-ember-800 md:col-span-2">
          {formError}
        </p>
      )}
    </form>
  );
}

function Field({
  field,
  value,
  error,
  onChange,
}: {
  field: FieldDef;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  const id = `field-${field.name}`;
  const errorId = `${id}-error`;
  const span = field.half || field.kind === "number" || field.kind === "date" ? "md:col-span-1" : "md:col-span-2";
  const invalid = Boolean(error);
  const describedBy = invalid ? errorId : undefined;

  return (
    <div className={`flex flex-col gap-1.5 ${span}`}>
      <label htmlFor={id} className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-stone">
        {field.label}
        {field.required && (
          <span aria-hidden="true" className="ml-1 text-ember-700">
            *
          </span>
        )}
      </label>

      {field.kind === "select" ? (
        <div className="relative">
          <select
            id={id}
            name={field.name}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            aria-invalid={invalid}
            aria-describedby={describedBy}
            aria-required={field.required}
            className={`${inputBase} appearance-none pr-8`}
          >
            <option value="">Select an option</option>
            {field.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--accent-strong)]"
          />
        </div>
      ) : field.kind === "textarea" ? (
        <textarea
          id={id}
          name={field.name}
          rows={4}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={field.placeholder}
          maxLength={field.max}
          aria-invalid={invalid}
          aria-describedby={describedBy}
          aria-required={field.required}
          className={`${inputBase} resize-y`}
        />
      ) : (
        <input
          id={id}
          name={field.name}
          type={field.kind === "number" ? "text" : field.kind}
          inputMode={field.kind === "number" ? "numeric" : field.kind === "tel" ? "tel" : undefined}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={field.placeholder}
          autoComplete={field.autoComplete}
          maxLength={field.max}
          aria-invalid={invalid}
          aria-describedby={describedBy}
          aria-required={field.required}
          className={inputBase}
        />
      )}

      {invalid && (
        <p id={errorId} className="text-sm text-ember-700">
          {error}
        </p>
      )}
    </div>
  );
}
