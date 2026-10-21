import { useTranslations } from "next-intl";
import { IconLayoutGrid, IconEyeOff, IconShare } from "./icons";

export default function Problem() {
  const t = useTranslations("problem");
  const points = [
    { title: t("point1Title"), body: t("point1Body"), Icon: IconLayoutGrid },
    { title: t("point2Title"), body: t("point2Body"), Icon: IconEyeOff },
    { title: t("point3Title"), body: t("point3Body"), Icon: IconShare },
  ];
  return (
    <section id="problem" className="border-b border-edge bg-bg">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="eyebrow">
          {t("eyebrow")}
        </p>
        <h2 className="mt-2 text-h2 font-semibold text-fg">{t("title")}</h2>
        <p className="mt-3 max-w-2xl text-fg-soft">{t("intro")}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {points.map(({ title, body, Icon }) => (
            <div key={title} className="card-glow rounded-card border border-edge bg-surface p-6">
              <Icon className="h-7 w-7 text-primary-accent" />
              <h3 className="mt-4 text-h3 font-semibold text-fg">{title}</h3>
              <p className="mt-2 text-fg-soft">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
