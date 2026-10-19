import { getRequestConfig } from "next-intl/server";
import { defaultLocale, isLocale } from "./routing";

// No middleware (incompatible with output: "export"); locale comes from the
// [locale] segment via setRequestLocale in the layout.
export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = requested && isLocale(requested) ? requested : defaultLocale;
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
