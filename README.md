# Azure Pools & Spas

A showcase website for a custom pool and spa builder, built as a flagship piece
for the Bridgewood Sites portfolio. Upscale, aquatic, and fast, with tasteful
motion that respects reduced motion.

## Stack

- Next.js 16 (App Router) and React 19
- Tailwind CSS v4
- Motion (Framer Motion) for the expanding gallery and process rail
- Resend for the contact form
- Deployed on Vercel

## Signature elements

- A full bleed hero with a light, GPU friendly water caustics canvas
- A consistent ripple and wave motif used as dividers, textures, and the mark
- An interactive portfolio gallery where a tile expands in place
- Scroll reveals and a scroll tracked design, build, enjoy process rail

All motion honors `prefers-reduced-motion`.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Contact form

The contact form routes submissions to the studio inbox through Resend. Set the
environment variable before deploying:

```
RESEND_API_KEY=...           # required to send mail
CONTACT_TO="you@domain.com"  # inbox that receives submissions
CONTACT_FROM="Name <addr>"   # optional, once a sending domain is verified
```

Without a key, the form validates and then shows a friendly fallback that points
visitors to the email address. See `.env.example`.

## Content notes

This is a capability showcase. Project case studies are representative design
concepts, not specific client commissions, and contact details are generic.
There are no fabricated testimonials, metrics, addresses, or personal numbers.

## Photography

All imagery is royalty free (Pexels, Openverse CC0, Wikimedia Commons). Sources
and licenses are listed in `public/photos/CREDITS.md`. To swap an image, replace
the source and rerun `node scripts/optimize-photos.mjs`, or drop a replacement
directly over the optimized file in `public/photos`.

## Scripts

- `scripts/optimize-photos.mjs` resizes source photos and writes `lib/photos.ts`
  with dimensions and blur placeholders.
- `scripts/og-png.mjs` rasterizes `public/og.svg` to `public/og.png`.
