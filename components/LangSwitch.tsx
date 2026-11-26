"use client";

import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

// Switches locale on the same page, keeping the reader on the same section (URL hash).
export default function LangSwitch({ className = "" }: { className?: string }) {
  const t = useTranslations("langSwitch");
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useParams<{ locale: string }>();

  const other = locale === "ar" ? "en" : "ar";
  const rest = (pathname || "").replace(/^\/(en|ar)(?=\/|$)/, "");
  const target = `/${other}${rest || "/"}`;

  return (
    <Link
      href={target}
      lang={other}
      hrefLang={other}
      className={`inline-flex min-h-11 items-center rounded-control text-small font-medium text-fg-soft hover:text-fg ${className}`}
      aria-label={t("label")}
      onClick={(e) => {
        const hash = window.location.hash;
        if (hash) {
          e.preventDefault();
          router.push(target + hash);
        }
      }}
    >
      {other === "ar" ? t("toArabic") : t("toEnglish")}
    </Link>
  );
}
