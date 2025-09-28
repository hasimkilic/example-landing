export const locales = ["tr", "en"] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = "tr";

export const dictionaries: Record<Locale, () => Promise<any>> = {
  tr: () => import("../../../locales/tr/common.json").then(m => m.default),
  en: () => import("../../../locales/en/common.json").then(m => m.default),
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
