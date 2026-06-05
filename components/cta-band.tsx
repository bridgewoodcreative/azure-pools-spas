import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { GridTexture, GlowAccent } from "@/components/texture";

export function CtaBand({
  eyebrow = "Start here",
  title = "Let's design your water.",
  body = "Tell us about your site and how you want to use it. We will come back with a considered first take, no pressure.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden border-t border-foam/10 bg-abyss text-foam">
      <GridTexture opacity={0.05} size={64} />
      <GlowAccent color="var(--teal)" />
      <div className="container-edge relative z-10 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow inline-flex items-center gap-2 text-aqua">
              <span className="h-px w-6 bg-aqua/50" aria-hidden="true" />
              {eyebrow}
              <span className="h-px w-6 bg-aqua/50" aria-hidden="true" />
            </span>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="font-display mt-6 text-balance text-4xl font-medium leading-[1.05] tracking-tight md:text-[3.4rem]">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-foam/70">{body}</p>
          </Reveal>
          <Reveal delay={210}>
            <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-aqua px-8 py-3.5 text-sm font-medium tracking-wide text-abyss transition-all duration-300 hover:bg-aqua-bright hover:shadow-[0_14px_40px_-12px_rgba(63,224,197,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua focus-visible:ring-offset-2 focus-visible:ring-offset-abyss"
              >
                Start a project
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </Link>
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 text-sm font-medium text-foam/80 transition-colors hover:text-foam"
              >
                <span className="relative">
                  See the work
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-aqua transition-transform duration-300 group-hover:scale-x-100" />
                </span>
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
