// Single-robot pictograms matching the convoy, for the fleet cards.
// Same rounded monoline language; colours per the brand convoy.
type Type = "humanoid" | "quadruped" | "drone" | "ground";

const COLOR: Record<Type, string> = {
  ground: "#D9B26F",
  drone: "#C99A4F",
  quadruped: "#B5823A",
  humanoid: "#8A1538",
};

export default function RobotIcon({ type, className = "" }: { type: Type; className?: string }) {
  const s = {
    fill: "none",
    stroke: COLOR[type],
    strokeWidth: 5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 96 96" className={className} role="img" aria-hidden="true" width="96" height="96">
      {type === "ground" && (
        <g {...s}>
          <path d="M26 60 V44 Q26 36 34 36 H62 Q70 36 70 44 V60" />
          <path d="M40 36 V26 Q40 22 44 22 H52 Q56 22 56 26 V36" />
          <circle cx="36" cy="62" r="7" />
          <circle cx="60" cy="62" r="7" />
        </g>
      )}
      {type === "drone" && (
        <g {...s}>
          <path d="M40 48 h16 q6 0 6 6 q0 6 -6 6 h-16 q-6 0 -6 -6 q0 -6 6 -6 Z" />
          <path d="M34 54 H18" />
          <path d="M62 54 H78" />
          <ellipse cx="14" cy="54" rx="10" ry="3" />
          <ellipse cx="82" cy="54" rx="10" ry="3" />
        </g>
      )}
      {type === "quadruped" && (
        <g {...s}>
          <path d="M26 50 q0 -12 12 -12 h22 q12 0 12 12 q0 12 -12 12 h-22 q-12 0 -12 -12 Z" />
          <circle cx="76" cy="44" r="9" />
          <path d="M80 44 H88" />
          <line x1="36" y1="62" x2="36" y2="76" />
          <line x1="50" y1="62" x2="50" y2="76" />
          <line x1="62" y1="62" x2="62" y2="76" />
        </g>
      )}
      {type === "humanoid" && (
        <g {...s}>
          <path d="M34 36 q0 -14 14 -14 q14 0 14 14 V64 q0 8 -8 8 H42 q-8 0 -8 -8 Z" />
          <path d="M40 40 H56" />
          <line x1="48" y1="22" x2="48" y2="12" />
          <line x1="42" y1="72" x2="42" y2="84" />
          <line x1="54" y1="72" x2="54" y2="84" />
        </g>
      )}
    </svg>
  );
}
