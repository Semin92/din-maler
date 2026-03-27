import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = { title: 'Leistungen | Din Maler Zürich' };
export default function LeistungenPage() {
  return (
    <>
      <section className="bg-hero text-white py-16 lg:py-24">
        <div className="container-main text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Unsere Leistungen</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Professionell, sauber und termingerecht – in Zürich und St. Gallen.</p>
        </div>
      </section>
      <section id="innenmalerei" className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="text-4xl mb-4 block">🖌️</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Innenmalerei</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Präzise, sauber, hochwertig – für jeden Raum die perfekte Lösung.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              ['Wandanstriche','Saubere, gleichmässige Anstriche mit hochwertigen Farben – individuell auf Raum, Licht und Stil abgestimmt.'],
              ['Deckenanstriche','Perfekte, streifenfreie Deckenflächen mit langlebiger Farbwirkung.'],
              ['Fensterrahmen & Türlackierungen','Präzise lackierte Holz- oder Metallflächen – widerstandsfähig und elegant.'],
              ['Heizkörperbeschichtung','Hitzebeständige Speziallacke für ein sauberes, modernes Erscheinungsbild.'],
              ['Holzlasuren & Lackarbeiten','Schutz und Ästhetik für Holzoberflächen – transparent oder deckend.'],
              ['Tapeten entfernen & neu tapezieren','Blasenfrei, sauber und präzise – klassisch oder modern.'],
              ['Spachtel- & Schleifarbeiten','Perfekte Vorbereitung jeder Fläche – glatt und bereit für den Endanstrich.'],
              ['Grundierungen & Untergrundvorbereitung','Optimale Haftung durch professionelle Vorarbeiten.'],
              ['Wandbeschichtungen (Küche & Bad)','Wasserabweisend, hygienisch, elegant und pflegeleicht.'],
              ['Schimmelsanierung & Schutzanstriche','Effektive Behandlung und nachhaltiger Schutz vor Feuchtigkeit.'],
              ['Renovations- & Auffrischungsarbeiten','Von Teilsanierungen bis zur kompletten Neugestaltung.'],
            ].map(([title, text]) => (
              <div key={title} className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-accent/30 hover:shadow-sm transition-all">
                <p className="font-bold text-gray-900 mb-2">{title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <div className="text-center"><Link href="/de/offerte" className="btn-primary">Offerte für Innenmalerei →</Link></div>
        </div>
      </section>
      <section id="fassade" className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="text-4xl mb-4 block">🏗️</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">Fassadenarbeiten</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Langlebiger Schutz und professionelle Optik für jede Fassade.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              ['Fassadenanstriche','Wetterbeständige, langlebige Anstriche für optimalen Schutz und gepflegtes Erscheinungsbild.'],
              ['Fassadensanierungen','Reinigung, Ausbesserung und Neubeschichtung für dauerhafte Werterhaltung.'],
              ['Verputzarbeiten','Neu- und Renovationsputze in verschiedenen Strukturen, abgestimmt auf Architektur und Stil.'],
              ['Risssanierungen','Fachgerechte Instandsetzung von Putz- und Haarrissen für dauerhaften Schutz.'],
              ['Holzfassaden & Lasuren','UV-beständige Lasuren für Schutz und optische Aufwertung.'],
              ['Fassadenreinigung','Schonende Entfernung von Algen, Moos und Schmutzbelägen.'],
              ['Schutzbeschichtungen','Atmungsaktive Spezialbeschichtungen gegen Witterung und UV.'],
              ['Beton, Metall & Putzflächen','Lösungen für alle Untergründe – fachgerecht und haltbar.'],
              ['Farbgestaltung & Beratung','Individuelle Beratung zur Fassadenfarbe abgestimmt auf Bauvorschriften.'],
            ].map(([title, text]) => (
              <div key={title} className="bg-white rounded-xl p-5 border border-gray-100 hover:border-accent/30 hover:shadow-sm transition-all">
                <p className="font-bold text-gray-900 mb-2">{title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <div className="text-center"><Link href="/de/offerte" className="btn-primary">Offerte für Fassadenarbeiten →</Link></div>
        </div>
      </section>
      <section className="bg-hero py-16">
        <div className="container-main text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Fragen zu unseren Leistungen?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/de/offerte" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg">Offerte anfragen →</Link>
            <a href="tel:0767459013" className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all">📞 076 745 90 13</a>
          </div>
        </div>
      </section>
    </>
  );
}
