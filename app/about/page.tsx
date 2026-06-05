import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { SectionHeading, Eyebrow } from "@/components/section";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "About",
  description:
    "Azure Pools & Spas is a design-led studio that draws and builds custom pools. Our approach, our principles, and how we think about water.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "Design before dirt",
    body: "Every pool is drawn and agreed before a shovel moves. You see it in plan and in place, with materials chosen together, so the build holds no surprises.",
  },
  {
    title: "One studio, end to end",
    body: "The people who design your pool are the ones who build it. Nothing is handed off and lost. One team is accountable from first sketch to first swim.",
  },
  {
    title: "Built for the long run",
    body: "We choose finishes and equipment for how they age, not just how they look on day one. A pool should still feel right in its tenth season.",
  },
  {
    title: "Quiet by default",
    body: "Equipment is placed and tuned to disappear. The thing you should notice is the water, the light on it, and the space it opens up.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A studio that thinks in water."
        intro="Azure Pools & Spas is a small, design-led team. We take on a measured number of projects so each one gets the attention a custom pool deserves."
        photo="stone"
      />

      {/* Narrative */}
      <section className="bg-shell py-16 md:py-24">
        <div className="container-edge grid gap-12 md:grid-cols-[1.5fr_1fr] md:gap-16">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Our approach</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display mt-4 text-3xl font-medium leading-[1.12] tracking-tight text-abyss md:text-[2.6rem]">
                A pool is part of the house, so we treat it that way.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  Good pools do not look added on. They sit with the grade, line up
                  with the house, and make the rest of the yard feel considered. That
                  only happens when the design comes first and the build follows it
                  closely.
                </p>
                <p>
                  We start with the site and the way you want to use it, then draw
                  until the pool feels inevitable. Construction is run as one sequence
                  by the same studio, so the detail in the drawing is the detail you
                  get in the ground.
                </p>
                <p>
                  We keep the work plain and the communication plainer. You will
                  always know what is happening, what is next, and why.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-water">
            <Image
              src={photos.stone.src}
              alt="A stone home with a custom pool in the foreground"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              placeholder="blur"
              blurDataURL={photos.stone.blurDataURL}
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-foam py-16 md:py-24">
        <div className="container-edge">
          <SectionHeading
            eyebrow="What we hold to"
            title="Four principles, on every project."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ocean/12 bg-ocean/10 sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 80}
                className="bg-foam p-8 md:p-10"
              >
                <span className="font-display text-2xl text-teal/40">0{i + 1}</span>
                <h3 className="font-display mt-3 text-2xl font-medium text-abyss">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Tell us about your site."
        body="We are happy to talk through what is possible before anything is committed. No pressure, just a considered first take."
      />
    </>
  );
}
