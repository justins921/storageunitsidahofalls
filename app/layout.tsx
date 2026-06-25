import type { Metadata } from "next";
import { Barlow, Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";
import { facility } from "@/lib/facility";
import { seo } from "@/lib/seo";
import { buildJsonLd } from "@/lib/schema";
import Analytics from "@/components/Analytics";

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
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: "/",
  },
  keywords: seo.keywords,
  openGraph: {
    type: "website",
    url: facility.url,
    siteName: facility.name,
    title: seo.ogTitle,
    description: seo.socialDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.twitterTitle,
    description: seo.socialDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
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
        <Analytics />
      </body>
    </html>
  );
}
