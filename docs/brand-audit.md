# Landing page — brand audit

Read-only audit of the Qafila Robotics landing page against the Landing page, Colour, Typography,
Voice and tone, and Logo system sections of `docs/brand-guidelines.md`. Nothing in the app was
changed. Each row: requirement, status (meets / partly / missing), what is wrong, suggested fix.

## Colour

| Requirement | Status | What is wrong | Suggested fix |
|---|---|---|---|
| Palette defined centrally and on-brand | meets | All brand hexes live in `tailwind.config.ts:9-26` and match exactly (maroon `#8A1538`, ink `#2E2420`, ink-soft `#4A3B2E`, sand set, dune, cream, night) | — |
| Maroon = lead / primary action only; errors use `danger` | meets | Maroon only on primary CTAs/focus ring/active phase; errors use `text-danger`/`border-danger` (`Contact.tsx:74,172-173`) | — |
| Sand tones decoration only, never body text | meets | Only `sand-text` (`#8C6224`) is used as text — the token explicitly allowed for text; decorative sand (`sand`, `sand-light`, `sand-pale`, `dune`) only in SVG fills/strokes | — |
| No off-palette colours | partly | Off-palette decorative strokes: `#CDBFA6` (`CaravanDots.tsx:21`, `HowItWorks.tsx:18`, `RobotConvoy.tsx:25`, `logo-primary.svg:3`, `logo-simplified.svg:2`), and `#F3E3C3`/`#E3D3B8`/`#D9C7A4` inside logo SVGs | Map to `dune`/`line` tokens, or add named decorative tokens; keep logo SVGs as-is if treated as fixed artwork |
| ~60% cream surfaces | partly | `bg-white` (`#FFFFFF`) used for cards/inputs/sections (`Fleet.tsx:13`, `Hero.tsx:25`, `Contact.tsx:73`) rather than cream | Introduce a `surface`/`cream` fill token for large card backgrounds |

## Typography

| Requirement | Status | What is wrong | Suggested fix |
|---|---|---|---|
| IBM Plex Sans / Sans Arabic / Mono | meets | Loaded via `next/font/google` (`app/[locale]/layout.tsx:6,11-28`), wired into Tailwind `fontFamily`; `font-arabic` applied for `ar` | — |
| Type scale (display…micro) | meets | `tailwind.config.ts:33-41` matches spec exactly | — |
| Arabic line-height 1.8, English 1.6 | meets | Arabic 1.8 enforced (`app/globals.css:19-21`); `body` token carries 1.6 | Hero subhead uses non-token `sm:text-lg` (`Hero.tsx:15`) so it won't inherit 1.6 — minor |

## Voice and tone

| Requirement | Status | What is wrong | Suggested fix |
|---|---|---|---|
| No invented customers / partners / testimonials | meets | None found in `messages/en.json`/`ar.json` | — |
| No unsourced numbers / statistics | meets | None present | — |
| No hype ("revolutionary", "world's first", "fully autonomous", "production-ready") | meets | "Autonomous Fleet Systems" is descriptive, not "fully autonomous" | — |
| No safety guarantees | meets | `safety.intro`: "We describe how the robots stop. We do not promise zero risk." | — |
| Honest status (in development, pilot opening) | meets | `status.intro`/`status.pilotLine` honest; all phases `upcoming`/`in-progress`, none `done` (`Status.tsx:6-13`) | — |
| Placeholders marked `[TBD]` | meets | Fleet photos, founders, current fleet, privacy legal text all `[TBD]` | Replace as founders supply real content |

## Logo system

| Requirement | Status | What is wrong | Suggested fix |
|---|---|---|---|
| Use logo files, never redraw | meets | `logo-primary.svg`/`logo-simplified.svg`/`icon.svg` used via `<img>` (`Header.tsx:34`) | — |
| Five dots, maroon leader leftmost + largest | meets | Verified in both logos (`logo-primary.svg:37-41`, `logo-simplified.svg:19-23`): maroon leader cx=316, r=17; sizes descend left→right | — |
| Convoy illustration faces reading direction | partly | `RobotConvoy.tsx:6-10` places the maroon leader humanoid at the **right/largest** regardless of locale. The convoy (and its leader) should face the reading direction: **leader at the left on `/ar` (RTL), at the right on `/en` (LTR)** | Make the convoy mirror with locale direction so the leader leads the way the reader reads. **Audit note only — do not change now.** |

## Landing page structure

| Requirement | Status | Notes |
|---|---|---|
| All 11 sections present & ordered | meets | Header, Hero, Problem, HowItWorks, Fleet, UseCases, Safety, Status, About, Contact, Footer (`app/[locale]/page.tsx:18-32`) |
| Hero headline bilingual | meets | EN "One fleet. Every robot." / AR "قافلة واحدة. كل الروبوتات." |
| How it works: Connect/See/Coordinate/Learn | meets | `en.json:41-48` |
| Fleet: 4 cards | meets | Humanoid/Quadruped/Drone/Ground vehicle (`Fleet.tsx:6-11`) |
| Pilot-request form | meets | name/org/email/phone/use-case/message/consent + validation + honeypot + Web3Forms |

## Arabic / RTL

| Requirement | Status | What is wrong | Suggested fix |
|---|---|---|---|
| `dir="rtl"`, `/ar` + `/en` routes | meets | `dir={dir(locale)}` (`layout.tsx:77`); `generateStaticParams` for both locales | — |
| Logical CSS properties, not physical | meets | Zero `margin-left/right`, `ml-/mr-/pl-/pr-`, `text-left/right`; uses `start-*`, `inset-x-*`, `mx-auto` | — |
| Latin/numeric inputs stay LTR in RTL page | meets | `dir="ltr"` on email/phone inputs (`Contact.tsx:123,130`) | — |
| Arabic reviewed by native speaker | partly | `ar.json:4` mixes Latin ("قافلة Fleet منصّة…"); first-draft Arabic | Native Modern Standard Arabic review before launch |

## Contrast (WCAG AA)

| Requirement | Status | What is wrong | Suggested fix |
|---|---|---|---|
| Body text passes AA | meets | ink / ink-soft on cream are high contrast | — |
| Accent text passes AA | partly | `sand-text` `#8C6224` on cream ≈ 4.5:1 — borderline at `text-micro` (0.75rem) in `Footer.tsx:41`, `Status.tsx:43` | Verify small-text pairs against AA; bump size or darken to `ink-soft` for micro text |
| Logo sub-tagline | partly | "AUTONOMOUS FLEET SYSTEMS" `#B5823A` on cream ≈ 2.9:1 (`logo-primary.svg:57`) | Decorative (inside logo artwork) — acceptable, but low contrast; note if used as standalone text |

## Flags
- **No** invented customers, numbers or claims found.
- **Contrast:** two marginal small-text spots with `sand-text`; one low-contrast decorative logo tagline.
- **Arabic RTL:** correctly implemented (logical CSS, dir, LTR inputs); only a first-draft Arabic copy issue and the convoy reading-direction note above.
