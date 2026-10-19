# Qafila Robotics — Brand Guidelines & Landing Page

## Brand at a glance

Qafila Robotics builds one platform that leads a mixed fleet of robots — humanoids, quadrupeds, drones and ground vehicles — as a single caravan. Every design, page and product screen follows this document; the Engineering Masterplan covers how the platform is built.

| Item | Rule |
| --- | --- |
| Company name | Qafila Robotics (English) · قافلة للروبوتات (Arabic) |
| Short name | Qafila · قافلة |
| Spelling | Always **Qafila** — never Qafilah, Kafila or QAFILA in running text |
| Tagline | Autonomous Fleet Systems |
| Short line | One fleet. Every robot. · قافلة واحدة. كل الروبوتات. |
| Product name | Qafila Fleet (the platform) |
| GitHub organisation | `qafila-robotics` |
| Primary market | Qatar and the Gulf; Arabic and English everywhere |

### The story behind the logo

A *qafila* is a caravan: many travellers moving as one behind a leader. The logo tells that story inside the word itself.

- **The five letter dots are the caravan.** قافلة has five dots. They sit on one dashed line and grow from right to left, following Arabic reading direction. The last and largest dot, in maroon, is the leader.
- **The two upright letters are robots.** The ا and ل stand like robots, each with an eye slot and an antenna.
- **The gold lines inside the letters are circuits.** They mark the technology running through the fleet.
- **The dune with ruler ticks is the ground the fleet measures and maps.**

The colours tie the story to Qatar: maroon for the leader, sand for the desert route.

## Logo system

The logo comes in five versions; pick by size and background, never by taste. The master SVG source for the two main versions is at the end of this section, so Claude Code can generate every file from it.

| Version | What it contains | Use it for | Minimum size |
| --- | --- | --- | --- |
| Primary | Full wordmark, gold circuit lines, dot halos, dune with ticks, English name and tagline | Website hero, investor decks, posters, signage | 400 px wide · 80 mm print |
| Simplified | Wordmark, antennas, eye slots, five dots and dashed line; no circuit lines, halos or ticks; English name optional | Dashboard header, documents, email signatures | 160 px wide · 35 mm print |
| Icon | Wordmark only, centred on a cream square | GitHub organisation, app icon, social avatars, favicon | 32 px; below 48 px drop the antennas |
| Single colour | Simplified version in #2E2420 or in white | Stamps, engraving, fax, one-colour print | As simplified |
| Reversed | Letters cream, dots in sand tones, leader dot white, on maroon | Dark slides, merchandise, maroon backgrounds | As simplified |

### Clear space and placement

