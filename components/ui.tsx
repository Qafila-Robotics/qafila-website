import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { asset } from "@/lib/asset";
import { SCREENSHOTS, VIDEOS } from "@/lib/screenshots";
import { IconArrowRight } from "./icons";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Section({
  id,
  children,
  className = "",
  labelledBy,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`scroll-mt-20 py-16 sm:py-24 ${className}`}>
      {children}
    </section>
  );
}

/** Section heading with an optional lead paragraph. */
export function Heading({
  id,
  title,
  lead,
  as: H = "h2",
  className = "",
}: {
  id?: string;
  title: string;
  lead?: string;
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div className={`max-w-prose ${className}`}>
      <H
        id={id}
        className={
          H === "h1"
            ? "text-balance text-h1 font-semibold tracking-tight text-fg lg:text-display"
            : "text-balance text-h2 font-semibold tracking-tight text-fg sm:text-h1"
        }
      >
        {title}
      </H>
      {lead && <p className="mt-4 text-pretty text-fg-soft sm:text-h3 sm:font-normal sm:leading-relaxed">{lead}</p>}
    </div>
  );
}

/** Page header used at the top of every inner page. */
export function PageHero({ title, lead, children }: { title: string; lead: string; children?: ReactNode }) {
  return (
    <div className="border-b border-edge">
      <Container className="pb-14 pt-14 sm:pb-20 sm:pt-20">
        <CaravanDots className="mb-8" />
        <Heading as="h1" id="page-title" title={title} lead={lead} />
        {children}
      </Container>
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  arrow = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "inverted";
  arrow?: boolean;
  className?: string;
}) {
  const styles = {
    primary: "bg-primary text-on-primary hover:bg-primary/90",
    secondary: "border border-edge bg-surface text-fg hover:border-fg-soft",
    inverted: "border border-inv-edge text-inv-fg hover:border-inv-soft",
  }[variant];
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-control px-5 py-2.5 text-body font-medium transition-colors duration-200 ease-out ${styles} ${className}`}
    >
      {children}
      {arrow && <IconArrowRight className="h-4 w-4 rtl:-scale-x-100" />}
    </Link>
  );
}

export function TextLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 font-medium text-fg underline decoration-edge decoration-2 underline-offset-4 transition-colors hover:decoration-primary-accent ${className}`}
    >
      {children}
      <IconArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
    </Link>
  );
}

export type Status = "available" | "inDevelopment" | "inProgress" | "partial";

/** Availability marker. Solid dot = available today; dashed ring = not yet. */
export function StatusPill({ status, className = "" }: { status: Status; className?: string }) {
  const t = useTranslations("status");
  const live = status === "available";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-0.5 text-micro font-medium ${
        live ? "border-edge bg-surface text-fg" : "border-dashed border-fg-muted/60 text-fg-soft"
      } ${className}`}
    >
      <span
        aria-hidden
        className={`h-2 w-2 rounded-full ${
          live ? "bg-fg" : status === "partial" ? "bg-gradient-to-r from-fg from-50% to-transparent to-50% ring-1 ring-fg" : "ring-1 ring-fg-muted"
        }`}
      />
      {t(status)}
    </span>
  );
}

/** Five caravan dots on the route line, growing toward the maroon leader (last in reading order). */
export function CaravanDots({ className = "", animate = false }: { className?: string; animate?: boolean }) {
  const dots = [
    { size: "h-2 w-2", color: "bg-sand-pale" },
    { size: "h-2.5 w-2.5", color: "bg-sand-light" },
    { size: "h-3 w-3", color: "bg-sand" },
    { size: "h-3.5 w-3.5", color: "bg-sand-dark" },
    { size: "h-4 w-4", color: "bg-primary-accent" },
  ];
  return (
    <div aria-hidden className={`route-x flex w-40 items-center justify-between ${className}`}>
      {dots.map((d, i) => (
        <span
          key={i}
          className={`${d.size} ${d.color} rounded-full ${animate ? "caravan-dot" : ""}`}
          style={animate ? ({ "--i": i } as CSSProperties) : undefined}
        />
      ))}
    </div>
  );
}

/**
 * A product screenshot slot. Shows the real capture once it is listed in lib/screenshots.ts;
 * until then a hatched placeholder clearly marked "[TBD screenshot]".
 */
export function Screenshot({
  name,
  label,
  className = "",
  aspect = "aspect-[16/10]",
}: {
  name: string;
  label: string;
  className?: string;
  aspect?: string;
}) {
  const t = useTranslations("tbd");
  const src = SCREENSHOTS[name];
  if (src) {
    return (
      <figure className={className}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(src)}
          alt={label}
          loading="lazy"
          decoding="async"
          className={`${aspect} w-full rounded-card border border-edge object-cover object-top`}
        />
      </figure>
    );
  }
  return (
    <figure
      className={`tbd-hatch ${aspect} flex w-full flex-col items-center justify-center gap-1 rounded-card border border-dashed border-fg-muted/50 p-4 text-center ${className}`}
    >
      <span className="rounded-control bg-surface px-2 py-0.5 text-small font-medium text-fg-muted">{t("screenshot")}</span>
      <figcaption className="text-small text-fg-soft">{label}</figcaption>
    </figure>
  );
}

/** An install-video slot. Plays the real video once listed in lib/screenshots.ts (VIDEOS). */
export function VideoSlot({ name, label, note }: { name: string; label: string; note: string }) {
  const t = useTranslations("status");
  const v = VIDEOS[name];
  if (v) {
    return (
      <figure>
        <video
          controls
          preload="none"
          playsInline
          poster={asset(v.poster)}
          className="aspect-video w-full rounded-card border border-edge bg-overlay"
          aria-label={label}
        >
          <source src={asset(v.src)} type="video/mp4" />
        </video>
        <figcaption className="mt-2 text-small text-fg-soft">{note}</figcaption>
      </figure>
    );
  }
  return (
    <figure className="tbd-hatch flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-card border border-dashed border-fg-muted/50 p-4 text-center">
      <span aria-hidden className="flex h-12 w-12 items-center justify-center rounded-full border border-fg-muted/60 bg-surface">
        <svg viewBox="0 0 24 24" className="ms-0.5 h-5 w-5 fill-fg-soft"><path d="M8 5v14l11-7z" /></svg>
      </span>
      <span className="rounded-control bg-surface px-2 py-0.5 text-small font-medium text-fg-muted">{t("tbdVideo")}</span>
      <figcaption className="text-small text-fg-soft">
        {label}: {note}
      </figcaption>
    </figure>
  );
}
