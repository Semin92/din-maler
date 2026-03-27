import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import { StatsBar, ServicesGrid, ProcessSection, AboutSection,
         ReferencesSection, TestimonialsSection, FaqSection,
         ServiceAreasSection, CtaSection } from '@/components/sections/Sections';
import QuoteSection from '@/components/sections/QuoteSection';

export const metadata: Metadata = {
  title: 'Din Maler Villi – Malerfirma Zürich & St. Gallen | Qualität, die mer gseht!',
  description: 'Innenanstriche, Fassaden, Gipsarbeiten, Renovation. Hauptsitz Zürich, Filiale St. Gallen. ☎ 076 745 90 13',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesGrid />
      <ProcessSection />
      <AboutSection />
      <ReferencesSection />
      <TestimonialsSection />
      <FaqSection />
      <ServiceAreasSection />
      <QuoteSection />
      <CtaSection />
    </>
  );
}
