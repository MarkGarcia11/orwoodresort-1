import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Blocks";
import { ParallaxImage } from "@/components/ui/Parallax";
import { Reveal } from "@/components/ui/Reveal";
import { SplitWords } from "@/components/ui/SplitWords";
import { photos } from "@/content/photos";

export function HomeHero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-delta-950 text-ivory">
      <ParallaxImage
        photo={photos.heroDelta}
        priority
        className="absolute inset-0"
        objectPosition="center 58%"
        intensity={10}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-delta-950/80 via-delta-950/10 to-delta-950/25"
      />
      <div aria-hidden="true" className="water-light pointer-events-none absolute inset-0 z-[1] mix-blend-soft-light" />

      <div className="wrap relative z-10 pb-16 pt-44 md:pb-24">
        <Reveal>
          <Eyebrow tone="light">Brentwood, California · The Delta</Eyebrow>
        </Reveal>

        <SplitWords
          as="h1"
          text="Where the Delta Feels _Like Home._"
          delay={0.25}
          emphasisClassName="italic text-sand"
          className="mt-7 max-w-[13ch] font-display text-[clamp(3.1rem,8.2vw,7.4rem)] leading-[0.96] tracking-[-0.012em] text-balance"
        />

        <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <Reveal delay={0.6}>
            <p className="max-w-md text-base leading-relaxed text-ivory/90 md:text-lg">
              Boating, recreation, great food and time well spent. Discover the welcoming spirit of Orwood Resort.
            </p>
          </Reveal>
          <Reveal delay={0.75} className="flex flex-wrap gap-3">
            <Button href="#explore" variant="light">
              Explore the Resort
            </Button>
            <Button href="/contact" variant="outline-light">
              Plan Your Visit
            </Button>
          </Reveal>
        </div>
      </div>

      <a
        href="#story"
        aria-label="Scroll to the Orwood story"
        className="absolute bottom-10 right-6 z-10 hidden flex-col items-center gap-4 text-[0.62rem] uppercase tracking-[0.32em] text-ivory/85 md:right-12 md:flex"
      >
        <span>Scroll</span>
        <span className="relative block h-14 w-px overflow-hidden bg-ivory/25">
          <span className="scroll-line absolute inset-0 bg-ivory" />
        </span>
      </a>
    </section>
  );
}
