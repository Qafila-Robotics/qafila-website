"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { CONTACT_EMAIL, href } from "@/lib/site";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const t = useTranslations("contact");
  const { locale } = useParams<{ locale: string }>();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: a filled hidden field means a bot — pretend success, send nothing.
    if (data.get("botcheck")) {
      setStatus("success");
      return;
    }

    const next: Record<string, string> = {};
    if (!String(data.get("name") || "").trim()) next.name = t("required");
    if (!String(data.get("organisation") || "").trim())
      next.organisation = t("required");
    const email = String(data.get("email") || "").trim();
    if (!email) next.email = t("required");
    else if (!EMAIL_RE.test(email)) next.email = t("invalidEmail");
    if (!String(data.get("role") || "").trim()) next.role = t("chooseOne");
    if (!String(data.get("message") || "").trim()) next.message = t("required");
    if (!data.get("consent")) next.consent = t("consentRequired");
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) {
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    if (!WEB3FORMS_KEY) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Qafila website — ${data.get("role")}`,
          from_name: "Qafila Robotics website",
          name: data.get("name"),
          organisation: data.get("organisation"),
          email,
          phone: data.get("phone"),
          role: data.get("role"),
          message: data.get("message"),
        }),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const field =
    "mt-1.5 block min-h-11 w-full rounded-control border border-edge bg-surface px-3 py-2 text-fg placeholder:text-fg-soft/70 focus:border-primary-accent aria-[invalid=true]:border-danger";
  const err = (k: string) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-1 text-small text-danger">
        {errors[k]}
      </p>
    ) : null;

  const inv = (k: string) =>
    errors[k]
      ? { "aria-invalid": true as const, "aria-describedby": `${k}-error` }
      : {};

  return (
    <div>
      <h2
        id="contact-title"
        className="text-h2 font-semibold tracking-tight text-fg sm:text-h1"
      >
        {t("title")}
      </h2>
      <p className="mt-3 text-fg-soft">{t("intro")}</p>

      {status === "success" ? (
        <div
          className="mt-8 rounded-card border border-edge bg-surface p-6"
          role="status"
        >
          <h3 className="text-h3 font-semibold text-fg">{t("successTitle")}</h3>
          <p className="mt-2 text-fg-soft">{t("successBody")}</p>
        </div>
      ) : (
        <form className="mt-8 grid gap-5" onSubmit={onSubmit} noValidate>
          {/* Honeypot (hidden from people) */}
          <input
            type="text"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-small font-medium text-fg">
                {t("name")}
              </label>
              <input
                id="name"
                name="name"
                className={field}
                autoComplete="name"
                {...inv("name")}
              />
              {err("name")}
            </div>
            <div>
              <label
                htmlFor="organisation"
                className="text-small font-medium text-fg"
              >
                {t("organisation")}
              </label>
              <input
                id="organisation"
                name="organisation"
                className={field}
                autoComplete="organization"
                placeholder={t("orgPlaceholder")}
                {...inv("organisation")}
              />
              {err("organisation")}
            </div>
            <div>
              <label htmlFor="email" className="text-small font-medium text-fg">
                {t("email")}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={field}
                autoComplete="email"
                dir="ltr"
                placeholder={t("emailPlaceholder")}
                {...inv("email")}
              />
              {err("email")}
            </div>
            <div>
              <label htmlFor="phone" className="text-small font-medium text-fg">
                {t("phone")}
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className={field}
                autoComplete="tel"
                dir="ltr"
              />
            </div>
          </div>

          <div>
            <label htmlFor="role" className="text-small font-medium text-fg">
              {t("role")}
            </label>
            <select
              id="role"
              name="role"
              className={field}
              defaultValue=""
              {...inv("role")}
            >
              <option value="" disabled>
                {t("roleSelect")}
              </option>
              <option value="customer">{t("roleCustomer")}</option>
              <option value="investor">{t("roleInvestor")}</option>
              <option value="partner">{t("rolePartner")}</option>
              <option value="other">{t("roleOther")}</option>
            </select>
            {err("role")}
          </div>

          <div>
            <label htmlFor="message" className="text-small font-medium text-fg">
              {t("message")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className={field}
              {...inv("message")}
            />
            {err("message")}
          </div>

          <div>
            <label className="flex items-start gap-2 text-small text-fg-soft">
              <input
                type="checkbox"
                name="consent"
                value="yes"
                className="mt-1 h-4 w-4 accent-[rgb(var(--c-primary))]"
                {...inv("consent")}
              />
              <span>
                {t("consent")}{" "}
                <Link
                  href={href(locale, "/privacy/")}
                  className="text-fg underline underline-offset-4 hover:text-fg-soft"
                >
                  {t("privacyLink")}
                </Link>
              </span>
            </label>
            {err("consent")}
          </div>

          {status === "error" && (
            <div
              className="rounded-control border border-danger/40 bg-danger/10 p-4"
              role="alert"
            >
              <p className="font-medium text-danger">{t("errorTitle")}</p>
              <p className="text-small text-fg-soft">
                {t("errorBody")}{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-medium text-fg underline"
                  dir="ltr"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="min-h-11 justify-self-start rounded-control bg-primary px-6 py-3 font-medium text-on-primary hover:bg-primary/90 disabled:opacity-60"
          >
            {status === "sending" ? t("sending") : t("submit")}
          </button>
        </form>
      )}
      <p className="mt-6 text-small text-fg-soft">
        {t("orEmail")}{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="font-medium text-fg underline underline-offset-4"
          dir="ltr"
        >
          {CONTACT_EMAIL}
        </a>
      </p>
    </div>
  );
}
