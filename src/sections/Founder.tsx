import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Globe, UserCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Founder() {
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
    <section id="founder" ref={sectionRef} className="relative bg-black py-24 md:py-32 lg:py-40 px-6 lg:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 md:mb-24">
          <span className="font-body text-xs uppercase tracking-[0.15em] text-[#E53935] mb-4 block">
            Leadership
          </span>
          <h2 className="font-display font-medium text-white text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] leading-tight">
            The mind behind ZOVAC
          </h2>
        </div>

        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Founder Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-[6px] border-[#E53935]">
                <img
                  src="https://raw.githubusercontent.com/zovacai-cloud/host_image/main/founder.jpg"
                  alt="Swayam Swarup Biswal - Founder & CEO of ZOVAC"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-[#E53935] rounded-full flex items-center justify-center">
                <span className="font-display font-bold text-white text-xs">CEO</span>
              </div>
            </div>
          </div>

          {/* Founder Info */}
          <div>
            <h3 className="font-display font-medium text-white text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] mb-2">
              SWAYAM SWARUP BISWAL
            </h3>
            <p className="font-body text-[#E53935] text-sm uppercase tracking-[0.1em] mb-6">
              Founder & Lead Systems Architect
            </p>

            <p className="font-body text-white/70 text-sm md:text-base leading-relaxed mb-6">
              Swayam Swarup Biswal has worked with several businesses across multiple industries as a business analyst. A McKinsey Forward graduate and a Bachelor of Science from a premier research institute in India, he brings analytical rigor and strategic thinking to every engagement.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-[#E53935] mt-0.5 flex-shrink-0" />
                <p className="font-body text-white/60 text-sm">McKinsey Forward Graduate & B.Sc. from Premier Research Institute</p>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-[#E53935] mt-0.5 flex-shrink-0" />
                <p className="font-body text-white/60 text-sm">Global experience across USA, Dubai, UK, Europe, Australia & India</p>
              </div>
              <div className="flex items-start gap-3">
                <UserCheck className="w-5 h-5 text-[#E53935] mt-0.5 flex-shrink-0" />
                <p className="font-body text-white/60 text-sm">Personally attends every meeting — directly involved in every process</p>
              </div>
            </div>

            <div className="border-l-2 border-[#E53935] pl-6">
              <p className="font-serif-body text-white/80 text-base md:text-lg italic leading-relaxed">
                "We don't just sell software. We understand the core challenges, only then we build systems to solve that problem."
              </p>
            </div>
          </div>
        </div>

        {/* Team note */}
        <div className="mt-16 md:mt-24 text-center">
          <p className="font-body text-white/50 text-sm max-w-2xl mx-auto">
            ZOVAC has a team of highly experienced professionals, each bringing deep expertise in automation, system architecture, and business strategy. Together, we deliver operational transformations that last.
          </p>
        </div>
      </div>
    </section>
  );
}
