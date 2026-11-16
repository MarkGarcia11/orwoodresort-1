import type { Metadata } from "next";
import { Coffee, Fuel, ShoppingBasket, Store } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FactGrid, FeatureGrid, SectionTitle } from "@/components/ui/Blocks";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { MaskReveal, Reveal } from "@/components/ui/Reveal";
import { ThemeScope } from "@/components/ui/ThemeScope";
import { photos } from "@/content/photos";
import { site } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "General Store at Orwood Resort | Snacks, Drinks & Essentials, Brentwood CA",
  description:
    "The Orwood Resort General Store in Brentwood, CA: snacks, drinks and everyday essentials for your day on the Delta. Call (925) 634-6812 to confirm current inventory.",
  path: "/general-store",
  image: photos.storeCounter.src,
});

const crumbs = [{ name: "General Store", href: "/general-store" }];

const services = [
  {
    icon: Coffee,
    title: "Snacks & drinks",
    text: "Something cold and something to nibble for the ride out, the afternoon on the water or the trip home.",
  },
  {
    icon: ShoppingBasket,
    title: "Everyday essentials",
    text: "Convenience items for your boat, your campsite or a picnic on the patio.",
  },
  {
    icon: Store,
    title: "Last-minute trip supplies",
    text: "Pick up what you forgot before you launch or settle in for the night.",
  },
  {
    icon: Fuel,
    title: "Pair it with a fuel stop",
    text: "Refuel at the gas dock, then come up to the store for the rest of the list.",
  },
];

export default function GeneralStorePage() {
  return (
    <ThemeScope theme="store">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHero
        eyebrow="General Store"
        title="Pick Up What You _Forgot._"
        description="Snacks, drinks and everyday essentials for your day on the water, right here at the resort."
        photo={photos.storeCounter}
        crumbs={crumbs}
        objectPosition="center 45%"
        actions={
          <>
            <Button href={`tel:${site.phone.store.tel}`} variant="light">
              Call the Store
            </Button>
            <Button href="/contact" variant="outline-light">
              Plan Your Visit
            </Button>
          </>
        }
      />

      <section className="bg-ivory py-28 md:py-40">
        <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow="Convenience at the Resort"
              title="Everything for the Trip, Without the Detour."
              description="The General Store keeps the day simple: grab what you need on the way to the launch, the campsite or the patio."
            />
          </div>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <FactGrid
              items={[
                { label: "Location", value: "On site at Orwood Resort" },
                { label: "Store phone", value: site.phone.store.display },
                { label: "Pairs with", value: "Marina, camping and the Bar & Grill" },
              ]}
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--tint)] py-28 md:py-36">
        <div className="wrap">
          <SectionTitle eyebrow="What You'll Find" title="Essentials for the Day on the Delta." />
          <div className="mt-20">
            <FeatureGrid items={services} columns="md:grid-cols-2 lg:grid-cols-4" />
          </div>
          <Reveal delay={0.1} className="mt-16 border-l-2 border-[var(--accent)] bg-ivory p-8 md:p-10">
            <p className="font-display text-2xl text-ink">Confirm before you come</p>
            <p className="mt-4 max-w-2xl leading-relaxed text-stone">
              Inventory changes throughout the season. Call {site.phone.store.display} to check what's in stock before
              you make the trip, especially for specific brands or larger items.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory pb-28 md:pb-36">
        <div className="wrap grid gap-4 md:grid-cols-12 md:gap-6">
          <MaskReveal className="relative aspect-[4/3] overflow-hidden md:col-span-7">
            <Photo photo={photos.marinaYachts} zoom sizes="(min-width: 768px) 58vw, 100vw" />
          </MaskReveal>
          <MaskReveal className="relative aspect-[4/5] overflow-hidden md:col-span-5 md:mt-20">
            <Photo photo={photos.marinaSailboats} zoom sizes="(min-width: 768px) 40vw, 100vw" />
          </MaskReveal>
        </div>
      </section>

      <CtaBand
        title="Stop in on your way down the road."
        text="Call the General Store to check what's in stock, or plan your full visit with our team."
        primary={{ label: `Call ${site.phone.store.display}`, href: `tel:${site.phone.store.tel}` }}
        secondary={{ label: "Plan Your Visit", href: "/contact" }}
      />
    </ThemeScope>
  );
}
