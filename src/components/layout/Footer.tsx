'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function Footer() {
  const locale = useLocale();
  const year   = new Date().getFullYear();
  return (
    <footer className="bg-primary text-white">
      <div className="container-main py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div className="sm:col-span-2 lg:col-span-1">
            <Link href={`/${locale}`}>
              <Image src="/images/logo.png" alt="Din Maler" width={160} height={55}
                className="h-12 w-auto mb-4 brightness-0 invert" />
            </Link>
            <p className="text-white/80 text-sm font-semibold mb-0.5">Elvir Beshiri</p>
            <p className="text-white/60 text-sm mb-5">Qualität, die mer gseht! Zürich & St. Gallen.</p>
            <div className="space-y-2.5">
              <a href="tel:0767459013" className="flex items-center gap-2.5 text-white/80 hover:text-amber-400 text-sm transition-colors">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" /> 076 745 90 13
              </a>
              <a href="mailto:info@din-maler.ch" className="flex items-center gap-2.5 text-white/80 hover:text-amber-400 text-sm transition-colors">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" /> info@din-maler.ch
              </a>
              <div className="flex items-start gap-2.5 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Anemonenstrasse 3<br/>{'8047 Zürich'}<br/><span className="text-white/40 text-xs">Filiale: 9014 St. Gallen</span></span>
              </div>
              <div className="flex items-center gap-2.5 text-white/60 text-sm">
                <Clock className="w-4 h-4 text-accent flex-shrink-0" /> Mo–Fr: 07:30–17:30 Uhr
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-5">Leistungen</h3>
            <ul className="space-y-2.5">
              {[
                { href: `/${locale}/leistungen#innenmalerei`, label: 'Innenmalerei' },
                { href: `/${locale}/leistungen#fassade`,      label: 'Fassadenarbeiten' },
                { href: `/${locale}/leistungen`,              label: 'Gipsarbeiten & Abrieb' },
                { href: `/${locale}/leistungen`,              label: 'Renovation & Sanierung' },
                { href: `/${locale}/leistungen`,              label: 'Farbberatung' },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="text-white/70 hover:text-amber-400 text-sm flex items-center gap-1.5 group transition-colors">
                    <ArrowRight className="w-3 h-3 text-accent/50 group-hover:text-accent flex-shrink-0" />{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-5">Unternehmen</h3>
            <ul className="space-y-2.5">
              {[
                { href: `/${locale}/ueber-uns`,  label: 'Über uns' },
                { href: `/${locale}/referenzen`, label: 'Referenzen' },
                { href: `/${locale}/faq`,        label: 'FAQ' },
                { href: `/${locale}/kontakt`,    label: 'Kontakt' },
                { href: `/${locale}/offerte`,    label: 'Offerte anfragen' },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="text-white/70 hover:text-amber-400 text-sm flex items-center gap-1.5 group transition-colors">
                    <ArrowRight className="w-3 h-3 text-accent/50 group-hover:text-accent flex-shrink-0" />{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-5">Folgen Sie uns</h3>
            <a href="https://www.instagram.com/din.maler/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white font-semibold px-4 py-2.5 rounded-xl text-sm transition-opacity mb-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @din.maler
            </a>
            <a href="https://www.tiktok.com/@din_maler_villi" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black hover:opacity-80 text-white font-semibold px-4 py-2.5 rounded-xl text-sm transition-opacity mb-5">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.79a4.85 4.85 0 01-1.01-.1z"/>
              </svg>
              @din_maler_villi
            </a>
            <Link href={`/${locale}/offerte`}
              className="flex items-center gap-2 bg-accent hover:bg-orange-500 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
              Offerte anfragen →
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-main py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p className="text-white/40">© {year} Din Maler – Elvir Beshiri. Alle Rechte vorbehalten. Zürich & St. Gallen.</p>
          <div className="flex gap-4">
            <Link href={`/${locale}/impressum`}   className="text-white/40 hover:text-white transition-colors">Impressum</Link>
            <Link href={`/${locale}/datenschutz`} className="text-white/40 hover:text-white transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
