"use client";

import { useEffect, useRef } from "react";

const SERVICES = [
  {
    title: "Home Garage Makeover",
    desc: "Epoxy flooring, custom wall storage, workstations and lighting. Measured for your vehicles and lifestyle.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    title: "Alfresco & Outdoor Living",
    desc: "Outdoor kitchens, lounges and privacy systems built for Sydney weather and year-round entertaining.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Custom Wardrobes",
    desc: "Polytec finishes, aluminium frames, soft-close tracks. Ten-year warranty. Lowest-price guarantee.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "Window Furnishings",
    desc: "Curtains, blinds and shades tailored to light, privacy and proportion. Measured and fitted.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    ),
  },
  {
    title: "Sydney Hose System",
    desc: "UV-resistant auto-rewind reel. 10–30 m options. Free installation in selected Sydney suburbs.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Full Outdoor Makeover",
    desc: "Curb appeal, pathways, feature walls and complete exterior transformations — concept to finish.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export default function Services() {
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
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" className="py-[clamp(80px,12vw,140px)] relative">
      <div className="w-[min(100%-2rem,1200px)] mx-auto">
        <div className="max-w-xl mb-14">
          <span className="text-[12px] tracking-[0.18em] uppercase text-[var(--color-orange)] font-semibold">
            Services
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-white mt-3 mb-4 leading-tight">
            What we finish
          </h2>
          <p className="text-[15.5px] text-[var(--color-muted)] leading-relaxed">
            The spaces builders leave incomplete. We close the gap between handover and a home that
            actually works.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className="group relative bg-[var(--color-surface)] border border-[var(--color-line-soft)] rounded-2xl p-7 hover:border-[var(--color-orange)]/30 hover:bg-[var(--color-surface-2)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[var(--color-orange)]/5"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-orange)]/10 text-[var(--color-orange)] flex items-center justify-center mb-5 group-hover:bg-[var(--color-orange)]/20 transition-colors">
                {s.icon}
              </div>
              <span className="text-[11px] text-[var(--color-orange)] font-semibold tracking-wide">
                0{i + 1}
              </span>
              <h3 className="font-display text-[1.3rem] text-white mt-2 mb-2.5">{s.title}</h3>
              <p className="text-[14.5px] text-[var(--color-muted)] leading-relaxed m-0">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
