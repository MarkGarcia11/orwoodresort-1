import type { Metadata } from "next";
import { faqGroups, site, restaurantHours, type FaqItem } from "@/content/site";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.orwoodresort.com").replace(/\/$/, "");

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function pageMetadata({ title, description, path, image }: PageMetaInput): Metadata {
  const url = `${siteUrl}${path === "/" ? "" : path}`;
  const images = image ? [{ url: `${siteUrl}${image}`, width: 1600, height: 1000, alt: title }] : undefined;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      type: "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images?.map((img) => img.url),
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; href: string }[]) {
  const all = [{ name: "Home", href: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.href === "/" ? "" : item.href}`,
    })),
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** Converts "8:30 PM" into "20:30" for schema.org time values. */
function to24h(time: string) {
  const match = time.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return "00:00";
  let hours = Number(match[1]) % 12;
  if (match[3].toUpperCase() === "PM") hours += 12;
  return `${String(hours).padStart(2, "0")}:${match[2]}`;
}

const openingSpecs = restaurantHours.map((entry) => {
  const [opens, closes] = entry.hours.split("–").map((part) => part.trim());
  return { day: entry.day, opens: to24h(opens), closes: to24h(closes) };
});

const addressSchema = {
  "@type": "PostalAddress",
  streetAddress: site.street,
  addressLocality: site.city,
  addressRegion: site.region,
  postalCode: site.postalCode,
  addressCountry: "US",
};

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: site.name,
    description: site.description,
    url: siteUrl,
    telephone: site.phone.main.tel,
    image: `${siteUrl}/images/hero-delta-sunset.jpg`,
    address: addressSchema,
    areaServed: "California Delta",
    foundingDate: String(site.established),
    sameAs: site.socialProfiles.map((profile) => profile.href),
  };
}

export function restaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${siteUrl}/bar-grill#restaurant`,
    name: "Orwood Bar & Grill",
    parentOrganization: { "@id": `${siteUrl}/#business` },
    url: `${siteUrl}/bar-grill`,
    telephone: site.phone.restaurant.tel,
    servesCuisine: ["American", "Breakfast", "Steakhouse"],
    hasMenu: `${siteUrl}/bar-grill#menu`,
    address: addressSchema,
    openingHoursSpecification: openingSpecs.map((spec) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: spec.day,
      opens: spec.opens,
      closes: spec.closes,
    })),
  };
}

export const allFaqItems = faqGroups.flatMap((group) => group.items);
