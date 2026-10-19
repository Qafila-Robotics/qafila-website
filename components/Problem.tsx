import { useTranslations } from "next-intl";

export default function Problem() {
  const t = useTranslations("problem");
  const points = [
    { title: t("point1Title"), body: t("point1Body") },
    { title: t("point2Title"), body: t("point2Body") },
    { title: t("point3Title"), body: t("point3Body") },
  ];
  return (
    <section id="problem" className="border-b border-line bg-white/50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-h2 font-semibold text-ink">{t("title")}</h2>
        <p className="mt-3 max-w-2xl text-ink-soft">{t("intro")}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {points.map((p) => (
            <div key={p.title} className="rounded-card border border-line bg-cream p-6">
              <h3 className="text-h3 font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-ink-soft">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
