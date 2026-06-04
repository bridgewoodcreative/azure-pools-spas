import { cn } from "@/lib/utils";

/**
 * WaveDivider - a layered wave used to transition between sections.
 * `flip` points the crest downward. `color` is the fill (the section it
 * pours into). Decorative only.
 */
export function WaveDivider({
  className,
  color = "var(--shell)",
  flip = false,
}: {
  className?: string;
  color?: string;
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none w-full leading-[0]", className)}
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-[60px] w-full md:h-[90px]"
      >
        <path
          d="M0,64 C240,112 480,16 720,40 C960,64 1200,120 1440,72 L1440,120 L0,120 Z"
          fill={color}
          opacity="0.5"
        />
        <path
          d="M0,80 C240,40 480,104 720,80 C960,56 1200,24 1440,56 L1440,120 L0,120 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

/**
 * RippleField - a faint concentric ripple texture for section backgrounds.
 * Renders as an absolutely positioned, non-interactive layer.
 */
export function RippleField({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 600 600"
    >
      <defs>
        <radialGradient id="rf-fade" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.5" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g fill="none" stroke="url(#rf-fade)" strokeWidth="1">
        {Array.from({ length: 9 }).map((_, i) => (
          <circle key={i} cx="300" cy="300" r={40 + i * 34} />
        ))}
      </g>
    </svg>
  );
}
