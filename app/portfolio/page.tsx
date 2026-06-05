import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A portfolio of custom pool and spa concepts by Azure Pools & Spas, from geometric and infinity edge pools to naturalistic lagoons. Tap any project to expand it.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Pools drawn for one site at a time."
        intro="A set of representative concepts that show the range of the studio. Tap any tile to expand it and read how the project comes together."
        photo="hero"
      />

      <section className="bg-shell py-16 md:py-24">
        <div className="container-edge">
          <Reveal>
            <PortfolioGallery projects={projects} />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Your site is the brief."
        body="Every pool here started with a particular yard. Tell us about yours and we will start drawing."
      />
    </>
  );
}
