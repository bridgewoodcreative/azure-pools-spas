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

// Representative design concepts that show the studio's range. These are
// illustrative capability pieces, not specific client commissions.
export const projects: Project[] = [
  {
    slug: "ledge-and-light",
    name: "Ledge and Light",
    category: "Geometric pool and spa",
    setting: "Coastal lot",
    year: "Concept",
    photo: "project-geometric",
    summary:
      "A crisp rectilinear pool with a raised spa, set into a wide stone deck that reaches toward the water.",
    intro:
      "A clean geometric pool built for a flat coastal lot, where the brief was simple lines and an easy path from house to water.",
    scope: ["Rectangular pool", "Raised spa with spillover", "Stone surround deck", "Lounge terrace"],
    details: [
      { label: "Shape", value: "Rectilinear, 16 by 36" },
      { label: "Finish", value: "Pale quartz interior" },
      { label: "Spa", value: "Raised, flush spillover" },
      { label: "Deck", value: "Honed limestone" },
    ],
    story: [
      "The site sat low and open to the shoreline, so the design keeps everything level and lets the long axis of the pool point at the view. A raised spa anchors the far end and spills back into the pool in a thin sheet.",
      "A broad stone deck wraps the water on three sides, wide enough for loungers without crowding the edge. The interior finish is a pale quartz that reads turquoise in full sun and a deeper teal as the light drops.",
    ],
  },
  {
    slug: "horizon-edge",
    name: "Horizon Edge",
    category: "Infinity edge pool",
    setting: "Elevated lot",
    year: "Concept",
    photo: "project-infinity",
    summary:
      "A vanishing edge that drops the waterline into the sky, drawn for a slope with a long view.",
    intro:
      "An infinity edge concept for an elevated lot, where the goal was to erase the far wall and hand the view back to the horizon.",
    scope: ["Vanishing edge", "Catch basin and trough", "Sun shelf", "Glass mosaic waterline"],
    details: [
      { label: "Edge", value: "Single vanishing edge" },
      { label: "Drop", value: "Concealed catch basin" },
      { label: "Shelf", value: "Shaded sun ledge" },
      { label: "Waterline", value: "Glass mosaic tile" },
    ],
    story: [
      "The lot falls away on one side, which is the kind of grade an infinity edge is made for. Water runs over the far wall into a hidden trough and returns, so the surface always sits exactly at the lip.",
      "A sun shelf on the near side gives a place to sit in a few inches of water. The waterline is wrapped in a glass mosaic that keeps the color bright where the light catches it.",
    ],
  },
  {
    slug: "canyon-reflection",
    name: "Canyon Reflection",
    category: "Architectural pool",
    setting: "Desert retreat",
    year: "Concept",
    photo: "project-desert",
    summary:
      "A still reflecting pool that borrows the rock behind it and holds the dusk light on the water.",
    intro:
      "A quiet architectural pool for a desert retreat, designed to sit against the landscape rather than compete with it.",
    scope: ["Reflecting pool", "Stone bench seating", "Recessed deck lighting", "Natural rock backdrop"],
    details: [
      { label: "Form", value: "Soft organic curve" },
      { label: "Mood", value: "Still, reflective" },
      { label: "Lighting", value: "Low recessed runs" },
      { label: "Backdrop", value: "Existing rock face" },
    ],
    story: [
      "The pool is shaped to follow the base of the rock, so the stone reads as one wall of the design. The water is kept calm on purpose, which turns the surface into a mirror at dawn and dusk.",
      "Lighting is low and recessed along the deck so the rock and water carry the evening, with nothing bright in the eye line.",
    ],
  },
  {
    slug: "garden-lagoon",
    name: "Garden Lagoon",
    category: "Naturalistic pool",
    setting: "Tropical garden",
    year: "Concept",
    photo: "project-tropical",
    summary:
      "A free-form lagoon tucked into planting, with a shaded pavilion at the water's edge.",
    intro:
      "A naturalistic pool for a planted garden, where the water is meant to feel like it was always there.",
    scope: ["Free-form lagoon", "Shaded pavilion", "Beach entry", "Layered planting"],
    details: [
      { label: "Shape", value: "Free-form lagoon" },
      { label: "Entry", value: "Zero depth beach" },
      { label: "Shade", value: "Open pavilion" },
      { label: "Planting", value: "Layered tropical" },
    ],
    story: [
      "The edges curve to follow the planting beds, and a zero depth beach entry lets you walk in slowly. A pavilion sits right at the water so there is shade within reach of the pool.",
      "Planting is layered close to the coping to soften every edge, so from the house the water looks like a clearing in the garden.",
    ],
  },
  {
    slug: "courtyard-plunge",
    name: "Courtyard Plunge",
    category: "Plunge pool",
    setting: "Compact yard",
    year: "Concept",
    photo: "project-courtyard",
    summary:
      "A small, deep plunge pool that makes the most of a tight yard without giving up the deck.",
    intro:
      "A compact plunge pool concept for a small yard, proof that a tight footprint can still hold a real pool.",
    scope: ["Plunge pool", "Bench seat", "Wide paver patio", "Privacy planting"],
    details: [
      { label: "Footprint", value: "Compact, deep" },
      { label: "Seating", value: "Full width bench" },
      { label: "Patio", value: "Large format pavers" },
      { label: "Edge", value: "Flush coping" },
    ],
    story: [
      "On a small lot the patio matters as much as the water, so the pool is kept tight and deep with a full width bench for sitting. The coping sits flush with the pavers for one clean surface underfoot.",
      "Planting around the fence line gives the yard privacy without eating into the usable deck.",
    ],
  },
  {
    slug: "palm-court",
    name: "Palm Court",
    category: "Resort style pool",
    setting: "Entertaining lot",
    year: "Concept",
    photo: "project-resort",
    summary:
      "A generous pool built for gathering, with a shaded cabana and room to move around the water.",
    intro:
      "A resort style pool for a lot built around entertaining, with shade, seating, and a long approach to the water.",
    scope: ["Large pool", "Cabana", "Deck lounge zones", "Mature palm planting"],
    details: [
      { label: "Scale", value: "Generous, social" },
      { label: "Shade", value: "Built cabana" },
      { label: "Zones", value: "Multiple lounge areas" },
      { label: "Planting", value: "Mature palms" },
    ],
    story: [
      "This one is built for people. The deck is sized for groups, with distinct lounge zones so the space works whether it is two people or twenty.",
      "A cabana gives a shaded base near the water, and mature palms frame the pool so it feels established from the first season.",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
