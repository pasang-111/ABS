"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type BannerContextType = {
  bannerVisible: boolean;
  closeBanner: () => void;
};

const BannerContext = createContext<BannerContextType | null>(null);

export function BannerProvider({ children }: { children: ReactNode }) {
  const [bannerVisible, setBannerVisible] = useState(false);

  useEffect(() => {
    // Only run on client
    const dismissed = localStorage.getItem("uc-banner-dismissed");
    if (!dismissed) {
      setBannerVisible(true);
    }
  }, []);

  const closeBanner = () => {
    setBannerVisible(false);
    localStorage.setItem("uc-banner-dismissed", "true");
  };

  return (
    <BannerContext.Provider value={{ bannerVisible, closeBanner }}>
      {children}
    </BannerContext.Provider>
  );
}

export function useBanner() {
  const ctx = useContext(BannerContext);
  if (!ctx) {
    throw new Error("useBanner must be used inside BannerProvider");
  }
  return ctx;
}