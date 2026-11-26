import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { use } from "react";
import { DEMO_PATH, href, pageMetadata } from "@/lib/site";
import { ButtonLink, Container, Heading, PageHero, Screenshot, Section, StatusPill, type Status } from "@/components/ui";
import SafetyGate from "@/components/diagrams/SafetyGate";
import BrainLoop from "@/components/diagrams/BrainLoop";
import {
  IconAdjustments,
  IconAlertTriangle,
  IconCheck,
  IconClock,
  IconDeviceTv,
  IconFileText,
  IconHandStop,
  IconHistory,
  IconKey,
  IconLayoutGrid,
  IconLinkOff,
  IconLock,
  IconMessage,
  IconNetwork,
  IconPointer,
  IconShieldLock,
  IconUser,
  IconVideo,
  type IconType,
} from "@/components/icons";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "platform", "/platform/");
}

// Feature rows: the first four carry a screenshot slot each; the rest are a compact list.
const SHOWCASE = [
  { key: "fleet", shot: "fleet", icon: IconLayoutGrid },
  { key: "camera", shot: "camera", icon: IconVideo },
  { key: "control", shot: "control", icon: IconHandStop },
  { key: "capsule", shot: "capsule", icon: IconHistory },
] as const;
const MORE = [
  { key: "actions", icon: IconPointer },
  { key: "profiles", icon: IconAdjustments },
  { key: "incidents", icon: IconAlertTriangle },
  { key: "wall", icon: IconDeviceTv },
  { key: "copilot", icon: IconMessage },
] as const;
const SAFETY = [
  { n: 1, icon: IconLinkOff },
  { n: 2, icon: IconClock },
  { n: 3, icon: IconHandStop },
  { n: 4, icon: IconUser },
  { n: 5, icon: IconLock },
  { n: 6, icon: IconFileText },
] as const;
const SECURITY: { key: string; icon: IconType; status: Status }[] = [
  { key: "robot", icon: IconShieldLock, status: "available" },
  { key: "transit", icon: IconLock, status: "available" },
  { key: "roles", icon: IconUser, status: "available" },
  { key: "tokens", icon: IconKey, status: "available" },
  { key: "audit", icon: IconFileText, status: "available" },
  { key: "network", icon: IconNetwork, status: "available" },
  { key: "updates", icon: IconCheck, status: "available" },
  { key: "secrets", icon: IconLock, status: "available" },
  { key: "signed", icon: IconKey, status: "inDevelopment" },
];

