import { useTranslations } from "next-intl";

// Phase state is set here, in code. Flip to "done" only when a phase is demonstrated
// on real hardware or in simulation; "in-progress" only when there is open work
// (an open PR or a closed issue under phase:1 in qafila-platform). The tracker is
// currently empty, so Phase 1 is "starting-soon". No phase is "done".
type State = "done" | "in-progress" | "starting-soon" | "upcoming";
const PHASES: { key: string; state: State }[] = [
  { key: "phase1", state: "starting-soon" },
  { key: "phase2", state: "upcoming" },
  { key: "phase3", state: "upcoming" },
  { key: "phase4", state: "upcoming" },
  { key: "phase5", state: "upcoming" },
  { key: "phase6", state: "upcoming" },
];

const LEGEND: Record<State, string> = {
  done: "legendDone",
  "in-progress": "legendInProgress",
  "starting-soon": "legendStartingSoon",
  upcoming: "legendUpcoming",
};

export default function Status() {
  const t = useTranslations("status");
  return (
    <section id="status" className="border-b border-edge bg-bg">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-h2 font-semibold text-fg">{t("title")}</h2>
        <p className="mt-3 max-w-3xl text-fg-soft">{t("intro")}</p>
        <p className="mt-2 max-w-3xl font-medium text-fg-muted">{t("pilotLine")}</p>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PHASES.map(({ key, state }, i) => (
            <li
              key={key}
              className="flex items-start gap-3 rounded-card border border-edge bg-surface p-4"
            >
              <span
                className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-small ${
                  state === "done"
                    ? "bg-primary text-on-primary"
                    : state === "in-progress"
                      ? "border-2 border-primary-accent text-primary-accent"
                      : state === "starting-soon"
                        ? "border-2 border-dashed border-primary-accent text-primary-accent"
                        : "border border-edge text-fg-muted"
                }`}
              >
                {state === "done" ? "✓" : i + 1}
              </span>
              <span>
                <span className="block text-fg">{t(key)}</span>
                <span className="caps text-micro text-fg-muted">
                  {t(LEGEND[state])}
                </span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
