// lib/data.ts
// Drop photos in /public and set `img` (e.g. "/services/garage.jpg") to replace the grey/orange placeholders.
export const SERVICES: { id: string; t: string; d: string; img?: string }[] = [
  { id: "garage", t: "Garage makeovers", d: "Epoxy floors, wall storage, workstations and lighting." },
  { id: "alfresco", t: "Alfresco & outdoor living", d: "Kitchens, lounges and privacy built for Sydney weather." },
  { id: "wardrobes", t: "Custom wardrobes", d: "Polytec finishes, soft-close tracks, 10-year warranty." },
  { id: "windows", t: "Window furnishings", d: "Curtains, blinds and shades, measured and fitted." },
  { id: "hose", t: "Sydney Hose system", d: "UV-resistant auto-rewind reel. Free install in selected suburbs." },
  { id: "outdoor", t: "Full outdoor makeover", d: "Pathways, feature walls and complete exterior upgrades." },
];

// Add as many projects as you like. Photos go in /public/results/
export const PROJECTS: { n: string; note: string; before?: string; after?: string }[] = [
  { n: "Garage", note: "Bare slab and clutter to epoxy floor, wall storage and lighting." },
  { n: "Wardrobe", note: "An empty room to a walk-in Polytec suite with soft-close drawers." },
  { n: "Alfresco", note: "A slab and a fence line to an outdoor kitchen and lounge." },
];

export const BROCHURES = [
  { t: "Garage Makeover Lookbook", s: "12 pages", p: ["Epoxy floor systems and colours", "Wall-panel and overhead storage", "Timelines and inclusions"] },
  { t: "Wardrobe Catalogue", s: "Finishes and modules", p: ["Polytec colour and texture library", "Internal fit-out modules", "Ten-year warranty details"] },
  { t: "Alfresco & Outdoor Guide", s: "Design and materials", p: ["Kitchen and lounge layouts", "Flooring and weather systems", "Lighting and privacy options"] },
  { t: "Sydney Hose Spec Sheet", s: "Datasheet", p: ["10 m, 20 m and 30 m options", "UV, pressure and temperature ratings", "Two-year warranty terms"] },
];