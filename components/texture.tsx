import { cn } from "@/lib/utils";

/**
 * GridTexture - a fine, blueprint-style grid for dark sections. Reads as
 * "drawn and measured" rather than decorative. Fades out toward the edges.
 */
export function GridTexture({
  className,
  size = 60,
  opacity = 0.05,
}: {
  className?: string;
  size?: number;
  opacity?: number;
}) {
  const line = `rgba(255,255,255,${opacity})`;
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage: `linear-gradient(to right, ${line} 1px, transparent 1px), linear-gradient(to bottom, ${line} 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`,
        maskImage: "radial-gradient(130% 130% at 50% 0%, #000 35%, transparent 78%)",
        WebkitMaskImage: "radial-gradient(130% 130% at 50% 0%, #000 35%, transparent 78%)",
      }}
    />
  );
}

/**
 * GlowAccent - a soft, off-center wash of color. Used to give a flat dark
 * panel some depth without a pattern.
 */
export function GlowAccent({
  className,
  color = "var(--ocean)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        background: `radial-gradient(60% 80% at 85% 0%, color-mix(in oklab, ${color} 35%, transparent), transparent 60%)`,
      }}
    />
  );
}
