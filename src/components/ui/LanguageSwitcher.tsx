'use client';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';
import { locales, type Locale } from '@/i18n';

const langInfo: Record<Locale, { name: string; short: string; flag: string }> = {
  de: { name: 'Deutsch',  short: 'DE', flag: '🇩🇪' },
  fr: { name: 'Français', short: 'FR', flag: '🇫🇷' },
  it: { name: 'Italiano', short: 'IT', flag: '🇮🇹' },
  en: { name: 'English',  short: 'EN', flag: '🇬🇧' },
};

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const locale   = useLocale() as Locale;
  const pathname = usePathname();
  const router   = useRouter();
  const [open, setOpen] = useState(false);
  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
    setOpen(false);
  };
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)}
        onBlur={(e) => { if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) setOpen(false); }}
        className={clsx('flex items-center gap-1.5 text-gray-600 hover:text-primary transition-colors',
          compact ? 'p-2' : 'py-2 px-3 rounded-lg hover:bg-gray-100 text-sm font-medium')}>
        <Globe className="w-4 h-4 flex-shrink-0" />
        {!compact && <><span>{langInfo[locale].short}</span><ChevronDown className={clsx('w-3.5 h-3.5 transition-transform', open && 'rotate-180')} /></>}
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 py-1 bg-white rounded-xl shadow-lg border border-gray-100 min-w-[160px] z-50">
          {locales.map((loc) => (
            <button key={loc} onClick={() => switchLocale(loc)}
              className={clsx('w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors',
                loc === locale ? 'bg-primary/5 text-primary font-semibold' : 'text-gray-700 hover:bg-gray-50')}>
              <span>{langInfo[loc].flag}</span><span>{langInfo[loc].name}</span>
              {loc === locale && <span className="ml-auto w-2 h-2 bg-primary rounded-full" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
