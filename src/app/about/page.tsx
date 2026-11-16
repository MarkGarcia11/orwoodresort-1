import type { Metadata } from "next";
import { Anchor, Ship, Store, Tent, UtensilsCrossed, Warehouse } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FactGrid, FeatureGrid, PhoneList, SectionTitle } from "@/components/ui/Blocks";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { MaskReveal, Reveal } from "@/components/ui/Reveal";
import { SplitWords } from "@/components/ui/SplitWords";
import { photos } from "@/content/photos";
import { site } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Orwood Resort | Family-Run Delta Destination in Brentwood, CA",
  description:
    "Learn about Orwood Resort, a family-run waterfront destination on the California Delta in Brentwood. Established 1955, with a boat launch, marina, dining, camping and storage.",
  path: "/about",
  image: photos.deltaRiverAerial.src,
});

const crumbs = [{ name: "About", href: "/about" }];

const offerings = [
  { icon: Anchor, title: "Marina & boat launch", text: "A three-lane ramp, gas and courtesy docks, and parking for the day's launch." },
  { icon: Ship, title: "Water sports & fishing", text: "Wakeboarding, water skiing and Delta fishing, launched right from the resort." },
  { icon: Tent, title: "RV camping", text: "Sites near the water, with restrooms, a sandy beach and wet berths." },
  { icon: UtensilsCrossed, title: "Bar & Grill", text: "Breakfast, lunch and dinner, with a full bar and an outdoor patio." },
  { icon: Store, title: "General Store", text: "Snacks, drinks and everyday essentials for the trip, close to the water." },
  { icon: Warehouse, title: "Boat & RV storage", text: "Indoor and outdoor storage in a gated facility, so your rig is always ready." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHero
        eyebrow="About Orwood Resort"
        title="A Family Place on the _Delta._"
        description="For generations, Orwood has welcomed families, boaters and visitors who come to enjoy the California Delta in the way that feels most like home."
        photo={photos.deltaRiverAerial}
        crumbs={crumbs}
        objectPosition="center 40%"
        actions={
          <>
            <Button href="/contact" variant="light">
              Plan Your Visit
            </Button>
            <Button href={site.directionsUrl} variant="outline-light">
              Get Directions
            </Button>
          </>
        }
      />

      <section className="bg-ivory py-28 md:py-40">
        <div className="wrap">
          <Reveal>
            <p className="max-w-5xl font-display text-[clamp(2.2rem,4.6vw,4.2rem)] leading-[1.12] text-balance text-ink">
              Come by car. Come by boat. Stay for the <span className="italic text-delta-700">afternoon</span>, or the
              weekend.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-linen py-28 md:py-36">
        <div className="wrap grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
          <MaskReveal className="relative aspect-[4/5] overflow-hidden lg:col-span-5">
            <Photo photo={photos.houseboat} sizes="(min-width: 1024px) 40vw, 100vw" />
          </MaskReveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <SectionTitle eyebrow="Our Story" title="More Than 50 Years on the Delta." />
            <Reveal delay={0.1}>
              <p className="mt-8 text-lg leading-relaxed text-ink/85">
                Orwood Resort has been a gathering place on the Delta since {site.established}. It grew around a simple
                idea: that a day on the water is better when there's a good launch, a good meal and people you enjoy
                being with.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 leading-relaxed text-stone">
                Today the resort is still family-run. We welcome boaters launching for the day, campers staying a week,
                families gathering for a birthday on the patio, and neighbors who simply want a meal by the water.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-12">
              <FactGrid
                items={[
                  { label: "Established", value: String(site.established) },
                  { label: "Location", value: `${site.city}, California` },
                  { label: "Address", value: site.fullAddress },
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-28 md:py-36">
        <div className="wrap">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <SectionTitle eyebrow="What You'll Find" title="One Resort, Many Reasons to Visit." />
            </div>
          </div>
          <div className="mt-20">
            <FeatureGrid items={offerings} columns="md:grid-cols-2 lg:grid-cols-3" />
          </div>
        </div>
      </section>

      <section className="bg-delta-950 py-24 text-ivory md:py-32">
        <div className="wrap grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-sand">Find Us</p>
            <SplitWords
              as="h2"
              inView
              text="On Orwood Road, on the Delta."
              className="mt-6 font-display text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.08] text-balance"
            />
            <Reveal delay={0.1}>
              <address className="mt-8 text-lg not-italic leading-relaxed text-ivory/85">
                {site.street}
                <br />
                {site.city}, {site.region} {site.postalCode}
              </address>
            </Reveal>
            <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-3">
              <Button href={site.directionsUrl} variant="light">
                Get Directions
              </Button>
            </Reveal>
            <Reveal delay={0.25} className="mt-12">
              <PhoneList tone="light" />
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-delta-900 lg:aspect-[16/11]">
              <iframe
                src={site.mapEmbedUrl}
                title="Map showing Orwood Resort at 4451 Orwood Road, Brentwood, CA 94513"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0 grayscale-[20%] contrast-[1.05]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Plan Your Visit"
        title="Come see the Delta from Orwood."
        text="Ask about launching, dining, camping or storage. We're happy to help you plan a day, a meal or a longer stay."
        photo={photos.marsh}
        objectPosition="center 60%"
        primary={{ label: "Plan Your Visit", href: "/contact" }}
        secondary={{ label: "Get Directions", href: site.directionsUrl }}
      />
    </>
  );
}
