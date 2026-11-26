import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { use } from "react";
import { href, pageMetadata } from "@/lib/site";
import { Container, TextLink } from "@/components/ui";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "privacy", "/privacy/");
}

export default function Privacy({ params }: Params) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("privacy");
  return (
    <Container className="py-16 sm:py-24">
      <div className="max-w-prose">
        <h1 className="text-h1 font-semibold tracking-tight text-fg">{t("title")}</h1>
        <p className="mt-4 text-fg-soft">{t("intro")}</p>
        <h2 className="mt-10 text-h2 font-semibold text-fg">{t("whatTitle")}</h2>
        <p className="mt-3 text-fg-soft">{t("whatBody")}</p>
        <h2 className="mt-8 text-h2 font-semibold text-fg">{t("whyTitle")}</h2>
        <p className="mt-3 text-fg-soft">{t("whyBody")}</p>
        <p className="mt-8 rounded-card border border-dashed border-fg-muted/50 bg-surface p-4 text-small text-fg-muted">
          {t("legalBody")}
        </p>
        <TextLink href={href(locale)} className="mt-10">
          {t("back")}
        </TextLink>
      </div>
    </Container>
  );
}
