import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");
  return (
    <section id="about" className="border-b border-edge bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-h2 font-semibold text-fg">{t("title")}</h2>
        <p className="mt-4 max-w-2xl text-fg-soft">{t("body")}</p>
        <div className="mt-8 rounded-card border border-dashed border-edge bg-bg p-6">
          <h3 className="text-h3 font-semibold text-fg">{t("teamTitle")}</h3>
          <p className="mt-2 text-small text-fg-muted">{t("teamBody")}</p>
        </div>
      </div>
    </section>
  );
}
