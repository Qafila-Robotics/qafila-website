import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { use } from "react";
import { DEMO_PATH, href, pageMetadata } from "@/lib/site";
import { ButtonLink, Container, PageHero, Section, StatusPill, TextLink, VideoSlot, type Status } from "@/components/ui";
import RobotIcon, { type RobotType } from "@/components/RobotIcon";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "robots", "/robots/");
}

// Order follows what is connected today first. Status per class reflects qafila-platform main.
const CLASSES: { type: RobotType; status: Status }[] = [
  { type: "quadruped", status: "available" },
  { type: "humanoid", status: "inProgress" },
  { type: "drone", status: "inDevelopment" },
  { type: "ground", status: "inDevelopment" },
];

export default function Robots({ params }: Params) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("robots");
  const tc = useTranslations("cta");
  const tn = useTranslations("nav");

  return (
    <>
      <PageHero title={t("hero.title")} lead={t("hero.lead")} />

      <Section className="!pt-12">
        <Container>
          <div className="grid gap-6">
            {CLASSES.map(({ type, status }) => (
              <article
                key={type}
                id={type}
                aria-labelledby={`${type}-title`}
                className="scroll-mt-24 overflow-hidden rounded-panel border border-edge bg-surface"
              >
                <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-12">
                  <div className="lg:col-span-6">
                    <div className="flex items-start justify-between gap-4">
                      <RobotIcon type={type} className="h-20 w-20 shrink-0 sm:h-24 sm:w-24" />
                      <StatusPill status={status} />
                    </div>
                    <h2 id={`${type}-title`} className="mt-4 text-h2 font-semibold tracking-tight text-fg">
                      {t(`${type}.title`)}
                    </h2>
                    <p className="mt-1 text-small text-fg-soft" dir="auto">
                      {t(`${type}.model`)}
                    </p>
                    <dl className="mt-6 grid gap-4">
                      <div>
                        <dt className="text-small font-medium text-fg-muted">{t("does")}</dt>
                        <dd className="mt-1 text-fg">{t(`${type}.does`)}</dd>
                      </div>
                      <div>
                        <dt className="text-small font-medium text-fg-muted">{t("connects")}</dt>
                        <dd className="mt-1 text-fg">{t(`${type}.connects`)}</dd>
                      </div>
                    </dl>
                    <p className="mt-6 border-s-2 border-primary-accent ps-3 text-small text-fg-soft">{t(`${type}.state`)}</p>
                  </div>
                  <div className="lg:col-span-6">
                    <VideoSlot name={type} label={t("video")} note={t("videoNote")} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section labelledBy="byo-title" className="border-t border-edge">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 id="byo-title" className="text-h2 font-semibold tracking-tight text-fg sm:text-h1">
                {t("byo.title")}
              </h2>
              <p className="mt-4 max-w-prose text-fg-soft">{t("byo.body")}</p>
              <p className="mt-4 text-small text-fg-muted">{t("byo.tbd")}</p>
            </div>
            <div className="flex flex-col items-start justify-end gap-4 lg:col-span-5">
              <ButtonLink href={href(locale, DEMO_PATH)}>{tc("requestDemo")}</ButtonLink>
              <TextLink href={href(locale, "/developers/")}>{tn("developers")}</TextLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
