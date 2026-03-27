import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = { title: 'Kontakt | Din Maler – 076 745 90 13' };
export default function KontaktPage() {
  return (
    <>
      <section className="bg-hero text-white py-16 lg:py-24">
        <div className="container-main text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Kontakt aufnehmen</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Elvir Beshiri – persönlich, direkt und unkompliziert.</p>
        </div>
      </section>
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <a href="tel:0767459013" className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all text-center group">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">📞</div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Telefon</p>
              <p className="font-bold text-gray-900 group-hover:text-primary">076 745 90 13</p>
              <p className="text-xs text-gray-400 mt-1">Mo–Fr: 07:30–17:30</p>
            </a>
            <a href="mailto:info@din-maler.ch" className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all text-center group">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">✉️</div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">E-Mail</p>
              <p className="font-bold text-gray-900 group-hover:text-primary text-sm">info@din-maler.ch</p>
              <p className="text-xs text-gray-400 mt-1">Antwort innert 24h</p>
            </a>
            <a href="https://wa.me/41767459013" target="_blank" rel="noopener noreferrer"
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all text-center group">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">💬</div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">WhatsApp</p>
              <p className="font-bold text-gray-900 group-hover:text-green-700">Direkt schreiben</p>
              <p className="text-xs text-gray-400 mt-1">076 745 90 13</p>
            </a>
            <a href="https://www.instagram.com/din.maler/" target="_blank" rel="noopener noreferrer"
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all text-center group">
              <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">📸</div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Instagram</p>
              <p className="font-bold text-gray-900 group-hover:text-pink-600">@din.maler</p>
            </a>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Standorte</h2>
              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-primary text-sm uppercase tracking-wide mb-2">📍 Hauptsitz Zürich</p>
                  <p className="text-gray-700">Anemonenstrasse 3<br/>8047 Zürich<br/>Schweiz</p>
                </div>
                <div className="border-t border-gray-100 pt-6">
                  <p className="font-semibold text-primary text-sm uppercase tracking-wide mb-2">📍 Filiale St. Gallen</p>
                  <p className="text-gray-700">9014 St. Gallen<br/>Schweiz</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Öffnungszeiten</h2>
              <div className="space-y-3">
                <div className="flex justify-between text-sm"><span className="font-medium text-gray-700">Montag</span><span className="text-gray-700">07:30–17:30 Uhr</span></div>
                <div className="flex justify-between text-sm"><span className="font-medium text-gray-700">Dienstag</span><span className="text-gray-700">07:30–17:30 Uhr</span></div>
                <div className="flex justify-between text-sm"><span className="font-medium text-gray-700">Mittwoch</span><span className="text-gray-700">07:30–17:30 Uhr</span></div>
                <div className="flex justify-between text-sm"><span className="font-medium text-gray-700">Donnerstag</span><span className="text-gray-700">07:30–17:30 Uhr</span></div>
                <div className="flex justify-between text-sm"><span className="font-medium text-gray-700">Freitag</span><span className="text-gray-700">07:30–17:30 Uhr</span></div>
                <div className="flex justify-between text-sm"><span className="font-medium text-gray-700">Samstag</span><span className="text-gray-400">Geschlossen</span></div>
                <div className="flex justify-between text-sm"><span className="font-medium text-gray-700">Sonntag</span><span className="text-gray-400">Geschlossen</span></div>
              </div>
            </div>
          </div>
          <div className="bg-primary text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-extrabold mb-3">Bereit für Ihr Projekt?</h2>
            <p className="text-white/80 mb-6">Kostenlose, unverbindliche Offerte anfragen.</p>
            <Link href="/de/offerte" className="inline-flex items-center gap-2 bg-accent hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-xl transition-all">
              Jetzt Offerte anfragen →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
