import React from 'react';
import { BRANDS } from '../constants';

export const Brands: React.FC = () => {
  const domestic = BRANDS.filter(b => b.type === 'Domestic');
  const international = BRANDS.filter(b => b.type === 'International');

  return (
    <section id="brands" className="py-32 bg-rose_white-50 relative overflow-hidden">
      {/* Subtle background texture or shape - darkened slightly for visibility on light pink */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose_white-100/50 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
        
        <div className="mb-20">
            <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-rose_white-900/40 mb-4 block">The Portfolio</span>
            <h2 className="font-serif text-5xl md:text-7xl text-deep_rose-900 leading-none">
              Trusted <span className="italic text-rose_white-900/50">By</span>
            </h2>
        </div>

        {/* Global Partners - The Hero Brands */}
        <div className="mb-24">
             <div className="flex items-center justify-center gap-4 mb-12">
                 <div className="h-px w-12 bg-rose_white-200"></div>
                 <span className="text-[10px] uppercase tracking-[0.3em] text-deep_rose-400">Global Partners</span>
                 <div className="h-px w-12 bg-rose_white-200"></div>
             </div>

             <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
                {international.map((brand) => (
                    <div key={brand.name} className="group cursor-default">
                        <h3 className="font-serif text-5xl md:text-6xl text-deep_rose-800 relative inline-block transition-transform duration-500 hover:scale-105">
                            {brand.name}
                            {/* Underline color changed to pinkish */}
                            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-rose_white-900 transition-all duration-500 group-hover:w-full"></span>
                        </h3>
                    </div>
                ))}
             </div>
        </div>

        {/* Domestic Partners - The Grid */}
        <div className="max-w-5xl mx-auto">
             <div className="flex items-center justify-center gap-4 mb-12">
                 <div className="h-px w-12 bg-rose_white-200"></div>
                 <span className="text-[10px] uppercase tracking-[0.3em] text-deep_rose-400">Domestic Favorites</span>
                 <div className="h-px w-12 bg-rose_white-200"></div>
             </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                {domestic.map((brand) => (
                    <div key={brand.name} className="group flex items-center justify-center">
                        <span className="relative font-sans text-xs md:text-sm uppercase tracking-[0.15em] text-deep_rose-500 group-hover:text-rose_white-900 transition-colors duration-300 cursor-default">
                            {brand.name}
                            {/* Dot indicator on hover */}
                            <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-rose_white-900 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        </span>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};