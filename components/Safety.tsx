import { useTranslations } from "next-intl";
import { IconShieldCheck } from "./icons";

export default function Safety() {
  const t = useTranslations("safety");
  const points = [t("point1"), t("point2"), t("point3"), t("point4")];
  return (
    <section id="safety" className="border-b border-edge bg-maroon text-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-center gap-3">
          <IconShieldCheck className="h-8 w-8 shrink-0 text-sand-light" />
          <h2 className="text-h2 font-semibold">{t("title")}</h2>
        </div>
        <p className="mt-3 max-w-2xl text-cream/80">{t("intro")}</p>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {points.map((p) => (
            <li key={p} className="flex gap-3">
              <IconShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-sand-light" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
