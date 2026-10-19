import { useTranslations } from "next-intl";
import RobotConvoy from "./RobotConvoy";

export default function Hero() {
  const t = useTranslations("hero");
  const tc = useTranslations("cta");
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="text-small font-medium uppercase tracking-[0.2em] text-sand-text">{t("tagline")}</p>
          <h1 className="mt-4 font-semibold text-ink text-[2.5rem] leading-[1.1] sm:text-display">
            {t("headline")}
          </h1>
          <p className="mt-5 max-w-xl text-ink-soft sm:text-lg">{t("subhead")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-control bg-maroon px-6 py-3 font-medium text-cream hover:opacity-90"
            >
              {tc("requestPilot")}
            </a>
            <a
              href="#how-it-works"
              className="rounded-control border border-line bg-white px-6 py-3 font-medium text-ink hover:border-maroon hover:text-maroon"
            >
              {tc("howItWorks")}
            </a>
          </div>
        </div>
        <div className="lg:justify-self-end">
          <RobotConvoy className="h-auto w-full max-w-xl" />
          <span className="sr-only">{t("convoyAlt")}</span>
        </div>
      </div>
    </section>
  );
}
