import type { Metadata } from "next";
import { MapPin, Navigation } from "lucide-react";
import { Button, TextLink } from "@/components/ui/Button";
import { PageIntro, PhoneList } from "@/components/ui/Blocks";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { JsonLd } from "@/components/ui/JsonLd";
import { Reveal } from "@/components/ui/Reveal";
import { photos } from "@/content/photos";
import { site } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact & Directions | Orwood Resort, 4451 Orwood Road, Brentwood, CA",
  description:
    "Get directions to Orwood Resort at 4451 Orwood Road, Brentwood, CA 94513. Call the main resort, Bar & Grill or General Store, or send us a message.",
  path: "/contact",
  image: photos.marinaSailboats.src,
});

const crumbs = [{ name: "Contact & Directions", href: "/contact" }];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageIntro
        eyebrow="Contact & Directions"
        title="Let's Plan Your _Visit._"
        description="Call, email or send us a note. Our team can help with launches, meals, camping, storage and events."
        crumbs={crumbs}
      />

      <section id="form" className="scroll-mt-28 bg-ivory py-24 md:py-32">
        <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-12 lg:col-span-5">
            <Reveal>
              <div className="flex items-start gap-4">
                <MapPin aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-[var(--accent-strong)]" />
                <address className="text-lg not-italic leading-relaxed text-ink">
                  {site.street}
                  <br />
                  {site.city}, {site.region} {site.postalCode}
                </address>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={site.directionsUrl}>Get Directions</Button>
                <Button href={site.mapViewUrl} variant="secondary">
                  Open in Maps
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="border-t border-ink/12 pt-10">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-stone">Phone</p>
              <div className="mt-6">
                <PhoneList />
              </div>
            </Reveal>

            <Reveal delay={0.15} className="border-t border-ink/12 pt-10">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-stone">Arriving</p>
              <ul className="mt-6 grid gap-5 leading-relaxed text-ink/85">
                <li className="flex items-start gap-3">
                  <Navigation aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[var(--accent)]" />
                  Arrive by car, or by boat at the marina and docks.
                </li>
                <li className="flex items-start gap-3">
                  <Navigation aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[var(--accent)]" />
                  Ample parking on site for trailers and cars.
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-8">
                <TextLink href="/bar-grill#hours">Bar & Grill hours</TextLink>
                <TextLink href="/faq">Read the FAQ</TextLink>
              </div>
            </Reveal>
          </div>

          <div className="bg-[var(--tint)] p-8 md:p-12 lg:col-span-6 lg:col-start-7">
            <p className="font-display text-3xl text-ink">Send us a message</p>
            <p className="mt-3 mb-10 leading-relaxed text-stone">
              We reply by email or phone, usually within one business day.
            </p>
            <InquiryForm type="contact" />
          </div>
        </div>
      </section>

      <section className="relative bg-delta-950">
        <div className="relative aspect-[4/3] w-full md:aspect-[21/9]">
          <iframe
            src={site.mapEmbedUrl}
            title="Map showing Orwood Resort at 4451 Orwood Road, Brentwood, CA 94513"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
        <div className="wrap flex flex-col gap-6 py-10 text-ivory md:flex-row md:items-center md:justify-between">
          <p className="font-display text-2xl">
            {site.fullAddress}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href={site.directionsUrl} variant="light">
              Get Directions
            </Button>
            <Button href={`tel:${site.phone.main.tel}`} variant="outline-light">
              Call {site.phone.main.display}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
