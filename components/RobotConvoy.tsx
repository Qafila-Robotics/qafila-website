// Brand illustration: the four fleet robots walk as a convoy on a dune, growing
// in size toward the maroon humanoid leader. The caravan dots belong to the logo
// only, so they are not drawn here. Monoline rounded strokes, one weight, no faces or outlines.
// Mirrors in RTL so the convoy always moves in reading direction.
// Maroon leader uses the theme-aware accent so it stays visible on dark surfaces.
const LEADER = "rgb(var(--c-primary-accent))";

export default function RobotConvoy({ className = "" }: { className?: string }) {
  const s = { fill: "none", strokeWidth: 6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg
      viewBox="0 100 680 140"
      className={`${className} rtl:-scale-x-100`}
      role="img"
      aria-hidden="true"
      width="680"
      height="140"
    >
      {/* Dune */}
      <path d="M20 214 Q340 182 660 214" stroke="#E6D3AE" strokeWidth="6" strokeLinecap="round" fill="none" />

      {/* Ground car (sand-light) */}
      <g stroke="#D9B26F" {...s}>
        <path d="M72 198 V182 Q72 174 80 174 H128 Q136 174 136 182 V198" />
        <path d="M92 174 V162 Q92 158 96 158 H112 Q116 158 116 162 V174" />
        <circle cx="86" cy="200" r="8" />
        <circle cx="126" cy="200" r="8" />
      </g>

      {/* Drone (sand), hovering above the dune */}
      <g stroke="#C99A4F" {...s}>
        <path d="M238 150 h30 q6 0 6 6 q0 6 -6 6 h-30 q-6 0 -6 -6 q0 -6 6 -6 Z" />
        <path d="M232 156 H212" />
        <path d="M280 156 H300" />
        <ellipse cx="206" cy="156" rx="14" ry="3" />
        <ellipse cx="306" cy="156" rx="14" ry="3" />
      </g>
      <line x1="256" y1="168" x2="256" y2="198" stroke="#C99A4F" strokeWidth="1.5" strokeDasharray="3 4" />

      {/* Quadruped (sand-dark) */}
      <g stroke="#B5823A" {...s}>
        <path d="M372 184 q0 -12 12 -12 h58 q12 0 12 12 q0 12 -12 12 h-58 q-12 0 -12 -12 Z" />
        <path d="M454 178 a10 10 0 1 1 -0.1 0" />
        <path d="M454 180 H466" />
        <line x1="384" y1="196" x2="384" y2="214" />
        <line x1="406" y1="196" x2="406" y2="214" />
        <line x1="430" y1="196" x2="430" y2="214" />
        <line x1="444" y1="196" x2="444" y2="214" />
      </g>

      {/* Humanoid leader (maroon), tallest */}
      <g stroke={LEADER} {...s}>
        <path d="M534 150 q0 -16 18 -16 h6 q18 0 18 16 V202 q0 8 -8 8 h-26 q-8 0 -8 -8 Z" />
        <path d="M546 164 H572" />
        <line x1="556" y1="134" x2="556" y2="122" />
        <line x1="548" y1="210" x2="548" y2="224" />
        <line x1="566" y1="210" x2="566" y2="224" />
      </g>
      <circle cx="556" cy="118" r="2.5" fill={LEADER} />
    </svg>
  );
}
