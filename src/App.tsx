import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Manifesto from './sections/Manifesto';
import Services from './sections/Services';
import Process from './sections/Process';
import CaseStudies from './sections/CaseStudies';
import Founder from './sections/Founder';
import ZovacStudio from './sections/ZovacStudio';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import CustomCursor from './sections/CustomCursor';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');
  const [flippedCardIndex, setFlippedCardIndex] = useState<number | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative bg-black min-h-screen">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Services 
          flippedCardIndex={flippedCardIndex}
          setFlippedCardIndex={setFlippedCardIndex}
          onSelectService={(service) => {
            setSelectedService(service);
            const contactEl = document.getElementById('contact');
            if (contactEl) {
              contactEl.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />
        <Process />
        <CaseStudies />
        <Founder />
        <ZovacStudio />
        <Contact selectedService={selectedService} />
      </main>
      <Footer 
        onSelectServiceCard={(index) => {
          setFlippedCardIndex(index);
          const servicesEl = document.getElementById('services');
          if (servicesEl) {
            servicesEl.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />
    </div>
  );
}
