"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import type { Step } from "@/lib/content";

export function ProcessRail({ steps }: { steps: Step[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 60%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 80, damping: 24, restDelta: 0.001 });
  const fillHeight = useTransform(fill, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative">
      {/* Rail track */}
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-ocean/15 md:left-[11px]" aria-hidden="true">
        <motion.div
          className="w-full origin-top bg-gradient-to-b from-aqua to-teal"
          style={{ height: fillHeight }}
        />
      </div>

      <ol className="space-y-16 md:space-y-24">
        {steps.map((step) => (
          <li key={step.number} className="relative pl-10 md:pl-16">
            <span
              className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-teal bg-shell md:h-6 md:w-6"
              aria-hidden="true"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-teal md:h-2 md:w-2" />
            </span>
            <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-5">
              <span className="font-display text-sm font-medium text-teal">{step.number}</span>
              <div>
                <h2 className="font-display text-3xl font-medium leading-tight text-abyss md:text-4xl">
                  {step.title}
                </h2>
                <p className="mt-1 text-base font-medium text-teal">{step.tagline}</p>
              </div>
            </div>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{step.body}</p>
            <ul className="mt-6 grid max-w-2xl gap-x-8 gap-y-2 sm:grid-cols-2">
              {step.points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm text-ink/80">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
