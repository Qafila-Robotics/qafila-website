// Prefix public assets with the deploy base path (empty for org-pages / custom domain).
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const asset = (path: string) => `${BASE_PATH}${path}`;
