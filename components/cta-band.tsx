import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { RippleField } from "@/components/ripple";
import { WaveDivider } from "@/components/ripple";

export function CtaBand({
  title = "Let's design your water.",
  body = "Tell us about your site and how you want to use it. We will come back with a considered first take, no pressure.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-deep text-foam">
      <WaveDivider
        color="var(--deep)"
        className="absolute -top-[1px] left-0 -translate-y-full"
      />
      <RippleField className="text-aqua opacity-[0.14]" />
      <div className="container-edge relative z-10 flex flex-col items-start gap-8 py-20 md:flex-row md:items-center md:justify-between md:py-28">
        <div className="max-w-xl">
          <Reveal>
            <h2 className="font-display text-3xl font-medium leading-[1.1] tracking-tight md:text-[2.7rem]">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-5 text-lg leading-relaxed text-foam/75">{body}</p>
          </Reveal>
        </div>
        <Reveal delay={160} className="shrink-0">
          <div className="flex flex-wrap gap-4">
            <ButtonLink href="/contact" className="bg-aqua text-abyss hover:bg-aqua-bright">
              Start a project
            </ButtonLink>
            <ButtonLink
              href="/portfolio"
              variant="outline"
              className="border-foam/40 text-foam hover:border-foam/70 hover:bg-foam/10"
            >
              See the work
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
