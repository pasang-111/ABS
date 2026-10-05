"use client";

import { useBanner } from "./BannerContext";

export default function UnderConstructionBanner() {
  const { bannerVisible, closeBanner } = useBanner();

  if (!bannerVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[#0a0e14] border-b border-orange-500/25 text-white text-center text-[13px] font-medium py-2.5 px-4 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
      <div className="w-[min(100%-2rem,1200px)] mx-auto flex items-center justify-center gap-3 relative">
        <span className="flex items-center gap-2.5">
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 text-[11px]">
            ●
          </span>
          <span className="text-white/90">
            <strong className="text-white font-semibold">Site under construction</strong>
            <span className="text-white/60"> — some features may still be incomplete.</span>
          </span>
        </span>

        <button
          onClick={closeBanner}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close banner"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}