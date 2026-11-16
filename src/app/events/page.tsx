import type { Metadata } from "next";
import { Calendar, PartyPopper, Sun, Users, UtensilsCrossed } from "lucide-react";
import { Button, TextLink } from "@/components/ui/Button";
import { FeatureGrid, PhoneList, SectionTitle } from "@/components/ui/Blocks";
import { CtaBand } from "@/components/ui/CtaBand";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { MaskReveal, Reveal } from "@/components/ui/Reveal";
import { ThemeScope } from "@/components/ui/ThemeScope";
import { photos } from "@/content/photos";
import { site, telHref } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Events & Parties at Orwood Resort | Group Dining in Brentwood, CA",
  description:
    "Plan a private celebration, group lunch or company gathering at Orwood Resort in Brentwood, CA. Send a group and event inquiry or call the Bar & Grill.",
  path: "/events",
  image: photos.garden.src,
});

const crumbs = [{ name: "Events & Parties", href: "/events" }];

const eventTypes = [
  { icon: PartyPopper, title: "Private celebrations", text: "Birthdays, anniversaries and family milestones with good food and the patio view." },
  { icon: UtensilsCrossed, title: "Group dining", text: "Breakfast, lunch or dinner for a crowd, planned with the Bar & Grill team." },
  { icon: Users, title: "Company & club gatherings", text: "Team lunches, club outings and get-togethers on the Delta." },
  { icon: Sun, title: "Seasonal patio events", text: "Patio gatherings and seasonal entertainment. Ask what's on this season." },
];

const steps = [
  "Share the occasion, your date and your estimated group size.",
  "Our team replies to talk through timing, seating and menu options.",
  "We confirm the details with you before the day arrives.",
];

export default function EventsPage() {
  return (
    <ThemeScope theme="events">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHero
        eyebrow="Events & Parties"
        title="Good Times Are Better _Shared._"
        description="Plan a family celebration, a group lunch or a private gathering with the Bar & Grill team, with the patio and the water close by."
        photo={photos.garden}
        crumbs={crumbs}
        objectPosition="center 45%"
        actions={
          <>
            <Button href="#inquire" variant="light">
              Plan an Event
            </Button>
            <Button href={telHref("restaurant")} variant="outline-light">
              Call {site.phone.restaurant.display}
            </Button>
          </>
        }
      />

      <section className="bg-ivory py-28 md:py-40">
        <div className="wrap">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <SectionTitle eyebrow="Gatherings at Orwood" title="Made for Gathering, Whatever the Occasion." />
            </div>
            <Reveal delay={0.1} className="md:col-span-4 md:col-start-9">
              <p className="leading-relaxed text-stone">
                From a backyard-style cookout feel on the patio to a formal group dinner, we'll help you shape the day
                around your guests.
              </p>
            </Reveal>
          </div>
          <div className="mt-20">
            <FeatureGrid items={eventTypes} columns="md:grid-cols-2 lg:grid-cols-4" />
          </div>
        </div>
      </section>

      <section className="bg-[var(--tint)] py-28 md:py-36">
        <div className="wrap grid gap-4 md:grid-cols-12 md:gap-6">
          <MaskReveal className="relative aspect-[4/5] overflow-hidden md:col-span-4">
            <Photo photo={photos.familyBbq} zoom sizes="(min-width: 768px) 32vw, 100vw" />
          </MaskReveal>
          <MaskReveal className="relative aspect-[4/3] overflow-hidden md:col-span-5 md:mt-24">
            <Photo photo={photos.group} zoom sizes="(min-width: 768px) 40vw, 100vw" />
          </MaskReveal>
          <MaskReveal className="relative aspect-square overflow-hidden md:col-span-3 md:mt-8">
            <Photo photo={photos.grilling} zoom sizes="(min-width: 768px) 24vw, 100vw" />
          </MaskReveal>
        </div>
      </section>

      <section className="bg-ivory py-28 md:py-36">
        <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <Calendar aria-hidden="true" className="h-7 w-7 text-[var(--accent-strong)]" />
            <h2 className="mt-6 font-display text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.08] text-balance text-ink">
              Upcoming events, shared by phone.
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/85">
                We announce seasonal events and entertainment at the restaurant and by phone. Call the Bar & Grill to
                hear what's coming up, or ask us to add you to our list.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-10">
              <PhoneList />
            </Reveal>
          </div>
          <Reveal delay={0.1} className="bg-[var(--tint)] p-8 md:p-10 lg:col-span-5 lg:col-start-8">
            <p className="font-display text-2xl text-ink">How group inquiries work</p>
            <ol className="mt-7 grid gap-6">
              {steps.map((step, index) => (
                <li key={step} className="grid grid-cols-[2.5rem_1fr] gap-3 leading-relaxed text-ink/85">
                  <span className="font-display text-lg text-[var(--accent-strong)]">0{index + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
            <div className="mt-10">
              <TextLink href="/bar-grill#menu">See what the kitchen serves</TextLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="inquire" className="scroll-mt-28 bg-[var(--tint)] py-28 md:py-36">
        <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionTitle
              eyebrow="Group & Event Inquiry"
              title="Tell Us About Your Gathering."
              description="The more we know about your group, the better we can plan. Our team will follow up with options."
            />
          </div>
          <div className="bg-ivory p-8 md:p-12 lg:col-span-7 lg:col-start-6">
            <InquiryForm type="events" />
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's plan a day worth gathering for."
        text="Call the Bar & Grill to talk through your date, your group and your menu."
        photo={photos.group}
        objectPosition="center 45%"
        primary={{ label: `Call ${site.phone.restaurant.display}`, href: telHref("restaurant") }}
        secondary={{ label: "Send an Inquiry", href: "#inquire" }}
      />
    </ThemeScope>
  );
}
