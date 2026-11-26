import { useTranslations } from "next-intl";
import { IconArrowDown, IconArrowRight, IconCheck, IconCloud, IconCpu, IconX } from "../icons";

// "The cloud asks. The robot decides." Drawn in HTML/CSS so the labels stay real text in both
// languages; arrows mirror in RTL, the layout stacks vertically on phones.
type Tone = "default" | "inverted";

const TONES = {
  default: {
    box: "border-edge bg-surface text-fg",
    sub: "text-fg-soft",
    gate: "border-primary-accent bg-surface text-fg",
    arrow: "text-fg-soft",
    check: "border-edge",
  },
  inverted: {
    box: "border-inv-edge bg-inv-bg text-inv-fg",
    sub: "text-inv-soft",
    gate: "border-sand-light bg-inv-bg text-inv-fg",
    arrow: "text-inv-soft",
    check: "border-inv-edge",
  },
} as const;

function Connector({ tone, dashed }: { tone: Tone; dashed?: boolean }) {
  const c = TONES[tone].arrow;
  return (
    <div aria-hidden className={`flex items-center justify-center ${c}`}>
      {/* Horizontal (md+) */}
      <span className="hidden items-center md:flex">
        <span className={`h-0 w-10 border-t-2 lg:w-16 ${dashed ? "border-dashed" : ""} border-current`} />
        <IconArrowRight className="-ms-1.5 h-5 w-5 rtl:-scale-x-100" />
      </span>
      {/* Vertical (phones) */}
      <span className="flex flex-col items-center md:hidden">
        <span className={`h-6 w-0 border-s-2 ${dashed ? "border-dashed" : ""} border-current`} />
        <IconArrowDown className="-mt-1.5 h-5 w-5" />
      </span>
    </div>
  );
}

export default function SafetyGate({ tone = "default" }: { tone?: Tone }) {
  const t = useTranslations("platform.safety");
  const s = TONES[tone];
  const checks = [t("dCheck1"), t("dCheck2"), t("dCheck3")];

  return (
    <figure>
      <div className="grid items-center gap-2 md:grid-cols-[1fr_auto_1.3fr_auto_0.8fr] md:gap-0">
        <div className={`rounded-card border p-5 ${s.box}`}>
          <IconCloud className="h-7 w-7" />
          <p className="mt-3 font-semibold">{t("dCloud")}</p>
          <p className={`text-small ${s.sub}`}>{t("dCloudSub")}</p>
        </div>

        <Connector tone={tone} dashed />

        <div className={`rounded-card border-2 p-5 ${s.gate}`}>
          <p className="font-semibold">{t("dGate")}</p>
          <ul className="mt-3 grid gap-2">
            {checks.map((c) => (
              <li key={c} className={`flex items-center gap-2 rounded-control border px-3 py-2 text-small ${s.check}`}>
                <IconCheck className="h-4 w-4 shrink-0" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <p className={`mt-3 flex items-center gap-2 text-small ${s.sub}`}>
            <IconX className="h-4 w-4 shrink-0" />
            <span>{t("dRefuse")}</span>
          </p>
        </div>

        <Connector tone={tone} />

        <div className={`rounded-card border p-5 ${s.box}`}>
          <IconCpu className="h-7 w-7" />
          <p className="mt-3 font-semibold">{t("dRobot")}</p>
        </div>
      </div>
      <figcaption className="sr-only">{t("diagramLabel")}</figcaption>
    </figure>
  );
}
