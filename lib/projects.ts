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
    slug: "still-water",
    name: "Still Water",
    category: "Modern backyard pool",
    setting: "New build home",
    year: "Concept",
    photo: "modern",
    summary:
      "A calm pool set tight to a modern house, drawn so the water mirrors the architecture at dusk.",
    intro:
      "A pool for a modern new build, where the brief was a clean sheet of water that reflects the house rather than competing with it.",
    scope: ["Rectilinear pool", "Flush deck edge", "Recessed lighting", "Reflective surface"],
    details: [
      { label: "Shape", value: "Rectilinear" },
      { label: "Edge", value: "Flush with deck" },
      { label: "Finish", value: "Dark interior" },
      { label: "Mood", value: "Still, reflective" },
    ],
    story: [
      "The house has long, low lines, so the pool keeps to a simple rectangle that runs parallel to it. A flush deck edge means the water sits right at the surface of the patio, with nothing to interrupt the reflection.",
      "A darker interior finish keeps the surface calm and mirror like in the evening, when low recessed lighting picks out the deck and the water holds the last of the sky.",
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
    slug: "evening-light",
    name: "Evening Light",
    category: "Backyard pool",
    setting: "Family home",
    year: "Concept",
    photo: "evening",
    summary:
      "A classic backyard pool lit for the evening, with the house and water reading as one warm scene.",
    intro:
      "A family backyard pool designed around the evening, when the lit house and the pool should feel like a single, settled picture.",
    scope: ["Backyard pool", "Lawn surround", "Facade and pool lighting", "Soft planting"],
    details: [
      { label: "Setting", value: "Lawn and patio" },
      { label: "Lighting", value: "Warm, layered" },
      { label: "Edge", value: "Stone coping" },
      { label: "Feel", value: "Classic, settled" },
    ],
    story: [
      "The pool sits in the lawn close to the house, with a stone coping that matches the home. The shape is kept classic so it will not date, and the planting is soft and low around the edges.",
      "Lighting is the quiet move here. The facade and the pool are lit together at a low level, so by evening the house and the water read as one warm scene from the patio.",
    ],
  },
  {
    slug: "stone-terrace",
    name: "Stone Terrace",
    category: "Pool and terrace",
    setting: "Hillside home",
    year: "Concept",
    photo: "stone",
    summary:
      "A pool set into a stone terrace below the house, drawn to belong to the masonry and the slope.",
    intro:
      "A pool and terrace for a stone home on a slope, where the water needed to sit naturally within the existing masonry and grade.",
    scope: ["Terraced pool", "Natural stone surround", "Retaining and steps", "Framed planting"],
    details: [
      { label: "Setting", value: "Terraced slope" },
      { label: "Surround", value: "Natural stone" },
      { label: "Access", value: "Stone steps" },
      { label: "Style", value: "Warm, classic" },
    ],
    story: [
      "The home is built in stone and steps down the slope, so the pool is set into a terrace held by the same masonry. From the house it reads as part of the building rather than an addition in the yard.",
      "Stone steps carry you down to the water, and planting is kept to framed beds so the terrace stays open and the stone does the talking.",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
