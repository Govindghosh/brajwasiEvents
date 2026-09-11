import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { site } from "@/data/site";
import { localBusinessSchema, jsonLd } from "@/lib/schema";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LeadContactModal } from "@/components/lead-contact-modal";
import { CookieConsent } from "@/components/cookie-consent";
import { FloatingContactWidget } from "@/components/floating-contact-widget";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-serif", weight: ["500", "600", "700"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Brajwasi Events | Wedding Decoration & Event Management", template: "%s | Brajwasi Events" },
  description: site.description,
  keywords: [...site.seoKeywords],
  alternates: { canonical: site.url },
  robots: { index: true, follow: true },
  openGraph: { title: "Brajwasi Events | Wedding Decoration & Event Management", description: site.description, url: site.url, siteName: site.name, type: "website", locale: "en_IN" },
  twitter: { card: "summary_large_image", title: "Brajwasi Events", description: site.description },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${cormorant.variable}`}
        suppressHydrationWarning
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(localBusinessSchema())} />
        <LeadContactModal />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <CookieConsent />
        <FloatingContactWidget />
      </body>
    </html>
  );
}

