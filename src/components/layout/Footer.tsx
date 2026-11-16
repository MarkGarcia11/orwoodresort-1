import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { site } from "@/content/site";

const explore = [
  { label: "About", href: "/about" },
  { label: "Marina & Boat Launch", href: "/marina" },
  { label: "Water Sports", href: "/water-sports" },
  { label: "Fishing", href: "/fishing" },
  { label: "RV Camping", href: "/rv-camping" },
];

const dining = [
  { label: "Bar & Grill", href: "/bar-grill" },
  { label: "General Store", href: "/general-store" },
  { label: "Boat & RV Storage", href: "/storage" },
  { label: "Events & Parties", href: "/events" },
];

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <nav aria-label={title} className="md:col-span-2 lg:col-span-2">
      <h2 className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-sand">{title}</h2>
      <ul className="mt-6 grid gap-3.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="link-line pb-0.5 text-[0.95rem] text-ivory/80 transition-colors hover:text-ivory">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-delta-950 text-ivory/80">
      <div className="wrap grid gap-14 py-20 md:grid-cols-6 md:py-24 lg:grid-cols-12">
        <div className="md:col-span-6 lg:col-span-4">
          <Logo tone="light" />
          <p className="mt-7 max-w-sm text-[0.95rem] leading-relaxed text-ivory/70">
            A family-run waterfront destination on the California Delta. Boat launch, marina, dining, camping and storage
            for everyone who calls the Delta home for a day or a season.
          </p>
          <p className="mt-8 font-display text-2xl italic text-sand">{site.tagline}</p>
        </div>

        <FooterColumn title="Explore" links={explore} />
        <FooterColumn title="Dining & Facilities" links={dining} />

        <div className="md:col-span-6 lg:col-span-4">
          <h2 className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-sand">Visit Us</h2>
          <address className="mt-6 flex items-start gap-3 not-italic leading-relaxed text-ivory/85">
            <MapPin aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-sand" />
            <span>
              {site.street}
              <br />
              {site.city}, {site.region} {site.postalCode}
            </span>
          </address>
          <ul className="mt-7 grid gap-4">
            {Object.values(site.phone).map((entry) => (
              <li key={entry.tel}>
                <a
                  href={`tel:${entry.tel}`}
                  className="group flex items-center gap-3 text-[0.95rem] text-ivory/85 hover:text-ivory"
                >
                  <Phone aria-hidden="true" className="h-4 w-4 shrink-0 text-sand" />
                  <span>
                    <span className="block text-xs uppercase tracking-[0.16em] text-ivory/55">{entry.label}</span>
                    <span className="link-line pb-0.5">{entry.display}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-ivory"
          >
            <span className="link-line pb-1">Get directions</span>
            <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="wrap flex flex-col gap-4 py-7 text-sm text-ivory/60 md:flex-row md:items-center md:justify-between">
          <p>© {year} Orwood Resort, Brentwood, California. All rights reserved.</p>
          <nav aria-label="Legal and help" className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/faq" className="link-line pb-0.5 hover:text-ivory">FAQ</Link>
            <Link href="/contact" className="link-line pb-0.5 hover:text-ivory">Contact</Link>
            <Link href="/privacy" className="link-line pb-0.5 hover:text-ivory">Privacy Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
