import type { Metadata } from "next";
import { HomeHero } from "@/components/home/Hero";
import { HeritageStory } from "@/components/home/Story";
import { ExploreGrid } from "@/components/home/Explore";
import {
  CampingFeature,
  CommunityFeature,
  DiningFeature,
  HomeFinalCta,
  RecreationFeature,
  StorageFeature,
  WaterfrontBand,
} from "@/components/home/Experiences";
import { photos } from "@/content/photos";
import { pageMetadata } from "@/lib/seo";

const home = pageMetadata({
  title: "Orwood Resort | Delta Boat Launch, Marina & Dining in Brentwood, CA",
  description:
    "Orwood Resort in Brentwood, CA: a three-lane boat launch, marina and gas docks, Bar & Grill, RV camping, water sports, fishing and boat storage on the California Delta since 1955.",
  path: "/",
  image: photos.heroDelta.src,
});

export const metadata: Metadata = {
  ...home,
  title: { absolute: "Orwood Resort | Delta Boat Launch, Marina & Dining in Brentwood, CA" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HeritageStory />
      <ExploreGrid />
      <WaterfrontBand />
      <RecreationFeature />
      <DiningFeature />
      <CampingFeature />
      <StorageFeature />
      <CommunityFeature />
      <HomeFinalCta />
    </>
  );
}
