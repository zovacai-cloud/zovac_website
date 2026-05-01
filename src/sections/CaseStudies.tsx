import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, Users, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    title: 'FSSAI Compliance Manager',
    industry: 'Food & Compliance',
    problem: 'Auditing hundreds of products manually was painfully time-consuming, taking days and preventing focus on expansion strategies.',
    solution: 'ZOVAC built a dedicated FSSAI Compliance Manager that automated the entire product auditing workflow.',
    result: 'Tasks that took days are now completed in a couple of hours. The client gained operational freedom to invest time in business expansion.',
    stats: [
      { icon: Clock, label: 'Time Saved', value: 'Days to Hours' },
      { icon: Users, label: 'Focus Shift', value: 'Expansion Strategy' },
    ],
    image: '/images/case-study-fssai.jpg',
  },
  {
    title: 'Unified Business System',
    industry: 'Multi-Operation Enterprise',
    problem: 'Founder overwhelmed with daily sales, client updates, interactions, and end-of-year accounting suffered severely.',
    solution: 'ZOVAC built a unified system handling clients, customer reporting, accountings, and internal management — all in one platform.',
    result: 'Saved days of hectic schedules, improved customer relations and retention. An internal profit-killing process was identified and eliminated, increasing margins. Automations saved 29% of resources.',
    stats: [
      { icon: TrendingUp, label: 'Margin Increase', value: 'Profit Optimized' },
      { icon: Clock, label: 'Resource Savings', value: '29% Automated' },
    ],
    image: '/images/case-study-unified.jpg',
  },
];

export default function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 1,
          delay: i * 0.2,
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

  return (
    <section id="case-studies" ref={sectionRef} className="relative bg-black py-24 md:py-32 lg:py-40 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <span className="font-body text-xs uppercase tracking-[0.15em] text-[#E53935] mb-4 block">
            Proven Impact
          </span>
          <h2 className="font-display font-medium text-white text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] leading-tight max-w-3xl">
            Case studies that speak results
          </h2>
        </div>

        <div className="space-y-16 md:space-y-24">
          {caseStudies.map((study, i) => (
            <div
              key={study.title}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative overflow-hidden group">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-4 left-4 font-body text-[10px] uppercase tracking-[0.15em] bg-[#E53935] text-white px-3 py-1.5">
                    {study.industry}
                  </span>
                </div>
              </div>

              <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="font-display font-medium text-white text-2xl md:text-3xl lg:text-4xl mb-6 tracking-[-0.02em]">
                  {study.title}
                </h3>

                <div className="space-y-4 mb-8">
                  <div>
                    <span className="font-body text-xs uppercase tracking-[0.1em] text-[#E53935] mb-2 block">The Challenge</span>
                    <p className="font-body text-white/70 text-sm md:text-base leading-relaxed">
                      {study.problem}
                    </p>
                  </div>
                  <div>
                    <span className="font-body text-xs uppercase tracking-[0.1em] text-[#E53935] mb-2 block">The Solution</span>
                    <p className="font-body text-white/70 text-sm md:text-base leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                  <div>
                    <span className="font-body text-xs uppercase tracking-[0.1em] text-[#E53935] mb-2 block">The Result</span>
                    <p className="font-body text-white/90 text-sm md:text-base leading-relaxed">
                      {study.result}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6">
                  {study.stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div key={stat.label} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full border border-[#E53935]/40 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-[#E53935]" />
                        </div>
                        <div>
                          <span className="font-display font-medium text-white text-sm block">{stat.value}</span>
                          <span className="font-body text-white/50 text-xs">{stat.label}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial highlight */}
        <div className="mt-24 md:mt-32 border border-white/10 p-8 md:p-12 lg:p-16">
          <blockquote className="font-serif-body text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl">
            "A Deloitte study found that automating manual processes can reduce operational costs by up to 30%, freeing up significant resources for strategic initiatives."
          </blockquote>
          <div className="mt-6 flex items-center gap-3">
            <div className="w-8 h-px bg-[#E53935]" />
            <span className="font-body text-white/50 text-sm">Deloitte Automation Impact Study</span>
          </div>
        </div>
      </div>
    </section>
  );
}
