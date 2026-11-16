import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories, type Category } from "@/content/site";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/Blocks";
import { themes } from "@/components/ui/ThemeScope";

function CategoryCard({
  category,
  frame,
  className = "",
  sizes,
}: {
  category: Category;
  frame: string;
  className?: string;
  sizes: string;
}) {
  const accent = themes[category.theme].strong;

  return (
    <Reveal className={className}>
      <Link href={category.href} className="group block">
        <div className={`relative overflow-hidden ${frame}`}>
          <Photo photo={category.photo} zoom sizes={sizes} />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-delta-950/30 to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-90"
          />
        </div>
        <div className="mt-6 flex items-start justify-between gap-6">
          <div>
            <p className="text-[0.72rem] tracking-[0.24em]" style={{ color: accent }}>
              {category.number}
            </p>
            <h3 className="mt-2.5 font-display text-[1.9rem] leading-[1.1] text-ink transition-transform duration-700 ease-[var(--ease-orwood)] group-hover:translate-x-2 md:text-[2.2rem]">
              {category.title}
            </h3>
            <p className="mt-3 max-w-md leading-relaxed text-stone">{category.summary}</p>
          </div>
        </div>
        <span
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium"
          style={{ color: accent }}
        >
          <span className="link-line pb-1">Discover More</span>
          <ArrowRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-500 ease-[var(--ease-orwood)] group-hover:translate-x-1.5"
          />
        </span>
      </Link>
    </Reveal>
  );
}

export function ExploreGrid() {
  const [marina, sports, camp, dining, fishing, storage] = categories;

  return (
    <section id="explore" className="bg-linen py-28 md:py-40">
      <div className="wrap">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionTitle
              eyebrow="Explore the Orwood Experience"
              title="Six Reasons to Come Down Orwood Road."
            />
          </div>
          <Reveal delay={0.2} className="md:col-span-4 md:col-start-9">
            <p className="leading-relaxed text-stone">
              Every part of the resort has its own purpose. Come for the launch, the lunch, a week in camp, or a place
              to keep your boat between trips.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-x-8 gap-y-20 md:grid-cols-12 md:gap-y-24">
          <CategoryCard
            category={marina}
            frame="aspect-[4/3] md:aspect-[16/11]"
            className="md:col-span-7"
            sizes="(min-width: 768px) 58vw, 100vw"
          />
          <CategoryCard
            category={sports}
            frame="aspect-[4/5]"
            className="md:col-span-5 md:mt-44"
            sizes="(min-width: 768px) 40vw, 100vw"
          />
          <CategoryCard
            category={camp}
            frame="aspect-[3/4]"
            className="md:col-span-4"
            sizes="(min-width: 768px) 32vw, 100vw"
          />
          <CategoryCard
            category={dining}
            frame="aspect-square"
            className="md:col-span-4 md:mt-28"
            sizes="(min-width: 768px) 32vw, 100vw"
          />
          <CategoryCard
            category={fishing}
            frame="aspect-[3/4]"
            className="md:col-span-4 md:mt-12"
            sizes="(min-width: 768px) 32vw, 100vw"
          />
          <CategoryCard
            category={storage}
            frame="aspect-[4/3] md:aspect-[21/8]"
            className="md:col-span-12"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
