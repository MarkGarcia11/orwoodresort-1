import { Check } from "lucide-react";
import { Button, TextLink } from "@/components/ui/Button";
import { Eyebrow, SectionTitle } from "@/components/ui/Blocks";
import { CtaBand } from "@/components/ui/CtaBand";
import { ParallaxImage } from "@/components/ui/Parallax";
import { Photo } from "@/components/ui/Photo";
import { MaskReveal, Reveal } from "@/components/ui/Reveal";
import { SplitWords } from "@/components/ui/SplitWords";
import { ThemeScope } from "@/components/ui/ThemeScope";
import { photos } from "@/content/photos";
import { campingAmenities, site, storageFeatures, telHref } from "@/content/site";

/* 04 — The waterfront: full-bleed aerial with restrained parallax and a light sweep */
export function WaterfrontBand() {
  const facts = [
    { value: "3", label: "Launch lanes" },
    { value: "Gas", label: "Fuel dock on site" },
    { value: "Docks", label: "Courtesy docks for visiting boats" },
    { value: "Storage", label: "Indoor & outdoor options" },
  ];

  return (
    <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-delta-950 text-ivory">
      <ParallaxImage photo={photos.coastalAerial} className="absolute inset-0" intensity={14} />
      <span aria-hidden="true" className="sheen-layer z-[1]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-delta-950/90 via-delta-950/30 to-delta-950/10"
      />

      <div className="wrap relative z-10 pb-16 pt-40 md:pb-24">
        <Reveal>
          <Eyebrow tone="light">The Waterfront Experience</Eyebrow>
        </Reveal>
        <SplitWords
          as="h2"
          inView
          text="Your Next Day on the Water _Starts Here._"
          emphasisClassName="italic text-sand"
          className="mt-6 max-w-[16ch] font-display text-[clamp(2.7rem,6vw,5.4rem)] leading-[1.02] text-balance"
        />
        <Reveal delay={0.12}>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ivory/90">
            A three-lane launch ramp, gas and courtesy docks, and open access to the Delta's waterways. Launch,
            refuel and cast off from one place.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="mt-10">
          <Button href="/marina" variant="light">
            Explore the Marina
          </Button>
        </Reveal>

        <Reveal delay={0.3} className="mt-16">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-ivory/20 pt-8 md:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="sr-only">{fact.label}</dt>
                <dd className="font-display text-3xl text-ivory">{fact.value}</dd>
                <dd className="mt-1 text-sm text-ivory/75">{fact.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

/* 05 — Water sports and recreation: layered, image-first split */
export function RecreationFeature() {
  const activities = [
    { title: "Wakeboarding & water skiing", text: "Ride the Delta with room to carve, cut and cruise." },
    { title: "Fishing the Delta", text: "Launch at first light and fish the sloughs and channels." },
    { title: "Cruising & time on the water", text: "Take the boat out for an afternoon, or a full day." },
  ];

  return (
    <section className="bg-ivory py-28 md:py-40">
      <div className="wrap grid items-center gap-20 lg:grid-cols-12 lg:gap-12">
        <div className="relative lg:col-span-7">
          <MaskReveal className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[16/11]">
            <Photo photo={photos.wakeboard} zoom sizes="(min-width: 1024px) 58vw, 100vw" />
          </MaskReveal>
          <Reveal delay={0.25} className="absolute -bottom-14 right-0 hidden w-[40%] md:block">
            <div className="relative aspect-[4/5] overflow-hidden shadow-[0_30px_60px_-30px_rgba(11,34,48,0.45)]">
              <Photo photo={photos.speedboat} sizes="30vw" />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <SectionTitle eyebrow="Water Sports & Recreation" title="Find Your Kind of Adventure." />
          <ol className="mt-12 divide-y divide-ink/12 border-y border-ink/12">
            {activities.map((activity, index) => (
              <li key={activity.title}>
                <Reveal delay={index * 0.08} className="grid grid-cols-[3.5rem_1fr] gap-4 py-6">
                  <span className="font-display text-xl text-delta-500">0{index + 1}</span>
                  <div>
                    <p className="font-display text-2xl leading-snug text-ink">{activity.title}</p>
                    <p className="mt-2 leading-relaxed text-stone">{activity.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
          <Reveal delay={0.2} className="mt-12">
            <TextLink href="/water-sports">Explore Recreation</TextLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* 06 — Bar & Grill: warm, editorial restaurant composition */
export function DiningFeature() {
  const offerings = [
    "Breakfast, lunch & dinner",
    "Steak & lobster specials",
    "Prime rib specials",
    "Outdoor patio",
    "Full bar",
    "Group dining",
  ];

  return (
    <ThemeScope theme="dining" className="relative overflow-hidden bg-[var(--tint)] py-28 md:py-40">
      <div className="wrap grid items-center gap-20 lg:grid-cols-12 lg:gap-12">
        <div className="relative order-2 lg:order-1 lg:col-span-6">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <MaskReveal className="relative col-span-7 aspect-[3/4] overflow-hidden">
              <Photo photo={photos.steak} sizes="(min-width: 1024px) 26vw, 55vw" />
            </MaskReveal>
            <MaskReveal className="relative col-span-5 mt-24 aspect-square overflow-hidden">
              <Photo photo={photos.patio} sizes="(min-width: 1024px) 20vw, 40vw" />
            </MaskReveal>
          </div>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-stone">
              Specials rotate by season and day. Ask our team what's featured this week.
            </p>
          </Reveal>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8">
          <Eyebrow>Bar & Grill</Eyebrow>
          <SplitWords
            as="h2"
            inView
            text="Good Food. _Great Company._ Delta Dining."
            emphasisClassName="italic text-[var(--accent-strong)]"
            className="mt-6 font-display text-[clamp(2.5rem,4.9vw,4.3rem)] leading-[1.05] text-balance text-ink"
          />
          <Reveal delay={0.1}>
            <p className="mt-7 text-lg leading-relaxed text-ink/85">
              From a relaxed breakfast to a memorable dinner, enjoy familiar favorites and welcoming hospitality at the
              Orwood Bar & Grill.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-9 grid grid-cols-2 gap-x-6 gap-y-3.5 text-[0.98rem] text-ink">
              {offerings.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[var(--accent)]" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2} className="mt-11 flex flex-wrap items-center gap-3">
            <Button href="/bar-grill#menu">View Menu</Button>
            <Button href="/bar-grill#hours" variant="secondary">
              Restaurant Hours
            </Button>
            <Button href={telHref("restaurant")} variant="secondary">
              Call the Restaurant
            </Button>
          </Reveal>
          <Reveal delay={0.25} className="mt-7">
            <TextLink href="/bar-grill#takeout">Takeout information</TextLink>
          </Reveal>
        </div>
      </div>
    </ThemeScope>
  );
}

/* 07 — RV camping: outdoor lifestyle composition */
export function CampingFeature() {
  return (
    <ThemeScope theme="camp" className="bg-ivory py-28 md:py-40">
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow>RV Camping</Eyebrow>
            <SplitWords
              as="h2"
              inView
              text="Stay a Little _Longer._"
              emphasisClassName="italic text-[var(--accent-strong)]"
              className="mt-6 font-display text-[clamp(2.6rem,5.2vw,4.6rem)] leading-[1.04] text-balance text-ink"
            />
          </div>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-lg leading-relaxed text-ink/85">
              Park your rig near the water, with a sandy beach, restrooms, a fuel dock, the General Store and the Bar &
              Grill close by.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-12 lg:gap-8">
          <MaskReveal className="relative aspect-[4/3] overflow-hidden lg:col-span-7 lg:aspect-[16/11]">
            <Photo photo={photos.rvSeashore} zoom sizes="(min-width: 1024px) 58vw, 100vw" />
          </MaskReveal>

          <Reveal delay={0.15} className="flex flex-col justify-between gap-10 bg-[var(--tint)] p-8 md:p-12 lg:col-span-5">
            <div>
              <p className="font-display text-2xl text-ink">On site at Orwood</p>
              <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {campingAmenities.map((amenity) => (
                  <li key={amenity.title} className="flex items-start gap-3">
                    <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[var(--accent)]" />
                    <span className="text-ink">{amenity.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm leading-relaxed text-stone">
              Reservations are made by phone or inquiry. Water and electric hookups are available at designated sites,
              and our team confirms availability.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/rv-camping#inquire">Ask About Camping</Button>
              <Button href={telHref("main")} variant="secondary">
                Call {site.phone.main.display}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </ThemeScope>
  );
}

/* 08 — Storage: structured, trustworthy layout */
export function StorageFeature() {
  return (
    <ThemeScope theme="storage" className="relative overflow-hidden bg-[var(--tint)] py-28 md:py-40">
      <div className="wrap grid gap-20 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <Eyebrow>Boat & RV Storage</Eyebrow>
          <SplitWords
            as="h2"
            inView
            text="Space for Your Next _Adventure._"
            emphasisClassName="italic text-[var(--accent-strong)]"
            className="mt-6 font-display text-[clamp(2.4rem,4.6vw,4.1rem)] leading-[1.06] text-balance text-ink"
          />
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-ink/85">
              Secure indoor and outdoor storage for boats, trailers and RVs. Your boat is ready when you are.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-3">
            <Button href="/storage#inquire">Request Storage Information</Button>
            <Button href="/storage#options" variant="secondary">
              Compare Options
            </Button>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <MaskReveal className="relative aspect-[16/10] overflow-hidden">
            <Photo photo={photos.boatRows} sizes="(min-width: 1024px) 50vw, 100vw" />
          </MaskReveal>
          <ul className="mt-10 divide-y divide-ink/12 border-y border-ink/12">
            {storageFeatures.map((feature, index) => (
              <li key={feature}>
                <Reveal delay={index * 0.05} className="grid grid-cols-[3rem_1fr] gap-4 py-5">
                  <span className="font-display text-lg text-[var(--accent-strong)]">0{index + 1}</span>
                  <span className="text-ink">{feature}</span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ThemeScope>
  );
}

/* 09 — Community & events, with the gallery teaser */
export function CommunityFeature() {
  return (
    <ThemeScope theme="events" className="bg-ivory py-28 md:py-40">
      <div className="wrap">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Eyebrow>Community & Events</Eyebrow>
            <SplitWords
              as="h2"
              inView
              text="Good Times Are Better _Shared._"
              emphasisClassName="italic text-[var(--accent-strong)]"
              className="mt-6 font-display text-[clamp(2.4rem,4.8vw,4.2rem)] leading-[1.05] text-balance text-ink"
            />
          </div>
          <Reveal delay={0.1} className="md:col-span-4 md:col-start-9">
            <p className="leading-relaxed text-stone">
              From family cookouts to group dinners and celebrations on the patio, Orwood is where people gather.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-6">
          <MaskReveal className="relative col-span-2 aspect-[16/9] overflow-hidden md:col-span-7">
            <Photo photo={photos.garden} zoom sizes="(min-width: 768px) 58vw, 100vw" />
          </MaskReveal>
          <MaskReveal className="relative col-span-2 aspect-[4/5] overflow-hidden md:col-span-5 md:mt-16">
            <Photo photo={photos.familyBbq} zoom sizes="(min-width: 768px) 40vw, 100vw" />
          </MaskReveal>
          <MaskReveal className="relative aspect-square overflow-hidden md:col-span-4">
            <Photo photo={photos.group} zoom sizes="(min-width: 768px) 32vw, 50vw" />
          </MaskReveal>
          <MaskReveal className="relative aspect-square overflow-hidden md:col-span-4">
            <Photo photo={photos.grilling} zoom sizes="(min-width: 768px) 32vw, 50vw" />
          </MaskReveal>
          <MaskReveal className="relative aspect-square overflow-hidden md:col-span-4">
            <Photo photo={photos.restaurantWood} zoom sizes="(min-width: 768px) 32vw, 50vw" />
          </MaskReveal>
        </div>

        <Reveal className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-ink/12 pt-8">
          <p className="font-display text-2xl text-ink">Planning a party or group visit?</p>
          <div className="flex flex-wrap gap-8">
            <TextLink href="/events#inquire">Plan an event</TextLink>
            <TextLink href="/gallery">Browse the gallery</TextLink>
          </div>
        </Reveal>
      </div>
    </ThemeScope>
  );
}

/* 11 — Final call to action */
export function HomeFinalCta() {
  return (
    <CtaBand
      eyebrow="Plan Your Visit"
      title="Your Place on the Delta Is Waiting."
      text="Whether you're visiting for a day on the water, a meal with friends or a longer stay, we'd love to welcome you."
      photo={photos.marinaSailboats}
      primary={{ label: "Plan Your Visit", href: "/contact" }}
      secondary={{ label: "Get Directions", href: site.directionsUrl }}
    />
  );
}

