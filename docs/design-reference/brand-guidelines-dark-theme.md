# Dark theme — proposed addition to the brand guidelines

**Status: proposal for review. Do not merge into `docs/brand-guidelines.md` until approved.**

This is the "mission-control" dark theme adopted from the Stitch redesign reference
(`docs/design-reference/DESIGN.md`, `stitch-reference.html`), re-derived from **our** warm brand
palette rather than the reference's cool blue-greys. The landing page ships light + dark with a
visitor toggle; both modes must pass WCAG AA.

## Principles

- **Warm dark surfaces** derived from the brand `night` (#1C1714), not cool graphite.
- **Maroon stays primary.** It is the CTA fill and the one full-width "Safety first" band. It is
  never a blanket background.
- **Sand tones are the secondary accent**, and on dark they must be *light* sand (`sand-light`
  #D9B26F), because the darker sand text token (#8C6224) fails contrast on dark.
- **Status green (#00E5A3) means "online / ok" only** — never decoration, and never used to assert
  a live system state on a marketing page. It is defined but used only where a genuine online
  state exists.
- **Reduced motion** is respected everywhere; the only motion is the caravan-dot step and it is
  disabled under `prefers-reduced-motion`. Glows are static (box-shadow / radial gradient).

## Tokens (semantic roles → light / dark)

Driven by CSS variables in `app/globals.css`; consumed as Tailwind colours in `tailwind.config.ts`.

| Role | Light | Dark | Role on the page |
|---|---|---|---|
| `bg` | `#FAF7F2` cream | `#1C1714` night | Page background |
| `surface` | `#FFFFFF` | `#26201C` | Cards, header |
| `overlay` | `#FAF7F2` | `#322A25` | HUD panel, inputs, elevated |
| `edge` (border) | `#E6DCCB` | `#3A302A` | Hairline borders |
| `fg` | `#2E2420` ink | `#FAF7F2` cream | Primary text |
| `fg-soft` | `#4A3B2E` ink-soft | `#C7B9AC` | Secondary text |
| `fg-muted` | `#8C6224` sand-text | `#D9B26F` sand-light | Labels, caps, captions |
| `primary` | `#8A1538` | `#8A1538` | Button fill (text = cream) |
| `primary-accent` | `#8A1538` | `#B23A5C` | Large text, icons, focus, borders |
| `on-primary` | `#FAF7F2` | `#FAF7F2` | Text on maroon |
| `danger` | `#D64545` | `#F28B82` | Error text / border |
| `online` | `#2F7D4F` ok | `#00E5A3` | Online / ok only |

`#B23A5C` is the brand guidelines' own dark-mode maroon ("maroon brightened to #B23A5C for
contrast"). The dark logo's leader dot uses it so it stays visible on near-black.

## Contrast — dark mode (WCAG AA, measured)

Backgrounds: base `#1C1714` L≈0.0091 · surface `#26201C` L≈0.0153 · overlay `#322A25` L≈0.0247.

| Text | on base | on surface | on overlay | AA (4.5 normal / 3 large) |
|---|---|---|---|---|
| `fg` cream `#FAF7F2` | 16.6:1 | 15.0:1 | 13.2:1 | pass |
| `fg-soft` `#C7B9AC` | 9.3:1 | 8.4:1 | 7.3:1 | pass |
| `fg-muted` sand-light `#D9B26F` | 8.9:1 | 8.1:1 | 7.1:1 | pass |
| `online` `#00E5A3` | 10.8:1 | 9.8:1 | — | pass |
| `danger` `#F28B82` | 7.4:1 | 6.7:1 | — | pass |
| cream on `primary` `#8A1538` | — | — | — | 8.8:1 pass |
| `primary-accent` `#B23A5C` | 3.1:1 | 2.8:1 | — | **large/UI/icon/focus only (≥3:1); never body text** |

**Rule:** `primary-accent` is never used for normal-size body text in dark. Interactive text (nav,
links) uses `fg-soft` → hover `fg` (cream), so every text state stays ≥4.5:1.

## Light mode

Unchanged from the existing brand guidelines and `docs/brand-audit.md`: ink / ink-soft on cream are
high-contrast; the maroon CTA with cream text ≈ 8.8:1; errors use `danger`. The semantic tokens
above resolve to the current light values, so the light page is visually unchanged.

## Logo on dark

Use `public/logo-simplified-dark.svg` — the sanctioned reversed/white variant of the simplified
logo (same geometry): letters cream, dashed route line lightened, leader dot `#B23A5C`, other dots
in sand tones. Never recolour or redraw beyond this sanctioned variant.
