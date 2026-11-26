"use client";

import { useState } from "react";

// Shell/code sample, always left-to-right (commands read the same in both languages).
export default function CodeBlock({
  code,
  label,
  copyLabel,
  copiedLabel,
}: {
  code: string;
  label: string;
  copyLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);
  return (
    <figure className="overflow-hidden rounded-card border border-inv-edge bg-inv-bg text-inv-fg">
      <figcaption className="flex items-center justify-between gap-3 border-b border-inv-edge px-4 py-2 text-small text-inv-soft">
        <span>{label}</span>
        <button
          type="button"
          className="min-h-9 rounded-control px-2 text-small font-medium text-inv-fg hover:bg-inv-edge"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(code);
              setCopied(true);
              setTimeout(() => setCopied(false), 1600);
            } catch {}
          }}
        >
          <span aria-live="polite">{copied ? copiedLabel : copyLabel}</span>
        </button>
      </figcaption>
      <pre dir="ltr" className="overflow-x-auto p-4 text-start font-mono text-small leading-relaxed" tabIndex={0}>
        <code>{code}</code>
      </pre>
    </figure>
  );
}
