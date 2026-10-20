import { useTranslations } from "next-intl";

export default function HowItWorks() {
  const t = useTranslations("howItWorks");
  const steps = [
    { title: t("step1Title"), body: t("step1Body") },
    { title: t("step2Title"), body: t("step2Body") },
    { title: t("step3Title"), body: t("step3Body") },
    { title: t("step4Title"), body: t("step4Body") },
  ];
  return (
    <section id="how-it-works" className="border-b border-edge bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="font-mono text-small font-medium uppercase tracking-[0.2em] text-fg-muted">
          {t("eyebrow")}
        </p>
        <h2 className="mt-2 text-h2 font-semibold text-fg">{t("title")}</h2>
        {/* Route line connecting the four steps */}
        <div className="relative mt-10">
          <div
            className="absolute inset-x-0 top-5 hidden border-t border-dashed border-edge md:block"
            aria-hidden="true"
          />
          <ol className="grid gap-8 md:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="relative">
                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-mono text-on-primary">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-h3 font-semibold text-fg">{s.title}</h3>
                <p className="mt-2 text-fg-soft">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
