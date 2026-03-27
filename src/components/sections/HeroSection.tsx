'use client';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export default function HeroSection() {
  const locale = useLocale();
  return (
    <section className="relative min-h-[90vh] flex items-center bg-hero overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <img src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1920&q=70"
          alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
      <div className="relative z-10 container-main py-24 lg:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-400 border border-amber-400/30 text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6 reveal">
            ✦ Qualität, die mer gseht!
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 reveal">
            Handwerk, das man sieht.<br/><span className="text-accent">Qualität, die bleibt.</span>
          </h1>
          <p className="text-lg text-white/80 mb-2 reveal">
            Innenanstriche, Fassaden, Gipsarbeiten und Renovationen – sauber ausgeführt, pünktlich fertig, fair im Preis.
          </p>
          <p className="text-white/60 text-sm mb-8 reveal">📍 Zürich & St. Gallen | Elvir Beshiri</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10 reveal">
            <Link href={`/${locale}/offerte`} className="btn-primary text-base px-8 py-4 shadow-lg shadow-accent/30">
              Kostenlose Offerte anfragen <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="#referenzen" className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl text-base transition-all">
              Unsere Arbeiten ansehen
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-5 reveal">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-white font-bold text-sm">4.9</span>
              <span className="text-white/60 text-xs">Google</span>
            </div>
            <a href="tel:0767459013" className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center"><Phone className="w-4 h-4 text-white" /></div>
              076 745 90 13
            </a>
            <div className="flex items-center gap-2 text-white/70 text-sm"><span className="text-green-400">●</span> Antwort innert 24h</div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
          <path d="M0 60H1440V0L0 60Z" fill="#F8F9FA"/>
        </svg>
      </div>
    </section>
  );
}
