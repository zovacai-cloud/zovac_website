import { useState, useRef } from 'react';
import { Mail, MapPin, Send, CheckCircle, ChevronDown } from 'lucide-react';

const servicesList = [
  'Workflow Automation',
  'AI Integration',
  'Custom ERP System',
  'CRM & Sales System',
  'HR Management Tool',
  'Compliance Manager',
  'Accounting Application',
  'Data Analytics Dashboard',
  'Task Management System',
  'Website Development',
  'Process Consultation',
  'Other',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Project Inquiry from ${formData.name} - ${formData.company}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ACompany: ${formData.company}%0D%0AService Interest: ${formData.service}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:zovac.ai@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative bg-[#E53935] py-24 md:py-32 lg:py-40 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div>
            <h2 className="font-display font-medium text-white text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] leading-tight mb-6">
              Scale Faster.
            </h2>
            <p className="font-body text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-md">
              Ready to transform your operations? Let's discuss your challenges and build the system that gives you operational freedom.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="font-body text-white/60 text-xs uppercase tracking-[0.1em] block">Email</span>
                  <a href="mailto:zovac.ai@gmail.com" className="font-body text-white text-sm hover:underline">
                    zovac.ai@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="font-body text-white/60 text-xs uppercase tracking-[0.1em] block">Global Presence</span>
                  <span className="font-body text-white text-sm">USA · Dubai · UK · Europe · Australia · India</span>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white/10 border border-white/20">
              <h4 className="font-display font-medium text-white text-lg mb-3">What we don't do</h4>
              <ul className="space-y-2 font-body text-white/70 text-sm">
                <li>• We don't handle legal aspects</li>
                <li>• We don't pay for tech resources (hosting, database management)</li>
                <li>• We don't build software for resale — only for internal company use</li>
                <li>• Maintenance is included only when opted into the deal</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <CheckCircle className="w-16 h-16 text-white mb-4" />
                <h3 className="font-display font-medium text-white text-2xl mb-2">Message Ready!</h3>
                <p className="font-body text-white/70 text-sm">Your email client should open shortly. If not, you can reach us directly at zovac.ai@gmail.com</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-body text-white/70 text-xs uppercase tracking-[0.1em] block mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/30 text-white font-body text-base py-3 focus:outline-none focus:border-white transition-colors placeholder:text-white/30"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="font-body text-white/70 text-xs uppercase tracking-[0.1em] block mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/30 text-white font-body text-base py-3 focus:outline-none focus:border-white transition-colors placeholder:text-white/30"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="font-body text-white/70 text-xs uppercase tracking-[0.1em] block mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/30 text-white font-body text-base py-3 focus:outline-none focus:border-white transition-colors placeholder:text-white/30"
                    placeholder="Your company name"
                  />
                </div>

                <div className="relative" ref={dropdownRef}>
                  <label className="font-body text-white/70 text-xs uppercase tracking-[0.1em] block mb-2">Service Interest</label>
                  <button
                    type="button"
                    onClick={() => setShowServices(!showServices)}
                    className="w-full bg-transparent border-b border-white/30 text-white font-body text-base py-3 focus:outline-none focus:border-white transition-colors text-left flex items-center justify-between"
                  >
                    <span className={formData.service ? 'text-white' : 'text-white/30'}>
                      {formData.service || 'Select a service'}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-white/50 transition-transform ${showServices ? 'rotate-180' : ''}`} />
                  </button>
                  {showServices && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-black border border-white/20 max-h-60 overflow-y-auto z-50">
                      {servicesList.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, service }));
                            setShowServices(false);
                          }}
                          className="w-full text-left px-4 py-2.5 font-body text-sm text-white/70 hover:bg-[#E53935] hover:text-white transition-colors"
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <label className="font-body text-white/70 text-xs uppercase tracking-[0.1em] block mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/30 text-white font-body text-base py-3 focus:outline-none focus:border-white transition-colors resize-none placeholder:text-white/30"
                    placeholder="Tell us about your challenge..."
                  />
                </div>

                <button
                  type="submit"
                  className="group flex items-center gap-3 bg-white text-black font-body text-sm font-medium uppercase tracking-[0.1em] px-8 py-4 hover:bg-black hover:text-white border border-white transition-all duration-300"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
