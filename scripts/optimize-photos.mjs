import sharp from "sharp";
import { writeFile } from "node:fs/promises";

const C = "public/photos/_cand";
const OUT = "public/photos";
// outName : [candidateFile, maxWidth]
const map = {
  hero: ["villaang.jpg", 2400],
  "project-geometric": ["c-261327.jpg", 1800],
  "project-infinity": ["inf1.jpg", 1600],
  "project-desert": ["aman.jpg", 1800],
  "project-tropical": ["c-261411.jpg", 1800],
  "project-courtyard": ["c-261410.jpg", 1800],
  "project-resort": ["c-261101.jpg", 1800],
  "services-design": ["aerial.jpg", 1800],
  "services-water": ["c-1320686.jpg", 1800],
  about: ["rax_house.jpg", 1600],
  process: ["inf2.jpg", 1800],
};

const manifest = {};
for (const [name, [file, w]] of Object.entries(map)) {
  const base = sharp(`${C}/${file}`).rotate();
  const meta = await base.metadata();
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
  `// Royalty-free imagery: Pexels, Openverse (CC0), Wikimedia Commons (CC-BY). See public/photos/CREDITS.md.\n` +
  `export type PhotoMeta = { src: string; width: number; height: number; blurDataURL: string };\n` +
  `export const photos = ${JSON.stringify(manifest, null, 2)} as const satisfies Record<string, PhotoMeta>;\n` +
  `export type PhotoName = keyof typeof photos;\n`;
await writeFile("lib/photos.ts", ts);
console.log("wrote lib/photos.ts");
