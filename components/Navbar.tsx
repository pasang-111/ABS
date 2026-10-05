"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const LINKS = [
  { href: "#services", id: "services", label: "Services" },
  { href: "#before-after", id: "before-after", label: "Before & After" },
  { href: "#gallery", id: "gallery", label: "Projects" },
  { href: "#brochures", id: "brochures", label: "Brochures" },
  { href: "#process", id: "process", label: "Process" },
  { href: "#contact", id: "contact", label: "Get a Quote" },
];

const MEGA = [
  {
    href: "#services",
    title: "Garage Makeovers",
    desc: "Epoxy, storage & lighting",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80&auto=format",
  },
  {
    href: "#services",
    title: "Alfresco Living",
    desc: "Outdoor kitchens & lounges",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=80&auto=format",
  },
  {
    href: "#services",
    title: "Custom Wardrobes",
    desc: "Polytec · soft-close · 10yr",
    img: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=500&q=80&auto=format",
  },
  {
    href: "#services",
    title: "Outdoor Upgrades",
    desc: "Curb to courtyard",
    img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=500&q=80&auto=format",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight current section
  useEffect(() => {
    const sectionIds = ["services", "before-after", "gallery", "brochures", "process", "contact"];
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.15, 0.35, 0.55],
      }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
  <header
  className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
    scrolled
      ? "bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#fb923c] shadow-lg shadow-orange-900/30 py-2 top-10" // ← added top-10
      : "bg-gradient-to-r from-[#c2410c]/95 via-[#ea580c]/95 to-[#f97316]/95 backdrop-blur-md py-3 top-10" // ← added top-10
  }`}
>
      <div className="w-[min(100%-2rem,1200px)] mx-auto flex items-center justify-between">
        {/* White logo — ideal size */}
        <a href="#top" className="flex items-center shrink-0 group">
          <Image
            src="/logo-nav-white-opt.png"
            alt="After Built Solutions"
            width={140}
            height={48}
            className="h-8 sm:h-9 w-auto object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.03]"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {/* Services mega */}
          <div className="relative group">
            <button
              className={`relative px-3.5 py-2 text-[13px] font-semibold transition-colors duration-200 flex items-center gap-1.5 ${
                active === "services" ? "text-white" : "text-white/85 hover:text-white"
              }`}
            >
              Services
              <svg
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
              {active === "services" && (
                <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-white rounded-full" />
              )}
            </button>

            <div className="mega-panel absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[700px]">
              <div className="bg-[var(--color-surface)]/98 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50 p-5 overflow-hidden">
                <div className="grid grid-cols-4 gap-3">
                  {MEGA.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="group/card block rounded-xl overflow-hidden bg-[var(--color-surface-2)] hover:bg-[var(--color-surface-3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/15"
                    >
                      <div className="aspect-[16/11] overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-3">
                        <h4 className="text-[13px] font-semibold text-white group-hover/card:text-[var(--color-orange-bright)] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-[var(--color-muted-2)] mt-0.5">{item.desc}</p>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-white/8 flex items-center justify-between">
                  <p className="text-[11px] text-[var(--color-muted-2)]">
                    Showroom · Narellan NSW · By appointment
                  </p>
                  <a
                    href="#contact"
                    className="text-[13px] font-semibold text-[var(--color-orange)] hover:text-[var(--color-orange-bright)] flex items-center gap-1 transition-colors"
                  >
                    Get a quote
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {LINKS.filter((l) => l.id !== "services").map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative px-3.5 py-2 text-[13px] font-semibold transition-colors duration-200 ${
                active === l.id ? "text-white" : "text-white/85 hover:text-white"
              }`}
            >
              {l.label}
              {active === l.id && (
                <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-white rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* CTA + mobile */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#c2410c] text-[13px] font-bold transition-all duration-300 hover:bg-white/95 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5"
          >
            Get a quote
          </a>
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white rounded-lg hover:bg-white/15 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-drawer lg:hidden ${open ? "open" : ""}`}>
        <div className="mx-4 mt-2 mb-4 bg-[var(--color-surface)] border border-white/10 rounded-2xl p-4 flex flex-col gap-1 shadow-xl">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`py-3 px-4 text-[15px] rounded-xl transition-colors font-medium ${
                active === l.id
                  ? "bg-[var(--color-orange)]/15 text-[var(--color-orange-bright)]"
                  : "text-[var(--color-off)] hover:bg-white/5"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 text-center py-3 rounded-xl bg-[var(--color-orange)] text-white font-semibold text-sm"
          >
            Get a quote
          </a>
        </div>
      </div>
    </header>
  );
}
