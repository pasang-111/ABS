"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    // Simulate network — replace with real endpoint / Formspree / etc.
    await new Promise((r) => setTimeout(r, 1100));
    setStatus("ok");
    form.reset();
  }

  return (
    <section id="contact" className="py-[clamp(80px,12vw,140px)] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-orange)]/[0.04] to-transparent pointer-events-none" />

      <div className="w-[min(100%-2rem,1200px)] mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left */}
          <div>
            <span className="text-[12px] tracking-[0.18em] uppercase text-[var(--color-orange)] font-semibold">
              Get a quote
            </span>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.2rem)] text-white mt-3 mb-5 leading-tight">
              Request your free quote
            </h2>
            <p className="text-[16px] text-[var(--color-muted)] leading-relaxed mb-10 max-w-md">
              Tell us about the garage, alfresco, wardrobe or outdoor area. We&apos;ll measure,
              design and send a clear quote — no obligation.
            </p>

            <div className="space-y-5">
              <a href="tel:+61413230730" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-[var(--color-orange)]/10 flex items-center justify-center text-[var(--color-orange)] group-hover:bg-[var(--color-orange)]/20 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-[var(--color-muted-2)]">Call for a quote</div>
                  <div className="text-white font-semibold group-hover:text-[var(--color-orange-bright)] transition-colors">
                    0413 230 730
                  </div>
                </div>
              </a>
              <a href="mailto:Afterbuiltsolutions@gmail.com" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-[var(--color-orange)]/10 flex items-center justify-center text-[var(--color-orange)] group-hover:bg-[var(--color-orange)]/20 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-[var(--color-muted-2)]">Email</div>
                  <div className="text-white font-semibold group-hover:text-[var(--color-orange-bright)] transition-colors">
                    Afterbuiltsolutions@gmail.com
                  </div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[var(--color-orange)]/10 flex items-center justify-center text-[var(--color-orange)]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-[var(--color-muted-2)]">Showroom</div>
                  <div className="text-white font-semibold">6 Kibble Place, Narellan 2567 NSW</div>
                </div>
              </div>
            </div>
          </div>

          {/* Get a Quote form */}
          <div className="bg-[var(--color-surface)] border border-[var(--color-line-soft)] rounded-2xl p-6 sm:p-8">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white">Get a free quote</h3>
              <p className="text-sm text-[var(--color-muted)] mt-1">
                Fill in the details below and we&apos;ll respond within one business day.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--color-muted)] mb-1.5">
                    Full name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-line-soft)] rounded-xl text-white placeholder-[var(--color-muted-2)] focus:outline-none focus:border-[var(--color-orange)] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-muted)] mb-1.5">
                    Phone *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-line-soft)] rounded-xl text-white placeholder-[var(--color-muted-2)] focus:outline-none focus:border-[var(--color-orange)] transition-colors"
                    placeholder="04xx xxx xxx"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--color-muted)] mb-1.5">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-line-soft)] rounded-xl text-white placeholder-[var(--color-muted-2)] focus:outline-none focus:border-[var(--color-orange)] transition-colors"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-[var(--color-muted)] mb-1.5">
                  Service required
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-line-soft)] rounded-xl text-white focus:outline-none focus:border-[var(--color-orange)] transition-colors"
                >
                  <option value="">Select a service…</option>
                  <option value="garage">Garage makeover</option>
                  <option value="alfresco">Alfresco / outdoor living</option>
                  <option value="wardrobe">Custom wardrobe</option>
                  <option value="windows">Window furnishings</option>
                  <option value="hose">Sydney Hose</option>
                  <option value="other">Other / multiple</option>
                </select>
              </div>
              <div>
                <label htmlFor="suburb" className="block text-sm font-medium text-[var(--color-muted)] mb-1.5">
                  Suburb / postcode
                </label>
                <input
                  id="suburb"
                  name="suburb"
                  className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-line-soft)] rounded-xl text-white placeholder-[var(--color-muted-2)] focus:outline-none focus:border-[var(--color-orange)] transition-colors"
                  placeholder="e.g. Narellan 2567"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--color-muted)] mb-1.5">
                  Project details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-line-soft)] rounded-xl text-white placeholder-[var(--color-muted-2)] focus:outline-none focus:border-[var(--color-orange)] transition-colors resize-none"
                  placeholder="Describe the space, approximate size, preferred finishes and timeline…"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3.5 rounded-xl bg-[var(--color-orange)] hover:bg-[var(--color-orange-deep)] text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-orange)]/30 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "sending" ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending quote request…
                  </>
                ) : (
                  <>
                    Get a free quote
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
              {status === "ok" && (
                <p className="text-sm text-center text-green-400">
                  Quote request sent — we&apos;ll be in touch within one business day.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-center text-red-400">
                  Please fill in all required fields.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
