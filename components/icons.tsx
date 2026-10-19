// Tabler Icons (https://tabler.io/icons), MIT License, © Paweł Kuna.
// Copied inline (a handful of glyphs) to avoid a runtime dependency and keep the
// static bundle small. Same 24px grid, 2px round stroke as the Tabler set.
import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & { paths: string[] };

function Icon({ paths, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

const make = (paths: string[]) => (props: SVGProps<SVGSVGElement>) =>
  <Icon paths={paths} {...props} />;

export const IconMenu = make(["M4 6h16", "M4 12h16", "M4 18h16"]);
export const IconX = make(["M18 6 6 18", "M6 6l12 12"]);
export const IconSun = make([
  "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",
  "M3 12h1M12 3v1M20 12h1M12 20v1M5.6 5.6l.7 .7M18.4 5.6l-.7 .7M17.7 17.7l.7 .7M6.3 17.7l-.7 .7",
]);
export const IconMoon = make([
  "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",
]);
export const IconShieldCheck = make([
  "M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -1.117 9.242",
  "M15 19l2 2l4 -4",
]);
export const IconCheck = make(["M5 12l5 5l10 -10"]);
export const IconArrowRight = make(["M5 12l14 0", "M13 18l6 -6", "M13 6l6 6"]);
export const IconLayoutGrid = make([
  "M4 4h6v6h-6z",
  "M14 4h6v6h-6z",
  "M4 14h6v6h-6z",
  "M14 14h6v6h-6z",
]);
export const IconEyeOff = make([
  "M10.585 10.587a2 2 0 0 0 2.829 2.828",
  "M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87",
  "M3 3l18 18",
]);
export const IconShare = make([
  "M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",
  "M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",
  "M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",
  "M8.7 10.7l6.6 -3.4",
  "M8.7 13.3l6.6 3.4",
]);
export const IconGauge = make([
  "M12 16m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
  "M13.41 14.59l2.59 -5.59",
  "M3.6 15a9 9 0 1 1 16.8 0",
]);
export const IconShield = make([
  "M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3",
]);
export const IconUsers = make([
  "M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",
  "M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",
  "M16 3.13a4 4 0 0 1 0 7.75",
  "M21 21v-2a4 4 0 0 0 -3 -3.85",
]);
export const IconSchool = make([
  "M22 9l-10 -4l-10 4l10 4l10 -4v6",
  "M6 10.6v5.4a6 3 0 0 0 12 0v-5.4",
]);
