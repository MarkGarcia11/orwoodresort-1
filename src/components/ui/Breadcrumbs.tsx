import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { name: string; href: string };

/** Visible breadcrumb trail. The Home link is added automatically. */
export function Breadcrumbs({ items, tone = "dark" }: { items: Crumb[]; tone?: "dark" | "light" }) {
  const trail = [{ name: "Home", href: "/" }, ...items];
  const color = tone === "light" ? "text-ivory/80" : "text-stone";
  const current = tone === "light" ? "text-ivory" : "text-ink";

  return (
    <nav aria-label="Breadcrumb" className={`text-[0.8rem] tracking-[0.04em] ${color}`}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {trail.map((crumb, index) => {
          const isLast = index === trail.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-2">
              {index > 0 && <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 opacity-60" />}
              {isLast ? (
                <span aria-current="page" className={current}>
                  {crumb.name}
                </span>
              ) : (
                <Link href={crumb.href} className="link-line hover:opacity-100">
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
