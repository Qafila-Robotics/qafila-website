import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { BASE_HEADERS, csp } from "./security-headers.mjs";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

// Project-repo Pages serve under /<repo>; an org-pages repo or custom domain needs none.
// Set BASE_PATH in CI (e.g. "/qafila-website") when deploying to a project repo.
const basePath = process.env.BASE_PATH || "";
// Static export by default (GitHub Pages). NEXT_OUTPUT=server runs `next start` with real headers.
const server = process.env.NEXT_OUTPUT === "server";

const nextConfig: NextConfig = {
  output: server ? undefined : "export",
  basePath: basePath || undefined,
  images: { unoptimized: true },
  trailingSlash: true,
  poweredByHeader: false,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  ...(server && {
    async headers() {
      // Server mode cannot hash Next's inline scripts ahead of time, so scripts allow 'unsafe-inline'
      // there; the static export uses per-page hashes instead (scripts/postbuild-security.mjs).
      const headers = { ...BASE_HEADERS, "Content-Security-Policy": csp({ scriptSrc: ["'self'", "'unsafe-inline'"] }) };
      return [{ source: "/:path*", headers: Object.entries(headers).map(([key, value]) => ({ key, value })) }];
    },
  }),
};

export default withNextIntl(nextConfig);
