import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FactGrid, PhoneList, SectionTitle } from "@/components/ui/Blocks";
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
  title: "Marina & Boat Launch in Brentwood, CA | Three-Lane Delta Ramp",
  description:
    "Orwood Resort's three-lane boat launch ramp, gas dock and courtesy docks on the California Delta in Brentwood, CA. Call for current launch fees and opening information.",
  path: "/marina",
  image: photos.launchRamp.src,
});

const crumbs = [{ name: "Marina & Boat Launch", href: "/marina" }];

const checklist = [
  "Check the day's wind and river conditions before you leave the dock.",
  "Confirm your registration and required safety equipment are on board.",
  "Secure the load and test your trailer lights before the drive.",
  "Pack water, sun protection and a plan for the return trip.",
  "Call ahead for current launch fees and opening information.",
];

export default function MarinaPage() {
  return (
    <ThemeScope theme="marina">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHero
        eyebrow="Marina & Boat Launch"
        title="The Launch Where Your Day _Begins._"
        description="Three launch lanes, gas and courtesy docks, and parking, with the Delta's waterways right in front of you."
        photo={photos.launchRamp}
        crumbs={crumbs}
        objectPosition="center 65%"
        actions={
          <>
            <Button href={`tel:${site.phone.main.tel}`} variant="light">
              Call {site.phone.main.display}
            </Button>
            <Button href={site.directionsUrl} variant="outline-light">
              Get Directions
            </Button>
          </>
        }
      />

      <section className="bg-ivory py-28 md:py-40">
        <div className="wrap grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow="The Launch"
              title="Three Lanes. One Easy Way onto the Water."
              description="Our three-lane ramp gives boaters room to launch and retrieve, whether you're heading out for a morning on the water or wrapping up an afternoon."
            />
          </div>
          <MaskReveal className="relative aspect-[4/3] overflow-hidden lg:col-span-7 lg:aspect-[16/11]">
            <Photo photo={photos.launchRamp} zoom sizes="(min-width: 1024px) 58vw, 100vw" objectPosition="center 60%" />
          </MaskReveal>
        </div>
      </section>

      <section className="bg-[var(--tint)] py-28 md:py-36">
        <div className="wrap grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionTitle eyebrow="Facilities" title="Everything Between the Trailer and the Tide." />
          </div>
          <Reveal delay={0.1} className="lg:col-span-7">
            <FactGrid
              items={[
                { label: "Boat launch", value: "Three-lane ramp" },
                { label: "Fuel", value: "Gas dock on site" },
                { label: "Docking", value: "Courtesy docks for visitors" },
                { label: "Parking", value: "On-site parking" },
                { label: "Supplies", value: "General Store on site" },
                { label: "Dining", value: "Bar & Grill overlooking the water" },
              ]}
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-28 md:py-36">
        <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-[var(--accent-strong)]">
              Visitor information
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.08] text-balance text-ink">
              Current fees and hours, straight from the team.
            </h2>
            <Reveal delay={0.1}>
              <dl className="mt-10 grid gap-8 border-t border-ink/12 pt-8">
                <div>
                  <dt className="font-medium text-ink">Launch fees</dt>
                  <dd className="mt-2 leading-relaxed text-stone">
                    Our team confirms launch fees and opening information. Call the main resort at{" "}
                    {site.phone.main.display} before you travel.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">Fuel dock</dt>
                  <dd className="mt-2 leading-relaxed text-stone">
                    Gas dock access for boaters. Call for current fuel dock hours.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">Stored boats</dt>
                  <dd className="mt-2 leading-relaxed text-stone">
                    Storage customers may qualify for free weekday launching, where applicable. Ask when you inquire.
                  </dd>
                </div>
              </dl>
            </Reveal>
            <Reveal delay={0.2} className="mt-12">
              <PhoneList />
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <div className="bg-linen p-8 md:p-10">
              <p className="font-display text-2xl text-ink">Before you launch</p>
              <ul className="mt-7 grid gap-5">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 leading-relaxed text-ink/85">
                    <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[var(--accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory pb-28 md:pb-36">
        <div className="wrap grid grid-cols-2 gap-4 md:gap-6">
          <MaskReveal className="relative aspect-[3/4] overflow-hidden md:aspect-[4/5]">
            <Photo photo={photos.boatTrailer} zoom sizes="(min-width: 768px) 40vw, 50vw" />
          </MaskReveal>
          <MaskReveal className="relative mt-16 aspect-[3/4] overflow-hidden md:aspect-[4/5]">
            <Photo photo={photos.marinaYachts} zoom sizes="(min-width: 768px) 40vw, 50vw" />
          </MaskReveal>
        </div>
      </section>

      <CtaBand
        title="Launch your day from Orwood."
        text="Call ahead for current launch fees and opening information, or get directions to the ramp."
        primary={{ label: `Call ${site.phone.main.display}`, href: `tel:${site.phone.main.tel}` }}
        secondary={{ label: "Get Directions", href: site.directionsUrl }}
      />
    </ThemeScope>
  );
}
