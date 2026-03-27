import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
export const metadata: Metadata = { title: 'Über uns – Elvir Beshiri | Din Maler Zürich' };
export default function UeberUnsPage() {
  return (
    <>
      <section className="bg-hero text-white py-16 lg:py-24">
        <div className="container-main text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Din Maler Villi</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Exzellenz im Maler- und Oberflächendesign – für Räume, die Eindruck hinterlassen.</p>
        </div>
      </section>
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-14 items-start mb-14">
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative mb-6">
                <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-xl bg-gray-100">
                  <Image src="/images/villi.jpg" alt="Elvir Beshiri – Inhaber Din Maler"
                    width={256} height={256} className="w-full h-full object-cover object-top"
                    style={{ mixBlendMode:'multiply' }}/>
                </div>
                <div className="absolute -bottom-3 -right-3 bg-accent text-white text-xs font-bold px-4 py-2 rounded-full shadow-md">Inhaber & Gründer</div>
              </div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-1 mt-4">Elvir Beshiri</h2>
              <p className="text-accent font-semibold text-sm mb-5">Din Maler – Zürich & St. Gallen</p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:0767459013" className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-light transition-colors">📞 076 745 90 13</a>
                <a href="https://www.instagram.com/din.maler/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90">📸 Instagram</a>
                <a href="https://www.tiktok.com/@din_maler_villi" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:opacity-80">🎵 TikTok</a>
              </div>
            </div>
            <div className="space-y-5">
              <p className="text-gray-700 leading-relaxed text-lg">DIN MALER Villi steht für Exzellenz im Maler- und Oberflächendesign. Mein Anspruch ist es, Räume zu gestalten, die Eleganz, Präzision und Beständigkeit vereinen.</p>
              <p className="text-gray-700 leading-relaxed">Ich arbeite ausschliesslich mit hochwertigen Materialien und modernsten Techniken. Ob Neubau, Renovation oder exklusive Innenraumgestaltung – jedes Projekt wird mit grösster Sorgfalt geplant und ausgeführt.</p>
              <p className="text-gray-700 leading-relaxed">Meine Kundinnen und Kunden schätzen meine Diskretion, Verlässlichkeit und das Bewusstsein für Ästhetik.</p>
              <p className="text-primary font-bold italic text-lg pt-2">DIN MALER Villi – für anspruchsvolle Räume, die Eindruck hinterlassen.</p>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {[['🏆','Qualität','Hochwertige Materialien und präzise Verarbeitung.'],['🎨','Ästhetik','Farbkonzepte abgestimmt auf Raum, Architektur und Licht.'],['✅','Zuverlässigkeit','Termintreue, Sauberkeit und klare Kommunikation.'],['💎','Exklusivität','Massgeschneiderte Lösungen für höchste Ansprüche.']].map(([icon,title,text]) => (
              <div key={title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-accent/20 transition-all">
                <div className="text-3xl mb-3">{icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
                <p className="text-gray-500 text-sm">{text}</p>
              </div>
            ))}
          </div>
          <div className="bg-primary text-white rounded-2xl p-8 lg:p-10">
            <h3 className="text-2xl font-extrabold mb-3">Mein Qualitätsversprechen</h3>
            <p className="text-white/80 leading-relaxed">Nur wer mit Leidenschaft arbeitet, kann Qualität garantieren. Mein Ziel: Sie sollen nicht nur zufrieden sein – <strong className="text-white">sondern beeindruckt.</strong></p>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="container-main text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Bereit für Ihr Projekt?</h2>
          <Link href="/de/offerte" className="btn-primary">Jetzt Offerte anfragen →</Link>
        </div>
      </section>
    </>
  );
}
