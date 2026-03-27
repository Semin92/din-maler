import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Datenschutz | Din Maler', robots: { index: false } };
export default function DatenschutzPage() {
  return (
    <div className="section-padding bg-white">
      <div className="container-main max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Datenschutzerklärung</h1>
        <p className="text-gray-500 text-sm mb-8">Gemäss nDSG Schweiz (seit 01.09.2023)</p>
        <div className="space-y-8 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Verantwortliche Stelle</h2>
            <div className="bg-gray-50 rounded-xl p-5">
              <p className="font-semibold text-gray-900 mb-1">Din Maler – Elvir Beshiri</p>
              <p>Anemonenstrasse 3, 8047 Zürich</p>
              <p>Telefon: <a href="tel:0767459013" className="text-primary hover:text-accent">076 745 90 13</a></p>
              <p>E-Mail: <a href="mailto:info@din-maler.ch" className="text-primary hover:text-accent">info@din-maler.ch</a></p>
            </div>
          </section>
          <section className="border-t border-gray-100 pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Welche Daten wir erheben</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Kontaktformular:</strong> Name, Telefon, E-Mail, Adresse, Projektbeschreibung, Fotos</li>
              <li><strong>Serverprotokolle:</strong> IP-Adresse (anonymisiert), Datum, aufgerufene Seite</li>
              <li><strong>Cookies:</strong> Technisch notwendige und optionale Statistik-Cookies</li>
            </ul>
          </section>
          <section className="border-t border-gray-100 pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Ihre Rechte</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Auskunft, Berichtigung und Löschung Ihrer Daten</li>
              <li>Widerspruch gegen die Datenbearbeitung</li>
              <li>Beschwerde beim EDÖB: <a href="https://www.edoeb.admin.ch" className="text-primary underline" target="_blank" rel="noopener noreferrer">www.edoeb.admin.ch</a></li>
            </ul>
            <p className="mt-4">Kontakt: <a href="mailto:info@din-maler.ch" className="text-primary hover:text-accent">info@din-maler.ch</a> | 076 745 90 13</p>
          </section>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <p className="text-blue-800 font-semibold mb-1">Kontakt bei Datenschutzfragen</p>
            <p className="text-blue-700 text-sm">Din Maler – Elvir Beshiri<br/>Anemonenstrasse 3, 8047 Zürich<br/>
            <a href="mailto:info@din-maler.ch" className="underline">info@din-maler.ch</a> | 076 745 90 13</p>
          </div>
        </div>
      </div>
    </div>
  );
}
