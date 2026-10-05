"use client";

import { useState } from "react";

const BROCHURES = [
  {
    id: "garage",
    title: "Garage Systems Catalogue",
    pages: "12 pages",
    size: "PDF · 3.2 MB",
    points: [
      "Epoxy floor options & colours",
      "Wall storage configurations",
      "Lighting & power packages",
      "Typical project timelines",
    ],
    cover: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format",
    pdf: "#contact", // change to "/brochures/garage.pdf" when you have the file
  },
  {
    id: "alfresco",
    title: "Alfresco Living Guide",
    pages: "Design overview",
    size: "PDF · 2.8 MB",
    points: [
      "Kitchen & lounge layouts",
      "Material & finish boards",
      "Weather considerations",
      "Sample project costs",
    ],
    cover: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format",
    pdf: "#contact",
  },
  {
    id: "wardrobe",
    title: "Wardrobe Spec Sheet",
    pages: "Product datasheet",
    size: "PDF · 1.6 MB",
    points: [
      "Polytec range & colours",
      "Soft-close hardware",
      "Warranty terms (10 years)",
      "Lowest-price guarantee",
    ],
    cover: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80&auto=format",
    pdf: "#contact",
  },
  {
    id: "hose",
    title: "Sydney Hose Spec Sheet",
    pages: "Product datasheet",
    size: "PDF · 1.1 MB",
    points: [
      "10 m / 20 m / 30 m options",
      "UV, pressure & temperature ratings",
      "Installation inclusions",
      "Two-year warranty terms",
    ],
    cover: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format",
    pdf: "#contact",
  },
];

export default function Brochures() {
  const [preview, setPreview] = useState<(typeof BROCHURES)[0] | null>(null);

  return (
    <section
      id="brochures"
      className="py-[clamp(80px,12vw,140px)] bg-[var(--color-surface)]/40 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-orange)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-[min(100%-2rem,1200px)] mx-auto relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="text-[12px] tracking-[0.18em] uppercase text-[var(--color-orange)] font-semibold">
              Brochures
            </span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-white mt-3 mb-4 leading-tight">
              Print-ready detail
            </h2>
            <p className="text-[15.5px] text-[var(--color-muted)] leading-relaxed">
              Browse covers, view full size, then download or request a printed pack.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--color-orange)]/40 text-[var(--color-orange)] hover:bg-[var(--color-orange)] hover:text-white font-medium text-sm transition-all duration-300"
          >
            Request full pack
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {BROCHURES.map((b) => (
            <article
              key={b.id}
              className="group bg-[var(--color-surface)] border border-[var(--color-line-soft)] rounded-2xl overflow-hidden hover:border-[var(--color-orange)]/35 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[var(--color-orange)]/10 flex flex-col"
            >
              {/* Cover image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={b.cover}
                  alt={b.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-transparent to-transparent opacity-80" />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                  <button
                    type="button"
                    onClick={() => setPreview(b)}
                    className="px-4 py-2.5 rounded-full bg-white text-[var(--color-bg)] text-sm font-semibold hover:bg-[var(--color-orange)] hover:text-white transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View
                  </button>
                  <a
                    href={b.pdf}
                    className="px-4 py-2.5 rounded-full bg-[var(--color-orange)] text-white text-sm font-semibold hover:bg-[var(--color-orange-deep)] transition-colors flex items-center gap-2"
                    {...(b.pdf.startsWith("http") || b.pdf.endsWith(".pdf")
                      ? { download: true, target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                  </a>
                </div>

                <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur text-white text-[10px] font-bold rounded-md tracking-wider uppercase">
                  {b.pages}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-display text-[1.25rem] text-white leading-tight group-hover:text-[var(--color-orange-bright)] transition-colors">
                    {b.title}
                  </h3>
                  <span className="text-[11px] text-[var(--color-muted-2)] shrink-0 mt-1">{b.size}</span>
                </div>

                <ul className="list-none m-0 mb-5 p-0 flex-1 space-y-2">
                  {b.points.map((pt) => (
                    <li
                      key={pt}
                      className="relative pl-4 text-[13.5px] text-[var(--color-muted)] leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-orange)] before:opacity-80"
                    >
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setPreview(b)}
                    className="flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-semibold text-white transition-all flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View
                  </button>
                  <a
                    href={b.pdf}
                    className="flex-1 py-2.5 rounded-xl bg-[var(--color-orange)] hover:bg-[var(--color-orange-deep)] text-sm font-semibold text-white transition-all flex items-center justify-center gap-2"
                    {...(b.pdf.startsWith("http") || b.pdf.endsWith(".pdf")
                      ? { download: true, target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-[13px] text-[var(--color-muted-2)]">
          Prefer a printed pack? Mention it when you{" "}
          <a href="#contact" className="text-[var(--color-orange)] hover:underline">
            request a quote
          </a>
          .
        </p>
      </div>

      {/* View modal */}
      {preview && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setPreview(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-[var(--color-surface)] border border-[var(--color-line-soft)] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setPreview(null)}
              className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-[var(--color-orange)] text-white flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="aspect-[16/10] bg-[var(--color-bg)]">
              <img src={preview.cover} alt={preview.title} className="w-full h-full object-cover" />
            </div>

            <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span className="text-[11px] tracking-wide uppercase text-[var(--color-orange)] font-semibold">
                  {preview.pages} · {preview.size}
                </span>
                <h3 className="font-display text-xl text-white mt-1">{preview.title}</h3>
              </div>
              <div className="flex gap-2">
                <a
                  href={preview.pdf}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-orange)] hover:bg-[var(--color-orange-deep)] text-white text-sm font-semibold transition-colors"
                  {...(preview.pdf.startsWith("http") || preview.pdf.endsWith(".pdf")
                    ? { download: true, target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download PDF
                </a>
                <button
                  type="button"
                  onClick={() => setPreview(null)}
                  className="px-5 py-2.5 rounded-full border border-white/15 text-white text-sm font-medium hover:border-white/30 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}