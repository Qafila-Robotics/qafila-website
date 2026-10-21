import { useTranslations } from "next-intl";
import RobotConvoy from "./RobotConvoy";

// HUD-style hero illustration: a framed panel showing the convoy pictograms on a
// dune, with corner ticks and a legend. Clearly labelled "Illustrative view"
// — no numbers, no telemetry, no live-state claims.
// Legend dots use the convoy colour of each robot class.
const LEGEND = [
  { type: "humanoid", dot: "bg-primary-accent" },
  { type: "quadruped", dot: "bg-sand-dark" },
  { type: "drone", dot: "bg-sand" },
  { type: "ground", dot: "bg-sand-light" },
] as const;

export default function HudPanel() {
  const t = useTranslations("hero");
  return (
    <div className="relative w-full max-w-xl rounded-panel border border-edge bg-overlay p-5 shadow-soft">
      {/* Corner ticks */}
      <span aria-hidden className="pointer-events-none absolute start-3 top-3 h-3 w-3 border-s-2 border-t-2 border-primary-accent/60" />
      <span aria-hidden className="pointer-events-none absolute end-3 top-3 h-3 w-3 border-e-2 border-t-2 border-primary-accent/60" />
      <span aria-hidden className="pointer-events-none absolute bottom-3 start-3 h-3 w-3 border-b-2 border-s-2 border-primary-accent/60" />
      <span aria-hidden className="pointer-events-none absolute bottom-3 end-3 h-3 w-3 border-b-2 border-e-2 border-primary-accent/60" />

      <p className="eyebrow text-micro">{t("hudLabel")}</p>

      <RobotConvoy className="mt-3 h-auto w-full" />
      <span className="sr-only">{t("convoyAlt")}</span>

      <p className="eyebrow mt-2 text-micro">{t("hudLegend")}</p>
      <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-4">
        {LEGEND.map(({ type, dot }) => (
          <li key={type} className="flex items-center gap-2">
            <span aria-hidden className={`h-2.5 w-2.5 shrink-0 rounded-full ${dot}`} />
            <span className="text-micro text-fg-soft">{t(`legend.${type}`)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
