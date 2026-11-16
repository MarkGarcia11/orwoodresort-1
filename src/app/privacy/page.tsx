import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/Blocks";
import { site } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";
import { photos } from "@/content/photos";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Orwood Resort",
  description: "How Orwood Resort handles the information you share through our website forms and phone calls.",
  path: "/privacy",
  image: photos.heroDelta.src,
});

const crumbs = [{ name: "Privacy Policy", href: "/privacy" }];

const sections = [
  {
    title: "What we collect",
    body: [
      "When you send us a message or an inquiry, we collect the details you choose to share: your name, email address, phone number, and the content of your request, such as storage size, camping dates or event details.",
      "To keep the forms secure, we also record the time you submitted the form and the network address it came from, which helps us prevent spam.",
    ],
  },
  {
    title: "How we use it",
    body: [
      "We use your details to reply to your request, check availability, prepare options and follow up about your visit.",
      "We don't sell your personal information, and we don't use it for advertising.",
    ],
  },
  {
    title: "How long we keep it",
    body: [
      "We keep inquiry records for as long as they're useful for responding to your request and for our business records, then remove them.",
    ],
  },
  {
    title: "Cookies and tracking",
    body: [
      "This website doesn't use advertising or tracking cookies. Your browser may store basic preferences, such as your reduced-motion setting, which stay on your device.",
    ],
  },
  {
    title: "Your choices",
    body: [
      `You can ask us to show, correct or delete the information you've shared. Call ${site.phone.main.display} or use our contact form to make a request.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageIntro
        eyebrow="Legal"
        title="Privacy _Policy._"
        description="A plain-language summary of how Orwood Resort handles the information you share with us online and by phone."
        crumbs={crumbs}
      />

      <section className="bg-ivory py-24 md:py-32">
        <div className="wrap grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4" />
          <div className="max-w-2xl space-y-14 lg:col-span-7 lg:col-start-5">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-3xl text-ink">{section.title}</h2>
                <div className="mt-5 space-y-4 text-[1.0625rem] leading-relaxed text-stone">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
            <p className="border-t border-ink/12 pt-8 text-sm text-stone">
              Questions about this policy? Contact Orwood Resort at {site.fullAddress} or call{" "}
              {site.phone.main.display}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
