// Tabler Icons (https://tabler.io/icons), MIT License, © Paweł Kuna.
// Copied inline (a handful of outline glyphs) to avoid a runtime dependency.
// Brand Icons rule: 24 px grid, 1.75 px stroke, rounded caps.
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
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

const make = (paths: string[]) => {
  const C = (props: SVGProps<SVGSVGElement>) => <Icon paths={paths} {...props} />;
  return C;
};

export type IconType = ReturnType<typeof make>;

export const IconMenu = make(["M4 6h16", "M4 12h16", "M4 18h16"]);
export const IconX = make(["M18 6 6 18", "M6 6l12 12"]);
export const IconSun = make([
  "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",
  "M3 12h1M12 3v1M20 12h1M12 20v1M5.6 5.6l.7 .7M18.4 5.6l-.7 .7M17.7 17.7l.7 .7M6.3 17.7l-.7 .7",
]);
export const IconMoon = make([
  "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",
]);
export const IconCheck = make(["M5 12l5 5l10 -10"]);
// Direction-bearing: mirror in RTL with `rtl:-scale-x-100`.
export const IconArrowRight = make(["M5 12l14 0", "M13 18l6 -6", "M13 6l6 6"]);
export const IconArrowDown = make(["M12 5l0 14", "M18 13l-6 6", "M6 13l6 6"]);
export const IconLayoutGrid = make([
  "M4 4h6v6h-6z",
  "M14 4h6v6h-6z",
  "M4 14h6v6h-6z",
  "M14 14h6v6h-6z",
]);
export const IconVideo = make([
  "M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z",
  "M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z",
]);
export const IconHandStop = make([
  "M8 13v-7.5a1.5 1.5 0 0 1 3 0v6.5",
  "M11 5.5v-2a1.5 1.5 0 1 1 3 0v8.5",
  "M14 5.5a1.5 1.5 0 0 1 3 0v6.5",
  "M17 7.5a1.5 1.5 0 0 1 3 0v8.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47",
]);
export const IconAlertTriangle = make([
  "M12 9v4",
  "M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z",
  "M12 16h.01",
]);
export const IconHistory = make(["M12 8l0 4l2 2", "M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5"]);
export const IconDeviceTv = make([
  "M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",
  "M16 3l-4 4l-4 -4",
]);
export const IconMessage = make([
  "M8 9h8",
  "M8 13h6",
  "M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z",
]);
export const IconMap = make(["M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13", "M9 4v13", "M15 7v13"]);
export const IconLock = make([
  "M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z",
  "M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",
  "M8 11v-4a4 4 0 1 1 8 0v4",
]);
export const IconLinkOff = make([
  "M9 15l3 -3m2 -2l1 -1",
  "M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464",
  "M3 3l18 18",
  "M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463",
]);
export const IconClock = make(["M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", "M12 7v5l3 3"]);
export const IconUser = make([
  "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",
  "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",
]);
export const IconFileText = make([
  "M14 3v4a1 1 0 0 0 1 1h4",
  "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",
  "M9 9l1 0",
  "M9 13l6 0",
  "M9 17l6 0",
]);
export const IconKey = make([
  "M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z",
  "M15 9h.01",
]);
export const IconNetwork = make([
  "M8 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z",
  "M20 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z",
  "M8 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z",
  "M20 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z",
  "M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z",
  "M7.5 7.5l3 3",
  "M7.5 16.5l3 -3",
  "M13.5 13.5l3 3",
  "M16.5 7.5l-3 3",
]);
export const IconAdjustments = make([
  "M4 6l8 0",
  "M16 6l4 0",
  "M8 12l-4 0",
  "M12 12l8 0",
  "M4 18l11 0",
  "M19 18l1 0",
  "M14 4v4",
  "M10 10v4",
  "M17 16v4",
]);
export const IconPointer = make([
  "M7.904 17.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l4.907 4.907a1.067 1.067 0 0 0 1.509 0l1.047 -1.047a1.067 1.067 0 0 0 0 -1.509l-4.907 -4.907l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563z",
]);
export const IconTerminal = make(["M5 7l5 5l-5 5", "M12 19l7 0"]);
export const IconMail = make([
  "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z",
  "M3 7l9 6l9 -6",
]);
export const IconShieldLock = make([
  "M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3",
  "M12 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
  "M12 12l0 2.5",
]);
export const IconCloud = make([
  "M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878",
]);
export const IconCpu = make([
  "M5 5m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z",
  "M9 9h6v6h-6z",
  "M3 10h2",
  "M3 14h2",
  "M10 3v2",
  "M14 3v2",
  "M21 10h-2",
  "M21 14h-2",
  "M14 21v-2",
  "M10 21v-2",
]);
