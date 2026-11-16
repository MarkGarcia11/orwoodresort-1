"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { GalleryItem } from "@/content/site";
import { Photo } from "@/components/ui/Photo";
import { easeOrwood } from "@/components/ui/Reveal";

export function GalleryGrid({ items, categories }: { items: GalleryItem[]; categories: string[] }) {
  const [filter, setFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? items : items.filter((item) => item.category === filter)),
    [filter, items],
  );

  const close = () => setActiveIndex(null);
  const step = (direction: 1 | -1) =>
    setActiveIndex((current) => {
      if (current === null) return null;
      return (current + direction + visible.length) % visible.length;
    });

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, visible.length]);

  const active = activeIndex !== null ? visible[activeIndex] : null;

  return (
    <div>
      <div role="group" aria-label="Filter gallery by category" className="flex flex-wrap gap-2.5">
        {categories.map((category) => {
          const count = category === "All" ? items.length : items.filter((item) => item.category === category).length;
          const selected = filter === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={selected}
              disabled={count === 0}
              onClick={() => {
                setFilter(category);
                setActiveIndex(null);
              }}
              className={`min-h-11 rounded-full border px-5 py-2 text-sm transition-all duration-500 ease-[var(--ease-orwood)] disabled:opacity-40 ${
                selected
                  ? "border-delta-800 bg-delta-800 text-ivory"
                  : "border-ink/20 text-ink hover:border-delta-700 hover:text-delta-800"
              }`}
            >
              {category}
              <span className={`ml-2 text-xs ${selected ? "text-ivory/70" : "text-stone"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <motion.ul layout className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
        <AnimatePresence initial={false}>
          {visible.map((item, index) => {
            const tall = index % 5 === 0 || index % 7 === 3;
            return (
              <motion.li
                key={item.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.8, ease: easeOrwood, delay: Math.min(index * 0.03, 0.3) }}
                className="mb-5 break-inside-avoid"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Open photo: ${item.caption}`}
                  className="group relative block w-full overflow-hidden text-left"
                >
                  <div className={`relative w-full overflow-hidden ${tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                    <Photo
                      photo={item.photo}
                      zoom
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-delta-950/70 to-transparent p-5 pt-16 opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-focus-visible:opacity-100"
                    />
                  </div>
                  <span className="mt-3 flex items-center justify-between gap-4 text-sm">
                    <span className="text-ink">{item.caption}</span>
                    <span className="shrink-0 text-[0.7rem] uppercase tracking-[0.18em] text-stone">{item.category}</span>
                  </span>
                </button>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>

      <AnimatePresence>
        {active && activeIndex !== null && (
          <motion.div
            key="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`Photo viewer: ${active.caption}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: easeOrwood }}
            className="fixed inset-0 z-[120] flex flex-col bg-delta-950/96 text-ivory"
            onClick={close}
          >
            <div className="flex items-center justify-between px-5 py-5 md:px-10" onClick={(e) => e.stopPropagation()}>
              <p className="text-sm tracking-[0.12em] text-ivory/75">
                {activeIndex + 1} / {visible.length} · {active.category}
              </p>
              <button
                type="button"
                onClick={close}
                aria-label="Close photo viewer"
                className="grid h-12 w-12 place-items-center rounded-full border border-ivory/25 hover:bg-ivory/10"
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center px-16 pb-6 md:px-28">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: easeOrwood }}
                className="relative h-full max-h-[78svh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Photo photo={active.photo} sizes="90vw" className="!object-contain" />
              </motion.div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Previous photo"
                className="absolute left-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-ivory/25 hover:bg-ivory/10 md:left-8"
              >
                <ChevronLeft aria-hidden="true" className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Next photo"
                className="absolute right-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-ivory/25 hover:bg-ivory/10 md:right-8"
              >
                <ChevronRight aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
            <p className="pb-8 text-center text-sm text-ivory/80">{active.caption}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
