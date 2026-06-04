import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua focus-visible:ring-offset-2 focus-visible:ring-offset-shell disabled:opacity-50 disabled:pointer-events-none";

const sizes = "px-6 py-3";

const variants: Record<Variant, string> = {
  solid:
    "bg-abyss text-foam hover:bg-deep shadow-[0_10px_30px_-12px_rgba(6,40,61,0.6)] hover:-translate-y-0.5",
  outline:
    "border border-ocean/30 text-abyss hover:border-ocean/60 hover:bg-foam/60",
  ghost: "text-abyss hover:bg-foam/70",
};

export function ButtonLink({
  href,
  variant = "solid",
  className,
  children,
  ...props
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">) {
  return (
    <Link href={href} className={cn(base, sizes, variants[variant], className)} {...props}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "solid",
  className,
  children,
  ...props
}: {
  variant?: Variant;
} & ComponentProps<"button">) {
  return (
    <button className={cn(base, sizes, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
