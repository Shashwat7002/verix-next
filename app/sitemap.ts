import type { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://verix.example";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE}/`,
      lastModified: new Date("2026-05-23"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE}/team`,
      lastModified: new Date("2026-05-23"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
