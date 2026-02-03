import React from 'react';
import { RATES } from '../constants';

export const Rates: React.FC = () => {
  return (
    <section id="rates" className="py-32 bg-rose_white-100">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-deep_rose-800 mb-6">Investment</h2>
          <p className="text-deep_rose-500 max-w-md font-light leading-relaxed">
            Transparent pricing for clear expectations. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {RATES.map((rate, index) => (
            <div
              key={index}
              className={`
                relative p-10 transition-all duration-500 group h-full flex flex-col
                ${rate.isHighlight
                  ? 'bg-white border border-rose_white-200 md:-mt-8 shadow-xl z-10'
                  : 'bg-rose_white-50 border border-rose_white-100 hover:bg-white hover:border-rose_white-200'}
              `}
            >
              {rate.isHighlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-black text-white text-[9px] uppercase tracking-[0.2em] py-2 px-4 shadow-lg rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8 border-b border-rose_white-100 pb-8 text-left">
                <h3 className="font-serif text-2xl text-deep_rose-800 italic mb-4">{rate.title}</h3>
                <div className="font-sans text-4xl font-light text-deep_rose-900">{rate.price}</div>
              </div>

              <ul className="space-y-5 mb-10 flex-grow">
                {rate.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-deep_rose-600 font-light text-left">
                    <span className="text-antique_gold-400 mr-3 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {rate.note && (
                <div className="text-center mt-auto pt-6 border-t border-rose_white-100/50">
                  <p className="text-[10px] uppercase tracking-widest text-deep_rose-400 font-sans italic">
                    {rate.note}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-deep_rose-500 text-sm font-light">
            For bundle packages and custom requirements, please <a href="#contact" className="underline underline-offset-4 decoration-antique_gold-400 hover:text-deep_rose-800 transition-colors">contact directly</a>.
          </p>
        </div>

      </div>
    </section>
  );
};