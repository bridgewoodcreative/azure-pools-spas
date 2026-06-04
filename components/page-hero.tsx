import Image from "next/image";
import type { ReactNode } from "react";
import { photos, type PhotoName } from "@/lib/photos";
import { Eyebrow } from "@/components/section";
import { RippleField } from "@/components/ripple";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  intro,
  photo,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  photo?: PhotoName;
  align?: "left" | "center";
}) {
  const img = photo ? photos[photo] : null;
  return (
    <section className="relative isolate overflow-hidden bg-abyss text-foam">
      {img ? (
        <>
          <Image
            src={img.src}
            alt=""
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL={img.blurDataURL}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/70 to-abyss/55" />
        </>
      ) : (
        <RippleField className="text-aqua opacity-[0.12]" />
      )}
      <div
        className={cn(
          "container-edge relative z-10 pb-16 pt-36 md:pb-20 md:pt-44",
          align === "center" && "text-center",
        )}
      >
        <div className={cn("max-w-3xl", align === "center" && "mx-auto")}>
          <Eyebrow className="text-aqua">{eyebrow}</Eyebrow>
          <h1 className="font-display mt-5 text-balance text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foam/80 md:text-xl">
              {intro}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
