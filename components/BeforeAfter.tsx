"use client";

import { useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    tag: "Garage",
    title: "Epoxy + wall storage system",
    note: "Cluttered garage transformed into showroom-grade organisation.",
    before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&auto=format",
    after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format",
  },
  {
    tag: "Alfresco",
    title: "Outdoor kitchen & lounge",
    note: "Stone, stainless and ambient lighting for year-round entertaining.",
    before: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80&auto=format",
    after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format",
  },
  {
    tag: "Wardrobe",
    title: "Walk-in Polytec suite",
    note: "Custom layout, soft-close hardware, ten-year warranty.",
    before: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=1200&q=80&auto=format",
    after: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80&auto=format",
  },
  {
    tag: "Outdoor",
    title: "Front elevation upgrade",
    note: "Pathways and facade detailing that lift curb appeal.",
    before: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80&auto=format",
    after: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80&auto=format",
  },
];

export default function BeforeAfter() {
  const [index, setIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const afterRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  const slide = SLIDES[index];
  const total = SLIDES.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  // Reset slider to 50% when slide changes
  useEffect(() => {
    if (afterRef.current && handleRef.current) {
      afterRef.current.style.clipPath = "inset(0 50% 0 0)";
      handleRef.current.style.left = "50%";
    }
  }, [index]);

  const update = (clientX: number) => {
    const el = containerRef.current;
    if (!el || !afterRef.current || !handleRef.current) return;
    const rect = el.getBoundingClientRect();
    let pct = ((clientX - rect.left) / rect.width) * 100;
    pct = Math.max(6, Math.min(94, pct));
    afterRef.current.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    handleRef.current.style.left = `${pct}%`;
  };

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging) return;
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      update(x);
    };
    const onUp = () => setDragging(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, [dragging]);

  return (
    <section
      id="before-after"
      className="py-[clamp(80px,12vw,140px)] bg-[var(--color-surface)]/40 relative"
    >
      <div className="w-[min(100%-2rem,1200px)] mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[12px] tracking-[0.18em] uppercase text-[var(--color-orange)] font-semibold">
            Proof of work
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-white mt-3 mb-4 leading-tight">
            Before & After
          </h2>
          <p className="text-[15.5px] text-[var(--color-muted)] leading-relaxed">
            Drag the handle to compare. Use the arrows to browse more projects.
          </p>
        </div>

        {/* Slider + arrows */}
        <div className="relative max-w-4xl mx-auto">
          {/* Left arrow */}
          <button
            onClick={prev}
            aria-label="Previous project"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[var(--color-surface)] border border-[var(--color-line-soft)] text-white flex items-center justify-center hover:bg-[var(--color-orange)] hover:border-[var(--color-orange)] transition-all duration-300 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            onClick={next}
            aria-label="Next project"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[var(--color-surface)] border border-[var(--color-line-soft)] text-white flex items-center justify-center hover:bg-[var(--color-orange)] hover:border-[var(--color-orange)] transition-all duration-300 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Comparison area */}
          <div
            ref={containerRef}
            className="ba-wrap rounded-2xl overflow-hidden shadow-2xl shadow-black/40 aspect-[16/10] border border-[var(--color-line-soft)] cursor-ew-resize"
            onMouseDown={(e) => {
              setDragging(true);
              update(e.clientX);
            }}
            onTouchStart={(e) => {
              setDragging(true);
              update(e.touches[0].clientX);
            }}
          >
            <img
              key={`before-${index}`}
              src={slide.before}
              alt={`${slide.title} — before`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div ref={afterRef} className="ba-after">
              <img
                key={`after-${index}`}
                src={slide.after}
                alt={`${slide.title} — after`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div ref={handleRef} className="ba-handle" />

            <span className="absolute top-4 left-4 px-3 py-1.5 bg-[var(--color-bg)]/85 backdrop-blur text-white text-[11px] font-bold rounded-lg z-10 tracking-wider">
              BEFORE
            </span>
            <span className="absolute top-4 right-4 px-3 py-1.5 bg-[var(--color-orange)] text-white text-[11px] font-bold rounded-lg z-10 tracking-wider">
              AFTER
            </span>
          </div>
        </div>

        {/* Project info + dots */}
        <div className="max-w-4xl mx-auto mt-6 text-center">
          <span className="text-[11px] tracking-[0.14em] uppercase text-[var(--color-orange)] font-semibold">
            {slide.tag}
          </span>
          <h3 className="font-display text-[1.35rem] text-white mt-1.5 mb-1">
            {slide.title}
          </h3>
          <p className="text-[14px] text-[var(--color-muted)] max-w-lg mx-auto">
            {slide.note}
          </p>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-8 bg-[var(--color-orange)]"
                    : "w-2.5 bg-white/25 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <p className="text-[12px] text-[var(--color-muted-2)] mt-3">
            {index + 1} / {total}
          </p>
        </div>
      </div>
    </section>
  );
}