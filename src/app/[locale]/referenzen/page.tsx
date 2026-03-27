import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = { title: 'Referenzen | Din Maler Zürich' };
const projekte = [
  { title: 'Fassadenrenovation Einfamilienhaus', ort: 'Zürich-Höngg', beschreibung: 'Komplette Fassadensanierung mit Verputz und neuem Anstrich. Dauer: 2 Wochen.', img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=70' },
  { title: 'Innenanstrich Bürogebäude', ort: 'Zürich City', beschreibung: 'Alle Büroräume neu gestrichen, ausgeführt am Wochenende. Dauer: 3 Tage.', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=70' },
  { title: 'Wohnungsrenovation', ort: 'Winterthur', beschreibung: '5-Zimmer-Wohnung komplett renoviert inkl. Gipsarbeiten. Dauer: 1 Woche.', img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=70' },
  { title: 'Fassadenanstrich Mehrfamilienhaus', ort: 'Dietikon', beschreibung: 'Wetterbeständiger Fassadenanstrich für ein 8-Familienhaus. Dauer: 3 Wochen.', img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=70' },
  { title: 'Gipsarbeiten Neubau', ort: 'Dübendorf', beschreibung: 'Abrieb und Spachtelarbeiten für Neubau-Wohnungen. Dauer: 2 Wochen.', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=70' },
  { title: 'Innenanstrich Restaurant', ort: 'St. Gallen', beschreibung: 'Kompletter Innenanstrich in 2 Nächten ohne Betriebsunterbruch. Dauer: 2 Nächte.', img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=70' },
];
export default function ReferenzenPage() {
  return (
    <>
      <section className="bg-hero text-white py-16 lg:py-24">
        <div className="container-main text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Unsere Referenzen</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Echte Projekte, echte Resultate – ein Auszug aus unserer Arbeit.</p>
        </div>
      </section>
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projekte.map(({ title, ort, beschreibung, img }) => (
              <div key={title} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                <div className="aspect-video overflow-hidden">
                  <img src={img} alt={`${title} – Din Maler`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"/>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                  <p className="text-accent text-xs font-semibold mb-2">📍 {ort}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{beschreibung}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/de/offerte" className="btn-primary">Ihr Projekt anfragen →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
