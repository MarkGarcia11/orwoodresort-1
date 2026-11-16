import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Blocks";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-[var(--tint)]">
      <div className="wrap py-40 text-center">
        <Eyebrow className="justify-center">Error 404</Eyebrow>
        <h1 className="mx-auto mt-6 max-w-[16ch] font-display text-[clamp(2.6rem,6vw,5rem)] leading-[1.04] text-balance text-ink">
          This page drifted off course.
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-stone">
          The page you're looking for may have moved. Head back to the resort home page, or call us and we'll point you
          in the right direction.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href="/">Back to Home</Button>
          <Button href={`tel:${site.phone.main.tel}`} variant="secondary">
            Call {site.phone.main.display}
          </Button>
        </div>
      </div>
    </section>
  );
}
