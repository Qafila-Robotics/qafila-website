import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { asset } from "./asset";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://qafila-robotics.github.io";

// Public contact address. support@qafila.io is the organisation's published address;
// set NEXT_PUBLIC_CONTACT_EMAIL to route investor and demo mail elsewhere. [TBD] confirm.
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "support@qafila.io";

// Site pages, in navigation order. `key` names the nav label and the meta namespace.
export const PAGES = [
  { key: "platform", path: "/platform/" },
  { key: "robots", path: "/robots/" },
  { key: "howItWorks", path: "/how-it-works/" },
  { key: "developers", path: "/developers/" },
  { key: "useCases", path: "/use-cases/" },
  { key: "company", path: "/company/" },
] as const;

export type PageKey = "home" | "privacy" | (typeof PAGES)[number]["key"];

/** Locale-prefixed internal href ("/en/platform/"). next/link adds the base path. */
export const href = (locale: string, path = "/") => `/${locale}${path}`;

export const DEMO_PATH = "/company/#contact";

/** Per-page metadata: title, description, canonical, hreflang, Open Graph and Twitter card. */
export async function pageMetadata(locale: string, key: PageKey, path = "/"): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta" });
  const title = t(`${key}.title`);
  const description = t(`${key}.description`);
  const image = { url: asset("/og-image.png"), width: 1200, height: 630, alt: "Qafila Robotics" };
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: { en: `/en${path}`, ar: `/ar${path}`, "x-default": `/en${path}` },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}${path}`,
      siteName: t("siteName"),
      locale: locale === "ar" ? "ar_QA" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_QA"],
      type: "website",
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}

// Code samples, matching qafila-platform main (Makefile robot-onboard; routers under /v1).
export const ONBOARD_CMD = "make robot-onboard ROBOT=go2-01 CLASS=go2 HOST=go2-01 INSTALL_TAILSCALE=1";

export const API_SIGNIN = `CP=https://fleet.example.com   # your control plane

TOKEN=$(curl -s $CP/v1/auth/login \\
  -H 'content-type: application/json' \\
  -d '{"email":"you@example.com","password":"…","totp":"123456"}' \\
  | jq -r .access_token)

curl -s $CP/v1/robots -H "authorization: Bearer $TOKEN"`;

export const API_CONTROL = `ROBOT=<robot id>

# 1. Take the control lease (one holder at a time, 30 s idle)
LEASE=$(curl -s -X POST $CP/v1/robots/$ROBOT/lease \\
  -H "authorization: Bearer $TOKEN" | jq -r .lease.id)

# 2. Enable motion with the lease and the named safety check
curl -s -X POST $CP/v1/robots/$ROBOT/arm \\
  -H "authorization: Bearer $TOKEN" -H 'content-type: application/json' \\
  -d '{"lease_id":"'$LEASE'","presence":{"spotter_is_self":true,
       "remote_in_hand":true,"area_clear":true,
       "line_of_sight_or_voice":true,"unitree_remote_in_hand":true}}'

# 3. Keep the lease alive; when it ends, motion locks
curl -s -X POST $CP/v1/robots/$ROBOT/lease/renew -H "authorization: Bearer $TOKEN"`;
