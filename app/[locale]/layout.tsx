import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { locales, isLocale, dir } from "@/i18n/routing";
import { asset } from "@/lib/asset";
import { SITE_URL } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";

// Self-hosted IBM Plex, copied byte-for-byte from qafila-platform packages/brand/fonts (OFL).
const plex = localFont({
  src: [
    { path: "../fonts/ibm-plex-sans-latin-400-normal.woff2", weight: "400" },
    { path: "../fonts/ibm-plex-sans-latin-500-normal.woff2", weight: "500" },
    { path: "../fonts/ibm-plex-sans-latin-600-normal.woff2", weight: "600" },
  ],
  variable: "--font-plex",
  display: "swap",
  preload: false,
  fallback: ["system-ui", "sans-serif"],
});
const plexAr = localFont({
  src: [
    { path: "../fonts/ibm-plex-sans-arabic-arabic-400-normal.woff2", weight: "400" },
    { path: "../fonts/ibm-plex-sans-arabic-arabic-600-normal.woff2", weight: "600" },
  ],
  variable: "--font-plex-ar",
  display: "swap",
  preload: false,
  fallback: ["system-ui", "sans-serif"],
});
const plexMono = localFont({
  src: [{ path: "../fonts/ibm-plex-mono-latin-400-normal.woff2", weight: "400" }],
  variable: "--font-plex-mono",
  display: "swap",
  preload: false,
  fallback: ["ui-monospace", "monospace"],
});

// Runs before first paint to avoid a theme flash: stored choice, else the OS, else light
// (cream carries most surfaces in the brand guidelines).
const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.classList.toggle('dark',t==='dark');}catch(e){}})();`;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: { icon: asset("/icon.svg"), apple: asset("/apple-touch-icon.png") },
};

export const viewport: Viewport = {
  // Browser UI colour: brand cream / night (meta theme-color needs literal values).
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF7F2" },
    { media: "(prefers-color-scheme: dark)", color: "#1C1714" },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);
  // Only the namespaces client components read (Header, LangSwitch, ThemeToggle, Contact);
  // everything else renders on the server, so the rest of the catalogue stays out of the HTML.
  const all = await getMessages();
  const messages = Object.fromEntries(
    ["nav", "cta", "langSwitch", "theme", "contact"].map((k) => [k, all[k]]),
  );

  return (
    <html lang={locale} dir={dir(locale)} suppressHydrationWarning>
      <body
        className={`${plex.variable} ${plexAr.variable} ${plexMono.variable} ${
          locale === "ar" ? "font-arabic" : "font-sans"
        } bg-bg text-fg antialiased`}
      >
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main id="main">{children}</main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
