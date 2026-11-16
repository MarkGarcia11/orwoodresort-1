import { Button } from "./Button";
import { Eyebrow } from "./Blocks";
import { ParallaxImage } from "./Parallax";
import { Reveal } from "./Reveal";
import { SplitWords } from "./SplitWords";
import type { PhotoAsset } from "@/content/photos";

type CtaLink = { label: string; href: string };

/** Closing call-to-action. Uses a full-bleed photograph when given one, otherwise a tinted panel. */
export function CtaBand({
  eyebrow,
  title,
  text,
  photo,
  primary,
  secondary,
  objectPosition = "center",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  photo?: PhotoAsset;
  primary: CtaLink;
  secondary?: CtaLink;
  objectPosition?: string;
}) {
  if (photo) {
    return (
      <section className="relative isolate flex min-h-[78svh] items-end overflow-hidden bg-delta-950 text-ivory">
        <ParallaxImage photo={photo} className="absolute inset-0" objectPosition={objectPosition} />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-delta-950/85 via-delta-950/35 to-delta-950/15" />
        <div className="wrap relative z-10 pb-20 pt-40 md:pb-28">
          {eyebrow && (
            <Reveal>
              <Eyebrow tone="light">{eyebrow}</Eyebrow>
            </Reveal>
          )}
          <SplitWords
            as="h2"
            inView
            text={title}
            className="mt-6 max-w-[18ch] font-display text-[clamp(2.6rem,5.6vw,5rem)] leading-[1.04] text-balance"
          />
          {text && (
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/90">{text}</p>
            </Reveal>
          )}
          <Reveal delay={0.25} className="mt-10 flex flex-wrap gap-3">
            <Button href={primary.href} variant="light">
              {primary.label}
            </Button>
            {secondary && (
              <Button href={secondary.href} variant="outline-light">
                {secondary.label}
              </Button>
            )}
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[var(--tint)] py-24 md:py-32">
      <div className="wrap text-center">
        {eyebrow && (
          <Reveal>
            <Eyebrow className="justify-center">{eyebrow}</Eyebrow>
          </Reveal>
        )}
        <SplitWords
          as="h2"
          inView
          text={title}
          className="mx-auto mt-6 max-w-[20ch] font-display text-[clamp(2.2rem,4.6vw,3.8rem)] leading-[1.08] text-balance text-ink"
        />
        {text && (
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-stone">{text}</p>
          </Reveal>
        )}
        <Reveal delay={0.25} className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href={primary.href}>{primary.label}</Button>
          {secondary && (
            <Button href={secondary.href} variant="secondary">
              {secondary.label}
            </Button>
          )}
        </Reveal>
      </div>
    </section>
  );
}
