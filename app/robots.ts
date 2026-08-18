import type { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.verixcredential.com";

/* The signed-in area and the auth endpoints are excluded from every crawler.
   They are already noindex via route metadata; this stops them being fetched
   at all, which also keeps them out of the AI crawlers explicitly welcomed
   below for the marketing pages. */
const DISALLOW = ["/account", "/login", "/api/"];

export default function robots(): MetadataRoute.Robots {
  const agents = [
    "*",
    /* AI search & LLM crawlers — explicitly allowed for GEO */
    "GPTBot",
    "OAI-SearchBot",
    "PerplexityBot",
    "ClaudeBot",
    "Google-Extended",
    "Amazonbot",
    "anthropic-ai",
    "Meta-ExternalAgent",
  ];

  return {
    rules: agents.map((userAgent) => ({
      userAgent,
      allow: "/",
      disallow: DISALLOW,
    })),
    sitemap: `${BASE}/sitemap.xml`,
  };
}
