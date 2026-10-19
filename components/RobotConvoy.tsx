// Brand illustration: the four fleet robots walk as a convoy on a dune, growing
// in size toward the maroon humanoid leader, with caravan dots moving along the
// route line above. Monoline rounded strokes, one weight, no faces or outlines.
// Mirrors in RTL so the convoy always moves in reading direction.
const DOTS = [
  { cx: 560, r: 9, fill: "#8A1538" },
  { cx: 500, r: 8, fill: "#B5823A" },
  { cx: 440, r: 7, fill: "#C99A4F" },
  { cx: 380, r: 6, fill: "#D9B26F" },
  { cx: 320, r: 5, fill: "#E3C68E" },
];

export default function RobotConvoy({ className = "" }: { className?: string }) {
  const s = { fill: "none", strokeWidth: 6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg
      viewBox="0 0 680 280"
      className={`${className} rtl:-scale-x-100`}
      role="img"
      aria-hidden="true"
      width="680"
      height="280"
    >
      {/* Route line + caravan dots */}
      <line x1="30" y1="54" x2="650" y2="54" stroke="#CDBFA6" strokeWidth="1.5" strokeDasharray="4 5" />
      {DOTS.map((d, i) => (
        <circle
          key={i}
          cx={d.cx}
          cy="54"
          r={d.r}
          fill={d.fill}
          className="caravan-dot"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}

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
      <g stroke="#8A1538" {...s}>
        <path d="M534 150 q0 -16 18 -16 h6 q18 0 18 16 V202 q0 8 -8 8 h-26 q-8 0 -8 -8 Z" />
        <path d="M546 164 H572" />
        <line x1="556" y1="134" x2="556" y2="122" />
        <line x1="548" y1="210" x2="548" y2="224" />
        <line x1="566" y1="210" x2="566" y2="224" />
      </g>
      <circle cx="556" cy="118" r="2.5" fill="#8A1538" />
    </svg>
  );
}
