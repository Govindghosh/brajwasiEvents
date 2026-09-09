import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";
export default function sitemap(): MetadataRoute.Sitemap { const base = ["", "/services/", "/locations/", "/gallery/", "/about/", "/contact/"].map((path) => ({ url: absoluteUrl(path), lastModified: "2026-09-09", changeFrequency: "monthly" as const, priority: path === "" ? 1 : .8 })); const services = site.services.map((s) => ({ url: absoluteUrl(`/services/${s.slug}/`), lastModified: "2026-09-09", changeFrequency: "monthly" as const, priority: .8 })); const locations = site.locations.map((l) => ({ url: absoluteUrl(`/locations/${l.slug}/`), lastModified: "2026-09-09", changeFrequency: "monthly" as const, priority: .75 })); return [...base, ...services, ...locations]; }
