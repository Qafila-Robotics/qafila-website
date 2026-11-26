import { useTranslations } from "next-intl";

// Fleet Brain explainer (in development): learn -> review -> share, as a loop.
// A marker travels the loop in 6 s (a CSS rotation about the centre, see globals.css .loop-runner); it is
// switched off under prefers-reduced-motion. Station labels are real HTML text below the SVG.
// The loop is drawn clockwise; it is not mirrored in RTL because it has no reading direction.
const R = 70;
const C = 100;
// Stations at the top, lower right and lower left of the circle (degrees from 12 o'clock).
const STATIONS = [0, 120, 240].map((deg) => {
  const a = ((deg - 90) * Math.PI) / 180;
  return { x: C + R * Math.cos(a), y: C + R * Math.sin(a) };
});

export default function BrainLoop() {
  const t = useTranslations("platform.brain");
  const steps = [
    { title: t("loopLearn"), body: t("loopLearnBody") },
    { title: t("loopReview"), body: t("loopReviewBody") },
    { title: t("loopShare"), body: t("loopShareBody") },
  ];
  return (
    <figure className="grid items-center gap-10 md:grid-cols-[minmax(0,18rem)_1fr]">
      <div className="relative mx-auto w-full max-w-[18rem]">
        <svg viewBox="0 0 200 200" className="h-auto w-full" aria-hidden>
          {/* The loop: brand route line. */}
          <circle cx={C} cy={C} r={R} fill="none" className="stroke-sand" strokeWidth="1.5" strokeDasharray="3 4" strokeLinecap="round" />
          {/* Fleet Brain at the centre. */}
          <circle cx={C} cy={C} r="30" className="fill-surface stroke-primary-accent" strokeWidth="1.5" />
          <g className="stroke-primary-accent" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M88 106 q-8 0 -8 -7 q0 -7 8 -7 q2 -8 10 -8 q9 0 11 8 q8 0 8 7 q0 7 -8 7 z" />
          </g>
          {/* Stations. */}
          {STATIONS.map((s, i) => (
            <g key={i}>
              <circle cx={s.x} cy={s.y} r="14" className={i === 1 ? "fill-primary" : "fill-surface stroke-fg"} strokeWidth="1.5" />
              <text
                x={s.x}
                y={s.y + 4.5}
                textAnchor="middle"
                className={`font-mono text-[12px] ${i === 1 ? "fill-on-primary" : "fill-fg"}`}
              >
                {i + 1}
              </text>
            </g>
          ))}
          {/* Travelling marker. */}
          <g className="loop-runner">
            <circle cx={C} cy={C - R} r="5" className="fill-sand-dark" />
          </g>
        </svg>
      </div>
      <ol className="grid gap-5">
        {steps.map((s, i) => (
          <li key={s.title} className="flex gap-4">
            <span
              aria-hidden
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-mono text-small ${
                i === 1 ? "border-primary bg-primary text-on-primary" : "border-fg text-fg"
              }`}
            >
              {i + 1}
            </span>
            <div>
              <p className="font-semibold text-fg">{s.title}</p>
              <p className="text-small text-fg-soft">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <figcaption className="sr-only">{t("loopLabel")}</figcaption>
    </figure>
  );
}
