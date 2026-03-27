import type { Metadata } from 'next';
export const dynamic = 'force-dynamic';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales } from '@/i18n';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/ui/CookieBanner';
import ChatWidget from '@/components/chat/ChatWidget';
import MobileStickyCta from '@/components/ui/MobileStickyCta';
import ScrollReveal from '@/components/ui/ScrollReveal';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
type Props = { children: React.ReactNode; params: { locale: string } };

export const metadata: Metadata = {
  title: { template: '%s | Din Maler', default: 'Din Maler Villi – Malerfirma Zürich & St. Gallen' },
  description: 'Din Maler – Elvir Beshiri. Qualität, die mer gseht! Malerfirma in Zürich und St. Gallen.',
  metadataBase: new URL('https://www.din-maler.ch'),
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  if (!locales.includes(locale as any)) notFound();
  const messages = await getMessages();
  return (
    <html lang={locale} className={inter.variable}>
      <body className="bg-gray-50 text-gray-800 font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <MobileStickyCta />
          <CookieBanner />
          <ChatWidget />
          <ScrollReveal />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
