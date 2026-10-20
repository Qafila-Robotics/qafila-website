import { useTranslations } from "next-intl";
import { IconGauge, IconShield, IconUsers, IconSchool } from "./icons";

export default function UseCases() {
  const t = useTranslations("useCases");
  const cases = [
    { title: t("inspectionTitle"), task: t("inspectionTask"), robots: t("inspectionRobots"), Icon: IconGauge },
    { title: t("securityTitle"), task: t("securityTask"), robots: t("securityRobots"), Icon: IconShield },
    { title: t("eventsTitle"), task: t("eventsTask"), robots: t("eventsRobots"), Icon: IconUsers },
    { title: t("researchTitle"), task: t("researchTask"), robots: t("researchRobots"), Icon: IconSchool },
  ];
  return (
    <section id="use-cases" className="border-b border-edge bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-h2 font-semibold text-fg">{t("title")}</h2>
        <p className="mt-3 max-w-2xl text-fg-soft">{t("intro")}</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {cases.map(({ title, task, robots, Icon }) => (
            <div key={title} className="card-glow rounded-card border border-edge bg-bg p-6">
              <Icon className="h-7 w-7 text-primary-accent" />
              <h3 className="mt-4 text-h3 font-semibold text-fg">{title}</h3>
              <p className="mt-2 text-fg-soft">{task}</p>
              <p className="mt-4 text-small">
                <span className="font-medium text-fg-muted">{t("operatorSees")}: </span>
                <span className="text-fg-soft">{robots}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
