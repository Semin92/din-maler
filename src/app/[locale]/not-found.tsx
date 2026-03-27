import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center section-padding">
      <div className="container-main text-center max-w-xl">
        <div className="text-9xl font-extrabold text-gray-100 select-none mb-6">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Seite nicht gefunden</h1>
        <p className="text-gray-600 mb-8">Diese Seite existiert leider nicht.</p>
        <Link href="/de" className="btn-primary">← Zurück zur Startseite</Link>
      </div>
    </div>
  );
}
