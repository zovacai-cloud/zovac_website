import { useEffect } from 'react';
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
        <Services />
        <Process />
        <CaseStudies />
        <Founder />
        <ZovacStudio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
