import type { MetadataRoute } from "next";
import { facility } from "@/lib/facility";

/**
 * robots.txt. Allows all crawlers, including the AI search bots (GPTBot,
 * PerplexityBot, ClaudeBot, Google-Extended), so the site is eligible to be
 * cited in AI-generated answers. References the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${facility.url}/sitemap.xml`,
    host: facility.url,
  };
}
