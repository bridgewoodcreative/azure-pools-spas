import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Azure Pools & Spas. Tell us about your site and how you want to use it, and we will come back with a considered first take.",
  alternates: { canonical: "/contact" },
};

const details = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: "Phone", value: siteConfig.phone, href: siteConfig.phoneHref },
  { label: "Service area", value: siteConfig.serviceArea },
  { label: "Hours", value: siteConfig.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a project."
        intro="Tell us about your site and how you want to use it. We will come back with a considered first take, no pressure."
      />

      <section className="bg-shell py-16 md:py-24">
        <div className="container-edge grid gap-12 md:grid-cols-[1fr_1.3fr] md:gap-16">
          {/* Details */}
          <Reveal>
            <h2 className="font-display text-2xl font-medium text-abyss">Reach the studio</h2>
            <p className="mt-3 max-w-sm leading-relaxed text-muted">
              Prefer to write directly? Use the details below. Either way, a real
              person reads it.
            </p>
            <dl className="mt-8 space-y-6">
              {details.map((d) => (
                <div key={d.label}>
                  <dt className="eyebrow text-teal">{d.label}</dt>
                  <dd className="mt-1.5 text-lg text-abyss">
                    {d.href ? (
                      <a href={d.href} className="transition-colors hover:text-teal">
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <div className="rounded-2xl border border-ocean/12 bg-white/40 p-6 shadow-soft md:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
