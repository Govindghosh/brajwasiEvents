import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = ["", "/services/", "/locations/", "/gallery/", "/about/", "/contact/"]
    .map((path) => ({
      url: absoluteUrl(path),
      lastModified: "2026-09-09",
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }));

  const services = site.services.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}/`),
    lastModified: "2026-09-09",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const locations = site.locations.map((location) => ({
    url: absoluteUrl(`/locations/${location.slug}/`),
    lastModified: "2026-09-09",
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...base, ...services, ...locations];
}
