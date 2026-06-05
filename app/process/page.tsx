import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProcessRail } from "@/components/process-rail";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section";
import { processSteps } from "@/lib/content";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How Azure Pools & Spas runs a project: design, build, enjoy. One studio carries the work from the first site study to the first swim.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="The process"
        title="Design, build, enjoy."
        intro="Three phases, one team. Because the studio that designs your pool also builds it, the pool you swim in is the pool you were shown."
        photo="garden"
      />

      <section className="bg-shell py-16 md:py-28">
        <div className="container-edge">
          <ProcessRail steps={processSteps} />
        </div>
      </section>

      {/* Reassurance band */}
      <section className="relative isolate overflow-hidden bg-foam py-16 md:py-24">
        <div className="container-edge grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="What stays constant"
              title="Plain answers, held to the drawing."
              intro="No surprises is a design goal, not a slogan. The scope is written down, the materials are chosen together, and the same people are accountable from start to finish."
            />
            <ul className="mt-8 space-y-4">
              {[
                "One point of contact for the whole project",
                "Drawings and selections agreed before work begins",
                "Clear sequence so you know what happens when",
                "A walkthrough and plain care guidance at handover",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-water">
            <Image
              src={photos.evening.src}
              alt="A backyard pool lit warmly at dusk beside the house"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              placeholder="blur"
              blurDataURL={photos.evening.blurDataURL}
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Ready to start at phase one?"
        body="A first conversation costs nothing and usually clarifies a lot. Tell us about your site."
      />
    </>
  );
}
