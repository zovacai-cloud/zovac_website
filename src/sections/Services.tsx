import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Workflow Automation',
    description: 'Eliminate repetitive tasks. We architect intelligent automation that saves up to 30% of operational costs and frees your team for strategic work.',
    image: '/images/service-automation.jpg',
  },
  {
    title: 'AI Integration',
    description: 'Seamlessly embed AI into your existing processes. From predictive analytics to intelligent decision support, we make AI work for your business.',
    image: '/images/service-ai.jpg',
  },
  {
    title: 'Custom ERP Systems',
    description: 'Tailored enterprise resource planning built around your workflows. Not off-the-shelf templates, but systems that match how you actually work.',
    image: '/images/geometry-1.jpg',
  },
  {
    title: 'HR & Compliance Tech',
    description: 'Streamlined human resource management and compliance tracking. Automated reporting, document handling, and regulatory adherence.',
    image: '/images/geometry-2.jpg',
  },
  {
    title: 'CRM & Sales Systems',
    description: 'Customer relationship management that drives retention. Integrated sales pipelines, automated follow-ups, and real-time analytics.',
    image: '/images/geometry-3.jpg',
  },
  {
    title: 'Data Analytics Dashboards',
    description: 'Real-time business intelligence dashboards. Turn raw data into actionable insights that drive revenue growth and strategic decisions.',
    image: '/images/server-room.jpg',
  },
];

export default function Services() {
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
          delay: i * 0.1,
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
    <section id="services" ref={sectionRef} className="relative bg-black py-24 md:py-32 lg:py-40 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <span className="font-body text-xs uppercase tracking-[0.15em] text-[#E53935] mb-4 block">
            What We Do
          </span>
          <h2 className="font-display font-medium text-white text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] leading-tight max-w-3xl">
            Capabilities that transform operations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              className="group relative bg-[#E53935] p-8 md:p-10 aspect-square flex flex-col justify-between overflow-hidden cursor-default transition-transform duration-500 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <img src={service.image} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10">
                <h3 className="font-display font-medium text-white text-xl md:text-2xl mb-4 group-hover:-translate-y-1 transition-transform duration-300">
                  {service.title}
                </h3>
                <p className="font-body text-white/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="relative z-10 mt-6">
                <div className="w-8 h-px bg-white/40 group-hover:w-full group-hover:bg-white transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="border-l-2 border-[#E53935] pl-6 md:pl-8">
            <h4 className="font-display font-medium text-white text-xl mb-3">System Design</h4>
            <p className="font-body text-white/60 text-sm leading-relaxed">
              We architect systems from the ground up — ERP, CRM, ticketing, accounting, task management, and compliance tools designed around your unique operational needs.
            </p>
          </div>
          <div className="border-l-2 border-[#E53935] pl-6 md:pl-8">
            <h4 className="font-display font-medium text-white text-xl mb-3">Process Determination</h4>
            <p className="font-body text-white/60 text-sm leading-relaxed">
              Before writing a single line of code, we map your processes end-to-end. We identify bottlenecks, redundancies, and optimization opportunities.
            </p>
          </div>
          <div className="border-l-2 border-[#E53935] pl-6 md:pl-8">
            <h4 className="font-display font-medium text-white text-xl mb-3">FinTech Solutions</h4>
            <p className="font-body text-white/60 text-sm leading-relaxed">
              Custom accounting applications, revenue tracking, profit-margin analysis, and strategic financial recommendations integrated into your workflow.
            </p>
          </div>
          <div className="border-l-2 border-[#E53935] pl-6 md:pl-8">
            <h4 className="font-display font-medium text-white text-xl mb-3">Day-to-Day Operations</h4>
            <p className="font-body text-white/60 text-sm leading-relaxed">
              Task managers, internal communication hubs, document handling, and operational dashboards that keep your entire organization aligned and efficient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
