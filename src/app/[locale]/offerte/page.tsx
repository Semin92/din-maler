import type { Metadata } from 'next';
import QuoteSection from '@/components/sections/QuoteSection';
export const metadata: Metadata = { title: 'Kostenlose Offerte anfragen | Din Maler Zürich' };
export default function OffertePage() {
  return (
    <>
      <section className="bg-hero text-white py-16 lg:py-24">
        <div className="container-main text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Kostenlose Offerte anfragen</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Unverbindlich und kostenlos – Antwort innert 24 Stunden.</p>
        </div>
      </section>
      <QuoteSection />
    </>
  );
}
