import React from 'react';
import { Button } from './Button';
import { Instagram, Youtube } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-pink_mist-100">

      {/* Background Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-crushed_berry-300/30 to-transparent"></div>
      <div className="absolute top-1/4 right-[10%] w-[600px] h-[600px] bg-white/40 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-0 left-[10%] w-[500px] h-[500px] bg-light_cyan-100/40 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center relative z-10">

        {/* Role Tagline */}
        <div className="animate-fade-in-up opacity-0 mb-6 flex flex-col items-center gap-4" style={{ animationDelay: '0.1s' }}>
          <span className="w-px h-16 bg-crushed_berry-400/50 mb-4"></span>
          <span className="font-sans text-crushed_berry-500 text-[10px] md:text-xs tracking-[0.4em] uppercase">
            Lifestyle & Fashion Influencer
          </span>
        </div>

        {/* Main Name Impact - Editorial Style */}
        <div className="mb-8 relative">
          <h1 className="font-serif text-[12vw] md:text-[8rem] lg:text-[9.5rem] text-crushed_berry-900 leading-[0.85] tracking-tighter animate-fade-in-up opacity-0 flex flex-col md:block items-center" style={{ animationDelay: '0.3s' }}>
            <span className="block md:inline-block relative">
              Sameera
              {/* Subtle decoration */}
              <span className="absolute -top-6 -right-6 text-2xl md:text-4xl text-crushed_berry-400 font-light italic hidden md:block">est. 2024</span>
            </span>
            <span className="block md:inline-block italic font-light text-crushed_berry-600 ml-0 md:ml-8">
              Fatima
            </span>
          </h1>
        </div>

        {/* Bio Text */}
        <div className="animate-fade-in-up opacity-0 mb-12 max-w-xl mx-auto" style={{ animationDelay: '0.5s' }}>
          <p className="font-serif text-xl md:text-2xl text-crushed_berry-700 italic leading-relaxed mb-6">
            "Curating everyday moments into <br className="hidden md:block" /> timeless visual stories."
          </p>
          <div className="h-px w-24 bg-crushed_berry-300 mx-auto mb-6"></div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[10px] font-sans uppercase tracking-[0.25em] text-crushed_berry-500">
            <span>Beauty</span>
            <span>•</span>
            <span>Style</span>
            <span>•</span>
            <span>Life</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.7s' }}>
          <a href="https://starrd.in/glimpsesofmine_/media-kit" target="_blank" rel="noreferrer">
            <Button variant="primary">
              View Media Kit
            </Button>
          </a>

          <div className="flex items-center gap-6 px-6 py-3 bg-white/50 backdrop-blur-sm border border-white/40 rounded-full">
            <a
              href="https://www.youtube.com/@glimpswithsam"
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-crushed_berry-500 hover:text-crushed_berry-900 transition-colors text-xs tracking-widest uppercase"
            >
              <Youtube size={16} className="mr-2" />
              <span className="hidden sm:inline">YouTube</span>
            </a>
            <div className="w-px h-4 bg-crushed_berry-300"></div>
            <a
              href="https://www.instagram.com/glimpsesofmine_/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-crushed_berry-500 hover:text-crushed_berry-900 transition-colors text-xs tracking-widest uppercase"
            >
              <Instagram size={15} className="mr-2" />
              <span className="hidden sm:inline">Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce duration-[2s]">
        <span className="text-[10px] uppercase tracking-widest text-crushed_berry-400">Scroll</span>
      </div>
    </section>
  );
};