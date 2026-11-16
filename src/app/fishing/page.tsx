import type { Metadata } from "next";
import { ArrowUpRight, Fish, Fuel, UtensilsCrossed, Anchor } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/Blocks";
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
  title: "Delta Fishing from Orwood Resort | Brentwood, CA Boat Launch",
  description:
    "Fish the California Delta from Orwood Resort in Brentwood. Launch at first light, refuel at the fuel dock, grab supplies at the General Store and eat at the Bar & Grill.",
  path: "/fishing",
  image: photos.fishing.src,
});

const crumbs = [{ name: "Fishing", href: "/fishing" }];

const panels = [
  {
    icon: Anchor,
    title: "Launch & access",
    text: "Put in at our three-lane ramp, then head out along the Delta's sloughs and channels. Courtesy docks give visiting boats a place to tie up.",
  },
  {
    icon: Fuel,
    title: "Fuel & supplies",
    text: "Top off at the gas dock before you go. The General Store has snacks, drinks and everyday essentials for the trip.",
  },
  {
    icon: UtensilsCrossed,
    title: "Eat & unwind",
    text: "Grab breakfast before the first cast, or come back in to the Bar & Grill and tell the story over lunch or dinner.",
  },
];

export default function FishingPage() {
  return (
    <ThemeScope theme="fishing">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHero
        eyebrow="Fishing"
        title="Fish the Delta at Your _Own Pace._"
        description="Launch at first light, work the channels, and come back in to refuel, rinse off and share the day over a meal."
        photo={photos.fishing}
        crumbs={crumbs}
        objectPosition="center 35%"
        actions={
          <>
            <Button href="/marina" variant="light">
              Launch Details
            </Button>
            <Button href={`tel:${site.phone.main.tel}`} variant="outline-light">
              Call {site.phone.main.display}
            </Button>
          </>
        }
      />

      <section className="bg-ivory py-28 md:py-40">
        <div className="wrap grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
          <MaskReveal className="relative aspect-[4/5] overflow-hidden lg:col-span-6">
            <Photo photo={photos.marsh} zoom sizes="(min-width: 1024px) 46vw, 100vw" />
          </MaskReveal>
          <div className="lg:col-span-5 lg:col-start-8">
            <SectionTitle
              eyebrow="Delta Fishing"
              title="Close to the Launch, Close to the Water."
              description="Launch from Orwood and fish the Delta's sloughs and channels. Reed edges, open water and quiet bends each hold different fish, so ask our team about recent conditions and which areas have been productive."
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--tint)] py-28 md:py-36">
        <div className="wrap">
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {panels.map((panel, index) => (
              <Reveal key={panel.title} delay={index * 0.1} className="flex flex-col bg-ivory p-8 md:p-10">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--accent)] text-ivory">
                  <panel.icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <h2 className="mt-8 font-display text-3xl leading-tight text-ink">{panel.title}</h2>
                <p className="mt-4 leading-relaxed text-stone">{panel.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-28 md:py-36">
        <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-[var(--accent-strong)]">
              Licenses & regulations
            </p>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.08] text-balance text-ink">
              Fish with the current rules in hand.
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/85">
                Fishing licenses, seasons, size and bag limits are set by the California Department of Fish and
                Wildlife. Check the current regulations before you go, and carry your license while fishing.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-10">
              <a
                href="https://wildlife.ca.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-[0.95rem] font-medium text-[var(--accent-strong)]"
              >
                <span className="link-line pb-1">California Department of Fish and Wildlife</span>
                <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="flex items-start gap-5 bg-[var(--tint)] p-8 md:p-10 lg:col-span-5 lg:col-start-8">
            <Fish aria-hidden="true" className="mt-1 h-7 w-7 shrink-0 text-[var(--accent-strong)]" />
            <div>
              <p className="font-display text-2xl text-ink">Tip from the water</p>
              <p className="mt-3 leading-relaxed text-stone">
                Ask our team about the day's conditions before you launch. A quick call can save you a trip to a spot
                that's slow this season.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory pb-28 md:pb-36">
        <div className="wrap grid gap-4 md:grid-cols-12 md:gap-6">
          <MaskReveal className="relative aspect-[4/3] overflow-hidden md:col-span-7">
            <Photo photo={photos.riverDusk} zoom sizes="(min-width: 768px) 58vw, 100vw" />
          </MaskReveal>
          <MaskReveal className="relative aspect-[4/5] overflow-hidden md:col-span-5 md:mt-20">
            <Photo photo={photos.deltaRiverAerial} zoom sizes="(min-width: 768px) 40vw, 100vw" objectPosition="center 30%" />
          </MaskReveal>
        </div>
      </section>

      <CtaBand
        title="Launch at first light. Eat well when you return."
        text="Call ahead for launch details, or stop by and start your day from the Orwood ramp."
        primary={{ label: "Plan Your Visit", href: "/contact" }}
        secondary={{ label: "Get Directions", href: site.directionsUrl }}
      />
    </ThemeScope>
  );
}
