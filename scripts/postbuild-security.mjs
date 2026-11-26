// After `next build` (static export): give every HTML page a strict CSP <meta> built from the
// sha256 hashes of its own inline scripts, and write out/_headers with the full header set.
// Fails the build if a page loads a script from another origin.
import { createHash } from "node:crypto";
import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { BASE_HEADERS, csp } from "../security-headers.mjs";

const out = fileURLToPath(new URL("../out", import.meta.url));
const basePath = process.env.BASE_PATH || "";

async function* html(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* html(p);
    else if (e.name.endsWith(".html")) yield p;
  }
}

try {
  await stat(out);
} catch {
  console.log("postbuild-security: no out/ (not a static export), skipped");
  process.exit(0);
}

const rules = [];
let pages = 0;
for await (const file of html(out)) {
  let s = await readFile(file, "utf8");
  if (s.includes('http-equiv="Content-Security-Policy"')) continue;
  const hashes = new Set();
  for (const m of s.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)) {
    if (!m[1]) continue;
    hashes.add(`'sha256-${createHash("sha256").update(m[1], "utf8").digest("base64")}'`);
  }
  for (const m of s.matchAll(/<script[^>]*\bsrc="([^"]+)"/g)) {
    if (/^(https?:)?\/\//.test(m[1])) throw new Error(`${file}: external script ${m[1]}`);
  }
  const scriptSrc = ["'self'", ...hashes];
  const meta = `<meta http-equiv="Content-Security-Policy" content="${csp({ scriptSrc, forMeta: true })}"/>`;
  s = s.replace(/<head>/, `<head>${meta}`);
  await writeFile(file, s);
  pages++;

  const rel = "/" + relative(out, file).split(sep).join("/");
  const route = rel.endsWith("/index.html") ? rel.slice(0, -"index.html".length) : rel;
  rules.push(`${basePath}${route}\n  Content-Security-Policy: ${csp({ scriptSrc })}`);
}

const base = Object.entries(BASE_HEADERS)
  .map(([k, v]) => `  ${k}: ${v}`)
  .join("\n");
await writeFile(join(out, "_headers"), `${basePath}/*\n${base}\n\n${rules.join("\n\n")}\n`);
console.log(`postbuild-security: CSP meta on ${pages} pages, wrote out/_headers`);
