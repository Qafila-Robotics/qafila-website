import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { use } from "react";
import { DEMO_PATH, href, pageMetadata } from "@/lib/site";
import { ButtonLink, CaravanDots, Container, Heading, Section, StatusPill, TextLink, type Status } from "@/components/ui";
import FleetFrame from "@/components/FleetFrame";
import SafetyGate from "@/components/diagrams/SafetyGate";
import RobotIcon, { type RobotType } from "@/components/RobotIcon";
import {
  IconAlertTriangle,
  IconDeviceTv,
  IconHandStop,
  IconHistory,
  IconLayoutGrid,
  IconMap,
  IconMessage,
  IconVideo,
} from "@/components/icons";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "home", "/");
}

const TODAY = [
  { key: "fleet", icon: IconLayoutGrid },
  { key: "camera", icon: IconVideo },
  { key: "control", icon: IconHandStop },
  { key: "incidents", icon: IconAlertTriangle },
  { key: "capsule", icon: IconHistory },
  { key: "wall", icon: IconDeviceTv },
  { key: "copilot", icon: IconMessage },
  { key: "map", icon: IconMap },
] as const;

const PILLARS: { key: string; status: Status; anchor: string }[] = [
  { key: "command", status: "available", anchor: "#command" },
  { key: "missions", status: "partial", anchor: "#missions" },
  { key: "brain", status: "inDevelopment", anchor: "#fleet-brain" },
  { key: "safety", status: "available", anchor: "#safety" },
];

const ROBOTS: { type: RobotType; status: Status }[] = [
  { type: "quadruped", status: "available" },
  { type: "humanoid", status: "inProgress" },
  { type: "drone", status: "inDevelopment" },
  { type: "ground", status: "inDevelopment" },
];

