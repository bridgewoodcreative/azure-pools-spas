"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, LayoutGroup, MotionConfig, motion } from "motion/react";
import { photos } from "@/lib/photos";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

export function PortfolioGallery({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <MotionConfig reducedMotion="user">
      <LayoutGroup>
        <motion.ul
          layout
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => {
            const open = active === project.slug;
            const photo = photos[project.photo];
            return (
              <motion.li
                layout
                key={project.slug}
                className={cn(
                  "list-none",
                  open && "sm:col-span-2 lg:col-span-3",
                )}
                transition={{ layout: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
              >
                {open ? (
                  <motion.div
                    layout
                    className="grid overflow-hidden rounded-2xl bg-abyss text-foam shadow-water md:grid-cols-2"
                  >
                    <motion.div layout className="relative aspect-[4/3] w-full md:aspect-auto">
                      <Image
                        src={photo.src}
                        alt={`${project.name}, ${project.category.toLowerCase()}`}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        placeholder="blur"
                        blurDataURL={photo.blurDataURL}
                        className="object-cover"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.15, duration: 0.4 }}
                      className="flex flex-col p-8 md:p-10"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="eyebrow text-aqua">{project.category}</p>
                          <h3 className="font-display mt-2 text-3xl font-medium">
                            {project.name}
                          </h3>
                          <p className="mt-1 text-sm text-foam/60">{project.setting}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setActive(null)}
                          aria-label="Close project"
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-foam/20 text-foam/70 transition-colors hover:border-foam/50 hover:text-foam"
                        >
                          <span aria-hidden="true" className="text-lg leading-none">&times;</span>
                        </button>
                      </div>

                      <p className="mt-5 text-foam/80">{project.intro}</p>

                      <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-foam/10 pt-6">
                        {project.details.map((d) => (
                          <div key={d.label}>
                            <dt className="text-xs uppercase tracking-wider text-foam/45">
                              {d.label}
                            </dt>
                            <dd className="mt-1 text-sm text-foam/90">{d.value}</dd>
                          </div>
                        ))}
                      </dl>

                      <div className="mt-7 flex flex-wrap gap-2">
                        {project.scope.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-foam/15 px-3 py-1 text-xs text-foam/70"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-aqua hover:text-aqua-bright"
                      >
                        Open the full project
                        <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.button
                    layout
                    type="button"
                    onClick={() => setActive(project.slug)}
                    className="group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl bg-abyss text-left shadow-soft"
                  >
                    <Image
                      src={photo.src}
                      alt={`${project.name}, ${project.category.toLowerCase()}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      placeholder="blur"
                      blurDataURL={photo.blurDataURL}
                      className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-abyss/85 via-abyss/15 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className="eyebrow text-aqua">{project.category}</p>
                      <h3 className="font-display mt-2 text-2xl font-medium text-foam">
                        {project.name}
                      </h3>
                      <p className="mt-3 inline-flex items-center gap-2 text-sm text-foam/0 transition-colors duration-300 group-hover:text-foam/90">
                        Tap to expand
                        <span aria-hidden="true">+</span>
                      </p>
                    </div>
                  </motion.button>
                )}
              </motion.li>
            );
          })}
        </motion.ul>
      </LayoutGroup>
    </MotionConfig>
  );
}