- Keep empty space around the logo equal to **two leader-dot diameters** on every side.
- Place the logo on cream (#FAF7F2), white, or maroon (#8A1538). On photos, use a cream panel behind it.
- In Arabic layouts the logo sits at the top right; in English layouts at the top left.

### Never

- Add a sixth dot, remove a dot, or reorder the dot sizes. The leader is always the leftmost and largest.
- Recolour the leader dot anything but maroon (or white on maroon).
- Stretch, rotate, outline, add shadows, gradients or glow.
- Set the word قافلة in a font instead of using the drawn letters.
- Put the primary version below 400 px wide; switch to the simplified version.
- Combine the logo with the robot convoy illustration in one lockup. The convoy is a separate brand element (see Visual language).

### Master SVG — primary logo

Text is set with IBM Plex Sans; before final release a designer converts it to outlines so the file renders identically everywhere.

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 572" width="1024" height="572">
  <rect width="1024" height="572" fill="#FAF7F2"/>
  <line x1="245" y1="228" x2="775" y2="228" stroke="#CDBFA6" stroke-width="1.5" stroke-dasharray="4 5"/>
  <g fill="none" stroke="#2E2420" stroke-width="34" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="335" cy="305" r="35"/>
    <path d="M335 340 H445 V182"/>
    <circle cx="530" cy="305" r="35"/>
    <path d="M530 340 H445"/>
    <circle cx="690" cy="305" r="35"/>
    <path d="M690 340 H612 V182"/>
  </g>
  <g fill="none" stroke="#D9B26F" stroke-width="2" stroke-linecap="round">
    <path d="M445 255 V340 H372"/>
    <path d="M612 255 V340 H676"/>
  </g>
  <circle cx="445" cy="340" r="5" fill="#D9B26F"/>
  <circle cx="612" cy="340" r="4" fill="#D9B26F"/>
  <g stroke="#2E2420" stroke-width="2.5" stroke-linecap="round">
    <line x1="445" y1="165" x2="445" y2="152"/>
    <line x1="612" y1="165" x2="612" y2="152"/>
  </g>
  <circle cx="445" cy="149" r="3.5" fill="#2E2420"/>
  <circle cx="612" cy="149" r="3.5" fill="#2E2420"/>
  <rect x="439" y="176" width="12" height="4" rx="2" fill="#F3E3C3"/>
  <rect x="606" y="176" width="12" height="4" rx="2" fill="#F3E3C3"/>
  <g fill="none" stroke="#E3D3B8" stroke-width="1">
    <circle cx="316" cy="228" r="23"/>
    <circle cx="363" cy="228" r="22"/>
    <circle cx="537" cy="228" r="19"/>
    <circle cx="683" cy="228" r="17"/>
    <circle cx="720" cy="228" r="15"/>
    <circle cx="340" cy="208" r="2.5"/>
    <circle cx="294" cy="250" r="2.5"/>
    <circle cx="386" cy="209" r="2"/>
    <circle cx="704" cy="212" r="2"/>
  </g>
  <circle cx="316" cy="228" r="17" fill="#8A1538"/>
  <circle cx="363" cy="228" r="15" fill="#B5823A"/>
  <circle cx="537" cy="228" r="13.5" fill="#C99A4F"/>
  <circle cx="683" cy="228" r="12" fill="#D9B26F"/>
  <circle cx="720" cy="228" r="10" fill="#E3C68E"/>
  <path d="M285 408 Q520 380 755 408" fill="none" stroke="#E6D3AE" stroke-width="6" stroke-linecap="round"/>
  <g stroke="#D9C7A4" stroke-width="1.5" stroke-linecap="round">
    <line x1="320" y1="411" x2="320" y2="417"/>
    <line x1="360" y1="407.5" x2="360" y2="413.5"/>
    <line x1="400" y1="404.7" x2="400" y2="410.7"/>
    <line x1="440" y1="402.6" x2="440" y2="408.6"/>
    <line x1="480" y1="401.4" x2="480" y2="407.4"/>
    <line x1="520" y1="401" x2="520" y2="411"/>
    <line x1="560" y1="401.4" x2="560" y2="407.4"/>
    <line x1="600" y1="402.6" x2="600" y2="408.6"/>
    <line x1="640" y1="404.7" x2="640" y2="410.7"/>
    <line x1="680" y1="407.5" x2="680" y2="413.5"/>
    <line x1="720" y1="411" x2="720" y2="417"/>
  </g>
  <text x="516" y="462" text-anchor="middle" font-family="IBM Plex Sans, Arial, sans-serif" font-size="30" letter-spacing="8" fill="#4A3B2E">QAFILA ROBOTICS</text>
  <text x="514" y="494" text-anchor="middle" font-family="IBM Plex Sans, Arial, sans-serif" font-size="17" letter-spacing="2" fill="#B5823A">AUTONOMOUS FLEET SYSTEMS</text>
</svg>
```

### Master SVG — square icon

Used for the GitHub organisation picture, app icon and favicon. Export at 1024 × 1024 PNG for GitHub.

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024">
  <rect width="1024" height="1024" fill="#FAF7F2"/>
  <g transform="translate(-384.9 72.75) scale(1.75)">
    <line x1="265" y1="228" x2="755" y2="228" stroke="#CDBFA6" stroke-width="1.5" stroke-dasharray="4 5"/>
    <g fill="none" stroke="#2E2420" stroke-width="34" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="335" cy="305" r="35"/>
      <path d="M335 340 H445 V182"/>
      <circle cx="530" cy="305" r="35"/>
      <path d="M530 340 H445"/>
      <circle cx="690" cy="305" r="35"/>
      <path d="M690 340 H612 V182"/>
    </g>
    <g stroke="#2E2420" stroke-width="3" stroke-linecap="round">
      <line x1="445" y1="165" x2="445" y2="152"/>
      <line x1="612" y1="165" x2="612" y2="152"/>
    </g>
    <rect x="439" y="176" width="12" height="4" rx="2" fill="#F3E3C3"/>
    <rect x="606" y="176" width="12" height="4" rx="2" fill="#F3E3C3"/>
    <circle cx="316" cy="228" r="17" fill="#8A1538"/>
    <circle cx="363" cy="228" r="15" fill="#B5823A"/>
    <circle cx="537" cy="228" r="13.5" fill="#C99A4F"/>
    <circle cx="683" cy="228" r="12" fill="#D9B26F"/>
    <circle cx="720" cy="228" r="10" fill="#E3C68E"/>
  </g>
</svg>
```

## Colour

Cream carries most of every surface, dark brown carries text, and maroon appears rarely, so it always means "lead" or "act now". Sand tones decorate; they never carry body text.

| Token | Hex | Role | Text on cream? |
| --- | --- | --- | --- |
| `maroon` | #8A1538 | Leader dot, primary buttons, key highlights | Yes, about 9:1 |
| `ink` | #2E2420 | Wordmark letters, headings, body text | Yes, about 14:1 |
| `ink-soft` | #4A3B2E | English name in the logo, secondary text | Yes, about 10:1 |
| `sand-text` | #8C6224 | Gold-coloured text that must be readable (links, small labels) | Yes, about 5:1 |
| `sand-dark` | #B5823A | Tagline in the logo, large display text only | Large text only, about 3:1 |
| `sand` | #C99A4F | Dots, illustrations, chart accents | No — decoration only |
| `sand-light` | #D9B26F | Circuit lines, dots, icons | No — decoration only |
| `sand-pale` | #E3C68E | Smallest dot, subtle fills | No — decoration only |
| `dune` | #E6D3AE | Dune line, dividers | No — decoration only |
| `cream` | #FAF7F2 | Page and logo background | — |
| `night` | #1C1714 | Dark-mode background | — |

Contrast figures are approximate; the design-tokens package (Prompt B.2) checks them automatically against WCAG AA.

### Proportions

On any page or slide, aim for about 60% cream, 25% ink, 10% sand tones and 5% maroon. If maroon covers more than a button, a dot or a short heading, the page looks like a warning.

### Status colours for the dashboard

The fleet dashboard needs warning and error colours that never look like the brand maroon, so operators do not confuse "brand" with "danger".

| Token | Hex | Meaning |
| --- | --- | --- |
| `ok` | #2F7D4F | Online, healthy, done |
| `warn` | #B7791F | Degraded, attention |
| `danger` | #D64545 | Link lost, fault, stop |
| `info` | #2F6690 | Neutral information |

## Typography

One type family covers both languages: IBM Plex Sans for English and IBM Plex Sans Arabic for Arabic. They share proportions and stroke contrast, so bilingual pages look like one design, and both are free on Google Fonts.

| Use | Arabic | English |
| --- | --- | --- |
| Headings | IBM Plex Sans Arabic, SemiBold (600) | IBM Plex Sans, SemiBold (600) |
| Body | IBM Plex Sans Arabic, Regular (400) | IBM Plex Sans, Regular (400) |
| Labels, all-caps lines | — | IBM Plex Sans, Medium (500), letter-spacing 0.2em |
| Code, robot ids, telemetry | IBM Plex Mono | IBM Plex Mono |

The logo's Arabic word is drawn, not typed; never set قافلة in a font where the logo should appear.

### Type scale

One scale for web and dashboard, in rem with a 16 px base:

| Token | Size | Line height | Use |
| --- | --- | --- | --- |
| `display` | 3.5 rem (56 px) | 1.1 | Landing hero only |
| `h1` | 2.5 rem (40 px) | 1.2 | Page titles |
| `h2` | 1.75 rem (28 px) | 1.25 | Section titles |
| `h3` | 1.25 rem (20 px) | 1.35 | Card titles |
| `body` | 1 rem (16 px) | 1.6 English · 1.8 Arabic | Paragraphs |
| `small` | 0.875 rem (14 px) | 1.5 | Captions, labels |
| `micro` | 0.75 rem (12 px) | 1.4 | Legal, telemetry units |

### Arabic and right-to-left rules

- Arabic pages set `dir="rtl"` on the root and use logical CSS properties (`margin-inline-start`, not `margin-left`), so one stylesheet serves both directions.
- Arabic body text gets a taller line height (1.8) because of its ascenders, descenders and dots.
- Never letter-space Arabic; it breaks the joins between letters.
- Numbers use Western digits (0–9) in both languages, so robot ids, speeds and dates read the same for every operator.
- Icons that show direction (arrows, chevrons, back buttons) mirror in RTL; icons that show real objects (a drone, a battery) do not.

## Visual language

Everything Qafila draws is built from the logo's four parts — rounded monoline strokes, dots, the dashed route line and the dune — so a page, a slide and the dashboard all look related without repeating the logo.

### Brand elements

| Element | How to draw it | Where it appears |
| --- | --- | --- |
| Rounded strokes | Uniform weight, round caps and joins, no sharp corners | Illustrations, icons, diagrams |
| Caravan dots | Five dots growing in one direction, maroon leader last; direction follows reading direction | Loading indicator, progress steps, section dividers |
| Route line | Thin dashed line in `dune` or #CDBFA6 | Timelines, connectors, under headings |
| Dune | One gentle curve in `dune`, optionally with small ticks | Footer edge, hero base, chart baselines |
| Circuit lines | 1–2 px `sand-light` lines with a small node at the corner | Large hero art and decks only; never under 400 px |

### The robot convoy illustration

The four fleet robots walk as a convoy on a dune line. This is a brand illustration, used on its own, never inside the logo lockup.

- Order in reading direction, growing in size: ground car, drone (hovering just above the dune), quadruped, humanoid leading in maroon.
- Built from the same rounded strokes as the wordmark: car = rounded body, small cabin, two round wheels; drone = bar with two short rotors; quadruped = rounded body, round head, four short legs; humanoid = tall rounded bar with an eye slot and antenna, identical to the upright letters of the wordmark.
- No faces, no details, no outlines, one stroke weight, evenly spaced.
- Colours: car `sand-light`, drone `sand`, quadruped `sand-dark`, humanoid `maroon`.

### Icons

Use one outline icon set across website and dashboard: Tabler Icons, 1.75 px stroke, 24 px grid, rounded caps. Robot classes use custom icons drawn to the same grid, matching the convoy pictograms.

### Photography and video

- Real Qafila robots in real places: labs, corridors, Qatari outdoor light. No stock robots, no renders presented as photos.
- Warm, natural light; avoid blue sci-fi colour grading.
- People appear as operators and partners, safely outside the robot's path.
- Every photo of a person in a public or customer space needs their consent and the venue's permission.

### Motion

- The loading indicator is the five caravan dots moving one step along the route line, leader last.
- Movement is short and calm: 150–250 ms, ease-out. Nothing bounces or spins.
- Respect the operating system's reduced-motion setting everywhere.

### Interface tokens

Shared by the landing page and the fleet dashboard, generated from one tokens file (Prompt B.2).

| Token | Value |
| --- | --- |
| Spacing | 4 px base: 4, 8, 12, 16, 24, 32, 48, 64, 96 |
| Corner radius | 8 px controls · 12 px cards · 20 px large panels · full for pills |
| Borders | 1 px, #E6DCCB on cream; #3A302A on night |
| Shadows | None on cream; one soft shadow (0 8px 24px rgba(46,36,32,0.08)) for floating menus only |
| Focus ring | 2 px maroon outline, 2 px offset |
| Light mode | Background cream, surface white, text ink |
| Dark mode | Background night, surface #26201C, text cream, maroon brightened to #B23A5C for contrast |

## Voice and tone

Qafila sounds like a calm, capable engineer explaining something real: confident about what works, exact about what is still being built.

| We are | We are not |
| --- | --- |
| Clear: short sentences, plain words | Jargon-heavy or vague ("next-gen synergy") |
| Exact: numbers, names, dates | Hyped: "revolutionary", "the world's first", "legendary" |
| Safety-minded: we say how robots stop | Careless about risk to impress |
| Bilingual by default: Arabic and English carry the same message | Arabic as an afterthought or machine translation |
| Warm and local: proud of Qatar | Generic Silicon Valley copy |

### What we never claim

- Customers, partners, logos, testimonials or numbers we do not have in writing.
- "Production-ready", "fully autonomous" or "AI-powered everything" before the exit criteria in the Engineering Masterplan are met.
- Capabilities shown only in simulation, unless labelled "simulation".
- Safety guarantees. We describe the safety features; we do not promise zero risk.

### Writing in both languages

- Write the Arabic first for Qatari audiences, then the English, rather than translating one word by word. A native speaker reviews every Arabic page before publishing.
- Use Modern Standard Arabic for the website and documents; Gulf dialect only in social posts and voice prompts where it fits.
- Keep product terms consistent: أسطول (fleet), روبوت (robot), لوحة التحكم (dashboard), مهمة (mission), المشغّل (operator).

### Sample lines

| English | Arabic |
| --- | --- |
| One fleet. Every robot. | قافلة واحدة. كل الروبوتات. |
| See, control and coordinate every robot from one screen. | شاهد كل روبوتاتك وتحكّم فيها ونسّق مهامها من شاشة واحدة. |
| When the link drops, the robot stops. Safety comes first. | إذا انقطع الاتصال، يتوقف الروبوت. السلامة أولًا. |
| Built in Qatar, for the Gulf. | صُنعت في قطر، لمنطقة الخليج. |

## Landing page

The landing page has one job: make a Qatari partner or funder understand Qafila in 30 seconds and request a pilot or a meeting. It is bilingual, fast, honest about the stage of the company, and built with the same tokens as the dashboard.

### Page structure

1. **Header.** Simplified logo; links to Platform, Fleet, Use cases, Safety, Contact; العربية / English switch; button "Request a pilot".
2. **Hero.** Headline "One fleet. Every robot." / "قافلة واحدة. كل الروبوتات."; one sentence on what Qafila does; buttons "Request a pilot" and "How it works"; the robot convoy illustration on a dune, with the caravan dots moving gently along the route line.
3. **The problem.** Organisations buy robots from different makers, each with its own app; nobody sees or coordinates them together. Three short points, no statistics unless sourced.
4. **How it works.** Four steps drawn with the route line: Connect (any robot, any network), See (live video, status, map), Coordinate (missions across robot types), Learn (what one robot finds, all robots know).
5. **The fleet.** Four cards — humanoid, quadruped, drone, ground vehicle — each with its pictogram, two lines on what it does in the fleet, and real photos once available.
6. **Use cases.** Industrial inspection, facility security and patrol, events and hospitality, research and education. Each card: the task, which robots do it, what the operator sees.
7. **Safety first.** Robots stop when the link drops; every command expires; new missions need an operator's approval; every action is logged. Short, plain, confident.
8. **Where we are.** An honest status line: platform in development, current fleet, pilot programme opening. A simple six-step progress strip matching the masterplan phases, with only completed steps marked done.
9. **About.** Built in Qatar; the founding team (photos and names supplied by the founders, placeholders until then).
10. **Contact and pilot request.** Form: name, organisation, email, phone (optional), use case (select), message, consent checkbox linking to the privacy notice. Success and error states in both languages.
11. **Footer.** Simplified logo, short line, links, social profiles, privacy notice, © Qafila Robotics.

### Behaviour and quality bar

| Area | Requirement |
| --- | --- |
| Languages | Arabic at `/ar` (right to left), English at `/en`; first visit follows the browser language; the switch keeps the reader on the same section |
| Responsiveness | Designed mobile first; checked at 360, 768, 1280 and 1920 px |
| Performance | Lighthouse 95+ for performance, accessibility, best practices and SEO on mobile; largest image under 200 KB; fonts self-hosted and subset |
| Accessibility | WCAG 2.2 AA: contrast per the colour table, keyboard navigation, visible focus ring, labelled form fields, reduced-motion respected |
| SEO and sharing | Titles and descriptions in both languages, `hreflang` links, sitemap, Open Graph image generated from the brand assets |
| Form | Server-side validation, spam protection (honeypot plus rate limit), sends to an email address set in environment variables; no keys in code |
| Privacy | Privacy notice page in both languages; no tracking cookies; if analytics are added, a cookie-less tool |
| Content | No invented customers, numbers or quotes; every placeholder visibly marked `[TBD]` until the founders replace it |

### Technology

Next.js (App Router) with TypeScript, Tailwind CSS using the shared brand tokens, `next-intl` for Arabic and English, and the IBM Plex fonts self-hosted. It lives in the same repository as the platform at `apps/website/`, so the brand package is shared with the dashboard. It can be deployed as a static site plus one server route for the form.

## Claude Code prompts

Four prompts turn this document into real files: brand assets, a shared tokens package, the landing page and in-repo guidelines. Follow the same plan-first loop as the Engineering Masterplan: send Prompt B.0 in plan mode, review, then send the rest one at a time.

**Before you start:** export this document as Markdown and save it in the repository as `docs/brand/brand-guidelines.md`, next to `docs/masterplan.md`.

### Brand rules to add to CLAUDE.md

Prompt B.4 adds this block; it is shown here so you can review it.

```markdown
## Brand (read docs/brand/brand-guidelines.md before any visual work)
- Name: Qafila Robotics / قافلة للروبوتات. Spelling is always "Qafila".
- Never redraw the logo. Use files from packages/brand/assets only.
- Colours, fonts, spacing and radii come from packages/brand tokens. No hard-coded hex values in apps.
- Sand tones are decoration only; text uses ink, ink-soft, sand-text or maroon.
- Maroon means "lead" or "primary action"; errors use the danger token, never maroon.
- Every page works in Arabic (RTL) and English. Use logical CSS properties.
- No invented customers, numbers, quotes or capabilities. Mark placeholders [TBD].
```

**Prompt B.0 — Plan (plan mode)**

```text
Read docs/brand/brand-guidelines.md and docs/masterplan.md.
We will build the brand foundation and the landing page. Produce a plan only:
1. The files you will create in packages/brand (assets, fonts, tokens, scripts) and apps/website, with one line each.
2. How you will derive each logo version (primary, primary transparent, simplified, icon, single colour black, single colour white, reversed on maroon) from the two master SVGs, element by element.
3. The PNG export pipeline: tool, how fonts are embedded, every output file and size.
4. The tokens format and the outputs generated from it (CSS variables, Tailwind preset, TypeScript constants), and the contrast check.
5. The landing page: routes, components per section, i18n approach, form handling, and how you will meet the quality bar table.
6. Anything in the guidelines you think is unclear or risky.
Wait for my approval.
```

**Prompt B.1 — Brand assets and PNG export**

```text
Create packages/brand/assets from the two master SVGs in docs/brand/brand-guidelines.md, copied exactly:
- logo-primary.svg, logo-primary-transparent.svg (no background rect)
- logo-simplified.svg (remove circuit lines and their nodes, dot halos, satellite circles, dune ticks; keep the rest)
- icon.svg (the square master), icon-maroon.svg (maroon background, letters #FAF7F2, dots in sand tones, leader dot #FFFFFF, no dashed line)
- logo-mono-ink.svg and logo-mono-white.svg (simplified version, every element one colour)
- logo-reversed.svg (simplified version on #8A1538, letters #FAF7F2, leader dot #FFFFFF)
Download IBM Plex Sans (OFL licence) into packages/brand/fonts and include the licence file.
Write scripts/export-brand.mjs using @resvg/resvg-js with those fonts loaded, and add `pnpm brand:export`, producing in packages/brand/dist:
- github-avatar-1024.png (from icon.svg)
- icon-512.png, icon-256.png, icon-64.png, icon-32.png, apple-touch-icon-180.png, favicon.ico (16, 32, 48)
- logo-primary-2048.png, logo-primary-1024.png, logo-simplified-1024.png, logo-reversed-1024.png
- og-image-1200x630.png: cream background, primary logo centred, nothing else
After export, verify programmatically that every logo SVG has exactly five dot circles with the maroon one leftmost and largest, and fail the script if not.
Report the file list with pixel sizes.
```

**Prompt B.2 — Design tokens package**

```text
Create packages/brand/tokens.json with every colour, status colour, font family, type scale step, spacing step, radius, border, shadow and focus token from the guidelines, for light and dark mode.
Generate from it, with a build script:
- packages/brand/dist/tokens.css (CSS custom properties, light and dark via [data-theme])
- packages/brand/dist/tailwind-preset.ts (colours, fonts, font sizes, spacing, radii)
- packages/brand/dist/tokens.ts (typed constants)
Add scripts/check-contrast.mjs that checks every text/background pair listed as allowed in the guidelines against WCAG AA (4.5:1 normal, 3:1 large) and fails CI on any regression. Print the measured ratios.
Wire the dashboard (apps/dashboard) to use the preset instead of any hard-coded colours.
```

**Prompt B.3 — Landing page**

```text
Build apps/website exactly to the "Landing page" section of docs/brand/brand-guidelines.md:
- Next.js App Router, TypeScript, Tailwind with @qafila/brand preset, next-intl with /ar (RTL) and /en, browser-language redirect at /.
- The eleven sections in order, each its own component, all copy in messages/ar.json and messages/en.json. Write the Arabic as natural Modern Standard Arabic, not a literal translation, and list every Arabic string for my review.
- Robot convoy illustration as an inline SVG component built from the pictogram rules in Visual language; caravan dots animate along the route line, disabled under prefers-reduced-motion.
- Pilot request form with server action: validation, honeypot, rate limit, email via a provider configured by environment variables (document them in .env.example); success and error states in both languages.
- Privacy notice pages in both languages with [TBD] where legal text is needed.
- Metadata, hreflang, sitemap, robots.txt, Open Graph image from packages/brand/dist.
- Self-hosted subset IBM Plex Sans and IBM Plex Sans Arabic.
- No invented customers, numbers, quotes or photos; use [TBD] placeholders, visibly styled.
Then run Lighthouse (mobile) on /ar and /en and Playwright tests for language switch, RTL layout, form validation and keyboard navigation. Report scores and anything below the quality bar.
```

**Prompt B.4 — Guidelines in the repository**

```text
1. Add the "Brand" rules block from docs/brand/brand-guidelines.md to CLAUDE.md under a new heading.
2. Create docs/brand/README.md: where every asset lives, how to export, how to use tokens in a new app, and a checklist for reviewing any new design (logo version, dots, colour roles, contrast, RTL, claims).
3. Add a pull-request template section "Brand check" with that checklist, required whenever files in apps/website, apps/dashboard or packages/brand change.
```

### Review checklist for every design

- [ ] Right logo version for the size; five dots, maroon leader leftmost and largest.
- [ ] Colours from tokens only; sand tones not used for body text.
- [ ] Works in Arabic (RTL) and English; Arabic reviewed by a native speaker.
- [ ] Contrast passes AA; reduced motion respected.
- [ ] No invented customers, numbers, quotes or capabilities.
