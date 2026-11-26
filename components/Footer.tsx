import Link from "next/link";
import { useTranslations } from "next-intl";
import { CONTACT_EMAIL, DEMO_PATH, PAGES, href } from "@/lib/site";
import { Logo } from "./Header";

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");
  const tc = useTranslations("cta");
  // Western digits in both languages (brand rule).
  const year = "2026";
  return (
    <footer className="relative border-t border-edge bg-bg">
      {/* Dune edge (brand element), decoration only. */}
      <svg aria-hidden viewBox="0 0 1200 24" preserveAspectRatio="none" className="absolute -top-6 h-6 w-full">
        <path d="M0 24 Q600 0 1200 24" fill="none" className="stroke-dune dark:stroke-edge" strokeWidth="3" />
      </svg>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo className="h-9 w-auto" />
            <p className="mt-4 text-fg">{t("shortLine")}</p>
            <p className="text-small text-fg-soft">{t("made")}</p>
          </div>
          <nav aria-label="Footer">
            <ul className="grid gap-2">
              {PAGES.map((p) => (
                <li key={p.key}>
                  <Link prefetch={false} href={href(locale, p.path)} className="text-small text-fg-soft hover:text-fg">
                    {tn(p.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="grid content-start gap-2">
            <li>
              <Link href={href(locale, DEMO_PATH)} className="text-small font-medium text-fg hover:text-fg-soft">
                {tc("requestDemo")}
              </Link>
            </li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-small text-fg-soft hover:text-fg" dir="ltr">
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <Link href={href(locale, "/privacy/")} className="text-small text-fg-soft hover:text-fg">
                {t("privacy")}
              </Link>
            </li>
          </ul>
        </div>
        <p className="mt-12 border-t border-edge pt-6 text-small text-fg-soft">
          © {year} {t("rights")}
        </p>
      </div>
    </footer>
  );
}
