import Link from "next/link";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "light" | "outline-light";
type Icon = "arrow" | "phone" | "external" | "none";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: Icon;
  className?: string;
};

const base =
  "group relative inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3.5 text-[0.9375rem] font-medium tracking-[0.01em] transition-[background-color,color,box-shadow,transform,border-color] duration-500 ease-[var(--ease-orwood)] hover:-translate-y-0.5 focus-visible:-translate-y-0.5 active:translate-y-0";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--accent)] text-ivory shadow-[0_12px_26px_-16px_var(--accent)] hover:bg-[var(--accent-strong)] hover:shadow-[0_18px_34px_-16px_var(--accent-strong)]",
  secondary:
    "border border-[var(--accent)] text-[var(--accent-strong)] hover:bg-[var(--accent)] hover:text-ivory",
  light:
    "bg-ivory text-delta-950 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.6)] hover:bg-white hover:shadow-[0_18px_36px_-16px_rgba(0,0,0,0.55)]",
  "outline-light":
    "border border-ivory/60 text-ivory hover:border-ivory hover:bg-ivory/10",
};

function resolveIcon(href: string, icon?: Icon): Icon {
  if (icon) return icon;
  if (href.startsWith("tel:")) return "phone";
  if (/^https?:\/\//.test(href)) return "external";
  return "arrow";
}

function ButtonIcon({ icon }: { icon: Icon }) {
  if (icon === "none") return null;
  const Svg = icon === "phone" ? Phone : icon === "external" ? ArrowUpRight : ArrowRight;
  return (
    <Svg
      aria-hidden="true"
      className={`h-4 w-4 shrink-0 transition-transform duration-500 ease-[var(--ease-orwood)] ${
        icon === "phone" ? "" : "group-hover:translate-x-1 group-hover:-translate-y-px"
      }`}
    />
  );
}

export function Button({ href, children, variant = "primary", icon, className = "" }: ButtonProps) {
  const resolved = resolveIcon(href, icon);
  const classes = `${base} ${variants[variant]} ${className}`;
  const isExternal = /^(https?:|tel:|mailto:)/.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
        <ButtonIcon icon={resolved} />
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      <ButtonIcon icon={resolved} />
    </Link>
  );
}

/** Editorial text link with a drawn underline and a nudging arrow. */
export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const isExternal = /^(https?:|tel:|mailto:)/.test(href);
  const inner = (
    <>
      <span className="link-line pb-1">{children}</span>
      <ArrowRight
        aria-hidden="true"
        className="h-4 w-4 transition-transform duration-500 ease-[var(--ease-orwood)] group-hover:translate-x-1"
      />
    </>
  );
  const classes = `group inline-flex items-center gap-2 text-[0.95rem] font-medium text-[var(--accent-strong)] ${className}`;

  return isExternal ? (
    <a href={href} className={classes} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
