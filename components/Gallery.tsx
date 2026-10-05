"use client";

import { useEffect, useRef } from "react";

const PROJECTS = [
  {
    tag: "Garage",
    title: "Epoxy & wall storage system",
    note: "Showroom-grade organisation from a previously cluttered space.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    tag: "Alfresco",
    title: "Outdoor kitchen & lounge",
    note: "Stone, stainless and ambient lighting for year-round use.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    tag: "Wardrobe",
    title: "Walk-in Polytec suite",
    note: "Custom layout, soft-close, ten-year warranty.",
    img: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=600&q=80",
  },
  {
    tag: "Outdoor",
    title: "Front elevation upgrade",
    note: "Pathways and facade detailing that lift curb appeal.",
    img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
  },
  {
    tag: "Windows",
    title: "Layered furnishings",
    note: "Light control and privacy without losing proportion.",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
  },
  {
    tag: "Product",
    title: "Sydney Hose install",
    note: "UV-resistant auto-rewind. Free install in selected suburbs.",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
  },
];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="gallery" className="py-[clamp(80px,12vw,140px)]">
      <div className="w-[min(100%-2rem,1200px)] mx-auto">
        <div className="max-w-xl mb-14">
          <span className="text-[12px] tracking-[0.18em] uppercase text-[var(--color-orange)] font-semibold">
            Projects
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-white mt-3 mb-4 leading-tight">
            Selected work
          </h2>
          <p className="text-[15.5px] text-[var(--color-muted)] leading-relaxed">
            Real homes across South West Sydney. Each project measured, finished and documented.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] border border-[var(--color-line-soft)] hover:border-[var(--color-orange)]/30 transition-all duration-500 hover:-translate-y-1"
            >
              <img
                src={p.img}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/50 to-transparent" />
              <div className="absolute top-0 right-0 w-28 h-28 bg-[var(--color-orange)]/10 rounded-full blur-3xl group-hover:bg-[var(--color-orange)]/20 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-[11px] tracking-[0.14em] uppercase text-[var(--color-orange)] font-semibold">
                  {p.tag}
                </span>
                <h3 className="font-display text-[1.25rem] text-white mt-2 mb-1.5 leading-snug">
                  {p.title}
                </h3>
                <p className="text-[13.5px] text-[var(--color-muted)] leading-snug m-0">{p.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
