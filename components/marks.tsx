import { cn } from "@/lib/utils";

// Signature ripple mark: concentric rings, like rings spreading on water.
export function RippleMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={cn("h-9 w-9", className)}
    >
      <circle cx="20" cy="20" r="3.5" fill="currentColor" />
      <circle cx="20" cy="20" r="8.5" stroke="currentColor" strokeWidth="1.6" opacity="0.85" />
      <circle cx="20" cy="20" r="13.5" stroke="currentColor" strokeWidth="1.4" opacity="0.55" />
      <circle cx="20" cy="20" r="18.5" stroke="currentColor" strokeWidth="1.2" opacity="0.28" />
    </svg>
  );
}

export function Logo({
  className,
  showWord = true,
}: {
  className?: string;
  showWord?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <RippleMark className="h-8 w-8 text-aqua" />
      {showWord && (
        <span className="font-display text-[1.35rem] leading-none font-semibold tracking-tight">
          Azure
        </span>
      )}
    </span>
  );
}
