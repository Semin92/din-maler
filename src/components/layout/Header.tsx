'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { clsx } from 'clsx';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

const services = [
  { slug: 'leistungen#innenmalerei', label: 'Innenmalerei' },
  { slug: 'leistungen#fassade',      label: 'Fassadenarbeiten' },
  { slug: 'leistungen',              label: 'Gipsarbeiten & Abrieb' },
  { slug: 'leistungen',              label: 'Renovation & Sanierung' },
  { slug: 'leistungen',              label: 'Farbberatung' },
  { slug: 'leistungen',              label: 'Holzschutz & Lackieren' },
];

export default function Header() {
  const locale   = useLocale();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen,   setDropOpen]   = useState(false);
  const [scrolled,   setScrolled]   = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  useEffect(() => { setMobileOpen(false); setDropOpen(false); }, [pathname]);

  return (
    <header className={clsx('sticky top-0 z-50 w-full transition-all duration-300',
      scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm')}>

      <div className="bg-primary text-white py-1.5 hidden md:block">
        <div className="container-main flex justify-between items-center">
          <span className="text-white/80 text-xs">🏠 Hauptsitz: Anemonenstrasse 3, 8047 Zürich &nbsp;|&nbsp; Filiale: 9014 St. Gallen</span>
          <a href="tel:0767459013" className="hover:text-amber-400 font-semibold text-xs transition-colors">
            📞 076 745 90 13
          </a>
        </div>
      </div>

      <nav className="container-main" aria-label="Hauptnavigation">
        <div className="flex items-center justify-between h-16">
          <Link href={`/${locale}`} aria-label="Din Maler">
            <div className="bg-white py-1">
              <Image src="/images/logo.png" alt="Din Maler – Qualität, die mer gseht!"
                width={170} height={58} priority className="h-14 w-auto logo-blend" />
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            <div className="relative">
              <button onClick={() => setDropOpen(!dropOpen)}
                className="flex items-center gap-1 text-gray-700 hover:text-primary font-medium text-sm transition-colors">
                Leistungen <ChevronDown className={clsx('w-4 h-4 transition-transform', dropOpen && 'rotate-180')} />
              </button>
              {dropOpen && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  {services.map((s) => (
                    <Link key={s.label} href={`/${locale}/${s.slug}`}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {[
              { href: `/${locale}/referenzen`, label: 'Referenzen' },
              { href: `/${locale}/ueber-uns`,  label: 'Über uns' },
              { href: `/${locale}/faq`,        label: 'FAQ' },
              { href: `/${locale}/kontakt`,    label: 'Kontakt' },
            ].map((l) => (
              <Link key={l.href} href={l.href}
                className={clsx('text-gray-700 hover:text-primary font-medium text-sm transition-colors',
                  pathname === l.href && 'text-primary font-semibold')}>
                {l.label}
              </Link>
            ))}
            <LanguageSwitcher />
            <Link href={`/${locale}/offerte`} className="btn-primary text-sm">Offerte anfragen</Link>
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <LanguageSwitcher compact />
            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 space-y-1">
            {[
              { href: `/${locale}/leistungen`,  label: 'Leistungen' },
              { href: `/${locale}/referenzen`,  label: 'Referenzen' },
              { href: `/${locale}/ueber-uns`,   label: 'Über uns' },
              { href: `/${locale}/faq`,         label: 'FAQ' },
              { href: `/${locale}/kontakt`,     label: 'Kontakt' },
            ].map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg font-medium transition-colors">
                {l.label}
              </Link>
            ))}
            <div className="pt-3 px-4 space-y-2">
              <Link href={`/${locale}/offerte`} onClick={() => setMobileOpen(false)}
                className="btn-primary w-full text-center block">Offerte anfragen</Link>
              <a href="tel:0767459013"
                className="flex items-center justify-center gap-2 border-2 border-primary text-primary font-bold py-3 rounded-xl">
                <Phone className="w-4 h-4" /> 076 745 90 13
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
