import { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        src="/videos/hero-bg.mp4"
        muted
        loop
        playsInline
        autoPlay
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        {/* Signal Red Pill */}
        <div
          ref={pillRef}
          className="group relative bg-[#E53935] px-8 md:px-16 lg:px-24 py-6 md:py-10 rounded-full cursor-default transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(229,57,53,0.4)]"
        >
          <h1 className="font-display font-medium text-white text-[8vw] md:text-[7vw] lg:text-[6vw] leading-[1.05] tracking-[-0.05em] text-center whitespace-nowrap">
            Operational Systems
          </h1>
        </div>

        {/* Below the pill */}
        <h2 className="font-display font-medium text-white text-[10vw] md:text-[8vw] lg:text-[6vw] leading-[1.05] tracking-[-0.04em] mt-4 md:mt-6 text-center">
          Reimagined.
        </h2>

        <p className="font-body text-white/60 text-sm md:text-base lg:text-lg max-w-xl text-center mt-6 md:mt-8 leading-relaxed">
          We don't just sell software. We understand your core challenges, then build
          systems that give you operational freedom.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-body text-[10px] uppercase tracking-[0.15em] text-white/40">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#E53935] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
