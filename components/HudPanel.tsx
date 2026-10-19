import { useTranslations } from "next-intl";
import RobotConvoy from "./RobotConvoy";
import RobotIcon from "./RobotIcon";

// HUD-style hero illustration: a framed panel showing the convoy pictograms on a
// route line, with corner ticks and a legend. Clearly labelled "Illustrative view"
// — no numbers, no telemetry, no live-state claims.
const LEGEND = ["humanoid", "quadruped", "drone", "ground"] as const;

export default function HudPanel() {
  const t = useTranslations("hero");
  const tf = useTranslations("fleet");
  const label: Record<(typeof LEGEND)[number], string> = {
    humanoid: tf("humanoidTitle"),
    quadruped: tf("quadrupedTitle"),
    drone: tf("droneTitle"),
    ground: tf("groundTitle"),
  };
  return (
    <div className="relative w-full max-w-xl rounded-panel border border-edge bg-overlay p-5 shadow-soft">
      {/* Corner ticks */}
      <span aria-hidden className="pointer-events-none absolute start-3 top-3 h-3 w-3 border-s-2 border-t-2 border-primary-accent/60" />
      <span aria-hidden className="pointer-events-none absolute end-3 top-3 h-3 w-3 border-e-2 border-t-2 border-primary-accent/60" />
      <span aria-hidden className="pointer-events-none absolute bottom-3 start-3 h-3 w-3 border-b-2 border-s-2 border-primary-accent/60" />
      <span aria-hidden className="pointer-events-none absolute bottom-3 end-3 h-3 w-3 border-b-2 border-e-2 border-primary-accent/60" />

      <p className="font-mono text-micro uppercase tracking-[0.2em] text-fg-muted">{t("hudLabel")}</p>

      <RobotConvoy className="mt-3 h-auto w-full" />
      <span className="sr-only">{t("convoyAlt")}</span>

      <p className="mt-2 font-mono text-micro uppercase tracking-[0.2em] text-fg-muted">{t("hudLegend")}</p>
      <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-4">
        {LEGEND.map((type) => (
          <li key={type} className="flex items-center gap-2">
            <RobotIcon type={type} className="h-6 w-6 shrink-0" />
            <span className="text-micro text-fg-soft">{label[type]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
