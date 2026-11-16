import type { Metadata } from "next";
import { Anchor, Lightbulb, Lock, Square, Ship, Warehouse } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FeatureGrid, PhoneList, SectionTitle } from "@/components/ui/Blocks";
import { CtaBand } from "@/components/ui/CtaBand";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { MaskReveal, Reveal } from "@/components/ui/Reveal";
import { ThemeScope } from "@/components/ui/ThemeScope";
import { photos } from "@/content/photos";
import { site, storageOptions } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Boat & RV Storage in Brentwood, CA | Indoor & Outdoor Storage on the Delta",
  description:
    "Secure indoor and outdoor boat, trailer and RV storage at Orwood Resort in Brentwood, CA. Gated, camera-monitored, with concrete pads and individual lighting. Request storage information.",
  path: "/storage",
  image: photos.dryDock.src,
});

const crumbs = [{ name: "Boat & RV Storage", href: "/storage" }];

const features = [
  { icon: Warehouse, title: "Indoor storage", text: "Individually enclosed units that keep your boat out of the weather, ready when you are." },
  { icon: Ship, title: "Outdoor storage", text: "Space for boats, trailers and RVs, with straightforward access for your next trip." },
  { icon: Lock, title: "Gated & camera-monitored", text: "A locked gate and cameras help keep the facility secure around the clock." },
  { icon: Square, title: "Concrete pads", text: "Stable, level concrete pads for trailers and RVs, so parking stays simple." },
  { icon: Lightbulb, title: "Individual lighting", text: "Each unit has its own lighting, so you can load, check and prep with confidence." },
  { icon: Anchor, title: "Self-launching discounts", text: "Free weekday launching for stored boats, where applicable. Ask when you inquire." },
];

const requestSteps = [
  "Tell us what you're storing and the size you need.",
  "We confirm unit availability, door sizes and current monthly rates.",
  "We send your options and next steps in writing.",
];

export default function StoragePage() {
  return (
    <ThemeScope theme="storage">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHero
        eyebrow="Boat & RV Storage"
        title="Space for Your Next _Adventure._"
        description="Indoor and outdoor storage for boats, trailers and RVs, in a gated, camera-monitored facility right at the resort."
        photo={photos.dryDock}
        crumbs={crumbs}
        objectPosition="center 50%"
        actions={
          <>
            <Button href="#inquire" variant="light">
              Request Storage Information
            </Button>
            <Button href={`tel:${site.phone.main.tel}`} variant="outline-light">
              Call {site.phone.main.display}
            </Button>
          </>
        }
      />

      <section className="bg-ivory py-28 md:py-36">
        <div className="wrap">
          <SectionTitle eyebrow="Features" title="Secure, Simple and Ready When You Are." />
          <div className="mt-20">
            <FeatureGrid items={features} columns="md:grid-cols-2 lg:grid-cols-3" />
          </div>
        </div>
      </section>

      <section id="options" className="scroll-mt-28 bg-[var(--tint)] py-28 md:py-36">
        <div className="wrap">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <SectionTitle eyebrow="Compare Options" title="Storage at a Glance." />
            </div>
            <Reveal delay={0.1} className="md:col-span-4 md:col-start-9">
              <p className="leading-relaxed text-stone">
                Rates and availability are confirmed by our office and can change. Call before you plan a move.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="mt-16">
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <caption className="sr-only">Boat and RV storage options with unit sizes, door sizes, monthly rates and availability</caption>
                <thead>
                  <tr className="border-b border-ink/25">
                    {["Storage type", "Unit size", "Door size", "Monthly rate", "Availability"].map((heading) => (
                      <th key={heading} scope="col" className="pb-5 pr-6 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-stone">
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {storageOptions.map((option) => (
                    <tr key={option.type} className="border-b border-ink/12 transition-colors hover:bg-ivory/70">
                      <th scope="row" className="py-7 pr-6 font-display text-2xl font-normal text-ink">
                        {option.type}
                      </th>
                      <td className="py-7 pr-6 leading-relaxed text-ink/85">{option.unitSize}</td>
                      <td className="py-7 pr-6 leading-relaxed text-ink/85">{option.doorSize}</td>
                      <td className="py-7 pr-6 leading-relaxed text-ink/85">{option.monthlyRate}</td>
                      <td className="py-7 leading-relaxed text-ink/85">{option.availability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <ul className="grid gap-5 md:hidden">
              {storageOptions.map((option) => (
                <li key={option.type} className="bg-ivory p-6">
                  <p className="font-display text-2xl text-ink">{option.type}</p>
                  <dl className="mt-5 grid grid-cols-[7rem_1fr] gap-x-4 gap-y-3 text-sm leading-relaxed">
                    <dt className="text-stone">Unit size</dt>
                    <dd className="text-ink">{option.unitSize}</dd>
                    <dt className="text-stone">Door size</dt>
                    <dd className="text-ink">{option.doorSize}</dd>
                    <dt className="text-stone">Monthly rate</dt>
                    <dd className="text-ink">{option.monthlyRate}</dd>
                    <dt className="text-stone">Availability</dt>
                    <dd className="text-ink">{option.availability}</dd>
                  </dl>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-28 md:py-36">
        <div className="wrap grid gap-4 md:grid-cols-12 md:gap-6">
          <MaskReveal className="relative aspect-[4/3] overflow-hidden md:col-span-6">
            <Photo photo={photos.boatRows} zoom sizes="(min-width: 768px) 50vw, 100vw" />
          </MaskReveal>
          <MaskReveal className="relative aspect-[4/3] overflow-hidden md:col-span-6 md:mt-24">
            <Photo photo={photos.dryDock} zoom sizes="(min-width: 768px) 50vw, 100vw" objectPosition="center 70%" />
          </MaskReveal>
        </div>
      </section>

      <section id="inquire" className="scroll-mt-28 bg-[var(--tint)] py-28 md:py-36">
        <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionTitle
              eyebrow="Storage Inquiry"
              title="Request Storage Information."
              description="Share your storage type and size. We'll confirm availability and current rates with you."
            />
            <ol className="mt-12 grid gap-7 border-t border-ink/12 pt-8">
              {requestSteps.map((step, index) => (
                <li key={step} className="grid grid-cols-[2.5rem_1fr] gap-3 leading-relaxed text-ink/85">
                  <span className="font-display text-lg text-[var(--accent-strong)]">0{index + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
            <div className="mt-12">
              <PhoneList />
            </div>
          </div>
          <div className="bg-ivory p-8 md:p-12 lg:col-span-7 lg:col-start-6">
            <InquiryForm type="storage" />
          </div>
        </div>
      </section>

      <CtaBand
        title="Your boat, ready when you are."
        text="Storage at Orwood means you can spend more time on the water and less time preparing."
        photo={photos.marinaYachts}
        objectPosition="center 55%"
        primary={{ label: "Request Storage Information", href: "#inquire" }}
        secondary={{ label: `Call ${site.phone.main.display}`, href: `tel:${site.phone.main.tel}` }}
      />
    </ThemeScope>
  );
}
