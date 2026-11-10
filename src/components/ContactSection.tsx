// src/components/ContactSection.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GmailIcon = () => (
  <svg viewBox="0 0 48 48" className="w-7 h-7" aria-hidden="true">
    <path fill="#4caf50" d="M45 16.2l-5 2.75-5 4.75V40h7a3 3 0 0 0 3-3V16.2z" />
    <path fill="#1e88e5" d="M3 16.2l3.614 1.71L13 23.7V40H6a3 3 0 0 1-3-3V16.2z" />
    <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17" />
    <path fill="#c62828" d="M3 12.298V16.2l10 7.5V11.2L9.876 8.859A4.298 4.298 0 0 0 3 12.298z" />
    <path fill="#fbc02d" d="M45 12.298V16.2l-10 7.5V11.2l3.124-2.341A4.298 4.298 0 0 1 45 12.298z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 48 48" className="w-7 h-7" aria-hidden="true">
    <rect width="40" height="40" x="4" y="4" rx="6" fill="#0a66c2" />
    <path fill="#fff" d="M13.5 19h4.7v15h-4.7V19zm2.35-7.5a2.7 2.7 0 1 1 0 5.4 2.7 2.7 0 0 1 0-5.4zM21.2 19h4.5v2.05h.07c.63-1.19 2.16-2.44 4.45-2.44 4.76 0 5.63 3.13 5.63 7.2V34h-4.7v-7.4c0-1.77-.03-4.04-2.46-4.04-2.47 0-2.85 1.93-2.85 3.91V34h-4.7V19z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 48 48" className="w-7 h-7" aria-hidden="true">
    <path fill="#25d366" d="M24 4C12.95 4 4 12.95 4 24c0 3.6.96 7.1 2.78 10.16L4 44l10.1-2.65A19.9 19.9 0 0 0 24 44c11.05 0 20-8.95 20-20S35.05 4 24 4z" />
    <path fill="#fff" d="M34.6 29.3c-.5-.25-2.97-1.47-3.43-1.63-.46-.17-.8-.25-1.13.25-.33.5-1.3 1.63-1.6 1.97-.3.33-.6.37-1.1.12-.5-.25-2.13-.78-4.05-2.5-1.5-1.33-2.5-2.98-2.8-3.48-.3-.5-.03-.77.22-1.02.23-.22.5-.58.75-.87.25-.3.33-.5.5-.83.17-.33.08-.62-.04-.87-.13-.25-1.13-2.7-1.55-3.7-.4-.97-.82-.84-1.13-.85h-.96c-.33 0-.87.12-1.33.62-.46.5-1.75 1.7-1.75 4.15s1.8 4.82 2.05 5.15c.25.33 3.5 5.35 8.5 7.5 1.2.52 2.12.82 2.85 1.05 1.2.38 2.28.33 3.15.2.96-.14 2.97-1.2 3.38-2.38.42-1.17.42-2.17.3-2.38-.12-.2-.46-.33-.96-.58z" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`);
    window.open(
      `https://mail.google.com/mail/?view=cm&to=uzairkhan761328@gmail.com&su=${subject}&body=${body}`,
      '_blank',
      'noopener,noreferrer'
    );
    setSent(true);
  };

  const links = [
    {
      Icon: GmailIcon,
      label: '// EMAIL',
      value: 'uzairkhan761328@gmail.com',
      href: "https://mail.google.com/mail/?view=cm&to=uzairkhan761328@gmail.com",
    },
    {
      Icon: LinkedInIcon,
      label: '// LINKEDIN',
      value: 'Muhammad Uzair',
      href: "https://www.linkedin.com/in/muhammad-uzair-bab3ba41b/",
    },
    {
      Icon: WhatsAppIcon,
      label: '// WHATSAPP',
      value: '+92 332 561 2232',
      href: 'https://wa.me/923325612232',
    },
  ];

  return (
    <footer
      id="contact"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-16 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Eyebrow Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center space-x-4 mb-5"
              >
                <span
                  className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  04 / CONTACT
                </span>
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                    LET'S BUILD
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                    TOGETHER.
                  </span>
                </h2>
              </motion.div>

              <p
                className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-relaxed max-w-md"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Have a project in mind? Want to automate a workflow, launch an AI product, or explore what AI can do for your business? First call is free with no obligation.
              </p>
<div className="mt-8 max-w-md">
            <div className="space-y-4">
    {links.map((l) => (
      <a
        key={l.label}
        href={l.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between p-5 border border-[#8C6D4F]/30 bg-[#120F0C] hover:border-[#D4AF37] transition-colors duration-300"
      >
        <div className="flex items-center gap-4">
          <span className="shrink-0 flex items-center justify-center w-12 h-12 rounded-sm bg-white/95 border border-[#8C6D4F]/30 group-hover:border-[#D4AF37] transition-colors">
            <l.Icon />
          </span>
        <div>
          <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1.5">
            {l.label}
          </span>
          <span
            className="text-sm text-[#E8DFD8] group-hover:text-[#F7E7C4] transition-colors"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {l.value}
          </span>
        </div>
        </div>
        <span className="text-[#D4AF37] text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          ↗
        </span>
      </a>
    ))}
  </div>
</div>
            </div>
          </div>

          {/* Right Column: Monolith Terminal Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-sm border border-[#8C6D4F]/40 bg-[#0A0806] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* Top Gold Horizon Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
            
            {/* Precision Corner Crosshairs */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/60" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D4AF37]/60" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#D4AF37]/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/60" />

            {sent ? (
              <div className="py-16 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#D4AF37] text-[#D4AF37] text-sm">
                  ✓
                </div>
                <h3 className="text-3xl text-white font-normal uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  MESSAGE READY
                </h3>
                <p className="text-xs text-[#A8988B] font-light" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Your email draft has opened. Press send there to deliver it.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">// SENDER</span>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter name"
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">// CHANNEL</span>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter email"
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>
                </div>
                <div>
                  <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">// PAYLOAD</span>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter transmission payload..."
                    className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 p-4 outline-none rounded-sm transition-colors resize-none"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 border border-[#8C6D4F]/50 bg-[#14100D] hover:border-[#D4AF37] hover:bg-[#1A1510] text-[#E8DFD8] hover:text-[#F7E7C4] text-xs font-medium tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  EXECUTE DISPATCH ↗
                </button>
              </form>
            )}
          </motion.div>

        </div>

        {/* System Footer Line */}
        <div className="pt-16 mt-16 border-t border-[#8C6D4F]/15 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <span className="text-[10px] font-mono tracking-widest text-[#8C6D4F] uppercase">
            AI ENGINEER · ISLAMABAD, PAKISTAN
          </span>
          <span className="text-[10px] font-mono text-[#8C6D4F]">
            © {new Date().getFullYear()} MUHAMMAD UZAIR. ALL RIGHTS RESERVED.
          </span>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;