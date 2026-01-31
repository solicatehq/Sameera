import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-beige-50 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Image Column - Sticky on Desktop */}
          <div className="md:col-span-5 lg:col-span-5 relative order-2 md:order-1">
             <div className="sticky top-24">
                <div className="relative aspect-[3/4] overflow-hidden bg-beige-200 group">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" 
                      alt="Ayesha Malkani" 
                      className="object-cover w-full h-full transition-transform duration-[1.5s] ease-out group-hover:scale-105 grayscale hover:grayscale-0"
                    />
                    {/* Decorative Frame */}
                    <div className="absolute inset-0 border border-beige-900/10 m-4 pointer-events-none"></div>
                </div>
                
                {/* Caption / Stats under image */}
                <div className="mt-6 flex justify-between text-[10px] font-sans uppercase tracking-[0.2em] text-beige-900/60 border-t border-beige-200 pt-4">
                    <span>Mumbai, IN</span>
                    <span>Est. 2024</span>
                </div>
             </div>
          </div>

          {/* Text Column */}
          <div className="md:col-span-7 lg:col-span-6 lg:col-start-7 order-1 md:order-2 flex flex-col justify-center h-full pt-8 md:pt-20">
            
            <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-beige-900/40 mb-6 block">
              The Persona
            </span>
            
            <h2 className="font-serif text-5xl md:text-7xl text-stone-900 leading-[0.9] mb-12">
              Beyond the <br/>
              <span className="italic text-beige-900/50 ml-12">Feed.</span>
            </h2>

            <div className="space-y-8 text-stone-600 font-sans text-sm md:text-base font-light leading-loose">
              <p>
                <span className="text-4xl float-left mr-3 mt-[-6px] font-serif text-beige-900">I</span>
                believe that influence is not just about numbers; it's about the connection. As Ayesha Malkani, I've curated a digital space that celebrates the art of everyday living. My journey began with a simple love for visual storytelling and has evolved into a dedicated pursuit of beauty in all its forms.
              </p>
              
              <p>
                From high-fashion editorials to intimate skincare routines, I approach every piece of content with a director's eye and a friend's voice. My goal is to bridge the gap between aspirational luxury and accessible reality.
              </p>

              {/* Update quote box to darker pink for contrast */}
              <div className="bg-beige-100 p-8 border-l-2 border-beige-900 my-8">
                <p className="font-serif text-xl md:text-2xl text-stone-800 italic leading-relaxed">
                  "I don't just wear clothes or use products; I create narratives around them that resonate with the modern woman."
                </p>
                <span className="block mt-4 text-[10px] uppercase tracking-widest text-beige-900/60">— Ayesha M.</span>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-beige-200">
                 <div>
                    <h4 className="font-serif text-lg text-stone-900 mb-2">Focus</h4>
                    <p className="text-xs uppercase tracking-wider text-stone-500">Beauty • Lifestyle • Travel</p>
                 </div>
                 <div>
                    <h4 className="font-serif text-lg text-stone-900 mb-2">Style</h4>
                    <p className="text-xs uppercase tracking-wider text-stone-500">Minimal • Chic • Timeless</p>
                 </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};