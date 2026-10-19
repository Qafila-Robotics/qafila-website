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
npm run build                # outputs static site to ./out
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

- `app/[locale]/` — locale layout (lang/dir, fonts, metadata/hreflang), page, privacy.
- `app/layout.tsx` — passthrough root; `public/index.html` redirects `/` by browser language.
- `components/` — the 11 sections + `RobotConvoy`, `CaravanDots`, `RobotIcon`, `Header`, `Footer`, `LangSwitch`.
- `messages/{en,ar}.json` — all copy. **Arabic is a first draft — have a native speaker review before launch.**
- `public/logo-*.svg`, `icon.svg` — brand marks (do not redraw; five dots, maroon leader leftmost and largest).
- `tailwind.config.ts` — brand colour, type, spacing and radius tokens.

## Brand rules (see the Brand Guidelines)

- Spelling is always **Qafila**. Never redraw the logo.
- Sand tones are decoration only; body text uses `ink`, `ink-soft`, `sand-text` or `maroon`.
- Maroon means "lead" / "primary action"; errors use the `danger` token, never maroon.
- No invented customers, numbers, quotes or capabilities — placeholders are marked `[TBD]`.

## Known follow-ups

- Replace every `[TBD]`: fleet photos, founder names/photos, full privacy legal text, current-fleet details.
- Native-speaker review of the Arabic copy.
- Enable Web3Forms domain restriction + captcha before sharing the form widely.
