'use client';
import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
export default function CookieBanner() {
  const t = useTranslations('cookie');
  const locale = useLocale();
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem('cookie-ok')) setTimeout(() => setShow(true), 1500);
  }, []);
  const accept = () => { localStorage.setItem('cookie-ok', '1'); setShow(false); };
  if (!show) return null;
  return (
    <div className="fixed bottom-16 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 z-50 max-w-3xl mx-auto
                    bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 sm:p-5
                    flex flex-col sm:flex-row gap-4 sm:items-center">
      <div className="flex-1">
        <p className="font-semibold text-gray-900 text-sm mb-0.5">🍪 {t('title')}</p>
        <p className="text-xs text-gray-600">
          {t('description')}{' '}
          <Link href={`/${locale}/datenschutz`} className="underline text-primary">{t('privacyLink')}</Link>.
        </p>
      </div>
      <div className="flex gap-2 flex-shrink-0">
        <button onClick={accept} className="px-4 py-2 border-2 border-primary text-primary font-semibold rounded-lg text-sm">{t('acceptNecessary')}</button>
        <button onClick={accept} className="px-4 py-2 bg-accent text-white font-semibold rounded-lg text-sm">{t('acceptAll')}</button>
      </div>
    </div>
  );
}
