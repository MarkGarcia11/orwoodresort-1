import { CountUp } from "@/components/ui/CountUp";
import { Eyebrow } from "@/components/ui/Blocks";
import { Photo } from "@/components/ui/Photo";
import { MaskReveal, Reveal } from "@/components/ui/Reveal";
import { SplitWords } from "@/components/ui/SplitWords";
import { Button } from "@/components/ui/Button";
import { photos } from "@/content/photos";
import { site } from "@/content/site";

export function HeritageStory() {
  return (
    <section id="story" className="relative bg-ivory py-28 md:py-40">
      <div className="wrap grid items-center gap-20 lg:grid-cols-12 lg:gap-12">
        <div className="relative lg:col-span-6">
          <MaskReveal className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
            <Photo photo={photos.riverDusk} sizes="(min-width: 1024px) 46vw, 100vw" />
          </MaskReveal>

          <Reveal delay={0.3} className="absolute -bottom-12 right-4 bg-ivory p-7 shadow-[0_30px_60px_-30px_rgba(11,34,48,0.35)] md:-right-8 md:p-9">
            <p className="font-display text-5xl leading-none text-delta-800 md:text-6xl">
              <CountUp sinceYear={site.established} duration={2.6} />
            </p>
            <p className="mt-3 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-stone">
              Years on the Delta
            </p>
            <p className="mt-2 text-sm text-stone">Established {site.established}</p>
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <Eyebrow>Our Story</Eyebrow>
          <SplitWords
            as="h2"
            inView
            text="More Than 50 Years on the Delta."
            className="mt-6 font-display text-[clamp(2.4rem,4.6vw,4.1rem)] leading-[1.06] text-balance text-ink"
          />

          <Reveal delay={0.1}>
            <p className="mt-8 text-lg leading-relaxed text-ink/85">
              For generations, Orwood Resort has welcomed families, boating enthusiasts and visitors looking to enjoy
              everything the California Delta has to offer.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 leading-relaxed text-stone">
              Rooted in family values and a genuine love for the waterfront, Orwood continues to bring people together
              through recreation, hospitality and memorable experiences.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-12">
            <div className="flex items-center gap-4 text-sm font-medium text-delta-800">
              <span>{site.established}</span>
              <span className="relative h-px flex-1 bg-ink/15">
                <span className="draw-line absolute inset-0 bg-delta-700" />
              </span>
              <span>Today</span>
            </div>
          </Reveal>

          <Reveal delay={0.4} className="mt-12">
            <Button href="/about" variant="secondary">
              Discover Our Story
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
