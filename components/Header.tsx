"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { asset } from "@/lib/asset";
import { DEMO_PATH, PAGES, href } from "@/lib/site";
import LangSwitch from "./LangSwitch";
import ThemeToggle from "./ThemeToggle";
import { IconMenu, IconX } from "./icons";

export function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <>
      {/* Brand files only, never redrawn: simplified logo, dark variant on dark surfaces. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={asset("/logo-simplified.svg")} alt="Qafila Robotics" width={160} height={36} className={`${className} dark:hidden`} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={asset("/logo-simplified-dark.svg")} alt="Qafila Robotics" width={160} height={36} className={`${className} hidden dark:block`} />
    </>
  );
}

export default function Header() {
  const t = useTranslations("nav");
  const tc = useTranslations("cta");
  const { locale } = useParams<{ locale: string }>();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on navigation and with Escape.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const current = (path: string) => pathname?.replace(/\/$/, "").endsWith(path.replace(/\/$/, ""));

  return (
    <header className="sticky top-0 z-40 border-b border-edge bg-bg/85 backdrop-blur supports-[backdrop-filter]:bg-bg/75">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-2 focus:z-50 focus:rounded-control focus:bg-primary focus:px-3 focus:py-1 focus:text-on-primary"
      >
        {t("skipToContent")}
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href={href(locale)} className="shrink-0" aria-label={`Qafila Robotics — ${t("home")}`}>
          <Logo className="h-8 w-auto sm:h-9" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label={t("primary")}>
          {PAGES.map((p) => {
            const active = current(p.path);
            return (
              <Link
                key={p.key}
                prefetch={false}
                href={href(locale, p.path)}
                aria-current={active ? "page" : undefined}
                className={`rounded-control px-3 py-2 text-small font-medium transition-colors ${
                  active ? "text-fg" : "text-fg-soft hover:text-fg"
                }`}
              >
                <span className={active ? "border-b-2 border-primary-accent pb-1" : ""}>{t(p.key)}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <LangSwitch className="px-2" />
          <Link
            href={href(locale, DEMO_PATH)}
            className="ms-2 inline-flex min-h-10 items-center rounded-control bg-primary px-4 text-small font-medium text-on-primary transition-colors hover:bg-primary/90"
          >
            {tc("requestDemo")}
          </Link>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <LangSwitch className="px-2" />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-control text-fg"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t("close") : t("menu")}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconX className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" className="border-t border-edge bg-bg lg:hidden" aria-label={t("primary")}>
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
            {PAGES.map((p) => (
              <li key={p.key}>
                <Link
                  prefetch={false}
                  href={href(locale, p.path)}
                  aria-current={current(p.path) ? "page" : undefined}
                  className="flex min-h-12 items-center border-b border-edge text-h3 font-medium text-fg aria-[current=page]:text-primary-accent"
                >
                  {t(p.key)}
                </Link>
              </li>
            ))}
            <li className="flex items-center justify-between gap-3 pt-4">
              <ThemeToggle />
              <Link
                href={href(locale, DEMO_PATH)}
                className="inline-flex min-h-11 flex-1 items-center justify-center rounded-control bg-primary px-4 font-medium text-on-primary"
              >
                {tc("requestDemo")}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
