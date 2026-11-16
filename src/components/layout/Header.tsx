"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Navigation, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { easeOrwood } from "@/components/ui/Reveal";
import { navGroups, site, type NavGroup } from "@/content/site";

const topLinks = [{ label: "About", href: "/about" }];
const trailingLinks = [
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenGroup(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenGroup(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const solid = scrolled || !isHome || mobileOpen;
  const textColor = solid ? "text-delta-900" : "text-ivory";
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-500 ${textColor} ${
          solid ? "bg-ivory/97 shadow-[0_1px_0_rgba(11,34,48,0.08)]" : "bg-transparent"
        }`}
      >
        <div className="wrap flex h-[76px] items-center justify-between gap-6 md:h-[88px]">
          <Link href="/" aria-label="Orwood Resort, home" className="shrink-0">
            <Logo tone={solid ? "dark" : "light"} compact className="scale-95 md:scale-100" />
          </Link>

          <nav aria-label="Primary" className="hidden items-center lg:flex">
            <ul className="flex items-center gap-1">
              {topLinks.map((link) => (
                <li key={link.href}>
                  <NavItem href={link.href} active={isActive(link.href)}>
                    {link.label}
                  </NavItem>
                </li>
              ))}

              {navGroups.map((group) => (
                <DesktopGroup
                  key={group.key}
                  group={group}
                  open={openGroup === group.key}
                  onOpen={() => setOpenGroup(group.key)}
                  onClose={() => setOpenGroup((current) => (current === group.key ? null : current))}
                  onToggle={() => setOpenGroup((current) => (current === group.key ? null : group.key))}
                  pathname={pathname}
                />
              ))}

              {trailingLinks.map((link) => (
                <li key={link.href}>
                  <NavItem href={link.href} active={isActive(link.href)}>
                    {link.label}
                  </NavItem>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={`tel:${site.phone.main.tel}`}
              className="group inline-flex items-center gap-2 text-sm font-medium xl:flex"
              aria-label={`Call the main resort at ${site.phone.main.display}`}
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              <span className="link-line pb-0.5">{site.phone.main.display}</span>
            </a>
            <Button href="/contact" variant={solid ? "primary" : "light"} className="!min-h-11 !px-5 !py-2.5 text-sm">
              Plan Your Visit
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${site.phone.main.tel}`}
              aria-label={`Call ${site.phone.main.display}`}
              className="grid h-12 w-12 place-items-center rounded-full"
            >
              <Phone aria-hidden="true" className="h-5 w-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="grid h-12 w-12 place-items-center rounded-full"
            >
              <span className="relative block h-[11px] w-6" aria-hidden="true">
                <span
                  className="absolute left-0 top-0 block h-px w-6 bg-current transition-transform duration-500 ease-[var(--ease-orwood)]"
                  style={{ transform: mobileOpen ? "translateY(5px) rotate(45deg)" : "translateY(0)" }}
                />
                <span
                  className="absolute left-0 top-[5px] block h-px w-6 bg-current transition-opacity duration-300"
                  style={{ opacity: mobileOpen ? 0 : 1 }}
                />
                <span
                  className="absolute left-0 top-0 block h-px w-6 bg-current transition-transform duration-500 ease-[var(--ease-orwood)]"
                  style={{ transform: mobileOpen ? "translateY(5px) rotate(-45deg)" : "translateY(10px)" }}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu key="mobile-menu" pathname={pathname} onNavigate={() => setMobileOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

function NavItem({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className="relative block px-3.5 py-2.5 text-[0.92rem] font-medium tracking-[0.01em] after:absolute after:inset-x-3.5 after:bottom-1 after:h-px after:origin-left after:bg-current after:transition-transform after:duration-500 after:ease-[var(--ease-orwood)] hover:after:scale-x-100 aria-[current=page]:after:scale-x-100 after:scale-x-0"
    >
      {children}
    </Link>
  );
}

function DesktopGroup({
  group,
  open,
  onOpen,
  onClose,
  onToggle,
  pathname,
}: {
  group: NavGroup;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  pathname: string;
}) {
  const active = group.items.some((item) => pathname === item.href);

  return (
    // The <li> is intentionally not positioned so the mega panel anchors to the full-width header.
    <li onMouseEnter={onOpen} onMouseLeave={onClose} onKeyDown={(e) => e.key === "Escape" && onClose()}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={onToggle}
        onFocus={onOpen}
        aria-current={active ? "page" : undefined}
        className="group relative flex items-center gap-1.5 px-3.5 py-2.5 text-[0.92rem] font-medium tracking-[0.01em]"
      >
        {group.label}
        <ChevronDown
          aria-hidden="true"
          className={`h-4 w-4 transition-transform duration-500 ease-[var(--ease-orwood)] ${open ? "rotate-180" : ""}`}
        />
        <span
          aria-hidden="true"
          className={`absolute inset-x-3.5 bottom-1 h-px origin-left bg-current transition-transform duration-500 ease-[var(--ease-orwood)] ${
            open || active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key={group.key}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.45, ease: easeOrwood }}
            className="absolute inset-x-0 top-full border-t border-delta-100 bg-ivory text-ink shadow-[0_40px_60px_-36px_rgba(11,34,48,0.45)]"
          >
            <div className="wrap grid grid-cols-12 gap-10 py-12">
              <div className="col-span-4">
                <p className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-delta-700">{group.label}</p>
                <p className="mt-4 font-display text-3xl leading-tight">{group.heading}</p>
                <p className="mt-4 max-w-xs leading-relaxed text-stone">{group.description}</p>
                <Link
                  href={group.overviewHref}
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-delta-800"
                >
                  <span className="link-line pb-1">Explore {group.label.toLowerCase()}</span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </div>

              <ul className="col-span-5 grid grid-cols-2 gap-x-8 gap-y-8">
                {group.items.map((item, index) => (
                  <li key={item.href}>
                    <Link href={item.href} className="group block">
                      <span className="text-[0.72rem] tracking-[0.2em] text-delta-500">0{index + 1}</span>
                      <span className="mt-1.5 block font-display text-[1.35rem] leading-snug transition-transform duration-500 ease-[var(--ease-orwood)] group-hover:translate-x-1">
                        {item.label}
                      </span>
                      <span className="mt-1.5 block text-sm leading-relaxed text-stone">{item.desc}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <Link href={group.overviewHref} className="group relative col-span-3 block aspect-[4/5] overflow-hidden">
                <Photo photo={group.photo} sizes="260px" zoom />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-delta-950/50 to-transparent" />
                <span className="absolute bottom-4 left-4 right-4 text-sm font-medium text-ivory">{group.heading}</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

function MobileMenu({ pathname, onNavigate }: { pathname: string; onNavigate: () => void }) {
  return (
    <motion.div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: easeOrwood }}
      className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ivory pb-10 pt-[104px] lg:hidden"
    >
      <div className="wrap flex flex-1 flex-col">
        <nav aria-label="Mobile">
          <ul className="border-y border-delta-100">
            <MobileRow href="/about" label="About" active={pathname === "/about"} onNavigate={onNavigate} />
            {navGroups.map((group, index) => (
              <MobileGroup key={group.key} group={group} defaultOpen={index === 0} onNavigate={onNavigate} pathname={pathname} />
            ))}
            <MobileRow href="/gallery" label="Gallery" active={pathname === "/gallery"} onNavigate={onNavigate} />
            <MobileRow href="/faq" label="FAQ" active={pathname === "/faq"} onNavigate={onNavigate} />
            <MobileRow href="/contact" label="Contact & Directions" active={pathname === "/contact"} onNavigate={onNavigate} />
          </ul>
        </nav>

        <div className="mt-10 grid gap-3">
          <a
            href={`tel:${site.phone.main.tel}`}
            className="flex min-h-14 items-center justify-center gap-3 rounded-full bg-delta-950 px-6 text-base font-medium text-ivory"
          >
            <Phone aria-hidden="true" className="h-5 w-5" />
            Call {site.phone.main.display}
          </a>
          <a
            href={site.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-14 items-center justify-center gap-3 rounded-full border border-delta-700 px-6 text-base font-medium text-delta-800"
          >
            <Navigation aria-hidden="true" className="h-5 w-5" />
            Get directions
          </a>
          <Link
            href="/contact"
            onClick={onNavigate}
            className="flex min-h-14 items-center justify-center rounded-full px-6 text-base font-medium text-stone underline decoration-stone/40 underline-offset-4"
          >
            Plan your visit
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function MobileRow({
  href,
  label,
  active,
  onNavigate,
}: {
  href: string;
  label: string;
  active: boolean;
  onNavigate: () => void;
}) {
  return (
    <li className="border-b border-delta-100 last:border-b-0">
      <Link
        href={href}
        onClick={onNavigate}
        aria-current={active ? "page" : undefined}
        className="flex items-center justify-between py-5 font-display text-[1.9rem] leading-none text-delta-950 aria-[current=page]:text-delta-700"
      >
        {label}
        <ArrowRight aria-hidden="true" className="h-5 w-5 text-delta-500" />
      </Link>
    </li>
  );
}

function MobileGroup({
  group,
  defaultOpen,
  onNavigate,
  pathname,
}: {
  group: NavGroup;
  defaultOpen: boolean;
  onNavigate: () => void;
  pathname: string;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <li className="border-b border-delta-100">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between py-5 text-left font-display text-[1.9rem] leading-none text-delta-950"
      >
        {group.label}
        <ChevronDown
          aria-hidden="true"
          className={`h-5 w-5 text-delta-500 transition-transform duration-500 ease-[var(--ease-orwood)] ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: easeOrwood }}
            className="overflow-hidden"
          >
            {group.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="block pb-5 pl-4 text-lg text-stone aria-[current=page]:text-delta-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}
