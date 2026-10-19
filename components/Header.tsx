"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { asset } from "@/lib/asset";
import LangSwitch from "./LangSwitch";
import ThemeToggle from "./ThemeToggle";
import { IconMenu, IconX } from "./icons";

function Logo() {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={asset("/logo-simplified.svg")} alt="Qafila Robotics" className="h-9 w-auto dark:hidden" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={asset("/logo-simplified-dark.svg")} alt="Qafila Robotics" className="hidden h-9 w-auto dark:block" />
    </>
  );
}

export default function Header() {
  const t = useTranslations("nav");
  const tc = useTranslations("cta");
  const { locale } = useParams<{ locale: string }>();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#how-it-works", label: t("platform") },
    { href: "#fleet", label: t("fleet") },
    { href: "#use-cases", label: t("useCases") },
    { href: "#safety", label: t("safety") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-edge bg-surface/90 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-2 focus:z-50 focus:rounded-control focus:bg-primary focus:px-3 focus:py-1 focus:text-on-primary"
      >
        {t("skipToContent")}
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href={`/${locale}/`} className="shrink-0" aria-label="Qafila Robotics">
          <Logo />
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-small font-medium text-fg-soft hover:text-fg">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <LangSwitch />
          <a
            href="#contact"
            className="rounded-control bg-primary px-4 py-2 text-small font-medium text-on-primary hover:opacity-90"
          >
            {tc("requestPilot")}
          </a>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-control p-2 text-fg"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            {open ? <IconX className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" className="border-t border-edge bg-surface px-4 py-3 md:hidden" aria-label="Primary">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-control px-2 py-2 text-fg-soft hover:bg-overlay hover:text-fg"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex items-center justify-between border-t border-edge pt-3">
              <LangSwitch />
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-control bg-primary px-4 py-2 text-small font-medium text-on-primary"
              >
                {tc("requestPilot")}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
