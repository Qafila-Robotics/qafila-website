import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { use } from "react";
import { DEMO_PATH, href, pageMetadata } from "@/lib/site";
import { ButtonLink, Container, PageHero, Section } from "@/components/ui";
import RobotIcon, { type RobotType } from "@/components/RobotIcon";
import { IconAlertTriangle, IconDeviceTv, IconHandStop, IconFileText, type IconType } from "@/components/icons";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "useCases", "/use-cases/");
}

const CASES: { key: string; icon: IconType; robots: RobotType[] }[] = [
  { key: "inspection", icon: IconAlertTriangle, robots: ["quadruped", "drone"] },
  { key: "security", icon: IconDeviceTv, robots: ["quadruped", "ground"] },
  { key: "events", icon: IconHandStop, robots: ["humanoid", "quadruped"] },
  { key: "research", icon: IconFileText, robots: ["humanoid", "quadruped", "drone", "ground"] },
];

export default function UseCases({ params }: Params) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("useCases");
  const tc = useTranslations("cta");

  return (
    <>
      <PageHero title={t("hero.title")} lead={t("hero.lead")} />
      <Section className="!pt-12">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {CASES.map(({ key, icon: Icon, robots }) => (
              <article key={key} aria-labelledby={`${key}-title`} className="flex flex-col rounded-panel border border-edge bg-surface p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <Icon className="h-7 w-7 text-primary-accent" />
                  <div className="flex -space-x-2 rtl:space-x-reverse" aria-hidden>
                    {robots.map((r) => (
                      <span key={r} className="flex h-11 w-11 items-center justify-center rounded-full border border-edge bg-bg">
                        <RobotIcon type={r} className="h-8 w-8" />
                      </span>
                    ))}
                  </div>
                </div>
                <h2 id={`${key}-title`} className="mt-5 text-h2 font-semibold tracking-tight text-fg">
                  {t(`${key}.title`)}
                </h2>
                <p className="mt-2 text-fg-soft">{t(`${key}.task`)}</p>
                <dl className="mt-6 grid flex-1 content-start gap-4 border-t border-edge pt-6 text-small">
                  <div>
                    <dt className="font-medium text-fg-muted">{t("robotsLabel")}</dt>
                    <dd className="mt-1 text-fg">{t(`${key}.robots`)}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-fg-muted">{t("todayLabel")}</dt>
                    <dd className="mt-1 text-fg">{t(`${key}.today`)}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-fg-muted">{t("nextLabel")}</dt>
                    <dd className="mt-1 text-fg-soft">{t(`${key}.next`)}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <ButtonLink href={href(locale, DEMO_PATH)} className="mt-12">
            {tc("requestDemo")}
          </ButtonLink>
        </Container>
      </Section>
    </>
  );
}
