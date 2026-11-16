import type { Metadata } from "next";
import { Anchor, Fuel, Ship, UtensilsCrossed, Wind, Zap } from "lucide-react";
import { Button, TextLink } from "@/components/ui/Button";
import { FeatureGrid, SectionTitle } from "@/components/ui/Blocks";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { MaskReveal, Reveal } from "@/components/ui/Reveal";
import { ThemeScope } from "@/components/ui/ThemeScope";
import { photos } from "@/content/photos";
import { site } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Water Skiing & Wakeboarding on the California Delta | Orwood Resort",
  description:
    "Water skiing, wakeboarding and cruising from Orwood Resort in Brentwood, CA. Launch from our three-lane ramp, refuel at the gas dock and eat on the patio afterward.",
  path: "/water-sports",
  image: photos.wakeAerial.src,
});

const crumbs = [{ name: "Water Sports", href: "/water-sports" }];

const activities = [
  { icon: Zap, title: "Wakeboarding", text: "Carve, cut and ride across calm Delta water. Bring your own boat and tow setup." },
  { icon: Wind, title: "Water skiing", text: "Classic runs on open channels, with a launch close at hand for a full day of riding." },
  { icon: Ship, title: "Cruising the channels", text: "Take the boat out for a relaxed afternoon, or head farther for a longer run." },
  { icon: Anchor, title: "Launch & retrieve", text: "A three-lane ramp keeps you moving on busy summer days." },
  { icon: Fuel, title: "Fuel before you go", text: "Top off at our gas dock before you head out or on the way back in." },
  { icon: UtensilsCrossed, title: "Eat when you're done", text: "Breakfast before you launch or dinner after the last run, at the Bar & Grill." },
];

export default function WaterSportsPage() {
  return (
    <ThemeScope theme="sports">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHero
        eyebrow="Water Sports"
        title="Ride the Delta _Your Way._"
        description="Wakeboarding, water skiing and time on open water, with a launch ramp, fuel dock and a meal close by when you come back in."
        photo={photos.wakeAerial}
        crumbs={crumbs}
        objectPosition="center 40%"
        actions={
          <>
            <Button href="/marina" variant="light">
              Explore the Marina
            </Button>
            <Button href={`tel:${site.phone.main.tel}`} variant="outline-light">
              Call {site.phone.main.display}
            </Button>
          </>
        }
      />

      <section className="bg-ivory py-28 md:py-40">
        <div className="wrap">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <SectionTitle eyebrow="On the Water" title="Wakeboarding and Water Skiing, Close to the Launch." />
            </div>
          </div>

          <div className="relative mt-20 grid grid-cols-12 gap-4 md:gap-8">
            <MaskReveal className="relative col-span-12 aspect-[4/3] overflow-hidden md:col-span-8 md:aspect-[16/11]">
              <Photo photo={photos.wakeboard} zoom sizes="(min-width: 768px) 66vw, 100vw" />
            </MaskReveal>
            <Reveal delay={0.25} className="relative col-span-7 -mt-16 md:col-span-4 md:col-start-9 md:mt-40">
              <div className="relative aspect-[4/5] overflow-hidden shadow-[0_30px_60px_-30px_rgba(11,34,48,0.5)]">
                <Photo photo={photos.speedboat} sizes="(min-width: 768px) 30vw, 60vw" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[var(--tint)] py-28 md:py-36">
        <div className="wrap">
          <SectionTitle eyebrow="What You Can Do" title="Time on the Water, Your Way." />
          <div className="mt-20">
            <FeatureGrid items={activities} columns="md:grid-cols-2 lg:grid-cols-3" />
          </div>
        </div>
      </section>

      <section className="bg-ivory py-28 md:py-36">
        <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow="Conditions & Safety"
              title="Check the Water. Wear Your Life Jacket."
              description="Conditions on the Delta change quickly. A few minutes of planning helps everyone come home happy."
            />
          </div>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <ol className="grid gap-8 border-t border-ink/12 pt-8">
              {[
                ["Check conditions before you leave", "Look at the wind, the current and the boat traffic on the channels you plan to use."],
                ["Life jackets for everyone on board", "California boating law requires a wearable life jacket for each person aboard. Wear one at all times on the water."],
                ["Keep a safe distance", "Give other boats, swimmers and anglers plenty of room, and keep a lookout when you're towing."],
                ["Plan the way back", "Know where you'll refuel or dock before you head out, and bring water and sun protection."],
              ].map(([title, text], index) => (
                <li key={title} className="grid grid-cols-[3rem_1fr] gap-4">
                  <span className="font-display text-xl text-[var(--accent-strong)]">0{index + 1}</span>
                  <div>
                    <p className="font-display text-2xl text-ink">{title}</p>
                    <p className="mt-2 leading-relaxed text-stone">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="bg-delta-950 py-24 text-ivory md:py-32">
        <div className="wrap grid gap-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-sand">The Delta Waterways</p>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.08] text-balance">
              Open water, sheltered sloughs and everything in between.
            </h2>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-ivory/85">
              The Delta's channels offer a mix of open water and quieter sloughs. Our team can share which routes suit
              your boat and experience level, and what's been happening on the water lately.
            </p>
            <div className="mt-10 flex flex-wrap gap-8">
              <TextLink href="/fishing" className="text-ivory">
                Fishing from Orwood
              </TextLink>
              <TextLink href="/storage" className="text-ivory">
                Storage for your boat
              </TextLink>
            </div>
          </div>
          <MaskReveal className="relative aspect-[4/3] overflow-hidden lg:col-span-5 lg:col-start-8">
            <Photo photo={photos.marinaSailboats} sizes="(min-width: 1024px) 40vw, 100vw" />
          </MaskReveal>
        </div>
      </section>

      <CtaBand
        title="Bring the boat. We'll take care of the rest."
        text="Launch, refuel, eat and head back out. Call us to plan your water day, or get directions to the ramp."
        photo={photos.wakeboard}
        objectPosition="center 45%"
        primary={{ label: "Plan Your Visit", href: "/contact" }}
        secondary={{ label: "Get Directions", href: site.directionsUrl }}
      />
    </ThemeScope>
  );
}
