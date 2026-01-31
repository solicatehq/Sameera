import React from 'react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-beige-50 overflow-hidden border-t border-beige-100">
      <div className="text-center mb-16 px-6">
        <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-beige-900/40 mb-4 block">Feedback</span>
        <h2 className="font-serif text-3xl md:text-4xl text-stone-800">Client Love</h2>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradients to fade edges - matched to beige-50 */}
        <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-beige-50 to-transparent"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-beige-50 to-transparent"></div>

        {/* Scrolling Container */}
        <div className="flex w-[200%] animate-scroll hover:[animation-play-state:paused]">
            
            {/* Set 1 */}
            <div className="flex justify-around w-1/2 min-w-[50%] px-4">
            {TESTIMONIALS.map((t) => (
                <div key={t.id} className="w-[350px] md:w-[450px] bg-white p-10 mx-6 flex-shrink-0 border border-beige-100 flex flex-col justify-center items-center text-center">
                    <p className="font-serif text-xl md:text-2xl text-stone-700 italic leading-relaxed mb-6 opacity-80">
                        "{t.text}"
                    </p>
                    <div className="flex flex-col items-center">
                        <span className="text-xs font-bold text-beige-900 uppercase tracking-widest mb-1">{t.author}</span>
                        <span className="text-[10px] text-stone-400 uppercase tracking-widest border-t border-beige-100 pt-1 mt-1">{t.platform}</span>
                    </div>
                </div>
            ))}
            </div>

             {/* Set 2 (Duplicate) */}
             <div className="flex justify-around w-1/2 min-w-[50%] px-4">
            {TESTIMONIALS.map((t) => (
                <div key={`${t.id}-duplicate`} className="w-[350px] md:w-[450px] bg-white p-10 mx-6 flex-shrink-0 border border-beige-100 flex flex-col justify-center items-center text-center">
                    <p className="font-serif text-xl md:text-2xl text-stone-700 italic leading-relaxed mb-6 opacity-80">
                        "{t.text}"
                    </p>
                    <div className="flex flex-col items-center">
                         <span className="text-xs font-bold text-beige-900 uppercase tracking-widest mb-1">{t.author}</span>
                         <span className="text-[10px] text-stone-400 uppercase tracking-widest border-t border-beige-100 pt-1 mt-1">{t.platform}</span>
                    </div>
                </div>
            ))}
            </div>

        </div>
      </div>
    </section>
  );
};