import type { ReactNode } from "react";
import type { PhotoAsset } from "@/content/photos";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { Eyebrow } from "./Blocks";
import { ParallaxImage } from "./Parallax";
import { Reveal } from "./Reveal";
import { SplitWords } from "./SplitWords";

/** Cinematic full-bleed header used on most inner pages. */
export function PageHero({
  eyebrow,
  title,
  description,
  photo,
  crumbs,
  actions,
  objectPosition = "center",
  minHeight = "min-h-[80svh]",
}: {
  eyebrow: string;
  title: string;
  description: string;
  photo: PhotoAsset;
  crumbs: Crumb[];
  actions?: ReactNode;
  objectPosition?: string;
  minHeight?: string;
}) {
  return (
    <section className={`relative isolate flex ${minHeight} items-end overflow-hidden bg-delta-950 text-ivory`}>
      <ParallaxImage photo={photo} priority className="absolute inset-0" objectPosition={objectPosition} />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-delta-950/80 via-delta-950/20 to-delta-950/10"
      />
      <div className="wrap relative z-10 pb-14 pt-44 md:pb-20">
        <Breadcrumbs items={crumbs} tone="light" />
        <div className="mt-8">
          <Eyebrow tone="light">{eyebrow}</Eyebrow>
        </div>
        <SplitWords
          as="h1"
          text={title}
          delay={0.2}
          className="mt-5 max-w-[17ch] font-display text-[clamp(2.7rem,6vw,5.4rem)] leading-[1.02] text-balance"
        />
        <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <Reveal delay={0.5}>
            <p className="max-w-lg text-base leading-relaxed text-ivory/90 md:text-lg">{description}</p>
          </Reveal>
          {actions && (
            <Reveal delay={0.6} className="flex flex-wrap gap-3">
              {actions}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
