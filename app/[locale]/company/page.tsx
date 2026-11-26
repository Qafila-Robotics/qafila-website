import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { use } from "react";
import { CONTACT_EMAIL, pageMetadata } from "@/lib/site";
import { Container, PageHero, Section } from "@/components/ui";
import Contact from "@/components/Contact";
import RobotConvoy from "@/components/RobotConvoy";
import { IconCheck, IconMail } from "@/components/icons";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, "company", "/company/");
}

export default function Company({ params }: Params) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("company");

  return (
    <>
      <PageHero title={t("hero.title")} lead={t("hero.lead")} />

      <Section labelledBy="story-title">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 id="story-title" className="text-h2 font-semibold tracking-tight text-fg sm:text-h1">
                {t("story.title")}
              </h2>
              <p className="mt-4 max-w-prose text-fg-soft">{t("story.body")}</p>
            </div>
            <RobotConvoy className="h-auto w-full max-w-xl" />
          </div>
        </Container>
      </Section>

      <Section labelledBy="progress-title" className="border-t border-edge bg-surface">
        <Container>
          <h2 id="progress-title" className="text-h2 font-semibold tracking-tight text-fg sm:text-h1">
            {t("progress.title")}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-panel border border-edge bg-bg p-6 sm:p-8">
              <h3 className="text-h3 font-semibold text-fg">{t("progress.doneTitle")}</h3>
              <ul className="mt-5 grid gap-4">
                {[1, 2, 3].map((n) => (
                  <li key={n} className="flex gap-3">
                    <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-fg" />
                    <span className="text-fg">{t(`progress.done${n}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-panel border border-dashed border-fg-muted/50 p-6 sm:p-8">
              <h3 className="text-h3 font-semibold text-fg">{t("progress.nextTitle")}</h3>
              <ul className="mt-5 grid gap-4">
                {[1, 2, 3, 4].map((n) => (
                  <li key={n} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full ring-1 ring-fg-muted" />
                    <span className="text-fg-soft">{t(`progress.next${n}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section labelledBy="team-title" className="border-t border-edge">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 id="team-title" className="text-h2 font-semibold tracking-tight text-fg">
                {t("team.title")}
              </h2>
              <p className="mt-4 rounded-card border border-dashed border-fg-muted/50 p-4 text-small text-fg-muted">{t("team.body")}</p>
            </div>
            <div id="investors" className="scroll-mt-24">
              <h2 className="text-h2 font-semibold tracking-tight text-fg">{t("investors.title")}</h2>
              <p className="mt-4 max-w-prose text-fg-soft">{t("investors.body")}</p>
              <p className="mt-3 text-small text-fg-muted">{t("investors.tbd")}</p>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Qafila Robotics — investor enquiry")}`}
                className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-control border border-edge bg-surface px-5 font-medium text-fg hover:border-fg-soft"
              >
                <IconMail className="h-5 w-5" />
                {t("investors.email")}
              </a>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="contact" labelledBy="contact-title" className="border-t border-edge bg-surface">
        <Container>
          <div className="max-w-3xl">
            <Contact />
          </div>
        </Container>
      </Section>
    </>
  );
}
