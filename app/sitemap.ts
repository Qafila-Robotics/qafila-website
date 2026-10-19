import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://qafila-robotics.github.io";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/en", "/ar", "/en/privacy", "/ar/privacy"];
  return paths.map((p) => ({
    url: `${SITE_URL}${p}`,
    changeFrequency: "monthly",
    priority: p === "/en" || p === "/ar" ? 1 : 0.5,
  }));
}
