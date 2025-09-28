import type { ReactNode } from 'react';
import { getDictionary } from '@/lib/i18n/config';
import { I18nProvider } from '@/lib/i18n/I18nProvider';
import { defaultLocale, locales, type Locale } from '@/lib/i18n/config';
import '../globals.css';

export async function generateStaticParams() {
  return locales.map(l => ({ locale: l }));
}

export const dynamicParams = false;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: Locale };
}) {
  const locale = locales.includes(params.locale) ? params.locale : defaultLocale;
  const dict = await getDictionary(locale);
  return (
    <html lang={locale}>
      <body>
        <I18nProvider locale={locale} dict={dict}>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
