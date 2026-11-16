import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { PageIntro } from "@/components/ui/Blocks";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/Faq";
import { JsonLd } from "@/components/ui/JsonLd";
import { Reveal } from "@/components/ui/Reveal";
import { photos } from "@/content/photos";
import { faqGroups, site } from "@/content/site";
import { allFaqItems, breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "FAQ | Boat Launch, Camping, Dining & Storage at Orwood Resort",
  description:
    "Answers to common questions about Orwood Resort's boat launch, marina, RV camping, Bar & Grill, General Store, boat and RV storage, events and location in Brentwood, CA.",
  path: "/faq",
  image: photos.launchRamp.src,
});

const crumbs = [{ name: "FAQ", href: "/faq" }];

export default function FaqPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd(allFaqItems)} />

      <PageIntro
        eyebrow="Frequently Asked"
        title="Questions, _Answered._"
        description="Quick answers about getting here, launching, camping, dining, storage and events. If you still have a question, we're happy to help."
        crumbs={crumbs}
      >
        <div className="flex flex-wrap gap-3">
          <Button href={`tel:${site.phone.main.tel}`}>Call {site.phone.main.display}</Button>
          <Button href="/contact" variant="secondary">
            Send a Question
          </Button>
        </div>
      </PageIntro>

      <section className="bg-ivory py-24 md:py-32">
        <div className="wrap space-y-20">
          {faqGroups.map((group, groupIndex) => (
            <div key={group.title} className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <Reveal className="lg:col-span-4">
                <p className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                  {String(groupIndex + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-4xl">{group.title}</h2>
              </Reveal>
              <div className="lg:col-span-7 lg:col-start-6">
                <FaqList items={group.items} idPrefix={`faq-${groupIndex}`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        title="Still have a question?"
        text="Our team can answer what this page can't. Call the main resort or send us a message."
        primary={{ label: `Call ${site.phone.main.display}`, href: `tel:${site.phone.main.tel}` }}
        secondary={{ label: "Send a Message", href: "/contact" }}
      />
    </>
  );
}
