import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

// Project-repo Pages serve under /<repo>; an org-pages repo or custom domain needs none.
// Set BASE_PATH in CI (e.g. "/Landing-page") when deploying to a project repo.
const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  images: { unoptimized: true },
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default withNextIntl(nextConfig);
