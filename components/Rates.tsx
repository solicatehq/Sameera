import React from 'react';
import { RATES } from '../constants';

export const Rates: React.FC = () => {
  return (
    <section id="rates" className="py-32 bg-beige-100">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-beige-900/40 mb-4 block">Services</span>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-800 mb-6">Investment & Packages</h2>
          <p className="text-stone-500 max-w-md font-light leading-relaxed">
            Transparent pricing tailored for high-impact content. <br/> Custom bundles available upon request.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {RATES.map((rate, index) => (
            <div 
              key={index} 
              className={`
                relative p-10 transition-all duration-500 group hover:shadow-2xl hover:shadow-beige-900/10
                ${rate.isHighlight 
                  ? 'bg-white border border-beige-200 md:-mt-8 shadow-xl z-10' 
                  : 'bg-beige-50 border border-beige-100 hover:bg-white hover:border-beige-200'}
              `}
            >
              {rate.isHighlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-beige-900 text-white text-[9px] uppercase tracking-[0.2em] py-2 px-4 shadow-lg">
                    Recommended
                  </span>
                </div>
              )}

              <div className="text-center mb-8 border-b border-beige-100 pb-8">
                  <h3 className="font-serif text-2xl text-stone-800 italic mb-4">{rate.title}</h3>
                  <div className="font-sans text-xs tracking-[0.2em] uppercase text-beige-900/60">{rate.price}</div>
              </div>

              <ul className="space-y-5 mb-10">
                {rate.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center text-sm text-stone-600 font-light">
                    <span className="w-1 h-1 bg-beige-300 rounded-full mr-3"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                 <button className={`w-full py-3 text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${rate.isHighlight ? 'bg-beige-900 text-white hover:bg-stone-900' : 'bg-beige-200 text-beige-900 hover:bg-beige-300'}`}>
                    Inquire Now
                 </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <p className="text-stone-500 text-xs tracking-wide">
                * Rates are subject to change based on specific requirements and usage rights.
            </p>
        </div>

      </div>
    </section>
  );
};