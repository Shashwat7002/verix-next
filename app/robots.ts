import type { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://verix.example";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      /* Standard crawlers */
      { userAgent: "*", allow: "/" },
      /* AI search & LLM crawlers — explicitly allowed for GEO */
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Amazonbot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Meta-ExternalAgent", allow: "/" },
    ],
    sitemap: `${BASE}/sitemap.xml`,
  };
}
