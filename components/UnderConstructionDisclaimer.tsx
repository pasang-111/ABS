"use client";

import { useState, useEffect } from "react";

export default function UnderConstructionDisclaimer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show only if the user hasn't dismissed it yet
    const dismissed = localStorage.getItem("uc-disclaimer-dismissed");
    if (!dismissed) {
      setVisible(true);
    }
  }, []);

  const handleClose = () => {
    setVisible(false);
    localStorage.setItem("uc-disclaimer-dismissed", "true");
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-gradient-to-br from-[#c2410c] via-[#ea580c] to-[#f97316] rounded-2xl shadow-2xl shadow-orange-900/40 overflow-hidden">
        {/* Cross button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors"
          aria-label="Close disclaimer"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="px-8 py-10 text-center text-white">
          <div className="text-4xl mb-4">🚧</div>
          <h2 className="text-2xl font-bold mb-3 tracking-tight">
            Site Under Construction
          </h2>
          <p className="text-white/90 text-[15px] leading-relaxed mb-1">
            We’re currently building something great.
          </p>
          <p className="text-white/75 text-sm">
            Some pages and features may still be incomplete.
          </p>

          <button
            onClick={handleClose}
            className="mt-8 px-6 py-2.5 rounded-full bg-white text-[#c2410c] font-semibold text-sm hover:bg-white/95 transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}