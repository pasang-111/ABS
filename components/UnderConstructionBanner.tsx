"use client";

import { useBanner } from "./BannerContext";

export default function UnderConstructionBanner() {
  const { bannerVisible, closeBanner } = useBanner();

  if (!bannerVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-[#9a3412] via-[#c2410c] to-[#ea580c] text-white text-center text-sm font-medium py-2.5 px-4 shadow-md">
      <div className="w-[min(100%-2rem,1200px)] mx-auto flex items-center justify-center gap-3 relative">
        <span className="flex items-center gap-2">
          <span className="text-base">🚧</span>
          <span>
            <strong>Site Under Construction</strong> — Some features may still be incomplete.
          </span>
        </span>

        <button
          onClick={closeBanner}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
          aria-label="Close banner"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}