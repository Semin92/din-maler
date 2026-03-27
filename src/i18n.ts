import { getRequestConfig } from 'next-intl/server';
export const locales = ['de', 'fr', 'it', 'en'] as const;
export const defaultLocale = 'de' as const;
export type Locale = (typeof locales)[number];
export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`../messages/${locale}.json`)).default,
}));
