# Qafila Robotics — Landing page

This repository holds the public Qafila Robotics landing page (Next.js, App Router, bilingual AR/EN).

## Brand (read docs/brand-guidelines.md before any visual work)
- Name: Qafila Robotics / قافلة للروبوتات. Spelling is always "Qafila".
- Never redraw the logo. Use files from packages/brand/assets only.
- Colours, fonts, spacing and radii come from packages/brand tokens. No hard-coded hex values in apps.
- Sand tones are decoration only; text uses ink, ink-soft, sand-text or maroon.
- Maroon means "lead" or "primary action"; errors use the danger token, never maroon.
- Every page works in Arabic (RTL) and English. Use logical CSS properties.
- No invented customers, numbers, quotes or capabilities. Mark placeholders [TBD].

## Design tokens and assets
Design tokens and assets will later come from the private package `@qafila/brand`, published from
`qafila-platform` (`packages/brand`). Until that package exists, the local `tailwind.config.ts`
token set is the source of truth — it already mirrors the brand palette, type scale and spacing.
When `@qafila/brand` is published, replace the local tokens with the shared preset.

## See also
- `docs/brand-guidelines.md` — full brand guidelines (logo, colour, typography, voice, landing page).
- `docs/brand-audit.md` — read-only audit of this page against the guidelines.
