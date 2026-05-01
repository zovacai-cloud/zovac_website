import { Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 md:py-16 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="nav-logo mb-4 inline-flex">
              ZOVAC<span className="logo-dot"></span>
            </a>
            <p className="font-body text-white/50 text-sm leading-relaxed mt-4 max-w-xs">
              Operational consulting firm building custom systems for workflow automation, AI integration, and strategic business analytics.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-medium text-white text-sm uppercase tracking-[0.1em] mb-4">Services</h4>
            <ul className="space-y-2">
              {['Workflow Automation', 'AI Integration', 'Custom ERP', 'CRM Systems', 'Data Analytics', 'HR & Compliance'].map((s) => (
                <li key={s}>
                  <span className="font-body text-white/50 text-sm hover:text-[#E53935] transition-colors cursor-default">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-medium text-white text-sm uppercase tracking-[0.1em] mb-4">Connect</h4>
            <div className="flex items-center gap-4 mb-4">
              <a
                href="https://linkedin.com/company/zovac"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#E53935] hover:text-[#E53935] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/zovac"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#E53935] hover:text-[#E53935] transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/zovac_official?igsh=MWpzMWV4ZzBreHV4aw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#E53935] hover:text-[#E53935] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            <p className="font-body text-white/50 text-sm">
              <a href="mailto:zovac.ai@gmail.com" className="hover:text-[#E53935] transition-colors">
                zovac.ai@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/40 text-xs">
            © {new Date().getFullYear()} ZOVAC. All rights reserved.
          </p>
          <p className="font-body text-white/40 text-xs">
            Operational Systems Reimagined.
          </p>
        </div>
      </div>
    </footer>
  );
}
