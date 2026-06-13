import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    headline: 'Architect Your Chaos',
    backTitle: 'System Architecture & Designing',
    backContent:
      'When processes inside your organisation are chaotic due to lack of proper systems and structure, it becomes a bottleneck that drains energy and resources. We design the structural backbone your business needs — mapping every workflow, eliminating redundancies, and building systems that let your team focus on real challenges instead of being submerged in internal problems. From ERP and CRM to compliance and HR tech, we architect it all from the ground up.',
    accent: 'rgba(229, 57, 53, 0.35)',
  },
  {
    headline: 'Own Your Stack',
    backTitle: 'Custom Software Development',
    backContent:
      'One single internal software for your entire organisation — CRM, lead generation, AI-powered marketing content creation, video and carousel automation, and a 24/7 AI assistant that makes your team unstoppable. It is crucial to own your own systems instead of relying on external SaaS products that charge recurring fees and lock your data. We build software tailored to your exact organisational needs, keeping all your data safe, secure, and under your control.',
    accent: 'rgba(122, 101, 242, 0.35)',
  },
  {
    headline: 'Automate Everything',
    backTitle: 'Workspace Automations',
    backContent:
      'Reduce manual labor by automating repetitive tasks inside your existing Google Workspace. Documentation, presentations, email campaigns, automatic email responses, AI analysers — we integrate powerful automations that significantly save time, reduce internal friction, improve employee output, and boost client satisfaction. Let your founders focus on growth and scaling while the systems handle the repetitive grind.',
    accent: 'rgba(229, 57, 53, 0.25)',
  },
];

interface ServicesProps {
  flippedCardIndex: number | null;
  setFlippedCardIndex: (index: number | null) => void;
  onSelectService: (serviceName: string) => void;
}

export default function Services({
  flippedCardIndex,
  setFlippedCardIndex,
  onSelectService,
}: ServicesProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleFlip = (index: number) => {
    setFlippedCardIndex(flippedCardIndex === index ? null : index);
  };

  return (
    <section id="services" ref={sectionRef} className="relative bg-black py-24 md:py-32 lg:py-40 px-6 lg:px-10 overflow-hidden">
      {/* Subtle orb background */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-[#E53935]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-[#7A65F2]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 md:mb-24">
          <span className="font-body text-xs uppercase tracking-[0.15em] text-[#E53935] mb-4 block">
            What We Do
          </span>
          <h2 className="font-display font-medium text-white text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] leading-tight max-w-3xl">
            Three pillars of operational freedom
          </h2>
          <p className="font-body text-white/50 text-base md:text-lg mt-4 max-w-2xl leading-relaxed">
            Every business challenge falls into one of these categories. Click each card to discover how we solve it.
          </p>
        </div>

        {/* Glassmorphism Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" style={{ perspective: '1200px' }}>
          {pillars.map((pillar, i) => (
            <div
              key={pillar.headline}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              className="group cursor-pointer"
              style={{ perspective: '1000px' }}
              onClick={() => handleFlip(i)}
            >
              <div
                className="relative w-full transition-transform duration-700"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flippedCardIndex === i ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  minHeight: '420px',
                }}
              >
                {/* FRONT */}
                <div
                  className="absolute inset-0 flex flex-col justify-between p-8 md:p-10 rounded-2xl overflow-hidden"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    background: 'rgba(255,255,255,0.04)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: `0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06), 0 0 60px ${pillar.accent}`,
                  }}
                >
                  {/* Top shine line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  <div>
                    <span className="font-display font-bold text-[#E53935]/60 text-6xl md:text-7xl block mb-6">
                      0{i + 1}
                    </span>
                    <h3 className="font-display font-medium text-white text-2xl md:text-3xl tracking-[-0.02em] leading-tight">
                      {pillar.headline}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-body text-white/40 text-xs uppercase tracking-[0.15em]">
                      Click to explore
                    </span>
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                      <span className="text-white/60 text-lg">+</span>
                    </div>
                  </div>
                </div>

                {/* BACK */}
                <div
                  className="absolute inset-0 flex flex-col justify-between p-8 md:p-10 rounded-2xl overflow-hidden"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    background: 'rgba(255,255,255,0.06)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    boxShadow: `0 12px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08), 0 0 80px ${pillar.accent}`,
                  }}
                >
                  {/* Top shine line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E53935]/40 to-transparent" />

                  <div>
                    <h4 className="font-display font-medium text-white text-lg md:text-xl mb-4">
                      {pillar.backTitle}
                    </h4>
                    <p className="font-body text-white/65 text-sm leading-relaxed">
                      {pillar.backContent}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectService(pillar.backTitle);
                    }}
                    className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.1em] text-[#E53935] hover:text-white transition-colors duration-300 mt-4 text-left"
                  >
                    Know More <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
