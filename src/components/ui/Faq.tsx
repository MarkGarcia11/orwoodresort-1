import { Plus } from "lucide-react";
import type { FaqItem } from "@/content/site";

/** Native disclosure accordion: keyboard and screen-reader friendly with no client JavaScript. */
export function FaqList({ items, idPrefix = "faq" }: { items: FaqItem[]; idPrefix?: string }) {
  return (
    <div className="divide-y divide-ink/12 border-y border-ink/12">
      {items.map((item, index) => (
        <details key={item.q} id={`${idPrefix}-${index}`} className="group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-8 py-7 text-left [&::-webkit-details-marker]:hidden">
            <span className="font-display text-[1.45rem] leading-snug text-ink md:text-[1.7rem]">{item.q}</span>
            <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink/25 text-[var(--accent-strong)] transition-all duration-500 ease-[var(--ease-orwood)] group-open:rotate-45 group-open:border-[var(--accent)] group-open:bg-[var(--accent)] group-open:text-ivory">
              <Plus aria-hidden="true" className="h-4 w-4" />
            </span>
          </summary>
          <p className="max-w-2xl pb-8 pr-14 text-[1.0625rem] leading-relaxed text-stone">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
