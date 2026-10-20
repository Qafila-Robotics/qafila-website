// Five caravan dots on the route line: maroon leader leftmost and largest, then
// sand tones shrinking. Steps gently along the line; stops under reduced-motion.
const DOTS = [
  { r: 9, fill: "rgb(var(--c-primary-accent))" }, // leader (theme-aware)
  { r: 8, fill: "#B5823A" },
  { r: 7, fill: "#C99A4F" },
  { r: 6, fill: "#D9B26F" },
  { r: 5, fill: "#E3C68E" },
];

export default function CaravanDots({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 28"
      className={className}
      role="img"
      aria-label="Caravan progress"
      width="160"
      height="28"
    >
      <line x1="8" y1="14" x2="152" y2="14" stroke="#CDBFA6" strokeWidth="1.5" strokeDasharray="4 5" />
      {DOTS.map((d, i) => (
        <circle
          key={i}
          cx={20 + i * 30}
          cy="14"
          r={d.r}
          fill={d.fill}
          className="caravan-dot"
          style={{ animationDelay: `${(DOTS.length - 1 - i) * 0.2}s` }}
        />
      ))}
    </svg>
  );
}
