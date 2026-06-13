import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageSquare, Search, FileText, Hammer, TestTube, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'We talk. We listen. We understand your business, your pain points, and your vision. Every engagement starts with a deep-dive conversation.',
    icon: MessageSquare,
  },
  {
    number: '02',
    title: 'Problem Identification',
    description: 'We analyze your workflows, identify core bottlenecks, and pinpoint exactly what is burning your resources and time.',
    icon: Search,
  },
  {
    number: '03',
    title: 'One-Page Summary',
    description: 'You receive a concise summary of identified challenges and a proposed solution architecture — no jargon, just clarity.',
    icon: FileText,
  },
  {
    number: '04',
    title: 'System Build',
    description: 'Upon confirmation, we build your custom system. Tailored software, integrated workflows, and intelligent automation.',
    icon: Hammer,
  },
  {
    number: '05',
    title: 'Test & Iterate',
    description: 'We deploy, test rigorously, gather feedback, and iterate. The system evolves with your business, not against it.',
    icon: TestTube,
  },
  {
    number: '06',
    title: 'Operational Freedom',
    description: 'You get the final product — a system that works for you. Operational freedom, scaled efficiency, and competitive edge.',
    icon: Rocket,
  },
];

function AnimatedNumber({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const startTime = Date.now();
            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease out cubic
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount(Math.floor(eased * target));
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, i) => {
        if (!item) return;
        gsap.from(item, {
          x: i % 2 === 0 ? -60 : 60,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="relative bg-black py-24 md:py-32 lg:py-40 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-24">
          <span className="font-body text-xs uppercase tracking-[0.15em] text-[#E53935] mb-4 block">
            How We Work
          </span>
          <h2 className="font-display font-medium text-white text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] leading-tight max-w-3xl">
            From problem to operational freedom
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#E53935]/30 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={step.number}
                  ref={(el) => { if (el) itemsRef.current[i] = el; }}
                  className={`relative md:grid md:grid-cols-2 md:gap-16 lg:gap-24 ${
                    i > 0 ? 'md:mt-16' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`${isLeft ? 'md:text-right md:pr-8' : 'md:col-start-2 md:pl-8'}`}>
                    <div className={`flex items-center gap-4 mb-4 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                      <span className="font-display font-bold text-[#E53935] text-5xl md:text-6xl opacity-80">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-[#E53935] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h3 className="font-display font-medium text-white text-xl md:text-2xl mb-3">
                      {step.title}
                    </h3>
                    <p className="font-body text-white/60 text-sm md:text-base leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>

                  {/* Dot on timeline */}
                  <div className="hidden md:block absolute left-1/2 top-6 -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-[#E53935] border-4 border-black" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stat highlight with animated numbers */}
        <div className="mt-24 md:mt-32 border-t border-white/10 pt-12 md:pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center md:text-left">
              <span className="font-display font-bold text-[#E53935] text-5xl md:text-6xl block mb-2">
                <AnimatedNumber target={30} suffix="%" />
              </span>
              <p className="font-body text-white/60 text-sm">
                Average operational cost reduction through automation (Deloitte study)
              </p>
            </div>
            <div className="text-center md:text-left">
              <span className="font-display font-bold text-[#E53935] text-5xl md:text-6xl block mb-2">
                <AnimatedNumber target={29} suffix="%" />
              </span>
              <p className="font-body text-white/60 text-sm">
                Resource savings achieved for clients through intelligent system design
              </p>
            </div>
            <div className="text-center md:text-left">
              <span className="font-display font-bold text-[#E53935] text-5xl md:text-6xl block mb-2">
                <AnimatedNumber target={100} suffix="+" />
              </span>
              <p className="font-body text-white/60 text-sm">
                Hours saved per month for clients through workflow automation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
