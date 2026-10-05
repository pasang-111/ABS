"use client";

import { useState, useEffect } from "react";

const SLIDES = [
  {
    title: "Garage makeovers",
    subtitle: "From storage to statement",
    desc: "Epoxy floors, custom wall systems and integrated lighting that turn the most overlooked room into the most organised.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85",
  },
  {
    title: "Alfresco living",
    subtitle: "Outdoor rooms, year-round",
    desc: "Kitchens, lounges and privacy solutions designed for Sydney weather — an extension of the home, not an afterthought.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85",
  },
  {
    title: "Custom wardrobes",
    subtitle: "Storage, elevated",
    desc: "Polytec finishes, aluminium frames, soft-close systems. Hundreds installed monthly across South West Sydney.",
    img: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=900&q=85",
  },
  {
    title: "Outdoor transformations",
    subtitle: "Curb to courtyard",
    desc: "Pathways, feature walls and complete exterior upgrades that lift the entire property.",
    img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=85",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const t = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  const slide = SLIDES[index];

  return (
    <section
      id="top"
      className="relative min-h-screen min-h-[100dvh] flex items-center overflow-hidden pt-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[var(--color-bg)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_30%,rgba(249,115,22,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_80%,rgba(20,26,34,0.9),transparent)]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating accent orbs */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[var(--color-orange)]/15 rounded-full blur-[110px] animate-float pointer-events-none" />
      <div
        className="absolute bottom-1/3 left-1/5 w-64 h-64 bg-[var(--color-orange)]/10 rounded-full blur-[90px] animate-float pointer-events-none"
        style={{ animationDelay: "-2.5s" }}
      />

      <div className="relative z-10 w-[min(100%-2rem,1200px)] mx-auto py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left content */}
          <div className={`lg:col-span-6 stagger ${visible ? "visible" : ""}`}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[var(--color-orange)]" />
              <span className="text-[12px] tracking-[0.18em] uppercase text-[var(--color-orange)] font-semibold">
                After Built Solutions
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.6rem,6vw,4.4rem)] leading-[1.06] text-white mb-3 transition-all duration-500">
              {slide.title}
            </h1>
            <p className="text-[var(--color-orange-bright)] text-[15px] font-medium tracking-wide mb-5 transition-all duration-500">
              {slide.subtitle}
            </p>
            <p className="text-[16px] leading-relaxed text-[var(--color-muted)] max-w-lg mb-9 transition-all duration-500">
              {slide.desc}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--color-orange)] hover:bg-[var(--color-orange-deep)] text-white text-[14px] font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-orange)]/35 hover:-translate-y-0.5"
              >
                Get a quote
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#before-after"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 hover:border-[var(--color-orange)]/40 text-[var(--color-off)] text-[14px] font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                See results
              </a>
            </div>

            {/* Slide indicators */}
            <div className="mt-12 flex items-center gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-1 rounded-full transition-all duration-400 ${
                    i === index
                      ? "w-10 bg-[var(--color-orange)]"
                      : "w-4 bg-white/20 hover:bg-white/35"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right — advanced bento visual */}
          <div className="lg:col-span-6 relative">
            <div className="bento h-[420px] sm:h-[480px] lg:h-[520px]">
              {/* Main image */}
              <div className="col-span-8 row-span-2 rounded-2xl overflow-hidden relative group border border-[var(--color-line-soft)]">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  key={index}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="inline-block px-2.5 py-1 bg-[var(--color-orange)] text-white text-[10px] font-bold rounded-md uppercase tracking-wider">
                      Featured
                    </span>
                    <p className="text-white font-medium mt-2 text-sm">{slide.title}</p>
                  </div>
                </div>
              </div>

              {/* Side top */}
              <div className="col-span-4 rounded-2xl overflow-hidden relative border border-[var(--color-line-soft)] group">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&q=80"
                  alt="Detail"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Side bottom — accent card */}
              <div className="col-span-4 rounded-2xl overflow-hidden relative bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-orange-deep)] flex items-center justify-center border border-[var(--color-orange)]/30">
                <div className="text-center p-4">
                  <div className="text-3xl font-black text-white">10yr</div>
                  <div className="text-[11px] text-white/80 mt-1 uppercase tracking-wider font-medium">
                    Warranty
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-3 -left-3 sm:bottom-6 sm:-left-6 bg-[var(--color-surface)]/95 backdrop-blur border border-[var(--color-line-soft)] rounded-2xl px-4 py-3 shadow-2xl animate-float"
              style={{ animationDelay: "-1.2s" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-4.5 h-4.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">South West Sydney</div>
                  <div className="text-[11px] text-[var(--color-muted)]">Narellan showroom</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-muted-2)] animate-bounce">
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
