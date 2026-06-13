import { useState, useRef, useEffect } from 'react';
import { Mail, MapPin, Send, CheckCircle, ChevronDown } from 'lucide-react';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwG2D8uKsWPoQ37Z8Z-WPt4q7l6xh46yMWieGB0qdgGuMYPovrKi2Apoebzv4RQ/exec';

const servicesList = [
  'System Architecture & Designing',
  'Custom Software Development',
  'Workspace Automations',
  'Not Sure — Need Consultation',
];

interface ContactProps {
  selectedService?: string;
}

export default function Contact({ selectedService }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',  // required to avoid CORS issues
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      // no-cors means we won't get a response back, so just assume success
      setSubmitted(true);
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowServices(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section id="contact" className="relative py-24 md:py-32 lg:py-40 px-6 lg:px-10 overflow-hidden">
      {/* Animated fluid background orbs */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className="absolute -top-[30%] -left-[20%] w-[70%] h-[70%] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #E53935 0%, transparent 70%)',
            filter: 'blur(120px)',
          }}
        />
        <div
          className="absolute -bottom-[30%] -right-[20%] w-[60%] h-[60%] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #7A65F2 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        <div
          className="absolute top-[40%] left-[50%] w-[40%] h-[40%] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #E53935 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div>
            <h2 className="font-display font-medium text-white text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] leading-tight mb-6">
              Scale Faster.
            </h2>
            <p className="font-body text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-md">
              Ready to transform your operations? Let's discuss your challenges and build the system that gives you operational freedom.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(229, 57, 53, 0.2)', border: '1px solid rgba(229, 57, 53, 0.3)' }}
                >
                  <Mail className="w-5 h-5 text-[#E53935]" />
                </div>
                <div>
                  <span className="font-body text-white/40 text-xs uppercase tracking-[0.1em] block">Email</span>
                  <a href="mailto:zovac.ai@gmail.com" className="font-body text-white/80 text-sm hover:text-[#E53935] transition-colors">
                    zovac.ai@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(229, 57, 53, 0.2)', border: '1px solid rgba(229, 57, 53, 0.3)' }}
                >
                  <MapPin className="w-5 h-5 text-[#E53935]" />
                </div>
                <div>
                  <span className="font-body text-white/40 text-xs uppercase tracking-[0.1em] block">Global Presence</span>
                  <span className="font-body text-white/80 text-sm">USA · Dubai · UK · Europe · Australia · India</span>
                </div>
              </div>
            </div>

            {/* What we don't do - glassmorphism card */}
            <div
              className="mt-12 p-6 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <h4 className="font-display font-medium text-white text-lg mb-3">What we don't do</h4>
              <ul className="space-y-2 font-body text-white/50 text-sm">
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
                <CheckCircle className="w-16 h-16 text-[#E53935] mb-4 animate-bounce" />
                <h3 className="font-display font-medium text-white text-2xl mb-2">Message Sent!</h3>
                <p className="font-body text-white/60 text-sm">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label className="font-body text-white/40 text-xs uppercase tracking-[0.1em] block mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    disabled={isLoading}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/15 text-white font-body text-base py-3 px-3 focus:outline-none focus:border-[#E53935] focus:bg-white/[0.02] focus:shadow-[0_8px_32px_-4px_rgba(229,57,53,0.12)] transition-all duration-300 placeholder:text-white/20 rounded-t-lg hover:bg-white/[0.01]"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="font-body text-white/40 text-xs uppercase tracking-[0.1em] block mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    disabled={isLoading}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/15 text-white font-body text-base py-3 px-3 focus:outline-none focus:border-[#E53935] focus:bg-white/[0.02] focus:shadow-[0_8px_32px_-4px_rgba(229,57,53,0.12)] transition-all duration-300 placeholder:text-white/20 rounded-t-lg hover:bg-white/[0.01]"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="font-body text-white/40 text-xs uppercase tracking-[0.1em] block mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    disabled={isLoading}
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/15 text-white font-body text-base py-3 px-3 focus:outline-none focus:border-[#E53935] focus:bg-white/[0.02] focus:shadow-[0_8px_32px_-4px_rgba(229,57,53,0.12)] transition-all duration-300 placeholder:text-white/20 rounded-t-lg hover:bg-white/[0.01]"
                    placeholder="Your company name"
                  />
                </div>

                <div className="relative" ref={dropdownRef}>
                  <label className="font-body text-white/40 text-xs uppercase tracking-[0.1em] block mb-2">Service Interest</label>
                  <input type="hidden" name="service" value={formData.service} />
                  <button
                    type="button"
                    disabled={isLoading}
                    onClick={() => setShowServices(!showServices)}
                    className="w-full bg-transparent border-b border-white/15 text-white font-body text-base py-3 px-3 focus:outline-none focus:border-[#E53935] focus:bg-white/[0.02] focus:shadow-[0_8px_32px_-4px_rgba(229,57,53,0.12)] transition-all duration-300 text-left flex items-center justify-between rounded-t-lg hover:bg-white/[0.01]"
                  >
                    <span className={formData.service ? 'text-white' : 'text-white/20'}>
                      {formData.service || 'Select a service'}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-white/30 transition-transform ${showServices ? 'rotate-180' : ''}`} />
                  </button>
                  {showServices && (
                    <div
                      className="absolute top-full left-0 right-0 mt-1 max-h-60 overflow-y-auto z-50 rounded-lg"
                      style={{
                        background: 'rgba(10,10,10,0.95)',
                        backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                    >
                      {servicesList.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, service }));
                            setShowServices(false);
                          }}
                          className="w-full text-left px-4 py-2.5 font-body text-sm text-white/60 hover:text-white hover:bg-[#E53935]/20 transition-colors"
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <label className="font-body text-white/40 text-xs uppercase tracking-[0.1em] block mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    disabled={isLoading}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/15 text-white font-body text-base py-3 px-3 focus:outline-none focus:border-[#E53935] focus:bg-white/[0.02] focus:shadow-[0_8px_32px_-4px_rgba(229,57,53,0.12)] transition-all duration-300 resize-none placeholder:text-white/20 rounded-t-lg hover:bg-white/[0.01]"
                    placeholder="Tell us about your challenge..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="group flex items-center gap-3 font-body text-sm font-medium uppercase tracking-[0.1em] px-8 py-4 transition-all duration-300 disabled:opacity-60"
                  style={{
                    background: 'rgba(229, 57, 53, 0.9)',
                    color: '#fff',
                    border: '1px solid rgba(229, 57, 53, 0.5)',
                    boxShadow: '0 4px 24px rgba(229, 57, 53, 0.2)',
                  }}
                >
                  <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
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