export default function Home({ params }: Params) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("home");
  const tc = useTranslations("cta");
  const tr = useTranslations("robotClass");

  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-edge">
        <Container className="pb-16 pt-12 sm:pb-24 sm:pt-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5 lg:pt-6">
              <CaravanDots animate className="mb-8" />
              <h1 className="text-balance text-[2.75rem] font-semibold leading-[1.05] tracking-tight text-fg sm:text-display lg:text-[4rem]">
                {t("hero.title")}
              </h1>
              <p className="mt-6 max-w-prose text-pretty text-fg-soft sm:text-h3 sm:font-normal sm:leading-relaxed">
                {t("hero.lead")}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={href(locale, DEMO_PATH)}>{tc("requestDemo")}</ButtonLink>
                <ButtonLink href={href(locale, "/platform/")} variant="secondary" arrow>
                  {tc("seePlatform")}
                </ButtonLink>
              </div>
              <p className="mt-8 border-s-2 border-primary-accent ps-3 text-small text-fg-soft">{t("hero.note")}</p>
            </div>
            <div className="lg:col-span-7">
              <FleetFrame />
            </div>
          </div>
        </Container>
      </div>

      {/* What runs today */}
      <Section labelledBy="today-title">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Heading id="today-title" title={t("today.title")} />
              <p className="mt-4 max-w-prose text-fg-soft">{t("today.intro")}</p>
              <StatusPill status="available" className="mt-6" />
            </div>
            <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
              {TODAY.map(({ key, icon: Icon }) => (
                <li key={key} className="flex gap-4 border-t border-edge py-5">
                  <Icon className="mt-0.5 h-6 w-6 shrink-0 text-primary-accent" />
                  <div>
                    <h3 className="font-semibold text-fg">{t(`today.${key}Title`)}</h3>
                    <p className="mt-1 text-small text-fg-soft">{t(`today.${key}Body`)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Four pillars */}
      <Section labelledBy="pillars-title" className="border-t border-edge bg-surface">
        <Container>
          <Heading id="pillars-title" title={t("pillars.title")} lead={t("pillars.intro")} />
          <div className="mt-12 grid gap-px overflow-hidden rounded-panel border border-edge bg-edge md:grid-cols-2">
            {PILLARS.map((p) => (
              <article key={p.key} className="flex flex-col bg-surface p-6 sm:p-8">
                <StatusPill status={p.status} className="self-start" />
                <h3 className="mt-5 text-h3 font-semibold text-fg sm:text-h2">{t(`pillars.${p.key}Title`)}</h3>
                <p className="mt-3 max-w-prose flex-1 text-fg-soft">{t(`pillars.${p.key}Body`)}</p>
                <TextLink href={href(locale, `/platform/${p.anchor}`)} className="mt-6 self-start">
                  {t(`pillars.${p.key}Link`)}
                </TextLink>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* The cloud asks. The robot decides. */}
      <section aria-labelledby="safety-title" className="bg-inv-bg py-16 text-inv-fg sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <h2 id="safety-title" className="text-balance text-h2 font-semibold tracking-tight sm:text-h1">
                {t("safety.title")}
              </h2>
              <p className="mt-4 text-inv-soft">{t("safety.body")}</p>
              <p className="mt-6 border-s-2 border-sand-light ps-3 text-small text-inv-soft">{t("safety.evidence")}</p>
              <ButtonLink href={href(locale, "/platform/#safety")} variant="inverted" arrow className="mt-8">
                {t("safety.link")}
              </ButtonLink>
            </div>
            <div className="lg:col-span-7">
              <SafetyGate tone="inverted" />
            </div>
          </div>
        </Container>
      </section>

      {/* Robots */}
      <Section labelledBy="robots-title">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Heading id="robots-title" title={t("robots.title")} lead={t("robots.intro")} />
            <TextLink href={href(locale, "/robots/")} className="shrink-0">
              {t("robots.link")}
            </TextLink>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {ROBOTS.map((r) => (
              <li key={r.type} className="flex flex-col rounded-card border border-edge bg-surface p-4 sm:p-6">
                <RobotIcon type={r.type} className="h-16 w-16 sm:h-20 sm:w-20" />
                <h3 className="mt-4 font-semibold text-fg">{tr(r.type)}</h3>
                <StatusPill status={r.status} className="mt-3 self-start" />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* How it works (summary) */}
      <Section labelledBy="how-title" className="border-t border-edge">
        <Container>
          <Heading id="how-title" title={t("how.title")} />
          <div className="relative mt-12">
          <div aria-hidden className="route-x absolute inset-x-0 top-5 hidden h-4 -translate-y-1/2 md:block" />
          <ol className="relative grid gap-8 md:grid-cols-3 md:gap-6">
            {[1, 2, 3].map((n) => (
              <li key={n} className="relative">
                <span
                  className={`relative flex h-10 w-10 items-center justify-center rounded-full border-2 font-mono text-small font-medium ${
                    n === 3 ? "border-primary bg-primary text-on-primary" : "border-edge bg-bg text-fg"
                  }`}
                >
                  {n}
                </span>
                <p className="mt-4 max-w-xs text-fg">{t(`how.step${n}`)}</p>
              </li>
            ))}
          </ol>
          </div>
          <TextLink href={href(locale, "/how-it-works/")} className="mt-10">
            {t("how.link")}
          </TextLink>
        </Container>
      </Section>

      {/* Why Qafila */}
      <Section labelledBy="why-title" className="border-t border-edge">
        <Container>
          <h2 id="why-title" className="text-h2 font-semibold tracking-tight text-fg sm:text-h1">
            {t("why.title")}
          </h2>
          <dl className="mt-12 grid gap-x-10 gap-y-2 md:grid-cols-2">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="border-t border-edge py-6">
                <dt className="text-h3 font-semibold text-fg">{t(`why.w${n}Title`)}</dt>
                <dd className="mt-2 max-w-prose text-fg-soft">{t(`why.w${n}Body`)}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      {/* Stage + closing CTA */}
      <Section labelledBy="stage-title" className="border-t border-edge bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 id="stage-title" className="text-h2 font-semibold tracking-tight text-fg">
                {t("stage.title")}
              </h2>
              <p className="mt-4 max-w-prose text-fg-soft">{t("stage.body")}</p>
              <p className="mt-4 text-small text-fg-muted">{t("stage.pilot")}</p>
            </div>
            <div className="rounded-panel border border-edge bg-bg p-6 sm:p-10">
              <h2 className="text-h2 font-semibold tracking-tight text-fg">{t("closing.title")}</h2>
              <p className="mt-3 text-fg-soft">{t("closing.body")}</p>
              <ButtonLink href={href(locale, DEMO_PATH)} className="mt-8">
                {tc("requestDemo")}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
