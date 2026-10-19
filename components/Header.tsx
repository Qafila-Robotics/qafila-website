"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { asset } from "@/lib/asset";
import LangSwitch from "./LangSwitch";

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
    <header className="sticky top-0 z-40 border-b border-line bg-cream/90 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-2 focus:z-50 focus:rounded-control focus:bg-maroon focus:px-3 focus:py-1 focus:text-cream"
      >
        {t("skipToContent")}
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href={`/${locale}/`} className="shrink-0" aria-label="Qafila Robotics">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/logo-simplified.svg")} alt="Qafila Robotics" className="h-9 w-auto" />
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-small font-medium text-ink-soft hover:text-maroon">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LangSwitch />
          <a
            href="#contact"
            className="rounded-control bg-maroon px-4 py-2 text-small font-medium text-cream hover:opacity-90"
          >
            {tc("requestPilot")}
          </a>
        </div>

        <button
          type="button"
          className="rounded-control p-2 text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className="border-t border-line bg-cream px-4 py-3 md:hidden" aria-label="Primary">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-control px-2 py-2 text-ink-soft hover:bg-dune/40 hover:text-maroon"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex items-center justify-between border-t border-line pt-3">
              <LangSwitch />
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-control bg-maroon px-4 py-2 text-small font-medium text-cream"
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
