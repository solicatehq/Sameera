import React from 'react';

import { Instagram, Youtube } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/luxeai4.jpeg"
          alt="Sameera Fatima"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for elegance and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-rose_white-50/80 via-rose_white-50/70 to-rose_white-50/90 backdrop-blur-[1px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center relative z-10">

        {/* Role Tagline */}
        <div className="animate-fade-in-up opacity-0 mb-6 flex flex-col items-center gap-4" style={{ animationDelay: '0.1s' }}>
          <span className="w-px h-16 bg-deep_rose-400/50 mb-4"></span>
          <span className="font-sans text-deep_rose-500 text-[10px] md:text-xs tracking-[0.4em] uppercase">
            Lifestyle & Fashion Influencer
          </span>
        </div>

        {/* Main Name Impact - Editorial Style */}
        <div className="mb-8 relative">
          <h1 className="font-serif text-[12vw] md:text-[8rem] lg:text-[9.5rem] text-deep_rose-900 leading-[0.85] tracking-tighter animate-fade-in-up opacity-0 flex flex-col md:block items-center" style={{ animationDelay: '0.3s' }}>
            <span className="block md:inline-block relative">
              Sameera
            </span>
            <span className="block md:inline-block italic font-light text-deep_rose-600 ml-0 md:ml-8">
              Fatima
            </span>
          </h1>
        </div>

        {/* Bio Text */}
        <div className="animate-fade-in-up opacity-0 mb-12 max-w-xl mx-auto" style={{ animationDelay: '0.5s' }}>
          <p className="font-serif text-xl md:text-2xl text-deep_rose-700 italic leading-relaxed mb-6">
            "Curating everyday moments into <br className="hidden md:block" /> timeless visual stories."
          </p>
          <div className="h-px w-24 bg-deep_rose-300 mx-auto mb-6"></div>
          <div className="text-[9px] font-sans uppercase tracking-[0.3em] text-antique_gold-400 mb-4">Est. 2024</div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[10px] font-sans uppercase tracking-[0.25em] text-deep_rose-500">
            <span>Beauty</span>
            <span>•</span>
            <span>Style</span>
            <span>•</span>
            <span>Life</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.7s' }}>


          <div className="flex items-center gap-6 px-6 py-3 bg-white/50 backdrop-blur-sm border border-white/40 rounded-full">
            <a
              href="https://www.youtube.com/@glimpswithsam"
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-deep_rose-500 hover:text-deep_rose-900 transition-colors text-xs tracking-widest uppercase"
            >
              <Youtube size={16} className="mr-2" />
              <span className="hidden sm:inline">YouTube</span>
            </a>
            <div className="w-px h-4 bg-deep_rose-300"></div>
            <a
              href="https://www.instagram.com/glimpsesofmine_/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-deep_rose-500 hover:text-deep_rose-900 transition-colors text-xs tracking-widest uppercase"
            >
              <Instagram size={15} className="mr-2" />
              <span className="hidden sm:inline">Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce duration-[2s]">
        <span className="text-[10px] uppercase tracking-widest text-deep_rose-400">Scroll</span>
      </div>
    </section>
  );
};