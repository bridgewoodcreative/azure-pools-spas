import { ButtonLink } from "@/components/ui/button";
import { RippleField } from "@/components/ripple";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80svh] items-center overflow-hidden bg-abyss text-foam">
      <RippleField className="text-aqua opacity-[0.14]" />
      <div className="container-edge relative z-10 text-center">
        <p className="eyebrow text-aqua">Lost the thread</p>
        <h1 className="font-display mt-4 text-5xl font-medium tracking-tight md:text-7xl">
          This page ran dry.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-foam/75">
          The page you were after is not here. Let us point you back toward the water.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/" className="bg-aqua text-abyss hover:bg-aqua-bright">
            Back home
          </ButtonLink>
          <ButtonLink
            href="/portfolio"
            variant="outline"
            className="border-foam/40 text-foam hover:border-foam/70 hover:bg-foam/10"
          >
            See the work
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
