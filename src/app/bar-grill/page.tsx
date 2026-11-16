import type { Metadata } from "next";
import { Check, Coffee, Sun, UtensilsCrossed, Wine } from "lucide-react";
import { Button, TextLink } from "@/components/ui/Button";
import { Eyebrow, PhoneList, SectionTitle } from "@/components/ui/Blocks";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { MaskReveal, Reveal } from "@/components/ui/Reveal";
import { ThemeScope } from "@/components/ui/ThemeScope";
import { photos } from "@/content/photos";
import { hoursNote, restaurantHours, site, telHref } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata, restaurantJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Bar & Grill in Brentwood, CA | Breakfast, Lunch & Dinner on the Delta",
  description:
    "Orwood Bar & Grill near Discovery Bay: breakfast, lunch and dinner, steak and lobster and prime rib specials, a full bar, outdoor patio, group dining and takeout.",
  path: "/bar-grill",
  image: photos.grilledSteak.src,
});

const crumbs = [{ name: "Bar & Grill", href: "/bar-grill" }];

const meals = [
  {
    icon: Coffee,
    title: "Breakfast",
    text: "A relaxed start before the first launch. Familiar morning favorites, served without rushing.",
  },
  {
    icon: UtensilsCrossed,
    title: "Lunch",
    text: "Classic plates for a midday break between runs, out on the patio when the weather allows.",
  },
  {
    icon: Sun,
    title: "Dinner",
    text: "Steak and lobster and prime rib specials on select days, with sides and the fixings.",
  },
  {
    icon: Wine,
    title: "Full bar",
    text: "Cold drinks, a full bar and a patio for the end of a long day on the water.",
  },
];

const offerings = [
  "Breakfast, lunch and dinner",
  "Steak & lobster specials",
  "Prime rib specials",
  "Outdoor waterside patio",
  "Full bar",
  "Group dining and private parties",
];

export default function BarGrillPage() {
  return (
    <ThemeScope theme="dining">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={restaurantJsonLd()} />

      <PageHero
        eyebrow="Bar & Grill"
        title="Good Food. _Great Company._ Delta Dining."
        description="From a relaxed breakfast to a memorable dinner, enjoy familiar favorites and welcoming hospitality at the Orwood Bar & Grill."
        photo={photos.grilledSteak}
        crumbs={crumbs}
        objectPosition="center 60%"
        actions={
          <>
            <Button href="#menu" variant="light">
              View Menu
            </Button>
            <Button href={telHref("restaurant")} variant="outline-light">
              Call {site.phone.restaurant.display}
            </Button>
          </>
        }
      />

      <section id="menu" className="scroll-mt-28 bg-ivory py-28 md:py-40">
        <div className="wrap">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <SectionTitle eyebrow="The Menu" title="Breakfast, Lunch and Dinner, Around the Patio." />
            </div>
            <Reveal delay={0.1} className="md:col-span-4 md:col-start-9">
              <p className="leading-relaxed text-stone">
                Our printed menu changes with the season. Call the Bar & Grill and our team will walk you through
                what's available today.
              </p>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {meals.map((meal, index) => (
              <Reveal key={meal.title} delay={index * 0.08}>
                <article className="border-t border-ink/15 pt-7">
                  <meal.icon aria-hidden="true" className="h-6 w-6 text-[var(--accent-strong)]" />
                  <h2 className="mt-6 font-display text-3xl text-ink">{meal.title}</h2>
                  <p className="mt-4 leading-relaxed text-stone">{meal.text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-20 grid gap-8 bg-[var(--tint)] p-8 md:grid-cols-12 md:items-center md:p-12">
            <div className="md:col-span-7">
              <p className="font-display text-3xl text-ink">Specials & pricing</p>
              <p className="mt-4 max-w-xl leading-relaxed text-stone">
                Steak and lobster and prime rib specials are featured on select days. Specials and prices change, so
                we confirm them when you call rather than list them here.
              </p>
            </div>
            <div className="md:col-span-5 md:justify-self-end">
              <Button href={telHref("restaurant")} variant="primary">
                Ask About This Week's Specials
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-linen py-28 md:py-36">
        <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div id="hours" className="scroll-mt-28 lg:col-span-6">
            <SectionTitle eyebrow="Restaurant Hours" title="When to Come Hungry." />
            <Reveal delay={0.1}>
              <table className="mt-12 w-full border-collapse text-left">
                <caption className="sr-only">Bar &amp; Grill weekly hours</caption>
                <tbody>
                  {restaurantHours.map((entry) => (
                    <tr key={entry.day} className="border-b border-ink/12">
                      <th scope="row" className="py-4 pr-6 font-normal text-ink">
                        {entry.day}
                      </th>
                      <td className="py-4 text-right font-display text-xl text-ink md:text-2xl">{entry.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-6 text-sm leading-relaxed text-stone">{hoursNote}</p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.1} className="bg-ivory p-8 md:p-10">
              <Eyebrow>Call the Restaurant</Eyebrow>
              <p className="mt-6 font-display text-3xl text-ink">Talk to the kitchen team.</p>
              <p className="mt-4 leading-relaxed text-stone">
                Ask about today's menu, specials, group bookings or takeout. Our team will be happy to help.
              </p>
              <div className="mt-8">
                <PhoneList />
              </div>
            </Reveal>

            <Reveal delay={0.2} id="takeout" className="mt-6 scroll-mt-28 border-l-2 border-[var(--accent)] bg-[var(--tint)] p-8 md:p-10">
              <p className="font-display text-2xl text-ink">Takeout</p>
              <p className="mt-4 leading-relaxed text-stone">
                Call ahead at {site.phone.restaurant.display} to place a takeout order. Ask about pickup timing when you
                call, and take your meal to the patio, the boat or the campsite.
              </p>
              <div className="mt-7">
                <TextLink href={telHref("restaurant")}>Call to place a takeout order</TextLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-28 md:py-36">
        <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow="The Patio & Group Dining"
              title="Outdoors on the Water, or Inside with the Group."
              description="Bring the whole crew for a long lunch on the patio, or book a group dinner for a birthday, a club outing or a reunion."
            />
            <ul className="mt-10 grid gap-4">
              {offerings.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink">
                  <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[var(--accent)]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <TextLink href="/events#inquire">Plan a group meal</TextLink>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:col-span-7">
            <MaskReveal className="relative col-span-2 aspect-[16/10] overflow-hidden">
              <Photo photo={photos.patio} zoom sizes="(min-width: 1024px) 56vw, 100vw" />
            </MaskReveal>
            <MaskReveal className="relative aspect-[4/5] overflow-hidden">
              <Photo photo={photos.group} zoom sizes="(min-width: 1024px) 28vw, 50vw" />
            </MaskReveal>
            <MaskReveal className="relative mt-16 aspect-[4/5] overflow-hidden">
              <Photo photo={photos.restaurantWood} zoom sizes="(min-width: 1024px) 28vw, 50vw" />
            </MaskReveal>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Bar & Grill"
        title="Come hungry. Stay for the view."
        text="Call the restaurant for today's menu, specials, group plans or takeout."
        photo={photos.diningTable}
        objectPosition="center 55%"
        primary={{ label: `Call ${site.phone.restaurant.display}`, href: telHref("restaurant") }}
        secondary={{ label: "Get Directions", href: site.directionsUrl }}
      />
    </ThemeScope>
  );
}
