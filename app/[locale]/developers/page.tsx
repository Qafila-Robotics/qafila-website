import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { use } from "react";
import { API_CONTROL, API_SIGNIN, DEMO_PATH, ONBOARD_CMD, href, pageMetadata } from "@/lib/site";
import { ButtonLink, Container, Heading, PageHero, Section, StatusPill, type Status } from "@/components/ui";
import CodeBlock from "@/components/CodeBlock";
import { IconFileText, IconTerminal, IconCpu, IconNetwork, type IconType } from "@/components/icons";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "developers", "/developers/");
}

const BLOCKS: { key: string; icon: IconType; status: Status }[] = [
  { key: "api", icon: IconNetwork, status: "available" },
  { key: "contracts", icon: IconFileText, status: "available" },
  { key: "sdk", icon: IconCpu, status: "inDevelopment" },
  { key: "docs", icon: IconTerminal, status: "inDevelopment" },
];

export default function Developers({ params }: Params) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("developers");
  const steps = [
    { n: 1, code: ONBOARD_CMD },
    { n: 2, code: API_SIGNIN },
    { n: 3, code: API_CONTROL },
  ];

  return (
    <>
      <PageHero title={t("hero.title")} lead={t("hero.lead")} />

      <Section labelledBy="steps-title" className="!pt-12">
        <Container>
          <Heading id="steps-title" title={t("stepsTitle")} />
          <p className="mt-3 text-small text-fg-muted">{t("codeNote")}</p>
          <ol className="mt-10 grid gap-12">
            {steps.map(({ n, code }) => (
              <li key={n} className="grid gap-6 lg:grid-cols-12 lg:gap-10">
                <div className="flex gap-4 lg:col-span-4">
                  <span
                    aria-hidden
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 font-mono text-small font-medium ${
                      n === 3 ? "border-primary bg-primary text-on-primary" : "border-edge bg-bg text-fg"
                    }`}
                  >
                    {n}
                  </span>
                  <div>
                    <h3 className="text-h3 font-semibold text-fg">{t(`s${n}Title`)}</h3>
                    <p className="mt-2 text-fg-soft">{t(`s${n}Body`)}</p>
                  </div>
                </div>
                <div className="min-w-0 lg:col-span-8">
                  <CodeBlock code={code} label={t(`s${n}Title`)} copyLabel={t("copy")} copiedLabel={t("copied")} />
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section labelledBy="blocks-title" className="border-t border-edge bg-surface">
        <Container>
          <h2 id="blocks-title" className="sr-only">
            {t("hero.title")}
          </h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {BLOCKS.map(({ key, icon: Icon, status }) => (
              <li key={key} className="rounded-card border border-edge bg-bg p-6">
                <div className="flex items-center justify-between gap-3">
                  <Icon className="h-6 w-6 text-primary-accent" />
                  <StatusPill status={status} />
                </div>
                <h3 className="mt-4 text-h3 font-semibold text-fg">{t(`${key}Title`)}</h3>
                <p className="mt-2 text-fg-soft">{t(`${key}Body`)}</p>
                {key === "docs" && <p className="mt-3 text-small text-fg-muted">{t("docsTbd")}</p>}
              </li>
            ))}
          </ul>
          <ButtonLink href={href(locale, DEMO_PATH)} className="mt-12">
            {t("ask")}
          </ButtonLink>
        </Container>
      </Section>
    </>
  );
}
