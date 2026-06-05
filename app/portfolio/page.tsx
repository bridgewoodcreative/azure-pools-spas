import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A portfolio of custom residential pool concepts by Azure Pools & Spas, from a geometric coastal pool and spa to a compact plunge, an indoor lap pool, and a garden design.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Pools drawn for one site at a time."
        intro="A set of representative residential concepts that show the range of the studio. Open any project to read how it comes together."
        photo="hero"
      />

      <section className="bg-shell py-16 md:py-24">
        <div className="container-edge">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80}>
                <ProjectCard
                  project={project}
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Your site is the brief."
        body="Every pool here started with a particular yard. Tell us about yours and we will start drawing."
      />
    </>
  );
}
