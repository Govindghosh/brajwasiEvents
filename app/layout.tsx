import type { Metadata } from "next";
import { site } from "@/data/site";
import { localBusinessSchema, jsonLd } from "@/lib/schema";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";
export const metadata: Metadata = { metadataBase: new URL(site.url), title: { default: "Brajwasi Events | Wedding Decoration & Event Management", template: "%s | Brajwasi Events" }, description: site.description, keywords: [...site.seoKeywords], alternates: { canonical: site.url }, robots: { index: true, follow: true }, openGraph: { title: "Brajwasi Events | Wedding Decoration & Event Management", description: site.description, url: site.url, siteName: site.name, type: "website", locale: "en_IN" }, twitter: { card: "summary_large_image", title: "Brajwasi Events", description: site.description } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en-IN"><body><script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(localBusinessSchema())} /><SiteHeader /><main>{children}</main><SiteFooter /></body></html>; }
