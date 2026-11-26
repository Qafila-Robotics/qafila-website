import type { MetadataRoute } from "next";
import { PAGES, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...PAGES.map((p) => p.path), "/privacy/"];
  return paths.flatMap((path) =>
    (["en", "ar"] as const).map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : path === "/privacy/" ? 0.3 : 0.8,
      alternates: { languages: { en: `${SITE_URL}/en${path}`, ar: `${SITE_URL}/ar${path}` } },
    })),
  );
}
