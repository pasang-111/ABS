"use client";

import { useState, useEffect } from "react";

export default function UnderConstructionDisclaimer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem("uc-disclaimer-dismissed");
      if (!dismissed) {
        const t = setTimeout(() => setVisible(true), 400);
        return () => clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const handleClose = () => {
    setVisible(false);
    try {
      localStorage.setItem("uc-disclaimer-dismissed", "true");
    } catch {}
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-[#0e131a] border border-orange-500/20 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-orange-700 via-orange-500 to-orange-400" />

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
          aria-label="Close disclaimer"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="px-8 py-10 text-center">
          <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-orange-500/10 border border-orange-500/25 flex items-center justify-center">
            <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.05-5.05a2.12 2.12 0 010-3l.7-.7a2.12 2.12 0 013 0l5.05 5.05M13.5 13.5l5.05 5.05a2.12 2.12 0 010 3l-.7.7a2.12 2.12 0 01-3 0L13.5 16.5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l6 6" />
            </svg>
          </div>

          <h2 className="text-xl font-bold text-white mb-3 tracking-tight">
            Site under construction
          </h2>
          <p className="text-white/75 text-[15px] leading-relaxed mb-1">
            We're currently finishing the last details.
          </p>
          <p className="text-white/50 text-sm">
            Some pages and features may still be incomplete.
          </p>

          <button
            onClick={handleClose}
            className="mt-8 px-7 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-orange-500/25"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}