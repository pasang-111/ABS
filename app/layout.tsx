import type { Metadata } from "next";
import "./globals.css";
import { BannerProvider } from "@/components/BannerContext";
import UnderConstructionBanner from "@/components/UnderConstructionBanner";
import UnderConstructionDisclaimer from "@/components/UnderConstructionDisclaimer";

export const metadata: Metadata = {
  title: "After Built Solutions — Premium Home Finishing",
  description:
    "Garage makeovers, alfresco living, custom wardrobes and outdoor transformations. South West Sydney.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="text-off antialiased overflow-x-hidden bg-[var(--color-bg)]">
        <BannerProvider>
          <UnderConstructionBanner />
          <UnderConstructionDisclaimer />
          {children}
        </BannerProvider>
      </body>
    </html>
  );
}