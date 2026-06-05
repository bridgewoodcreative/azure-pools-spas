import { cn } from "@/lib/utils";

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
