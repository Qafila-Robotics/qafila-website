import type { ReactNode } from "react";

// Passthrough root layout: the real <html>/<body> live in app/[locale]/layout.tsx
// so lang/dir are set per locale. A root layout file is required by Next.js.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
