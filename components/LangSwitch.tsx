"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

// Switches locale while keeping the reader on the same section (via the URL hash).
export default function LangSwitch({ className = "" }: { className?: string }) {
  const t = useTranslations("langSwitch");
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useParams<{ locale: string }>();

  const other = locale === "ar" ? "en" : "ar";
  const rest = pathname.replace(/^\/(en|ar)/, "");
  const href = `/${other}${rest || "/"}`;

  return (
    <a
      href={href}
      lang={other}
      className={`text-small font-medium text-ink-soft hover:text-maroon ${className}`}
      aria-label={t("label")}
      onClick={(e) => {
        const hash = typeof window !== "undefined" ? window.location.hash : "";
        if (hash) {
          e.preventDefault();
          router.push(href + hash);
        }
      }}
    >
      {other === "ar" ? t("toArabic") : t("toEnglish")}
    </a>
  );
}
