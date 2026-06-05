import sharp from "sharp";
import { writeFile, readdir, unlink } from "node:fs/promises";

const C = "public/photos/_cand2";
const OUT = "public/photos";
// outName : [candidateFile, maxWidth]  -- residential pool set
const map = {
  hero: ["src-hero.jpg", 2400], // geometric coastal residential pool + spa
  modern: ["rax_modarch_hd.jpg", 1300], // modern home, reflecting pool, dusk
  courtyard: ["src-courtyard.jpg", 1800], // compact residential plunge pool
  indoor: ["px-261045.jpg", 1800], // indoor residential lap pool
  evening: ["rax_modhouse_hd.jpg", 1300], // traditional home, lit pool at dusk
  stone: ["src-stone.jpg", 1300], // stone villa with pool
  garden: ["src-garden.jpg", 2048], // landscaped backyard pool, aerial
};

// Clear previously optimized jpgs so no stale files ship.
for (const f of await readdir(OUT)) {
  if (f.endsWith(".jpg")) await unlink(`${OUT}/${f}`);
}

const manifest = {};
for (const [name, [file, w]] of Object.entries(map)) {
  const meta = await sharp(`${C}/${file}`).metadata();
  const buf = await sharp(`${C}/${file}`)
    .rotate()
    .resize({ width: Math.min(w, meta.width), withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
  await writeFile(`${OUT}/${name}.jpg`, buf);
  const outMeta = await sharp(buf).metadata();
  const blur = await sharp(`${C}/${file}`)
    .rotate()
    .resize({ width: 20 })
    .webp({ quality: 40 })
    .toBuffer();
  manifest[name] = {
    src: `/photos/${name}.jpg`,
    width: outMeta.width,
    height: outMeta.height,
    blurDataURL: `data:image/webp;base64,${blur.toString("base64")}`,
  };
  console.log(name, `${outMeta.width}x${outMeta.height}`, `${(buf.length / 1024) | 0}KB`);
}

const ts =
  `// Auto-generated photo manifest (scripts/optimize-photos.mjs).\n` +
  `// Royalty-free residential pool imagery: Pexels, Openverse (CC0), rawpixel (CC0). See public/photos/CREDITS.md.\n` +
  `export type PhotoMeta = { src: string; width: number; height: number; blurDataURL: string };\n` +
  `export const photos = ${JSON.stringify(manifest, null, 2)} as const satisfies Record<string, PhotoMeta>;\n` +
  `export type PhotoName = keyof typeof photos;\n`;
await writeFile("lib/photos.ts", ts);
console.log("wrote lib/photos.ts");
