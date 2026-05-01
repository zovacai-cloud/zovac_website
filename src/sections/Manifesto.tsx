import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    if (!section || !sticky) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          pin: sticky,
        },
      });

      tl.from('.phase-1', { x: '-100vw', opacity: 0, duration: 1, ease: 'power2.out' });
      tl.to('.phase-1', { x: '-20vw', opacity: 0.2, scale: 0.8, duration: 1, ease: 'power2.in' }, '-=0.2');
      tl.from('.phase-2', { x: '100vw', opacity: 0, duration: 1, ease: 'power2.out' }, '-=0.8');
      tl.to('.phase-2', { x: '20vw', opacity: 0.2, scale: 0.8, duration: 1, ease: 'power2.in' }, '-=0.2');
      tl.from('.phase-3', { x: '-100vw', opacity: 0, duration: 1, ease: 'power2.out' }, '-=0.8');
      tl.to('.phase-3', { y: '-50vh', opacity: 0, duration: 1, ease: 'power2.in' });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="manifesto-section relative" style={{ height: '300vh' }}>
      <div
        ref={stickyRef}
        className="sticky-container flex items-center justify-center overflow-hidden"
        style={{ position: 'sticky', top: 0, height: '100vh' }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/images/server-room.jpg"
            alt="Server infrastructure"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <h2 className="phase-1 absolute text-white font-display font-bold text-[clamp(3rem,8vw,10rem)] whitespace-nowrap will-change-transform z-10">
          THE PROBLEM
        </h2>
        <h2 className="phase-2 absolute text-white font-display font-bold text-[clamp(3rem,8vw,10rem)] whitespace-nowrap will-change-transform z-10">
          THE PROCESS
        </h2>
        <h2 className="phase-3 absolute text-[#E53935] font-display font-bold text-[clamp(3rem,8vw,10rem)] whitespace-nowrap will-change-transform z-10">
          THE SOLUTION
        </h2>
      </div>
    </div>
  );
}
