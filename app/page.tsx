import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { Eyebrow, SectionHeading } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { CtaBand } from "@/components/cta-band";
import { RippleField, WaveDivider } from "@/components/ripple";
import { ButtonLink } from "@/components/ui/button";
import { projects } from "@/lib/projects";
import { services, processSteps } from "@/lib/content";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  description:
    "Azure Pools & Spas designs and builds custom pools, spas, and water features. One studio from first sketch to first swim. View the work and start a project.",
  alternates: { canonical: "/" },
};

const featured = projects.slice(0, 3);

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Statement */}
      <section className="relative bg-shell">
        <div className="container-edge grid gap-10 py-20 md:grid-cols-[1fr_1.1fr] md:gap-16 md:py-28">
          <Reveal>
            <Eyebrow>The studio</Eyebrow>
            <h2 className="font-display mt-4 text-3xl font-medium leading-[1.12] tracking-tight text-abyss md:text-[2.9rem]">
              A pool should feel inevitable, like the yard was waiting for it.
            </h2>
          </Reveal>
          <Reveal delay={120} className="self-end">
            <p className="text-lg leading-relaxed text-muted">
              We are a small studio that designs and builds custom pools and spas.
              Because the people who draw your pool are the ones who build it,
              nothing gets lost between the idea and the water. The result is a
              pool that fits the site, suits the way you live, and stays easy to
              own for years.
            </p>
            <div className="mt-7 flex flex-wrap gap-8">
              <div>
                <p className="font-display text-3xl text-abyss">Design led</p>
                <p className="mt-1 text-sm text-muted">Drawn before it is dug</p>
              </div>
              <div>
                <p className="font-display text-3xl text-abyss">One team</p>
                <p className="mt-1 text-sm text-muted">Sketch to first swim</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="relative isolate overflow-hidden bg-abyss py-20 text-foam md:py-28">
        <WaveDivider color="var(--abyss)" className="absolute -top-[1px] left-0 -translate-y-full" />
        <RippleField className="text-aqua opacity-[0.10]" />
        <div className="container-edge relative z-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Reveal>
                <Eyebrow className="text-aqua">What we build</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-display mt-4 text-3xl font-medium leading-[1.1] tracking-tight md:text-[2.7rem]">
                  Five ways we shape water and the space around it.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <ButtonLink
                href="/services"
                variant="outline"
                className="border-foam/30 text-foam hover:border-foam/60 hover:bg-foam/10"
              >
                All services
              </ButtonLink>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-foam/10 bg-foam/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal
                key={service.slug}
                delay={i * 70}
                className="group flex h-full flex-col bg-abyss p-7 transition-colors duration-500 hover:bg-deep"
              >
                <span className="font-display text-sm text-aqua">0{i + 1}</span>
                <h3 className="font-display mt-3 text-2xl font-medium">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foam/70">{service.blurb}</p>
                <ul className="mt-5 space-y-1.5 text-sm text-foam/60">
                  {service.points.slice(0, 3).map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-aqua" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
            <Reveal
              delay={services.length * 70}
              className="flex h-full flex-col justify-center gap-3 bg-gradient-to-br from-deep to-ocean p-7"
            >
              <p className="font-display text-2xl leading-snug">Not sure where to start?</p>
              <p className="text-sm text-foam/75">
                Tell us about the site. We will point you to the right place.
              </p>
              <Link
                href="/contact"
                className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-aqua hover:text-aqua-bright"
              >
                Talk to the studio
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="bg-shell py-20 md:py-28">
        <div className="container-edge">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="A few pools we would build again."
            />
            <Reveal delay={140}>
              <ButtonLink href="/portfolio" variant="outline">
                Open the portfolio
              </ButtonLink>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {featured.map((project, i) => (
              <Reveal key={project.slug} delay={i * 90}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process teaser */}
      <section className="relative isolate overflow-hidden bg-foam py-20 md:py-28">
        <div className="container-edge">
          <SectionHeading
            eyebrow="The process"
            title="Design, build, enjoy."
            intro="One studio carries your project the whole way, so the pool you swim in is the pool you were shown."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 100} className="relative">
                <div className="flex items-center gap-4">
                  <span className="font-display text-5xl text-teal/30">{step.number}</span>
                  <span className="h-px flex-1 bg-ocean/15" />
                </div>
                <h3 className="font-display mt-5 text-2xl font-medium text-abyss">{step.title}</h3>
                <p className="mt-1 text-sm font-medium text-teal">{step.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="mt-12">
            <ButtonLink
              href="/process"
              variant="ghost"
              className="px-0 text-teal hover:bg-transparent hover:text-ocean"
            >
              See how a project runs
              <span aria-hidden="true">&rarr;</span>
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* Wide image moment */}
      <section className="bg-foam pb-4">
        <Reveal className="relative mx-auto aspect-[16/9] w-full max-w-[110rem] overflow-hidden md:aspect-[21/9]">
          <Image
            src={photos.garden.src}
            alt="A landscaped backyard pool seen from above"
            fill
            sizes="100vw"
            placeholder="blur"
            blurDataURL={photos.garden.blurDataURL}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-abyss/40 to-transparent" />
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
