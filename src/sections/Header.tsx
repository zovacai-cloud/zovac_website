import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/70 backdrop-blur-[20px] border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-6 lg:px-10 py-5">
        <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          ZOVAC<span className="logo-dot"></span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'SERVICES', id: 'services' },
            { label: 'PROCESS', id: 'process' },
            { label: 'CASE STUDIES', id: 'case-studies' },
            { label: 'CONTACT', id: 'contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-body text-xs font-medium uppercase tracking-[0.05em] text-white/80 hover:text-white transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() =>

            window.location.href =

             'https://script.google.com/macros/s/AKfycbxHdKFe2Sj5sJDTwG6_fiCehy3CXmCNR_Dw4Xbmcr29qZMofUYsK-Wf-Bbi73LDVWHOrA/exec'

        }
          className="bg-[#E53935] text-white font-body text-xs font-medium uppercase tracking-[0.05em] px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-300"
        >
          START A PROJECT
        </button>
      </div>
    </header>
  );
}
