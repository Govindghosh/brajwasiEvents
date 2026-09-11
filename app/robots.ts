import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/services/", "/locations/", "/gallery/", "/about/", "/contact/", "/llms.txt", "/llms-full.txt"]
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "anthropic-ai",
          "Google-Extended",
          "Applebot-Extended",
          "Amazonbot",
          "cohere-ai",
          "Omgilibot"
        ],
        allow: ["/", "/llms.txt", "/llms-full.txt"]
      }
    ],
    sitemap: absoluteUrl("/sitemap.xml")
  };
}
