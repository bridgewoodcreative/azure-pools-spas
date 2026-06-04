"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/site";
import { Logo } from "@/components/marks";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-shell/85 backdrop-blur-md border-b border-ocean/10 shadow-[0_4px_30px_-20px_rgba(6,40,61,0.5)]"
          : "bg-transparent",
      )}
    >
      <div className="container-edge flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          aria-label={`${siteConfig.name} home`}
          className={cn(
            "transition-colors",
            scrolled || open ? "text-abyss" : "text-foam",
          )}
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm tracking-wide transition-colors",
                  scrolled
                    ? "text-muted hover:text-abyss"
                    : "text-foam/80 hover:text-foam",
                  active && (scrolled ? "text-abyss" : "text-foam"),
                )}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-1.5 left-0 h-px w-full bg-aqua" />
                )}
              </Link>
            );
          })}
          <ButtonLink
            href="/contact"
            variant={scrolled ? "solid" : "outline"}
            className={cn(
              !scrolled && "border-foam/40 text-foam hover:bg-foam/10 hover:border-foam/70",
            )}
          >
            Start a project
          </ButtonLink>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full md:hidden transition-colors",
            scrolled || open ? "text-abyss" : "text-foam",
          )}
        >
          <span className="relative flex h-4 w-5 flex-col justify-between">
            <span
              className={cn(
                "h-0.5 w-full origin-center bg-current transition-all duration-300",
                open && "translate-y-[7px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full bg-current transition-all duration-300",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full origin-center bg-current transition-all duration-300",
                open && "-translate-y-[7px] -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-ocean/10 bg-shell/95 backdrop-blur-md md:hidden transition-[max-height,opacity] duration-500",
          open ? "max-h-96 border-b opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="container-edge flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-3 text-base text-abyss hover:bg-foam"
            >
              {link.label}
            </Link>
          ))}
          <ButtonLink href="/contact" className="mt-2 w-full">
            Start a project
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
