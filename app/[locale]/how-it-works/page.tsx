import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { use } from "react";
import { DEMO_PATH, ONBOARD_CMD, href, pageMetadata } from "@/lib/site";
import { ButtonLink, Container, Heading, PageHero, Screenshot, Section } from "@/components/ui";
import Architecture from "@/components/diagrams/Architecture";
import CodeBlock from "@/components/CodeBlock";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "howItWorks", "/how-it-works/");
}

export default function HowItWorks({ params }: Params) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("how");
  const td = useTranslations("developers");
  const tc = useTranslations("cta");

  const steps = [1, 2, 3, 4] as const;
  const shots: Record<number, { name: string; label: string } | undefined> = {
    1: { name: "addRobot", label: t("screenshotAdd") },
    3: { name: "fleet", label: t("step3Title") },
    4: { name: "control", label: t("screenshotControl") },
  };

  return (
    <>
      <PageHero title={t("hero.title")} lead={t("hero.lead")} />

      <Section className="!pt-12">
        <Container>
          <ol className="relative grid gap-14">
            {steps.map((n) => (
              <li key={n} className="relative grid gap-6 ps-14 lg:grid-cols-12 lg:gap-10">
                {/* Route line between the step markers. */}
                {n < 4 && <span aria-hidden className="route-y absolute -bottom-14 start-[19px] top-10 w-0.5" />}
                <span
                  aria-hidden
                  className={`absolute start-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 font-mono text-small font-medium ${
                    n === 4 ? "border-primary bg-primary text-on-primary" : "border-edge bg-bg text-fg"
                  }`}
                >
                  {n}
                </span>
                <div className="lg:col-span-5">
                  <h2 className="text-h3 font-semibold text-fg sm:text-h2">{t(`step${n}Title`)}</h2>
                  <p className="mt-3 max-w-prose text-fg-soft">{t(`step${n}Body`)}</p>
                </div>
                <div className="lg:col-span-7">
                  {n === 2 ? (
                    <CodeBlock code={ONBOARD_CMD} label={t("step2Code")} copyLabel={td("copy")} copiedLabel={td("copied")} />
                  ) : (
                    shots[n] && <Screenshot name={shots[n]!.name} label={shots[n]!.label} aspect="aspect-[16/9]" />
                  )}
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section labelledBy="arch-title" className="border-t border-edge bg-surface">
        <Container>
          <Heading id="arch-title" title={t("archTitle")} lead={t("archLead")} />
          <div className="mt-12">
            <Architecture />
          </div>
          <div className="mt-14 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={href(locale, DEMO_PATH)}>{tc("requestDemo")}</ButtonLink>
            <ButtonLink href={href(locale, "/developers/")} variant="secondary" arrow>
              {td("hero.title")}
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
