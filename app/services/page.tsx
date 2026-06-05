import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/section";
import { services } from "@/lib/content";
import { photos } from "@/lib/photos";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom pools, spas, water features, renovations, and outdoor living from Azure Pools & Spas. Five ways the studio shapes water and the space around it.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Five ways we shape water."
        intro="From a first pour to a full backyard, the studio works across the whole project so the water and the space around it read as one."
        photo="hero"
      />

      <section className="bg-shell py-16 md:py-24">
        <div className="container-edge space-y-20 md:space-y-28">
          {services.map((service, i) => {
            const photo = service.photo ? photos[service.photo] : null;
            const flipped = i % 2 === 1;
            return (
              <div
                key={service.slug}
                id={service.slug}
                className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
              >
                {photo && (
                  <Reveal
                    className={cn(
                      "relative aspect-[4/3] overflow-hidden rounded-2xl shadow-water",
                      flipped && "md:order-2",
                    )}
                  >
                    <Image
                      src={photo.src}
                      alt={service.title}
                      fill
                      sizes="(min-width: 768px) 45vw, 100vw"
                      placeholder="blur"
                      blurDataURL={photo.blurDataURL}
                      className="object-cover"
                    />
                  </Reveal>
                )}
                <Reveal delay={100} className={cn(flipped && "md:order-1")}>
                  <Eyebrow>{`0${i + 1}`}</Eyebrow>
                  <h2 className="font-display mt-4 text-3xl font-medium leading-tight text-abyss md:text-[2.5rem]">
                    {service.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
                    {service.blurb}
                  </p>
                  <ul className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-sm text-ink/85">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBand
        title="One of these, or all of them."
        body="Most projects touch more than one of these. Tell us what you have in mind and we will map it out."
      />
    </>
  );
}
