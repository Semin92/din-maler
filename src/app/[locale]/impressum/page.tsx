import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Impressum | Din Maler', robots: { index: false } };
export default function ImpressumPage() {
  return (
    <div className="section-padding bg-white">
      <div className="container-main max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Impressum</h1>
        <div className="space-y-8 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Angaben gemäss Schweizer Recht</h2>
            <dl className="space-y-3">
              <div className="grid sm:grid-cols-3 gap-1"><dt className="font-semibold text-gray-700">Firmenname:</dt><dd className="sm:col-span-2">Din Maler</dd></div>
              <div className="grid sm:grid-cols-3 gap-1"><dt className="font-semibold text-gray-700">Inhaber:</dt><dd className="sm:col-span-2">Elvir Beshiri</dd></div>
              <div className="grid sm:grid-cols-3 gap-1"><dt className="font-semibold text-gray-700">Adresse:</dt><dd className="sm:col-span-2">Anemonenstrasse 3<br/>8047 Zürich<br/>Schweiz</dd></div>
              <div className="grid sm:grid-cols-3 gap-1"><dt className="font-semibold text-gray-700">Filiale:</dt><dd className="sm:col-span-2">9014 St. Gallen, Schweiz</dd></div>
              <div className="grid sm:grid-cols-3 gap-1"><dt className="font-semibold text-gray-700">Telefon:</dt><dd className="sm:col-span-2"><a href="tel:0767459013" className="text-primary hover:text-accent">076 745 90 13</a></dd></div>
              <div className="grid sm:grid-cols-3 gap-1"><dt className="font-semibold text-gray-700">E-Mail:</dt><dd className="sm:col-span-2"><a href="mailto:info@din-maler.ch" className="text-primary hover:text-accent">info@din-maler.ch</a></dd></div>
              <div className="grid sm:grid-cols-3 gap-1"><dt className="font-semibold text-gray-700">Website:</dt><dd className="sm:col-span-2">www.din-maler.ch</dd></div>
              <div className="grid sm:grid-cols-3 gap-1"><dt className="font-semibold text-gray-700">Öffnungszeiten:</dt><dd className="sm:col-span-2">Mo–Fr: 07:30–17:30 Uhr</dd></div>
            </dl>
          </section>
          <section className="border-t border-gray-100 pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Haftungsausschluss</h2>
            <p>Die Inhalte wurden mit Sorgfalt erstellt. Für Richtigkeit und Vollständigkeit übernehmen wir keine Gewähr.</p>
          </section>
          <section className="border-t border-gray-100 pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Urheberrecht</h2>
            <p>Alle Inhalte sind urheberrechtlich geschützt. Verwendung nur mit schriftlicher Genehmigung von Elvir Beshiri / Din Maler.</p>
          </section>
          <section className="border-t border-gray-100 pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Gerichtsstand</h2>
            <p>Es gilt Schweizer Recht. Gerichtsstand ist Zürich.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
