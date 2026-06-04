import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("eyebrow inline-flex items-center gap-2 text-teal", className)}>
      <span className="h-px w-6 bg-teal/50" aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className="font-display mt-4 text-3xl font-medium leading-[1.1] tracking-tight text-abyss md:text-[2.7rem]">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={140}>
          <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>
        </Reveal>
      )}
    </div>
  );
}
