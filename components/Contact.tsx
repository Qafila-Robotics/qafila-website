"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

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
    if (!String(data.get("organisation") || "").trim()) next.organisation = t("required");
    const email = String(data.get("email") || "").trim();
    if (!email) next.email = t("required");
    else if (!EMAIL_RE.test(email)) next.email = t("invalidEmail");
    if (!String(data.get("message") || "").trim()) next.message = t("required");
    if (!data.get("consent")) next.consent = t("consentRequired");
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    if (!WEB3FORMS_KEY) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "Qafila — pilot request",
          from_name: "Qafila Robotics website",
          name: data.get("name"),
          organisation: data.get("organisation"),
          email,
          phone: data.get("phone"),
          use_case: data.get("use_case"),
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

  const field = "mt-1 w-full rounded-control border border-line bg-white px-3 py-2 text-ink";
  const err = (k: string) =>
    errors[k] ? (
      <p className="mt-1 text-small text-danger" role="alert">
        {errors[k]}
      </p>
    ) : null;

  return (
    <section id="contact" className="border-b border-line">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="text-h2 font-semibold text-ink">{t("title")}</h2>
        <p className="mt-3 text-ink-soft">{t("intro")}</p>

        {status === "success" ? (
          <div className="mt-8 rounded-card border border-ok/40 bg-ok/10 p-6" role="status">
            <h3 className="text-h3 font-semibold text-ok">{t("successTitle")}</h3>
            <p className="mt-2 text-ink-soft">{t("successBody")}</p>
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
                <label htmlFor="name" className="text-small font-medium text-ink">
                  {t("name")}
                </label>
                <input id="name" name="name" className={field} autoComplete="name" />
                {err("name")}
              </div>
              <div>
                <label htmlFor="organisation" className="text-small font-medium text-ink">
                  {t("organisation")}
                </label>
                <input id="organisation" name="organisation" className={field} autoComplete="organization" />
                {err("organisation")}
              </div>
              <div>
                <label htmlFor="email" className="text-small font-medium text-ink">
                  {t("email")}
                </label>
                <input id="email" name="email" type="email" className={field} autoComplete="email" dir="ltr" />
                {err("email")}
              </div>
              <div>
                <label htmlFor="phone" className="text-small font-medium text-ink">
                  {t("phone")}
                </label>
                <input id="phone" name="phone" type="tel" className={field} autoComplete="tel" dir="ltr" />
              </div>
            </div>

            <div>
              <label htmlFor="use_case" className="text-small font-medium text-ink">
                {t("useCase")}
              </label>
              <select id="use_case" name="use_case" className={field} defaultValue="">
                <option value="" disabled>
                  {t("useCaseSelect")}
                </option>
                <option value="inspection">{t("useCaseInspection")}</option>
                <option value="security">{t("useCaseSecurity")}</option>
                <option value="events">{t("useCaseEvents")}</option>
                <option value="research">{t("useCaseResearch")}</option>
                <option value="other">{t("useCaseOther")}</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="text-small font-medium text-ink">
                {t("message")}
              </label>
              <textarea id="message" name="message" rows={4} className={field} />
              {err("message")}
            </div>

            <div>
              <label className="flex items-start gap-2 text-small text-ink-soft">
                <input type="checkbox" name="consent" value="yes" className="mt-1" />
                <span>
                  {t("consent")}{" "}
                  <a href={`/${locale}/privacy/`} className="text-sand-text underline">
                    {t("privacyLink")}
                  </a>
                </span>
              </label>
              {err("consent")}
            </div>

            {status === "error" && (
              <div className="rounded-control border border-danger/40 bg-danger/10 p-4" role="alert">
                <p className="font-medium text-danger">{t("errorTitle")}</p>
                <p className="text-small text-ink-soft">{t("errorBody")}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="justify-self-start rounded-control bg-maroon px-6 py-3 font-medium text-cream hover:opacity-90 disabled:opacity-60"
            >
              {status === "sending" ? t("sending") : t("submit")}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
