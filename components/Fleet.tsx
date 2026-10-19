import { useTranslations } from "next-intl";
import RobotIcon from "./RobotIcon";

export default function Fleet() {
  const t = useTranslations("fleet");
  const cards = [
    { type: "humanoid", title: t("humanoidTitle"), body: t("humanoidBody") },
    { type: "quadruped", title: t("quadrupedTitle"), body: t("quadrupedBody") },
    { type: "drone", title: t("droneTitle"), body: t("droneBody") },
    { type: "ground", title: t("groundTitle"), body: t("groundBody") },
  ] as const;
  return (
    <section id="fleet" className="border-b border-line bg-white/50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-h2 font-semibold text-ink">{t("title")}</h2>
        <p className="mt-3 max-w-2xl text-ink-soft">{t("intro")}</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.type} className="flex flex-col rounded-card border border-line bg-cream p-6">
              <RobotIcon type={c.type} className="h-16 w-16" />
              <h3 className="mt-4 text-h3 font-semibold text-ink">{c.title}</h3>
              <p className="mt-2 text-ink-soft">{c.body}</p>
              <div className="mt-4 flex h-28 items-center justify-center rounded-control border border-dashed border-line text-small text-sand-text">
                {t("photoPending")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
