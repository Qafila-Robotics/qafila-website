// Renders raster assets social scrapers need, from the brand SVGs.
// Run once (or in CI before build): `npm run assets`.
import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const pub = join(dirname(fileURLToPath(import.meta.url)), "..", "public");

// apple-touch-icon: 180x180 from the square icon.
await sharp(join(pub, "icon.svg"))
  .resize(180, 180)
  .png()
  .toFile(join(pub, "apple-touch-icon.png"));

// og-image: 1200x630 cream canvas, primary logo centred.
const logo = await sharp(await readFile(join(pub, "logo-primary.svg")))
  .resize({ width: 820 })
  .png()
  .toBuffer();
const { height = 458 } = await sharp(logo).metadata();
await sharp({
  create: { width: 1200, height: 630, channels: 4, background: "#FAF7F2" },
})
  .composite([{ input: logo, left: Math.round((1200 - 820) / 2), top: Math.round((630 - height) / 2) }])
  .png()
  .toFile(join(pub, "og-image.png"));

console.log("Wrote apple-touch-icon.png and og-image.png");
