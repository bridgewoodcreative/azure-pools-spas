import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";
const svg = await readFile("public/og.svg");
const png = await sharp(svg, { density: 144 }).resize(1200, 630).png().toBuffer();
await writeFile("public/og.png", png);
const m = await sharp(png).metadata();
console.log("og.png", m.width + "x" + m.height, (png.length/1024|0)+"KB");
