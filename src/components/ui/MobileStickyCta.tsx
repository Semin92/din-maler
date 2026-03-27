'use client';
import Link from 'next/link';
import { useLocale } from 'next-intl';
export default function MobileStickyCta() {
  const locale = useLocale();
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-gray-200 px-4 py-3 flex gap-3">
      <a href="tel:0767459013"
        className="flex-1 flex items-center justify-center gap-2 border-2 border-primary text-primary font-bold py-3 rounded-xl text-sm">
        📞 076 745 90 13
      </a>
      <Link href={`/${locale}/offerte`}
        className="flex-1 flex items-center justify-center gap-2 bg-accent text-white font-bold py-3 rounded-xl text-sm">
        Offerte →
      </Link>
    </div>
  );
}
