'use client';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

// ===================== STATS BAR =====================
export function StatsBar() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="container-main py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '500+', label: 'Abgeschlossene Projekte' },
            { value: '15+',  label: 'Jahre Erfahrung' },
            { value: '4.9★', label: 'Google-Bewertung' },
            { value: '2',    label: 'Standorte ZH & SG' },
          ].map(({ value, label }) => (
            <div key={label} className="reveal">
              <div className="text-3xl lg:text-4xl font-extrabold text-primary mb-1">{value}</div>
              <div className="text-sm text-gray-500">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===================== SERVICES GRID =====================
export function ServicesGrid() {
  const locale = useLocale();
  const items = [
    { icon: '🖌️', title: 'Innenmalerei',        desc: 'Wandanstriche, Decken, Lacke, Tapeten, Schimmelsanierung.',   href: `/${locale}/leistungen#innenmalerei` },
    { icon: '🏗️', title: 'Fassadenarbeiten',    desc: 'Anstriche, Sanierungen, Verputz, Risssanierungen.',           href: `/${locale}/leistungen#fassade` },
    { icon: '🪚', title: 'Gipsarbeiten & Abrieb', desc: 'Glatte, makellose Oberflächen durch Abrieb und Spachtelarbeiten.', href: `/${locale}/leistungen` },
    { icon: '🔄', title: 'Renovation & Sanierung', desc: 'Von der Teilsanierung bis zur kompletten Neugestaltung.',     href: `/${locale}/leistungen` },
    { icon: '🎨', title: 'Farbberatung',           desc: 'Individuelle Beratung zu Farbkonzepten, abgestimmt auf Raum und Licht.', href: `/${locale}/leistungen` },
    { icon: '🌲', title: 'Holzschutz & Lackieren', desc: 'Fenster, Türen, Geländer – dauerhafter Schutz und elegantes Finish.', href: `/${locale}/leistungen` },
  ];
  return (
    <section id="leistungen" className="py-20 lg:py-28 bg-gray-50">
      <div className="container-main">
        <div className="text-center mb-14">
          <span className="badge bg-primary/10 text-primary mb-3">Leistungen</span>
          <h2 className="section-title">Unsere Leistungen</h2>
          <p className="section-subtitle mx-auto">Von der Farbberatung bis zur Fertigstellung – wir begleiten Sie durch Ihr ganzes Projekt.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ icon, title, desc, href }) => (
            <Link key={title} href={href}
              className="reveal bg-white rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all p-6 border border-transparent hover:border-accent/20 group">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 text-2xl">{icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href={`/${locale}/leistungen`}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Alle Leistungen ansehen →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ===================== PROCESS =====================
export function ProcessSection() {
  const steps = [
    { num: '01', icon: '💬', title: 'Anfrage senden',         desc: 'Per Formular, Telefon oder WhatsApp – gerne mit Fotos.' },
    { num: '02', icon: '📋', title: 'Kostenlose Besichtigung', desc: 'Elvir Beshiri kommt zu Ihnen und klärt alles persönlich.' },
    { num: '03', icon: '📄', title: 'Klare Offerte',           desc: 'Transparent, ohne versteckte Kosten – innert 24 Stunden.' },
    { num: '04', icon: '✅', title: 'Wir legen los',           desc: 'Pünktlich, sauber und mit hochwertigen Materialien.' },
  ];
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-main">
        <div className="text-center mb-14">
          <span className="badge bg-primary/10 text-primary mb-3">Ablauf</span>
          <h2 className="section-title">So läuft es bei uns ab</h2>
          <p className="section-subtitle mx-auto">Einfach, transparent und ohne Überraschungen.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ num, icon, title, desc }) => (
            <div key={num} className="reveal text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl">{icon}</div>
              <div className="text-accent font-black text-4xl mb-2">{num}</div>
              <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===================== ABOUT =====================
export function AboutSection() {
  const locale = useLocale();
  return (
    <section id="ueber-uns" className="py-20 lg:py-28 bg-gray-50">
      <div className="container-main">
        <div className="text-center mb-14">
          <span className="badge bg-primary/10 text-primary mb-3">Über uns</span>
          <h2 className="section-title">Din Maler Villi</h2>
          <p className="section-subtitle mx-auto">Exzellenz im Maler- und Oberflächendesign.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-14 items-start mb-14">

          {/* Villi Foto */}
          <div className="reveal flex flex-col items-center lg:items-start">
            <div className="relative mb-6">
              <div className="w-60 h-60 rounded-2xl overflow-hidden shadow-xl bg-gray-100">
                <Image
                  src="/images/villi.jpg"
                  alt="Elvir Beshiri – Inhaber Din Maler"
                  width={240} height={240}
                  className="w-full h-full object-cover object-top"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                Inhaber & Gründer
              </div>
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-1 mt-4">Elvir Beshiri</h3>
            <p className="text-accent font-semibold text-sm mb-4">Din Maler – Zürich & St. Gallen</p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:0767459013"
                className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-light transition-colors">
                📞 076 745 90 13
              </a>
              <a href="https://www.instagram.com/din.maler/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                📸 Instagram
              </a>
              <a href="https://www.tiktok.com/@din_maler_villi" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:opacity-80 transition-opacity">
                🎵 TikTok
              </a>
            </div>
          </div>

          {/* Text */}
          <div className="reveal space-y-4">
            <p className="text-gray-700 leading-relaxed text-lg">
              DIN MALER Villi steht für Exzellenz im Maler- und Oberflächendesign. Mein Anspruch
              ist es, Räume zu gestalten, die Eleganz, Präzision und Beständigkeit vereinen.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ich arbeite ausschliesslich mit hochwertigen Materialien und modernsten Techniken.
              Ob Neubau, Renovation oder exklusive Innenraumgestaltung – jedes Projekt wird mit
              grösster Sorgfalt geplant und ausgeführt.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Meine Kundinnen und Kunden schätzen meine Diskretion, Verlässlichkeit und das
              Bewusstsein für Ästhetik.
            </p>
            <p className="text-primary font-bold italic text-lg pt-2">
              DIN MALER Villi – für anspruchsvolle Räume, die Eindruck hinterlassen.
            </p>
            {/* Kontakt */}
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <p className="font-semibold text-gray-900 mb-3">Direkter Kontakt</p>
              <div className="space-y-2 text-sm text-gray-700">
                <p>📞 <a href="tel:0767459013" className="hover:text-primary">076 745 90 13</a></p>
                <p>✉️ <a href="mailto:info@din-maler.ch" className="hover:text-primary">info@din-maler.ch</a></p>
                <p>📍 Anemonenstrasse 3, 8047 Zürich</p>
                <p>📍 Filiale: 9014 St. Gallen</p>
                <p>⏰ Mo–Fr: 07:30–17:30 Uhr</p>
              </div>
            </div>
          </div>
        </div>

        {/* Werte */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {[
            { icon: '🏆', title: 'Qualität',       text: 'Hochwertige Materialien und präzise Verarbeitung.' },
            { icon: '🎨', title: 'Ästhetik',        text: 'Farbkonzepte abgestimmt auf Raum, Architektur und Licht.' },
            { icon: '✅', title: 'Zuverlässigkeit', text: 'Termintreue, Sauberkeit und klare Kommunikation.' },
            { icon: '💎', title: 'Exklusivität',   text: 'Massgeschneiderte Lösungen für höchste Ansprüche.' },
          ].map(({ icon, title, text }) => (
            <div key={title} className="reveal bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-accent/20 transition-all">
              <div className="text-3xl mb-3">{icon}</div>
              <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
              <p className="text-gray-500 text-sm">{text}</p>
            </div>
          ))}
        </div>

        {/* Qualitätsversprechen */}
        <div className="reveal bg-primary text-white rounded-2xl p-8 lg:p-10">
          <h3 className="text-2xl font-extrabold mb-3">Mein Qualitätsversprechen</h3>
          <p className="text-white/80 leading-relaxed">
            Nur wer mit Leidenschaft arbeitet, kann Qualität garantieren. Mein Ziel ist es,
            dass Sie nicht nur zufrieden sind –{' '}
            <strong className="text-white">sondern beeindruckt.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

// ===================== REFERENCES =====================
export function ReferencesSection() {
  const [pos, setPos] = useState(50);
  const [drag, setDrag] = useState(false);
  const containerRef = { current: null as HTMLDivElement | null };

  useEffect(() => {
    const move = (e: MouseEvent | TouchEvent) => {
      if (!drag || !containerRef.current) return;
      const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const r = (containerRef.current as HTMLDivElement).getBoundingClientRect();
      setPos(Math.max(0, Math.min(100, ((x - r.left) / r.width) * 100)));
    };
    const up = () => setDrag(false);
    document.addEventListener('mousemove', move);
    document.addEventListener('touchmove', move, { passive: true });
    document.addEventListener('mouseup', up);
    document.addEventListener('touchend', up);
    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('touchmove', move);
      document.removeEventListener('mouseup', up);
      document.removeEventListener('touchend', up);
    };
  }, [drag]);

  return (
    <section id="referenzen" className="py-20 lg:py-28 bg-white">
      <div className="container-main">
        <div className="text-center mb-14">
          <span className="badge bg-primary/10 text-primary mb-3">Referenzen</span>
          <h2 className="section-title">Unsere Referenzen</h2>
          <p className="section-subtitle mx-auto">Echte Projekte, echte Resultate.</p>
        </div>

        {/* Vorher/Nachher Slider */}
        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-center text-sm text-gray-500 mb-3">Regler ziehen zum Vergleich</p>
          <div
            ref={(el) => { containerRef.current = el; }}
            className="ba-container rounded-xl" style={{ aspectRatio: '16/9' }}
            onMouseDown={(e) => { setDrag(true); const r = e.currentTarget.getBoundingClientRect(); setPos(((e.clientX - r.left) / r.width) * 100); }}
            onTouchStart={(e) => { setDrag(true); const r = e.currentTarget.getBoundingClientRect(); setPos(((e.touches[0].clientX - r.left) / r.width) * 100); }}>
            <div className="absolute inset-0">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=70" alt="Nachher: Frisch renovierter Raum" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs font-bold px-3 py-1.5 rounded-full">NACHHER</div>
            </div>
            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
              <img src="https://images.unsplash.com/photo-1573883430697-0f0e9ef6cfd4?w=900&q=70" alt="Vorher: Renovierungsbedürftiger Raum" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 bg-black/60 text-white text-xs font-bold px-3 py-1.5 rounded-full">VORHER</div>
            </div>
            <div className="ba-divider" style={{ left: `${pos}%` }} />
            <div className="ba-handle" style={{ left: `${pos}%` }}>↔</div>
          </div>
        </div>

        {/* Galerie */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { src: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=70', title: 'Fassadenrenovation', sub: 'Einfamilienhaus, Zürich-Höngg' },
            { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=70', title: 'Innenanstrich Büro', sub: 'Bürogebäude, Zürich City' },
            { src: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=70', title: 'Renovation Wohnung', sub: '5-Zimmer, Winterthur' },
          ].map(({ src, title, sub }) => (
            <div key={title} className="reveal group overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all">
              <div className="aspect-video overflow-hidden">
                <img src={src} alt={`${title} – Din Maler Zürich`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-4 bg-white">
                <p className="font-bold text-gray-900 text-sm">{title}</p>
                <p className="text-gray-500 text-xs mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===================== TESTIMONIALS =====================
export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-main">
        <div className="text-center mb-14">
          <span className="badge bg-primary/10 text-primary mb-3">Kundenstimmen</span>
          <h2 className="section-title">Das sagen unsere Kunden</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Sandra M.', loc: 'Privatkunde, Zürich', text: '"Sehr professionelle Arbeit. Alles sauber abgedeckt, pünktlich fertig – die Oberfläche ist makellos."', init: 'SM' },
            { name: 'Thomas K.', loc: 'Hauseigentümer, Winterthur', text: '"Fassadenrenovation tadellos ausgeführt. Terminplanung, Ausführung – alles top. Sehr empfehlenswert!"', init: 'TK' },
            { name: 'Laura B.', loc: 'Immobilienverwaltung, Zürich', text: '"Zuverlässige Terminplanung und top Qualität. Langfristiger Partner für unsere Liegenschaften."', init: 'LB' },
          ].map(({ name, loc, text, init }) => (
            <div key={name} className="reveal bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="text-yellow-400 mb-3">★★★★★</div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">{text}</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary text-sm">{init}</div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{name}</p>
                  <p className="text-gray-400 text-xs">{loc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===================== FAQ =====================
export function FaqSection() {
  const t = useTranslations('faq');
  const locale = useLocale();
  const questions = t.raw('questions') as Array<{ q: string; a: string }>;
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="badge bg-primary/10 text-primary mb-3">FAQ</span>
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle mx-auto">{t('subtitle')}</p>
        </div>
        <div className="space-y-3">
          {questions.map(({ q, a }, i) => (
            <div key={i} className={`border rounded-xl overflow-hidden transition-all ${open === i ? 'border-primary/30 shadow-sm' : 'border-gray-200'}`}>
              <button onClick={() => setOpen(open === i ? null : i)}
                className={`w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold transition-colors ${open === i ? 'bg-primary/5 text-primary' : 'bg-white text-gray-900 hover:bg-gray-50'}`}>
                <span>{q}</span>
                <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${open === i ? 'rotate-180 text-primary' : 'text-gray-400'}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-5 py-4 bg-white border-t border-gray-100">
                  <p className="text-gray-700 text-sm leading-relaxed">{a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10 pt-8 border-t border-gray-100">
          <p className="text-gray-600 mb-4">{t('moreQuestions')}</p>
          <Link href={`/${locale}/kontakt`} className="btn-primary">{t('contactCta')}</Link>
        </div>
      </div>
    </section>
  );
}

// ===================== SERVICE AREAS =====================
export function ServiceAreasSection() {
  const areas = ['Zürich','St. Gallen','Winterthur','Dietikon','Uster','Dübendorf','Schlieren','Regensdorf','Kloten','Wallisellen','Opfikon','Embrach'];
  return (
    <section className="py-14 bg-gray-50">
      <div className="container-main text-center">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Unser Einzugsgebiet</h2>
        <p className="text-gray-500 mb-6">Hauptsitz Zürich · Filiale St. Gallen · Gesamte Agglomeration</p>
        <div className="flex flex-wrap justify-center gap-3">
          {areas.map((a) => <span key={a} className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm shadow-sm">📍 {a}</span>)}
        </div>
      </div>
    </section>
  );
}

// ===================== CTA =====================
export function CtaSection() {
  const locale = useLocale();
  return (
    <section className="bg-hero py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">Bereit für Ihr Projekt?</h2>
        <p className="text-white/80 text-lg mb-8">Kostenlose Beratung, ehrliche Offerte, perfekte Ausführung.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={`/${locale}/offerte`} className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-xl text-base shadow-lg transition-all">
            Jetzt Offerte anfragen →
          </Link>
          <a href="tel:0767459013" className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl text-base transition-all">
            📞 076 745 90 13
          </a>
        </div>
      </div>
    </section>
  );
}
