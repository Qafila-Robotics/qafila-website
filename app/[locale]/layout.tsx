import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { IBM_Plex_Sans, IBM_Plex_Sans_Arabic, IBM_Plex_Mono } from "next/font/google";
import { locales, isLocale, dir } from "@/i18n/routing";
import { asset } from "@/lib/asset";
import "../globals.css";

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
  display: "swap",
  // Latin files are small and load fast without preheating; preloading them on
  // /ar (where only the Arabic font is used) would steal bandwidth from the
  // Arabic headline font (the LCP element) under throttling.
  preload: false,
});
const plexAr = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  // Two weights only (regular + semibold): Arabic uses 500 on minor UI chrome,
  // which maps cleanly to 600. Cuts a third of the Arabic font payload, which is
  // the /ar LCP (the hero heading). Headings 600, body 400.
  weight: ["400", "600"],
  variable: "--font-plex-ar",
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
  // Mono is only used for small labels/numbers, never the LCP headline — don't
  // let it compete for bandwidth with the heading font on first paint.
  preload: false,
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://qafila-robotics.github.io";

// Runs before first paint to avoid a theme flash. Default: follow the OS; fall back to dark.
const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.classList.toggle('dark',t!=='light');}catch(e){document.documentElement.classList.add('dark');}})();`;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    metadataBase: new URL(SITE_URL),
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", ar: "/ar", "x-default": "/en" },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `/${locale}`,
      siteName: "Qafila Robotics",
      locale: locale === "ar" ? "ar_QA" : "en",
      type: "website",
      images: [{ url: asset("/og-image.png"), width: 1200, height: 630 }],
    },
    icons: { icon: asset("/icon.svg"), apple: asset("/apple-touch-icon.png") },
  };
}

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
  const messages = await getMessages();

  return (
    <html lang={locale} dir={dir(locale)} suppressHydrationWarning>
      <body
        className={`${plex.variable} ${plexAr.variable} ${plexMono.variable} ${
          locale === "ar" ? "font-arabic" : "font-sans"
        } bg-bg text-fg antialiased`}
      >
        {/* Set the theme before paint: stored choice, else prefers-color-scheme, else dark. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
