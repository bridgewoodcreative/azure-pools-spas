import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";
import { Logo } from "@/components/marks";
import { WaveDivider } from "@/components/ripple";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 bg-abyss text-foam/80">
      <WaveDivider color="var(--abyss)" className="absolute -top-[1px] left-0 -translate-y-full" />
      <div className="container-edge grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div className="max-w-sm">
          <Link href="/" className="text-foam" aria-label={`${siteConfig.name} home`}>
            <Logo />
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-foam/65">
            {siteConfig.tagline} We design and build custom pools, spas, and water
            features from the first sketch to the first swim.
          </p>
        </div>

        <div>
          <h3 className="eyebrow text-aqua">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-foam/70 transition-colors hover:text-foam">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-aqua">Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-foam/70">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-foam">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a href={siteConfig.phoneHref} className="transition-colors hover:text-foam">
                {siteConfig.phone}
              </a>
            </li>
            <li>{siteConfig.serviceArea}</li>
            <li>{siteConfig.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-foam/10">
        <div className="container-edge flex flex-col gap-2 py-6 text-xs text-foam/50 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. A Bridgewood Sites showcase.
          </p>
          <p>Designed and built with care. Imagery is royalty-free.</p>
        </div>
      </div>
    </footer>
  );
}
