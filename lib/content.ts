import type { PhotoName } from "./photos";

export type Service = {
  slug: string;
  title: string;
  blurb: string;
  points: string[];
  photo?: PhotoName;
};

export const services: Service[] = [
  {
    slug: "custom-pools",
    title: "Custom pools",
    blurb:
      "Pools drawn for one site and one family. Geometric or free-form, edge to edge, finished the way you want to feel the water.",
    points: ["Geometric and free-form", "Vanishing and slot edges", "Sun shelves and benches", "Custom interior finishes"],
    photo: "modern",
  },
  {
    slug: "spas",
    title: "Spas",
    blurb:
      "Warm water within reach of the cool. Raised or in-ground spas that spill into the pool and hold their heat through the evening.",
    points: ["Raised and flush spas", "Spillover detailing", "Bench and jet layouts", "Efficient heating"],
    photo: "courtyard",
  },
  {
    slug: "water-features",
    title: "Water features",
    blurb:
      "The sound of moving water, placed with intent. Sheer descents, scuppers, and stone runs that carry the garden into the pool.",
    points: ["Sheer descent walls", "Scuppers and spouts", "Natural stone runs", "Tuned for sound"],
    photo: "evening",
  },
  {
    slug: "renovations",
    title: "Renovations",
    blurb:
      "A tired pool, brought back. New surfaces, new lines, and the quiet systems that make an older pool feel new again.",
    points: ["Resurfacing", "Coping and tile", "Equipment upgrades", "Layout reworks"],
    photo: "stone",
  },
  {
    slug: "outdoor-living",
    title: "Outdoor living",
    blurb:
      "The space around the water. Decks, shade, planting, and lighting designed together so the whole yard reads as one.",
    points: ["Decks and patios", "Cabanas and shade", "Planting design", "Low-level lighting"],
    photo: "garden",
  },
];

export type Step = {
  number: string;
  title: string;
  tagline: string;
  body: string;
  points: string[];
};

export const processSteps: Step[] = [
  {
    number: "01",
    title: "Design",
    tagline: "Draw it before we dig",
    body: "We start with your site and the way you want to use it. You see the pool in plan and in context before a shovel moves, with materials and finishes chosen together.",
    points: ["Site and sun study", "Concept and plan drawings", "Material and finish selection", "Clear scope and timeline"],
  },
  {
    number: "02",
    title: "Build",
    tagline: "One team, start to finish",
    body: "The same studio that drew it builds it. Excavation, structure, finishes, and equipment are run as one sequence, with the details held to the drawing.",
    points: ["Excavation and structure", "Plumbing and equipment", "Finishes and tile", "Decking and surrounds"],
  },
  {
    number: "03",
    title: "Enjoy",
    tagline: "Handed over, ready to swim",
    body: "We balance the water, walk you through the systems, and leave you with a pool that is simple to live with. Care guidance is plain and on paper.",
    points: ["Startup and water balance", "Systems walkthrough", "Care guidance", "Seasonal support"],
  },
];
