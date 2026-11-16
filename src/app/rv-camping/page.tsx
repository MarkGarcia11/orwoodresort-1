import type { Metadata } from "next";
import { Anchor, Droplets, Fuel, Info, Store, Sun, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FactGrid, FeatureGrid, PhoneList, SectionTitle } from "@/components/ui/Blocks";
import { CtaBand } from "@/components/ui/CtaBand";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { MaskReveal, Reveal } from "@/components/ui/Reveal";
import { ThemeScope } from "@/components/ui/ThemeScope";
import { photos } from "@/content/photos";
import { campingAmenities, site } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "RV Camping in Brentwood, CA | Waterside Sites on the Delta",
  description:
    "RV camping at Orwood Resort in Brentwood, CA, with sites near the water, water and electric hookups at designated sites, wet berths, a fuel dock, General Store and Bar & Grill.",
  path: "/rv-camping",
  image: photos.rvWater.src,
});

const crumbs = [{ name: "RV Camping", href: "/rv-camping" }];

const amenityIcons = [Anchor, Fuel, Store, UtensilsCrossed, Droplets, Sun];

const steps = [
  "Tell us your dates, rig type and length, and whether you're bringing a boat.",
  "Our team checks availability and any reservation requirements for your dates.",
  "We reply by phone or email with the site options and next steps.",
];

export default function RvCampingPage() {
  return (
    <ThemeScope theme="camp">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHero
        eyebrow="RV Camping"
        title="Stay a Little _Longer._"
        description="Camp near the water, with a sandy beach, restrooms and wet berths, plus the General Store, fuel dock and Bar & Grill close by."
        photo={photos.rvWater}
        crumbs={crumbs}
        objectPosition="center 55%"
        actions={
          <>
            <Button href="#inquire" variant="light">
              Ask About Camping
            </Button>
            <Button href={`tel:${site.phone.main.tel}`} variant="outline-light">
              Call {site.phone.main.display}
            </Button>
          </>
        }
      />

      <section className="bg-ivory pt-16 md:pt-20">
        <div className="wrap">
          <Reveal>
            <div className="grid gap-8 border border-[var(--accent)]/35 bg-[var(--tint)] p-8 md:grid-cols-12 md:p-12">
              <div className="flex items-start gap-4 md:col-span-4">
                <Info aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-[var(--accent-strong)]" />
                <p className="font-display text-2xl leading-snug text-ink">Availability notice</p>
              </div>
              <div className="space-y-4 leading-relaxed text-ink/85 md:col-span-8">
                <p>
                  Site openings change through the season. Please call {site.phone.main.display} or send an inquiry to
                  confirm current availability before you travel.
                </p>
                <p className="text-stone">
                  We take reservations by phone and inquiry. We don't offer real-time online booking, so every request
                  is confirmed by our team.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-28 md:py-36">
        <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow="Campsite Details"
              title="Sites Close to the Water and the Boat Ramp."
              description="Some sites sit on the water. Tell us your rig and needs when you call, and we'll help you find the right site."
            />
          </div>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <FactGrid
              items={[
                { label: "Hookups", value: "Water & electric at designated sites" },
                { label: "Waterfront", value: "Some sites on the water" },
                { label: "Beach", value: "Sandy beach on the Delta" },
                { label: "Boaters", value: "Wet berths and courtesy docks" },
                { label: "Fuel", value: "Gas dock on site" },
                { label: "Dining", value: "Bar & Grill, breakfast to dinner" },
              ]}
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--tint)] py-28 md:py-36">
        <div className="wrap">
          <SectionTitle eyebrow="On Site" title="Everything Your Stay Needs, Close By." />
          <div className="mt-20">
            <FeatureGrid
              items={campingAmenities.map((amenity, index) => ({
                icon: amenityIcons[index],
                title: amenity.title,
                text: amenity.text,
              }))}
              columns="md:grid-cols-2 lg:grid-cols-3"
            />
          </div>
        </div>
      </section>

      <section className="bg-ivory py-28 md:py-36">
        <div className="wrap grid gap-4 md:grid-cols-12 md:gap-6">
          <MaskReveal className="relative aspect-[4/3] overflow-hidden md:col-span-7 md:aspect-[16/11]">
            <Photo photo={photos.rvSeashore} zoom sizes="(min-width: 768px) 58vw, 100vw" />
          </MaskReveal>
          <MaskReveal className="relative aspect-[4/5] overflow-hidden md:col-span-5 md:mt-24">
            <Photo photo={photos.rvString} zoom sizes="(min-width: 768px) 40vw, 100vw" />
          </MaskReveal>
        </div>
      </section>

      <section id="inquire" className="scroll-mt-28 bg-[var(--tint)] py-28 md:py-36">
        <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionTitle
              eyebrow="Reservation Inquiry"
              title="Tell Us About Your Trip."
              description="Share your dates and rig details. We'll check availability and reply with the next steps."
            />
            <ol className="mt-12 grid gap-7 border-t border-ink/12 pt-8">
              {steps.map((step, index) => (
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
            <InquiryForm type="camping" />
          </div>
        </div>
      </section>

      <CtaBand
        title="Stay a little longer on the Delta."
        text="Call for current availability, rates and reservation requirements. We're happy to help you plan the stay."
        photo={photos.rvSeashore}
        objectPosition="center 60%"
        primary={{ label: `Call ${site.phone.main.display}`, href: `tel:${site.phone.main.tel}` }}
        secondary={{ label: "Send an Inquiry", href: "#inquire" }}
      />
    </ThemeScope>
  );
}