export default function Platform({ params }: Params) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("platform");
  const tc = useTranslations("cta");
  const tl = useTranslations("shots");

  const jump = [
    { id: "command", label: t("command.title") },
    { id: "missions", label: t("missions.title") },
    { id: "fleet-brain", label: t("brain.title") },
    { id: "safety", label: t("safety.title") },
    { id: "security", label: t("security.title") },
    { id: "integrations", label: t("integrations.title") },
  ];

  return (
    <>
      <PageHero title={t("hero.title")} lead={t("hero.lead")}>
        <nav aria-label={t("jump")} className="mt-10">
          <ul className="flex flex-wrap gap-2">
            {jump.map((j) => (
              <li key={j.id}>
                <a
                  href={`#${j.id}`}
                  className="inline-flex min-h-10 items-center rounded-full border border-edge bg-surface px-4 text-small text-fg-soft hover:border-fg-soft hover:text-fg"
                >
                  {j.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      {/* Fleet command center */}
      <Section id="command" labelledBy="command-title">
        <Container>
          <StatusPill status="available" />
          <Heading id="command-title" title={t("command.title")} lead={t("command.lead")} className="mt-4" />
          <div className="mt-14 grid gap-16">
            {SHOWCASE.map(({ key, shot, icon: Icon }, i) => (
              <article key={key} className="grid items-center gap-8 lg:grid-cols-12">
                <div className={`lg:col-span-5 ${i % 2 ? "lg:order-2" : ""}`}>
                  <Icon className="h-7 w-7 text-primary-accent" />
                  <h3 className="mt-4 text-h3 font-semibold text-fg sm:text-h2">{t(`command.${key}Title`)}</h3>
                  <p className="mt-3 max-w-prose text-fg-soft">{t(`command.${key}Body`)}</p>
                </div>
                <div className={`lg:col-span-7 ${i % 2 ? "lg:order-1" : ""}`}>
                  <Screenshot name={shot} label={t(`command.${key}Title`)} />
                </div>
              </article>
            ))}
          </div>
          <ul className="mt-16 grid gap-x-10 border-b border-edge md:grid-cols-2 lg:grid-cols-3">
            {MORE.map(({ key, icon: Icon }) => (
              <li key={key} className="border-t border-edge py-6">
                <Icon className="h-6 w-6 text-primary-accent" />
                <h3 className="mt-3 font-semibold text-fg">{t(`command.${key}Title`)}</h3>
                <p className="mt-2 text-small text-fg-soft">{t(`command.${key}Body`)}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Missions */}
      <Section id="missions" labelledBy="missions-title" className="border-t border-edge bg-surface">
        <Container>
          <StatusPill status="partial" />
          <Heading id="missions-title" title={t("missions.title")} lead={t("missions.lead")} className="mt-4" />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="rounded-panel border border-edge bg-bg p-6 sm:p-8">
              <StatusPill status="available" />
              <h3 className="mt-4 text-h3 font-semibold text-fg">{t("missions.todayTitle")}</h3>
              <p className="mt-3 text-fg-soft">{t("missions.todayBody")}</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <Screenshot name="missions" label={tl("missions")} aspect="aspect-[4/3]" />
                <Screenshot name="map" label={tl("map")} aspect="aspect-[4/3]" />
              </div>
            </article>
            <article className="rounded-panel border border-dashed border-fg-muted/50 p-6 sm:p-8">
              <StatusPill status="inDevelopment" />
              <h3 className="mt-4 text-h3 font-semibold text-fg">{t("missions.nextTitle")}</h3>
              <p className="mt-3 text-fg-soft">{t("missions.nextBody")}</p>
              <p className="mt-4 text-small text-fg-muted">{t("missions.nextNote")}</p>
            </article>
          </div>
        </Container>
      </Section>

      {/* Fleet Brain */}
      <Section id="fleet-brain" labelledBy="brain-title" className="border-t border-edge">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <StatusPill status="inDevelopment" />
              <Heading id="brain-title" title={t("brain.title")} lead={t("brain.lead")} className="mt-4" />
              <p className="mt-6 max-w-prose text-fg-soft">{t("brain.body")}</p>
              <p className="mt-6 rounded-card border border-dashed border-fg-muted/50 p-4 text-small text-fg-soft">
                {t("brain.status")}
              </p>
            </div>
            <div className="lg:col-span-7 lg:pt-10">
              <BrainLoop />
            </div>
          </div>
        </Container>
      </Section>

      {/* Safety by design */}
      <Section id="safety" labelledBy="safety-title" className="border-t border-edge bg-surface">
        <Container>
          <StatusPill status="available" />
          <Heading id="safety-title" title={t("safety.title")} lead={t("safety.lead")} className="mt-4" />
          <div className="mt-12">
            <SafetyGate />
          </div>
          <ul className="mt-14 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
            {SAFETY.map(({ n, icon: Icon }) => (
              <li key={n} className="border-t border-edge py-6">
                <Icon className="h-6 w-6 text-primary-accent" />
                <h3 className="mt-3 font-semibold text-fg">{t(`safety.p${n}Title`)}</h3>
                <p className="mt-2 text-small text-fg-soft">{t(`safety.p${n}Body`)}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-prose border-s-2 border-primary-accent ps-3 text-small text-fg-soft">{t("safety.evidence")}</p>
        </Container>
      </Section>

      {/* Security */}
      <Section id="security" labelledBy="security-title" className="border-t border-edge">
        <Container>
          <Heading id="security-title" title={t("security.title")} lead={t("security.lead")} />
          <ul className="mt-12 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
            {SECURITY.map(({ key, icon: Icon, status }) => (
              <li key={key} className="border-t border-edge py-6">
                <div className="flex items-center justify-between gap-3">
                  <Icon className="h-6 w-6 text-primary-accent" />
                  <StatusPill status={status} />
                </div>
                <h3 className="mt-3 font-semibold text-fg">{t(`security.${key}Title`)}</h3>
                <p className="mt-2 text-small text-fg-soft">{t(`security.${key}Body`)}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Integrations */}
      <Section id="integrations" labelledBy="integrations-title" className="border-t border-edge bg-surface">
        <Container>
          <Heading id="integrations-title" title={t("integrations.title")} lead={t("integrations.lead")} />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <li key={n} className="rounded-card border border-edge bg-bg p-5">
                <h3 className="font-semibold text-fg" dir="auto">
                  {t(`integrations.i${n}Title`)}
                </h3>
                <p className="mt-2 text-small text-fg-soft">{t(`integrations.i${n}Body`)}</p>
              </li>
            ))}
          </ul>
          <div className="mt-14 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={href(locale, DEMO_PATH)}>{tc("requestDemo")}</ButtonLink>
            <ButtonLink href={href(locale, "/how-it-works/")} variant="secondary" arrow>
              {tc("howItWorks")}
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
