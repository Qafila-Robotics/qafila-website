import { useTranslations } from "next-intl";

// Phase state is set here, in code — flip to "done" only when a phase is
// demonstrated on real hardware or in simulation. No phase is "done" yet.
type State = "done" | "in-progress" | "upcoming";
const PHASES: { key: string; state: State }[] = [
  { key: "phase1", state: "in-progress" },
  { key: "phase2", state: "upcoming" },
  { key: "phase3", state: "upcoming" },
  { key: "phase4", state: "upcoming" },
  { key: "phase5", state: "upcoming" },
  { key: "phase6", state: "upcoming" },
];

export default function Status() {
  const t = useTranslations("status");
  return (
    <section id="status" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-h2 font-semibold text-ink">{t("title")}</h2>
        <p className="mt-3 max-w-3xl text-ink-soft">{t("intro")}</p>
        <p className="mt-2 max-w-3xl font-medium text-sand-text">{t("pilotLine")}</p>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PHASES.map(({ key, state }, i) => (
            <li
              key={key}
              className="flex items-start gap-3 rounded-card border border-line bg-cream p-4"
            >
              <span
                className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-small ${
                  state === "done"
                    ? "bg-maroon text-cream"
                    : state === "in-progress"
                      ? "border-2 border-maroon text-maroon"
                      : "border border-line text-sand-text"
                }`}
              >
                {state === "done" ? "✓" : i + 1}
              </span>
              <span>
                <span className="block text-ink">{t(key)}</span>
                <span className="text-micro uppercase tracking-wider text-sand-text">
                  {state === "done"
                    ? t("legendDone")
                    : state === "in-progress"
                      ? t("legendInProgress")
                      : t("legendUpcoming")}
                </span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
