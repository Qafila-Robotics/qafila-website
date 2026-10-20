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
    <section id="fleet" className="border-b border-edge bg-bg">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-h2 font-semibold text-fg">{t("title")}</h2>
        <p className="mt-3 max-w-2xl text-fg-soft">{t("intro")}</p>
        <p className="mt-3 max-w-2xl font-medium text-fg">{t("vendorLine")}</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.type} className="card-glow flex flex-col rounded-card border border-edge bg-surface p-6">
              <RobotIcon type={c.type} className="h-16 w-16" />
              <h3 className="mt-4 text-h3 font-semibold text-fg">{c.title}</h3>
              <p className="mt-2 text-fg-soft">{c.body}</p>
              <div className="mt-4 flex h-28 items-center justify-center rounded-control border border-dashed border-edge text-small text-fg-muted">
                {t("photoPending")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
