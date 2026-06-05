import type { PhotoName } from "./photos";

export type Project = {
  slug: string;
  name: string;
  category: string;
  setting: string;
  year: string;
  photo: PhotoName;
  summary: string;
  intro: string;
  scope: string[];
  details: { label: string; value: string }[];
  story: string[];
};

// Representative residential design concepts that show the studio's range.
// These are illustrative capability pieces, not specific client commissions.
export const projects: Project[] = [
  {
    slug: "ledge-and-light",
    name: "Ledge and Light",
    category: "Geometric pool and spa",
    setting: "Coastal home",
    year: "Concept",
    photo: "hero",
    summary:
      "A crisp rectilinear pool with a raised spa, set into a wide stone deck at a coastal home.",
    intro:
      "A clean geometric pool for a flat coastal lot, where the brief was simple lines and an easy path from the house to the water.",
    scope: ["Rectangular pool", "Raised spa with spillover", "Stone surround deck", "Lounge terrace"],
    details: [
      { label: "Shape", value: "Rectilinear" },
      { label: "Finish", value: "Pale interior" },
      { label: "Spa", value: "Raised, flush spillover" },
      { label: "Deck", value: "Honed stone" },
    ],
    story: [
      "The site sits low and open to the shoreline, so the design keeps everything level and lets the long axis of the pool point toward the view. A raised spa anchors one end and spills back into the pool in a thin sheet.",
      "A broad stone deck wraps the water on three sides, wide enough for loungers without crowding the edge. The interior finish reads turquoise in full sun and a deeper teal as the light drops.",
    ],
  },
  {
    slug: "courtyard-plunge",
    name: "Courtyard Plunge",
    category: "Plunge pool",
    setting: "Compact yard",
    year: "Concept",
    photo: "courtyard",
    summary:
      "A small, deep plunge pool that makes the most of a tight yard without giving up the patio.",
    intro:
      "A compact plunge pool for a small backyard, proof that a tight footprint can still hold a real pool and a place to sit.",
    scope: ["Plunge pool", "Bench seat", "Wide paver patio", "Privacy planting"],
    details: [
      { label: "Footprint", value: "Compact, deep" },
      { label: "Seating", value: "Full width bench" },
      { label: "Patio", value: "Large format pavers" },
      { label: "Edge", value: "Flush coping" },
    ],
    story: [
      "On a small lot the patio matters as much as the water, so the pool is kept tight and deep with a full width bench for sitting. The coping sits flush with the pavers for one clean surface underfoot.",
      "Planting along the boundary gives the yard privacy without eating into the usable deck, so the whole space still feels open.",
    ],
  },
  {
    slug: "the-glasshouse",
    name: "The Glasshouse",
    category: "Indoor pool",
    setting: "Year round home",
    year: "Concept",
    photo: "indoor",
    summary:
      "An indoor lap pool built into the home, glass tiled and lit so it works in every season.",
    intro:
      "An indoor pool for a family that wanted to swim all year, set into the house with daylight on one side and warm stone underfoot.",
    scope: ["Indoor lap pool", "Glass mosaic finish", "Climate handling", "Step entry"],
    details: [
      { label: "Type", value: "Indoor lap pool" },
      { label: "Finish", value: "Glass mosaic" },
      { label: "Entry", value: "Full width steps" },
      { label: "Use", value: "Year round" },
    ],
    story: [
      "Built inside the home, the pool runs as a clean rectangle with a full width step entry at one end. A glass mosaic interior keeps the water a deep, even blue under the room lighting.",
      "Large windows bring daylight onto the surface, and the surround is handled so the space stays comfortable to sit in, not just to swim.",
    ],
  },
  {
    slug: "garden-overhead",
    name: "Garden Overhead",
    category: "Backyard pool",
    setting: "Planted garden",
    year: "Concept",
    photo: "garden",
    summary:
      "A backyard pool planned from above, set into a garden of paths, beds, and quiet corners.",
    intro:
      "A pool drawn as part of a whole garden plan, where the paths, planting, and pool were laid out together so the yard reads as one design.",
    scope: ["Backyard pool", "Garden plan", "Paved paths", "Layered planting"],
    details: [
      { label: "Approach", value: "Planned in plan" },
      { label: "Surround", value: "Stone paths" },
      { label: "Planting", value: "Layered beds" },
      { label: "Feel", value: "Private garden" },
    ],
    story: [
      "Seen from above, the design is really a garden plan with a pool at its center. The paths, beds, and lawn are set out around the water so every route through the yard leads back to it.",
      "Keeping the pool tight to a paved island leaves room for deep planting on all sides, so from the ground the water sits inside a green, private garden.",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
