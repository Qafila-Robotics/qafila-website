import { useTranslations } from "next-intl";

export default function Safety() {
  const t = useTranslations("safety");
  const points = [t("point1"), t("point2"), t("point3"), t("point4")];
  return (
    <section id="safety" className="border-b border-line bg-maroon text-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-h2 font-semibold">{t("title")}</h2>
        <p className="mt-3 max-w-2xl text-cream/80">{t("intro")}</p>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {points.map((p) => (
            <li key={p} className="flex gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-sand-light" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
