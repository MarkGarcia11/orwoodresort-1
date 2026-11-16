/**
 * Orwood Resort wordmark and mark. Built as SVG and type so it stays crisp at every size
 * and adapts to light or dark surfaces. Swap in the official logo file here when supplied.
 */
export function Logo({
  tone = "dark",
  className = "",
  compact = false,
}: {
  tone?: "dark" | "light";
  className?: string;
  compact?: boolean;
}) {
  const color = tone === "light" ? "text-ivory" : "text-delta-800";

  return (
    <span className={`inline-flex items-center gap-3 ${color} ${className}`}>
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className={compact ? "h-8 w-8" : "h-9 w-9 md:h-11 md:w-11"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      >
        <circle cx="24" cy="17" r="8" fill="currentColor" stroke="none" />
        <path d="M5 29.5c3.2-2 6.4-2 9.6 0s6.4 2 9.6 0 6.4-2 9.6 0 6.4 2 9.6 0" />
        <path d="M9 37.5c2.8-1.7 5.6-1.7 8.4 0s5.6 1.7 8.4 0 5.6-1.7 8.4 0 5.6 1.7 8.4 0" opacity="0.6" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.45rem] font-medium tracking-[0.03em] md:text-[1.65rem]">Orwood</span>
        <span className="mt-1.5 text-[0.56rem] font-medium uppercase tracking-[0.42em] opacity-80">
          Resort · Delta
        </span>
      </span>
    </span>
  );
}
