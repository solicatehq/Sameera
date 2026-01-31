import React, { useState } from 'react';
import { Button } from './Button';
import { Instagram, ArrowRight, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    brand: '',
    message: ''
  });
  const [showTooltip, setShowTooltip] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`Collab Inquiry: ${formState.brand || 'New Brand'}`);
    const body = encodeURIComponent(`Hi Sameera,\n\nMy name is ${formState.name}.\n\n${formState.message}\n\nBest,\n${formState.name}`);
    return `mailto:Sameerafatima039@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer id="contact" className="bg-[#1a0508] text-pink_mist-100 relative overflow-hidden">
      {/* Decorative Texture */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>

      {/* Gradient Blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-900/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-12 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-32 items-start">

          {/* Left Column: Context & Links */}
          <div>
            <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-white/40 mb-8 block">Contact</span>
            <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl text-white leading-[0.9] mb-12">
              Let's Create <br /> <span className="text-white/30 italic">Impact.</span>
            </h2>
            <p className="text-white/60 font-sans font-light text-lg mb-16 max-w-sm leading-relaxed">
              Available for select brand partnerships and creative direction projects for the upcoming season.
            </p>

            <div className="flex flex-col gap-6">
              <a
                href="mailto:Sameerafatima039@gmail.com"
                className="group flex items-center justify-between py-6 border-b border-white/10 hover:border-white/40 transition-all cursor-pointer"
              >
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-2">Email</span>
                  <span className="font-serif text-3xl md:text-4xl text-white/80 group-hover:text-white transition-colors italic">Sameerafatima039@gmail.com</span>
                </div>
                <ArrowUpRight className="text-white/30 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 w-8 h-8" strokeWidth={1} />
              </a>

              <a
                href="https://www.instagram.com/glimpsesofmine_/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-6 border-b border-white/10 hover:border-white/40 transition-all cursor-pointer"
              >
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-2">Instagram</span>
                  <span className="font-serif text-3xl md:text-4xl text-white/80 group-hover:text-white transition-colors italic">@glimpsesofmine_</span>
                </div>
                <ArrowUpRight className="text-white/30 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 w-8 h-8" strokeWidth={1} />
              </a>
            </div>
          </div>

          {/* Right Column: Email Generator Form */}
          <div className="bg-white/[0.02] backdrop-blur-md border border-white/5 p-8 md:p-12 lg:p-16">
            <div className="mb-10">
              <h3 className="font-serif text-3xl text-white mb-2">Quick Inquiry</h3>
              <p className="text-white/40 text-xs uppercase tracking-widest">Generate an email draft instantly</p>
            </div>

            <div className="space-y-12">
              <div className="group relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="block w-full bg-transparent border-b border-white/20 py-3 text-xl text-white placeholder-transparent focus:outline-none focus:border-light_cyan-400 transition-colors peer font-serif"
                  placeholder="Name"
                />
                <label htmlFor="name" className="absolute left-0 top-3 text-white/40 text-xs uppercase tracking-widest transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-light_cyan-400 peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:text-white cursor-text pointer-events-none">
                  Your Name
                </label>
              </div>

              <div className="group relative">
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  value={formState.brand}
                  onChange={handleChange}
                  className="block w-full bg-transparent border-b border-white/20 py-3 text-xl text-white placeholder-transparent focus:outline-none focus:border-light_cyan-400 transition-colors peer font-serif"
                  placeholder="Brand"
                />
                <label htmlFor="brand" className="absolute left-0 top-3 text-white/40 text-xs uppercase tracking-widest transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-light_cyan-400 peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:text-white cursor-text pointer-events-none">
                  Brand / Company
                </label>
              </div>

              <div className="group relative">
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={1}
                  className="block w-full bg-transparent border-b border-white/20 py-3 text-xl text-white placeholder-transparent focus:outline-none focus:border-light_cyan-400 transition-colors peer font-serif resize-none"
                  placeholder="Message"
                ></textarea>
                <label htmlFor="message" className="absolute left-0 top-3 text-white/40 text-xs uppercase tracking-widest transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-light_cyan-400 peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:text-white cursor-text pointer-events-none">
                  Short Message
                </label>
              </div>

              <div className="pt-4">
                <a href={getMailtoLink()} className="block w-full group">
                  <button type="button" className="w-full bg-white text-black hover:bg-light_cyan-200 transition-colors py-4 px-6 flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.2em] uppercase">Open Email Client</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center w-full gap-4 opacity-60 hover:opacity-100 transition-opacity">
          <p className="text-[10px] text-white/50 uppercase tracking-widest">
            © {new Date().getFullYear()} Sameera Fatima.
          </p>

          <div className="flex items-center gap-1 font-sans text-[10px] tracking-widest text-white/50 uppercase relative">
            <span>Site by</span>
            <a href="https://solicate.in" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:underline decoration-white/50 underline-offset-4 transition-all">solicate</a>

            <div
              className="relative ml-2 cursor-pointer group"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onClick={() => setShowTooltip(!showTooltip)}
            >
              <span className="flex items-center justify-center w-3 h-3 border border-white/30 rounded-full hover:bg-white/10 transition-colors text-white text-[8px]">?</span>

              <div className={`absolute bottom-full right-0 mb-3 w-64 p-4 bg-[#1a1917] shadow-2xl rounded-sm text-left border border-white/10 transition-all duration-300 origin-bottom z-50 ${showTooltip ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                <p className="normal-case text-white/80 text-[11px] leading-relaxed tracking-normal font-sans">
                  Crafted by <span className="font-bold text-white">Solicate</span>. We build digital experiences for creators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};