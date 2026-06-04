import Image from "next/image";
import Link from "next/link";
import { photos } from "@/lib/photos";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  className,
  sizes = "(min-width: 768px) 33vw, 100vw",
}: {
  project: Project;
  className?: string;
  sizes?: string;
}) {
  const photo = photos[project.photo];
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className={cn(
        "group relative block overflow-hidden rounded-2xl bg-abyss shadow-soft",
        className,
      )}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={photo.src}
          alt={`${project.name}, ${project.category.toLowerCase()}`}
          fill
          sizes={sizes}
          placeholder="blur"
          blurDataURL={photo.blurDataURL}
          className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-abyss/85 via-abyss/10 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="eyebrow text-aqua">{project.category}</p>
        <h3 className="font-display mt-2 text-2xl font-medium text-foam">{project.name}</h3>
        <p className="mt-1 text-sm text-foam/70">{project.setting}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foam/0 transition-colors duration-300 group-hover:text-aqua">
          View project
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </span>
      </div>
    </Link>
  );
}
