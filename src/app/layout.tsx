import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { I18nProvider } from '@/lib/i18n/I18nProvider';
import { defaultLocale, getDictionary } from '@/lib/i18n/config';

export const metadata: Metadata = {
  title: "Open Container - Konteyner Ticareti, Kiralama ve Navlun Yönetimi",
  description: "OpenContainer, konteyner ticareti, kiralama ve navlun yönetimini tek ekranda buluşturan dijital pazar yeridir.",
  icons: {
    icon: '/logo/svg/open-container-1.svg',
    apple: '/logo/open-container.png',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dict = await getDictionary(defaultLocale);
  return (
    <html lang={defaultLocale}>
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "Open Container", "version": "1.0.0", "greeting": "hi"}'
        />
        <I18nProvider locale={defaultLocale} dict={dict}>
          {children}
        </I18nProvider>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
