// Security headers for the public site, one source for every host.
// - Static export (GitHub Pages, today): Pages cannot set response headers. scripts/postbuild-security.mjs
//   injects a per-page Content-Security-Policy <meta> with sha256 hashes of that page's inline scripts
//   (no 'unsafe-inline' for scripts), and writes out/_headers for hosts that read it (Cloudflare Pages,
//   Netlify). HSTS on *.github.io is set by GitHub when "Enforce HTTPS" is on.
// - Server mode (NEXT_OUTPUT=server, e.g. `next start` behind a proxy): next.config.ts sends these headers.
// No third-party scripts, trackers or fonts; the only outside origin is the contact form endpoint.
export const FORM_ORIGIN = "https://api.web3forms.com";

/** CSP directives. `scriptSrc` is replaced per page with hashes in the static export. */
export function csp({ scriptSrc = ["'self'"], forMeta = false } = {}) {
  const d = {
    "default-src": ["'self'"],
    "script-src": scriptSrc,
    "style-src": ["'self'", "'unsafe-inline'"], // React style attributes (CSS custom properties)
    "img-src": ["'self'", "data:"],
    "font-src": ["'self'"],
    "media-src": ["'self'"],
    "connect-src": ["'self'", FORM_ORIGIN],
    "form-action": ["'self'", FORM_ORIGIN],
    "object-src": ["'none'"],
    "base-uri": ["'self'"],
    "manifest-src": ["'self'"],
    "worker-src": ["'none'"],
  };
  // frame-ancestors is ignored in a <meta> CSP; it is sent only as a header.
  if (!forMeta) d["frame-ancestors"] = ["'none'"];
  return Object.entries(d)
    .map(([k, v]) => `${k} ${v.join(" ")}`)
    .concat(forMeta ? [] : ["upgrade-insecure-requests"])
    .join("; ");
}

export const BASE_HEADERS = {
  "Strict-Transport-Security": "max-age=63072000; includeSubDomains",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  "Cross-Origin-Opener-Policy": "same-origin",
};
