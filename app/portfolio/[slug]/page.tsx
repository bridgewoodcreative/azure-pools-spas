import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import { photos } from "@/lib/photos";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/section";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  const photo = photos[project.photo];
  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: {
      title: `${project.name} | ${siteConfig.name}`,
      description: project.summary,
      images: [{ url: photo.src, width: photo.width, height: photo.height, alt: project.name }],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const photo = photos[project.photo];
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.name,
          about: project.category,
          description: project.summary,
          image: `${siteConfig.url}${photo.src}`,
          creator: { "@type": "LocalBusiness", name: siteConfig.name },
        }}
      />

      {/* Hero image */}
      <section className="relative isolate flex min-h-[70svh] items-end overflow-hidden bg-abyss text-foam">
        <Image
          src={photo.src}
          alt={`${project.name}, ${project.category.toLowerCase()}`}
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={photo.blurDataURL}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/45 to-abyss/30" />
        <div className="container-edge relative z-10 pb-14 pt-36">
          <Link
            href="/portfolio"
            className="text-sm text-foam/70 transition-colors hover:text-foam"
          >
            &larr; All projects
          </Link>
          <p className="eyebrow mt-6 text-aqua">{project.category}</p>
          <h1 className="font-display mt-3 max-w-3xl text-balance text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
            {project.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-foam/80">{project.intro}</p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-shell py-16 md:py-24">
        <div className="container-edge grid gap-12 md:grid-cols-[1.6fr_1fr] md:gap-16">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>The project</Eyebrow>
            </Reveal>
            {project.story.map((paragraph, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="mt-5 text-lg leading-relaxed text-ink/85">{paragraph}</p>
              </Reveal>
            ))}

            <Reveal className="mt-10">
              <h2 className="eyebrow text-teal">Scope</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.scope.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-ocean/20 bg-foam/60 px-4 py-1.5 text-sm text-abyss"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <aside className="md:pt-2">
            <Reveal>
              <div className="rounded-2xl border border-ocean/12 bg-foam/50 p-7">
                <h2 className="eyebrow text-teal">Details</h2>
                <dl className="mt-5 space-y-4">
                  {project.details.map((d) => (
                    <div key={d.label} className="flex items-baseline justify-between gap-4 border-b border-ocean/10 pb-3 last:border-0">
                      <dt className="text-sm text-muted">{d.label}</dt>
                      <dd className="text-right text-sm font-medium text-abyss">{d.value}</dd>
                    </div>
                  ))}
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-sm text-muted">Setting</dt>
                    <dd className="text-right text-sm font-medium text-abyss">{project.setting}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Next project */}
      <section className="bg-shell pb-8">
        <div className="container-edge">
          <Link
            href={`/portfolio/${next.slug}`}
            className="group relative flex items-center overflow-hidden rounded-2xl bg-abyss"
          >
            <div className="relative aspect-[21/9] w-full">
              <Image
                src={photos[next.photo].src}
                alt={`${next.name}, ${next.category.toLowerCase()}`}
                fill
                sizes="100vw"
                placeholder="blur"
                blurDataURL={photos[next.photo].blurDataURL}
                className="object-cover opacity-70 transition-all duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-abyss/80 to-abyss/20" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center p-8 text-foam md:p-14">
              <p className="eyebrow text-aqua">Next project</p>
              <p className="font-display mt-2 text-3xl font-medium md:text-4xl">{next.name}</p>
              <span className="mt-3 inline-flex items-center gap-2 text-sm text-foam/80">
                {next.category}
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      <CtaBand
        title="Want one like this?"
        body="Tell us about your site and we will draw something that belongs to it."
      />
    </>
  );
}
