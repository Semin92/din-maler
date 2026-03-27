import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = { title: 'FAQ | Din Maler Zürich' };
const questions = [
  { q: 'Wie läuft eine Offerte bei Ihnen ab?', a: 'Anfrage per Formular, Telefon oder WhatsApp (gerne mit Fotos). Wir vereinbaren einen kostenlosen Besichtigungstermin und senden Ihnen eine klare Offerte innert 24 Stunden.' },
  { q: 'In welchen Regionen sind Sie tätig?', a: 'Hauptsitz: Anemonenstrasse 3, 8047 Zürich. Filiale: 9014 St. Gallen. Wir sind in der ganzen Agglomeration Zürich tätig.' },
  { q: 'Was kostet ein Innenanstrich ungefähr?', a: 'Ein Zimmer ab CHF 500 – abhängig von Fläche, Zustand und Anstrich. Kostenlose Offerte für einen genauen Preis.' },
  { q: 'Wie lange dauert ein typisches Projekt?', a: 'Ein Zimmer: 1–2 Tage. Grössere Projekte / Fassaden: 1–3 Wochen.' },
  { q: 'Arbeiten Sie für Privat- und Geschäftskunden?', a: 'Ja – Privathaushalte, Büros, Gewerbebetriebe, Restaurants und Immobilienverwaltungen.' },
  { q: 'In welchen Sprachen beraten Sie?', a: 'Deutsch, Französisch, Italienisch und Englisch.' },
  { q: 'Was soll ich für die Besichtigung vorbereiten?', a: 'Nichts Spezielles. Elvir Beshiri kommt zu Ihnen, schaut sich alles an und klärt alle Fragen vor Ort.' },
  { q: 'Bieten Sie auch Notfall-Einsätze an?', a: 'Bei dringenden Fällen rufen Sie uns direkt an: 076 745 90 13 – wir helfen so schnell wie möglich.' },
];
export default function FaqPage() {
  return (
    <>
      <section className="bg-hero text-white py-16 lg:py-24">
        <div className="container-main text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Häufig gestellte Fragen</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Haben Sie Fragen? Sehr wahrscheinlich haben wir die Antwort bereits hier.</p>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-4">
            {questions.map(({ q, a }) => (
              <div key={q} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 pt-8 border-t border-gray-100">
            <p className="text-gray-600 mb-4">Noch weitere Fragen?</p>
            <Link href="/de/kontakt" className="btn-primary">Jetzt kontaktieren</Link>
          </div>
        </div>
      </section>
    </>
  );
}
