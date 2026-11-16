import type { LucideIcon } from "lucide-react";
import { Phone } from "lucide-react";
import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { Reveal } from "./Reveal";
import { SplitWords } from "./SplitWords";
import { site, telHref } from "@/content/site";

export function Eyebrow({
  children,
  tone = "accent",
  className = "",
}: {
  children: ReactNode;
  tone?: "accent" | "light";
  className?: string;
}) {
  const color = tone === "light" ? "text-ivory/90" : "text-[var(--accent-strong)]";
  return (
    <p
      className={`flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.24em] ${color} ${className}`}
    >
      <span aria-hidden="true" className="h-px w-9 bg-current opacity-70" />
      {children}
    </p>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  tone = "default",
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "default" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  const headingColor = tone === "light" ? "text-ivory" : "text-ink";
  const bodyColor = tone === "light" ? "text-ivory/85" : "text-stone";
  const eyebrowTone = tone === "light" ? "light" : "accent";

  return (
    <div className={`${alignment} ${className}`}>
      {eyebrow && (
        <Reveal>
          <Eyebrow tone={eyebrowTone} className={align === "center" ? "justify-center" : ""}>
            {eyebrow}
          </Eyebrow>
        </Reveal>
      )}
      <SplitWords
        as="h2"
        inView
        text={title}
        className={`mt-5 font-display text-[clamp(2.1rem,4.2vw,3.5rem)] leading-[1.08] text-balance ${headingColor}`}
      />
      {description && (
        <Reveal delay={0.15}>
          <p className={`mt-6 max-w-xl text-[1.0625rem] leading-relaxed ${bodyColor}`}>{description}</p>
        </Reveal>
      )}
    </div>
  );
}

/** Introduction block for inner pages that don't use a full-bleed hero. */
export function PageIntro({
  eyebrow,
  title,
  description,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  crumbs: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-[var(--tint)] pb-16 pt-36 md:pb-24 md:pt-44">
      <div className="wrap">
        <Breadcrumbs items={crumbs} />
        <div className="mt-10 max-w-4xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <SplitWords
            as="h1"
            text={title}
            delay={0.1}
            className="mt-5 font-display text-[clamp(2.6rem,5.4vw,4.75rem)] leading-[1.04] text-balance text-ink"
          />
          <Reveal delay={0.3}>
            <p className="mt-7 max-w-2xl text-[1.0625rem] leading-relaxed text-stone md:text-lg">{description}</p>
          </Reveal>
          {children && <div className="mt-10">{children}</div>}
        </div>
      </div>
    </section>
  );
}

export function FactGrid({
  items,
  tone = "default",
}: {
  items: { label: string; value: string }[];
  tone?: "default" | "light";
}) {
  const border = tone === "light" ? "border-ivory/20" : "border-ink/12";
  const label = tone === "light" ? "text-ivory/70" : "text-stone";
  const value = tone === "light" ? "text-ivory" : "text-ink";

  return (
    <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className={`border-t pt-5 ${border}`}>
          <dt className={`text-[0.72rem] font-medium uppercase tracking-[0.2em] ${label}`}>{item.label}</dt>
          <dd className={`mt-2 font-display text-2xl leading-snug ${value}`}>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function FeatureGrid({
  items,
  columns = "md:grid-cols-2 lg:grid-cols-3",
}: {
  items: { icon: LucideIcon; title: string; text: string }[];
  columns?: string;
}) {
  return (
    <ul className={`grid gap-x-10 gap-y-12 ${columns}`}>
      {items.map((item, index) => (
        <li key={item.title} className="group h-full">
          <Reveal delay={index * 0.06}>
            <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--tint)] text-[var(--accent-strong)] transition-transform duration-700 ease-[var(--ease-orwood)] group-hover:-translate-y-1">
              <item.icon aria-hidden="true" className="h-5 w-5" />
            </span>
            <h3 className="mt-6 font-display text-2xl leading-tight text-ink">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-stone">{item.text}</p>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

export function PhoneList({ tone = "default" }: { tone?: "default" | "light" }) {
  const entries = Object.values(site.phone);
  const label = tone === "light" ? "text-ivory/70" : "text-stone";
  const link = tone === "light" ? "text-ivory" : "text-ink";

  return (
    <ul className="grid gap-5">
      {entries.map((entry) => (
        <li key={entry.tel}>
          <p className={`text-[0.72rem] font-medium uppercase tracking-[0.2em] ${label}`}>{entry.label}</p>
          <a
            href={`tel:${entry.tel}`}
            className={`group mt-1.5 inline-flex items-center gap-3 font-display text-2xl ${link}`}
          >
            <Phone aria-hidden="true" className="h-4 w-4 text-[var(--accent)]" />
            <span className="link-line pb-0.5">{entry.display}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export { telHref };
