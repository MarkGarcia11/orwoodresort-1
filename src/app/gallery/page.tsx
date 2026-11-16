import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageIntro } from "@/components/ui/Blocks";
import { photos } from "@/content/photos";
import { galleryCategories, galleryItems, site } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Photo Gallery | Marina, Boat Launch, Water Sports & Dining at Orwood Resort",
  description:
    "Browse photos of the Orwood Resort marina, boat launch, water sports, RV camping, Bar & Grill, events and Delta waterfront in Brentwood, CA.",
  path: "/gallery",
  image: photos.deltaRiverAerial.src,
});

const crumbs = [{ name: "Gallery", href: "/gallery" }];

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageIntro
        eyebrow="Gallery"
        title="Seen From _the Water._"
        description="The marina, the launch, the water, the campsites, the patio and the people who gather here. Filter by category, then open any photo to view it full size."
        crumbs={crumbs}
      />

      <section className="bg-ivory py-16 md:py-24">
        <div className="wrap">
          <GalleryGrid items={galleryItems} categories={galleryCategories} />
        </div>
      </section>

      <CtaBand
        title="Come see it for yourself."
        text="Photos only tell part of the story. Plan your visit and experience the Delta from the water."
        primary={{ label: "Plan Your Visit", href: "/contact" }}
        secondary={{ label: "Get Directions", href: site.directionsUrl }}
      />
    </>
  );
}
