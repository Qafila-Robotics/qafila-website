import { useTranslations } from "next-intl";
import { asset } from "@/lib/asset";
import { SCREENSHOTS } from "@/lib/screenshots";
import RobotIcon, { type RobotType } from "./RobotIcon";
import { IconLock } from "./icons";

// Hero product frame. Until a real capture of the fleet page is listed in
// lib/screenshots.ts ("fleet"), it draws an abstract wireframe of that page:
// no names, numbers or live states, and it is labelled as an illustration and [TBD screenshot].
const CLASSES: RobotType[] = ["humanoid", "quadruped", "drone", "ground"];

function Bar({ w }: { w: string }) {
  return <span aria-hidden className={`block h-1.5 rounded-full bg-edge ${w}`} />;
}

export default function FleetFrame() {
  const t = useTranslations("home.hero");
  const tt = useTranslations("tbd");
  const tr = useTranslations("robotClass");
  const real = SCREENSHOTS.fleet;

  return (
    <figure className="relative">
      <div className="overflow-hidden rounded-panel border border-edge bg-surface shadow-frame">
        {/* Window bar */}
        <div className="flex items-center gap-3 border-b border-edge px-4 py-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/icon.svg")} alt="" width={24} height={24} className="h-6 w-6 rounded" />
          <span className="truncate text-small font-medium text-fg">{t("frameTitle")}</span>
          <span className="ms-auto flex shrink-0 items-center gap-2">
            <span className="rounded-control border border-dashed border-fg-muted/60 bg-overlay px-2 py-0.5 text-micro font-medium text-fg-muted">
              {tt("screenshot")}
            </span>
          </span>
        </div>

        {real ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={asset(real)} alt={t("frameCaption")} className="aspect-[16/10] w-full object-cover object-top" />
        ) : (
          <div className="grid grid-cols-[auto_1fr]" aria-hidden>
            {/* Sidebar */}
            <div className="hidden w-40 flex-col gap-3 border-e border-edge p-4 sm:flex">
              <span className="block h-2 w-20 rounded-full bg-fg/80" />
              <Bar w="w-24" />
              <Bar w="w-16" />
              <Bar w="w-20" />
              <Bar w="w-14" />
              <Bar w="w-[4.5rem]" />
            </div>
            {/* Card grid */}
            <div className="grid grid-cols-2 gap-3 p-3 sm:gap-4 sm:p-5">
              {CLASSES.map((c) => (
                <div key={c} className="rounded-card border border-edge bg-bg p-2 sm:p-3">
                  <div className="cam-tile flex aspect-video items-end justify-center overflow-hidden rounded-control">
                    <RobotIcon type={c} className="h-14 w-14 translate-y-1.5 sm:h-20 sm:w-20" />
                  </div>
                  <div className="mt-2 flex items-center justify-between gap-2 sm:mt-3">
                    <span className="truncate text-micro font-medium text-fg sm:text-small">{tr(c)}</span>
                    <IconLock className="h-4 w-4 shrink-0 text-fg-soft" />
                  </div>
                  <div className="mt-2 hidden gap-1.5 sm:grid">
                    <Bar w="w-3/4" />
                    <Bar w="w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <figcaption className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-small text-fg-soft">
        <span>{t("frameCaption")}</span>
        {!real && <span className="text-fg-muted">{tt("illustration")}</span>}
      </figcaption>
    </figure>
  );
}
