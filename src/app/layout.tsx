import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteHeader } from "@/components/layout/Header";
import { SiteFooter } from "@/components/layout/Footer";
import { Preloader } from "@/components/layout/Preloader";
import { Providers } from "@/components/layout/Providers";
import { JsonLd } from "@/components/ui/JsonLd";
import { localBusinessJsonLd, siteUrl } from "@/lib/seo";
import { site } from "@/content/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Orwood Resort | Delta Boat Launch, Marina & Dining in Brentwood, CA",
    template: "%s | Orwood Resort",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Orwood Resort",
    "Brentwood CA marina",
    "boat launch Brentwood",
    "California Delta boat launch",
    "RV camping Brentwood CA",
    "Delta water skiing",
    "boat storage Brentwood CA",
    "California Delta fishing",
    "restaurant near Discovery Bay",
  ],
  robots: { index: true, follow: true },
  formatDetection: { telephone: true },
  openGraph: {
    siteName: site.name,
    title: "Orwood Resort | Where the Delta Feels Like Home",
    description: site.description,
    url: siteUrl,
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b2230",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-ivory focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-delta-950 focus:shadow-lg"
          >
            Skip to content
          </a>
          <Preloader />
          <SiteHeader />
          <main id="main" className="min-h-screen">
            {children}
          </main>
          <SiteFooter />
        </Providers>
        <JsonLd data={localBusinessJsonLd()} />
      </body>
    </html>
  );
}
