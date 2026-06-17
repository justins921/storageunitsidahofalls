import type { MetadataRoute } from "next";
import { facility } from "@/lib/facility";

/** sitemap.xml. Single landing page, so one canonical entry. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: facility.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
