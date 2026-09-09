import type { Metadata } from "next";
import { site } from "@/data/site";

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

export function buildMetadata({ title, description, path, keywords = site.seoKeywords }: { title: string; description: string; path: string; keywords?: readonly string[] }): Metadata {
  return {
    title,
    description,
    keywords: [...keywords],
    alternates: { canonical: absoluteUrl(path) },
    openGraph: { title, description, url: absoluteUrl(path), siteName: site.name, type: "website", locale: "en_IN" },
    twitter: { card: "summary_large_image", title, description }
  };
}
