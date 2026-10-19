import Link from "next/link";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { asset } from "@/lib/asset";

export default async function Privacy({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("privacy");
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link href={`/${locale}/`} className="inline-flex items-center gap-2" aria-label="Qafila Robotics">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset("/logo-simplified.svg")} alt="Qafila Robotics" className="h-9 w-auto" />
      </Link>
      <h1 className="mt-10 text-h1 font-semibold text-ink">{t("title")}</h1>
      <p className="mt-4 text-ink-soft">{t("intro")}</p>

      <h2 className="mt-10 text-h2 font-semibold text-ink">{t("whatTitle")}</h2>
      <p className="mt-3 text-ink-soft">{t("whatBody")}</p>

      <h2 className="mt-8 text-h2 font-semibold text-ink">{t("whyTitle")}</h2>
      <p className="mt-3 text-ink-soft">{t("whyBody")}</p>

      <p className="mt-8 rounded-card border border-dashed border-line bg-white/60 p-4 text-small text-sand-text">
        {t("legalBody")}
      </p>

      <Link href={`/${locale}/`} className="mt-10 inline-block text-sand-text underline">
        {t("back")}
      </Link>
    </div>
  );
}
