"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { IconSun, IconMoon } from "./icons";

// Toggles the `dark` class on <html> and remembers the choice. Initial class is
// set pre-paint by the inline script in the layout; this only mirrors/flips it.
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const t = useTranslations("theme");
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? t("toLight") : t("toDark")}
      className={`rounded-control p-2 text-fg-soft hover:text-primary-accent ${className}`}
    >
      {dark ? <IconSun className="h-5 w-5" /> : <IconMoon className="h-5 w-5" />}
    </button>
  );
}
