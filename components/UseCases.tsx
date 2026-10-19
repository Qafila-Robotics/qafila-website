import { useTranslations } from "next-intl";

export default function UseCases() {
  const t = useTranslations("useCases");
  const cases = [
    { title: t("inspectionTitle"), task: t("inspectionTask"), robots: t("inspectionRobots") },
    { title: t("securityTitle"), task: t("securityTask"), robots: t("securityRobots") },
    { title: t("eventsTitle"), task: t("eventsTask"), robots: t("eventsRobots") },
    { title: t("researchTitle"), task: t("researchTask"), robots: t("researchRobots") },
  ];
  return (
    <section id="use-cases" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-h2 font-semibold text-ink">{t("title")}</h2>
        <p className="mt-3 max-w-2xl text-ink-soft">{t("intro")}</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {cases.map((c) => (
            <div key={c.title} className="rounded-card border border-line bg-cream p-6">
              <h3 className="text-h3 font-semibold text-ink">{c.title}</h3>
              <p className="mt-2 text-ink-soft">{c.task}</p>
              <p className="mt-4 text-small">
                <span className="font-medium text-sand-text">{t("operatorSees")}: </span>
                <span className="text-ink-soft">{c.robots}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
