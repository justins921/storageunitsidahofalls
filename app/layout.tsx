import type { Metadata } from "next";
import { Barlow, Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";
import { facility } from "@/lib/facility";
import { buildJsonLd } from "@/lib/schema";

const body = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const display = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(facility.url),
  title:
    "Storage Units Idaho Falls | Affordable Self Storage | (208) 313-2257",
  description:
    "Affordable self storage in Idaho Falls, ID 83401. Drive-up units with roll up doors and 24/7 access, starting at $65/mo. Call (208) 313-2257 to reserve.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "storage units Idaho Falls",
    "self storage Idaho Falls",
    "storage Idaho Falls ID",
    "cheap storage Idaho Falls",
    "drive up storage Idaho Falls",
    "83401 storage",
  ],
  openGraph: {
    type: "website",
    url: facility.url,
    siteName: facility.name,
    title:
      "Storage Units Idaho Falls | Affordable Self Storage | (208) 313-2257",
    description:
      "Drive-up self storage in Idaho Falls, ID. Roll up doors, 24/7 access, units from $65/mo. Call (208) 313-2257.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Storage Units Idaho Falls | Affordable Self Storage",
    description:
      "Drive-up self storage in Idaho Falls, ID. Roll up doors, 24/7 access, units from $65/mo. Call (208) 313-2257.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = buildJsonLd();

  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-paper font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
