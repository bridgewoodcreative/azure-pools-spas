import Image from "next/image";
import { CausticsCanvas } from "@/components/caustics-canvas";
import { ButtonLink } from "@/components/ui/button";
import { photos } from "@/lib/photos";
import { siteConfig } from "@/lib/site";

export function Hero() {
  const hero = photos.hero;
  return (
    <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-abyss">
      {/* Photograph */}
      <Image
        src={hero.src}
        alt="A custom infinity edge pool overlooking a bay"
        fill
        priority
        sizes="100vw"
        quality={82}
        placeholder="blur"
        blurDataURL={hero.blurDataURL}
        className="object-cover"
      />

      {/* Tonal wash for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/45 to-abyss/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-abyss/55 via-transparent to-transparent" />

      {/* Caustics motion layer */}
      <div className="absolute inset-0 mix-blend-screen opacity-70">
        <CausticsCanvas />
      </div>

      {/* Content */}
      <div className="container-edge relative z-10 pb-16 pt-32 md:pb-24">
        <p
          className="eyebrow text-aqua opacity-0"
          style={{ animation: "rise 0.9s var(--ease-fluid) 0.1s forwards" }}
        >
          Custom pools and spas
        </p>
        <h1
          className="font-display mt-5 max-w-4xl text-balance text-[2.7rem] font-medium leading-[1.04] tracking-tight text-foam opacity-0 md:text-[4.5rem]"
          style={{ animation: "rise 1s var(--ease-fluid) 0.2s forwards" }}
        >
          Water, shaped around the way you live.
        </h1>
        <p
          className="mt-6 max-w-xl text-lg leading-relaxed text-foam/80 opacity-0 md:text-xl"
          style={{ animation: "rise 1s var(--ease-fluid) 0.35s forwards" }}
        >
          {siteConfig.name} designs and builds pools, spas, and water features that
          feel like they were always part of the home. One studio, from first
          sketch to first swim.
        </p>
        <div
          className="mt-9 flex flex-wrap items-center gap-4 opacity-0"
          style={{ animation: "rise 1s var(--ease-fluid) 0.5s forwards" }}
        >
          <ButtonLink
            href="/portfolio"
            className="bg-aqua text-abyss hover:bg-aqua-bright"
          >
            View the work
          </ButtonLink>
          <ButtonLink
            href="/contact"
            variant="outline"
            className="border-foam/40 text-foam hover:border-foam/70 hover:bg-foam/10"
          >
            Start a project
          </ButtonLink>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:block">
        <span className="flex h-11 w-7 items-start justify-center rounded-full border border-foam/30 p-1.5">
          <span
            className="h-2 w-1 rounded-full bg-foam/70"
            style={{ animation: "shimmer 1.8s ease-in-out infinite" }}
          />
        </span>
      </div>
    </section>
  );
}
