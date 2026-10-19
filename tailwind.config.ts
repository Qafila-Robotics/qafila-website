import type { Config } from "tailwindcss";

// Brand tokens from docs: Qafila Robotics Brand Guidelines (Colour + Interface tokens).
// Sand tones are decoration only; body text uses ink / ink-soft / sand-text / maroon.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        maroon: "#8A1538",
        ink: "#2E2420",
        "ink-soft": "#4A3B2E",
        "sand-text": "#8C6224",
        "sand-dark": "#B5823A",
        sand: "#C99A4F",
        "sand-light": "#D9B26F",
        "sand-pale": "#E3C68E",
        dune: "#E6D3AE",
        cream: "#FAF7F2",
        night: "#1C1714",
        line: "#E6DCCB",
        // Dashboard status colours (kept distinct from brand maroon).
        ok: "#2F7D4F",
        warn: "#B7791F",
        danger: "#D64545",
        info: "#2F6690",
      },
      fontFamily: {
        sans: ["var(--font-plex)", "system-ui", "sans-serif"],
        arabic: ["var(--font-plex-ar)", "var(--font-plex)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      fontSize: {
        display: ["3.5rem", { lineHeight: "1.1" }],
        h1: ["2.5rem", { lineHeight: "1.2" }],
        h2: ["1.75rem", { lineHeight: "1.25" }],
        h3: ["1.25rem", { lineHeight: "1.35" }],
        body: ["1rem", { lineHeight: "1.6" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
        micro: ["0.75rem", { lineHeight: "1.4" }],
      },
      borderRadius: {
        control: "8px",
        card: "12px",
        panel: "20px",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(46,36,32,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
