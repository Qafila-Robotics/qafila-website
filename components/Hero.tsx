import { useTranslations } from "next-intl";
import HudPanel from "./HudPanel";

export default function Hero() {
  const t = useTranslations("hero");
  const tc = useTranslations("cta");
  return (
    <section id="top" className="relative overflow-hidden border-b border-edge">
      <div className="hero-glow" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="font-mono text-small font-medium uppercase tracking-[0.2em] text-fg-muted">
            {t("tagline")}
          </p>
          <h1 className="mt-4 font-semibold text-fg text-[2.5rem] leading-[1.1] sm:text-display">
            {t("headline")}
          </h1>
          <p className="mt-5 max-w-xl text-fg-soft sm:text-lg">{t("subhead")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-control bg-primary px-6 py-3 font-medium text-on-primary hover:opacity-90"
            >
              {tc("requestPilot")}
            </a>
            <a
              href="#how-it-works"
              className="rounded-control border border-edge bg-surface px-6 py-3 font-medium text-fg hover:border-primary-accent hover:text-primary-accent"
            >
              {tc("howItWorks")}
            </a>
          </div>
        </div>
        <div className="lg:justify-self-end">
          <HudPanel />
        </div>
      </div>
    </section>
  );
}
