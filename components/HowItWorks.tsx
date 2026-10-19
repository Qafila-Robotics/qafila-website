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
    <section id="how-it-works" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-h2 font-semibold text-ink">{t("title")}</h2>
        {/* Route line connecting the four steps */}
        <div className="relative mt-10">
          <div
            className="absolute inset-x-0 top-5 hidden border-t border-dashed border-[#CDBFA6] md:block"
            aria-hidden="true"
          />
          <ol className="grid gap-8 md:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="relative">
                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-maroon font-mono text-cream">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-h3 font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-ink-soft">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
