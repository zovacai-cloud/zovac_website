import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ZovacStudio() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.from(contentRef.current, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="studio" ref={sectionRef} className="relative bg-black py-24 md:py-32 lg:py-40 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <div ref={contentRef}>
          <div className="mb-12 md:mb-16">
            <span className="font-body text-xs uppercase tracking-[0.15em] text-[#E53935] mb-4 block">
              Try It Now
            </span>
            <h2 className="font-display font-medium text-white text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] leading-tight max-w-3xl mb-4">
              ZOVAC Studio
            </h2>
            <p className="font-body text-white/60 text-base md:text-lg max-w-2xl leading-relaxed">
              Experience the power of intelligent automation firsthand. Our AI studio helps you explore what's possible for your business operations.
            </p>
          </div>

          <div className="relative bg-white rounded-sm overflow-hidden">
            {/* Studio Header */}
            <div className="bg-black border-b border-white/10 px-4 md:px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E53935]" />
                <span className="font-logo text-white text-xs tracking-[0.1em]">ZOVAC STUDIO</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E53935]" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
            </div>

            {/* AppScript iframe */}
            <div className="w-full aspect-[16/10] md:aspect-[16/7] lg:aspect-[16/5]">
              <iframe
                src="https://script.google.com/macros/s/AKfycbxFPHYLnq3t-BakMUHguYjup_xB41MzmhbZYokCoNprScreAUFnst_OL-V77RYb4ARHqQ/exec"
                title="ZOVAC Studio"
                className="w-full h-full border-0"
                allow="clipboard-write; clipboard-read"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
            <p className="font-body text-white/50 text-sm">
              Powered by ZOVAC's proprietary automation engine. No login required to explore.
            </p>
            <a
              href="https://script.google.com/macros/s/AKfycbxFPHYLnq3t-BakMUHguYjup_xB41MzmhbZYokCoNprScreAUFnst_OL-V77RYb4ARHqQ/exec"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.1em] text-[#E53935] hover:text-white transition-colors duration-300"
            >
              Open in Full Screen <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
