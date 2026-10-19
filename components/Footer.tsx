import { useTranslations } from "next-intl";
import { asset } from "@/lib/asset";

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations("footer");
  const links = [
    { href: "#how-it-works", label: t("platform") },
    { href: "#fleet", label: t("fleet") },
    { href: "#use-cases", label: t("useCases") },
    { href: "#safety", label: t("safety") },
    { href: "#contact", label: t("contact") },
  ];
  // Western digits in both languages.
  const year = "2026";
  return (
    <footer className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/logo-simplified.svg")} alt="Qafila Robotics" className="h-9 w-auto" />
            <p className="mt-3 text-small text-ink-soft">{t("shortLine")}</p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-small text-ink-soft hover:text-maroon">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={`/${locale}/privacy/`} className="text-small text-ink-soft hover:text-maroon">
                  {t("privacy")}
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <p className="mt-10 border-t border-line pt-6 text-micro text-sand-text">
          © {year} {t("rights")}
        </p>
      </div>
    </footer>
  );
}
