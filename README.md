# Qafila Robotics — Landing Page

Bilingual (Arabic RTL `/ar` + English `/en`) landing page for Qafila Robotics.
Next.js App Router + TypeScript + Tailwind + next-intl, statically exported for GitHub Pages.

> One fleet. Every robot. · قافلة واحدة. كل الروبوتات.

## Develop

```bash
cp .env.example .env.local   # add your Web3Forms key
npm install
npm run dev                  # http://localhost:3000  → redirects to /en or /ar
```

## Build (static export)

```bash
npm run assets               # renders og-image.png + apple-touch-icon.png from the SVGs
npm run lint && npm run typecheck
npm run build                # outputs static site to ./out (postbuild adds the CSP)
npx serve out                # preview the exported site
```

## Deploy (GitHub Pages)

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes `out/`.
One-time setup:

1. Repo **Settings → Pages → Source: GitHub Actions**.
2. Repo **Settings → Secrets and variables → Actions → Variables**: add
   `NEXT_PUBLIC_WEB3FORMS_KEY` (public form key, not a secret).
3. The workflow sets `BASE_PATH=/<repo>` automatically (project repo). For an
   **org-pages repo** (`qafila-robotics.github.io`) or a **custom domain**, set
   `BASE_PATH` to empty and update `NEXT_PUBLIC_SITE_URL` in the workflow.

## Structure

Pages (each in `/en` and `/ar`, RTL for Arabic):

| Route | What |
| --- | --- |
| `/` | Home: value proposition, product frame, what runs today, four pillars, safety, robots, how it works, why Qafila, stage, demo CTA |
| `/platform/` | Fleet command center, missions, Fleet Brain (in development), safety by design, security, integrations |
| `/robots/` | One card per robot class with its real status and an install-video slot |
| `/how-it-works/` | Add robot → run one command → online → take control; architecture diagram |
| `/developers/` | Connect a robot in 3 steps (code samples matching the platform API), API, contracts, SDK, docs |
| `/use-cases/` | Inspection, security patrol, events, research: what works today vs. in development |
| `/company/` | Story, progress, team [TBD], investors, contact form (`#contact`, target of every "Request a demo") |
| `/privacy/` | Privacy notice |

- `app/[locale]/` — locale layout (lang/dir, self-hosted IBM Plex from `app/fonts/`, header, footer) and pages.
- `components/` — `ui.tsx` (Container, Section, StatusPill, Screenshot, VideoSlot, CaravanDots…), `Header`, `Footer`,
  `FleetFrame` (hero product frame), `diagrams/` (SafetyGate, BrainLoop, Architecture), `CodeBlock`, `Contact`.
- `messages/{en,ar}.json` — all copy, same keys in both. **Arabic needs a native-speaker review before launch.**
- `lib/site.ts` — page list, metadata helper (canonical, hreflang, Open Graph, Twitter), contact address, code samples.
- `lib/screenshots.ts` — **where the founder drops real product screenshots and install videos** (see below).
- `security-headers.mjs` + `scripts/postbuild-security.mjs` — CSP and security headers (see below).

### Adding real screenshots and videos

Every product image on the site is a hatched slot marked **[TBD screenshot]** (or **[TBD video]**) until you set it:

1. Capture from the dashboard (no customer data, tokens, IPs or e-mails in view), 1600 px wide, under 200 KB.
2. Save as `public/screenshots/<key>.png` (keys listed in `lib/screenshots.ts`: fleet, drawer, camera, control,
   incidents, capsule, wall, copilot, map, missions, addRobot).
3. Set the path in `lib/screenshots.ts`, e.g. `fleet: "/screenshots/fleet.png"`. The hero uses `fleet`.
4. Videos: `public/videos/<class>.mp4` + `<class>.jpg` poster, then set `VIDEOS.<class>`.

### Security headers

The site is a static export with no third-party scripts, fonts or trackers; the only outside origin is the form
endpoint (Web3Forms). After `npm run build`, `postbuild` gives every page a Content-Security-Policy `<meta>` built
from sha256 hashes of that page's own inline scripts (no `'unsafe-inline'` scripts), and writes `out/_headers`
(HSTS, CSP with `frame-ancestors 'none'`, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy) for hosts
that read it. **GitHub Pages ignores `_headers`**: there, HSTS comes from "Enforce HTTPS" on `*.github.io`, and
`frame-ancestors`/X-Frame-Options need a host or proxy that can set headers (e.g. Cloudflare in front of a custom
domain). `NEXT_OUTPUT=server npm run build && npm start` serves the same headers from `next.config.ts`.

## Brand rules (see the Brand Guidelines)

- Spelling is always **Qafila**. Never redraw the logo.
- Sand tones are decoration only; body text uses `ink`, `ink-soft`, `sand-text` or `maroon`.
- Maroon means "lead" / "primary action"; errors use the `danger` token, never maroon.
- No invented customers, numbers, quotes or capabilities — placeholders are marked `[TBD]`.

## Known follow-ups

- Replace every `[TBD]`: product screenshots and install videos (`lib/screenshots.ts`), founder names/photos,
  pilot programme terms, investor materials, public docs link, target dates, privacy legal text.
- Native-speaker review of the Arabic copy.
- Enable Web3Forms domain restriction + captcha before sharing the form widely.
