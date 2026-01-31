import React from 'react';
import { PROJECTS } from '../constants';
import { Instagram, Play } from 'lucide-react';

export const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-32 bg-beige-100">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-beige-900/40 mb-4 block">Selected Works</span>
            <h2 className="font-serif text-5xl md:text-6xl text-stone-900 leading-tight">
              Featured <span className="italic text-beige-900/60">Reels</span>
            </h2>
          </div>
          <div className="hidden md:block">
             <a href="https://www.instagram.com/glimpsesofmine_/" target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 hover:text-beige-900 transition-colors">
                View All on Instagram
                <span className="block h-px w-8 bg-stone-300 group-hover:w-12 group-hover:bg-beige-900 transition-all"></span>
             </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {PROJECTS.map((project, index) => (
            <a 
              key={project.id}
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[9/14] overflow-hidden bg-beige-200 cursor-pointer block"
            >
              {/* Image */}
              <img 
                src={project.thumbnailUrl} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
              />
              
              {/* Minimal Overlay */}
              <div className="absolute inset-0 bg-beige-900/20 group-hover:bg-beige-900/60 transition-colors duration-500 flex flex-col justify-between p-8 opacity-0 group-hover:opacity-100">
                
                {/* Top Corner Icon */}
                <div className="self-end">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white">
                        <Instagram size={18} />
                    </div>
                </div>

                {/* Center Play Button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform scale-90 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-beige-900 shadow-xl">
                        <Play size={24} fill="currentColor" className="ml-1" />
                    </div>
                </div>

                {/* Bottom Text */}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                   <p className="text-[10px] uppercase tracking-widest text-white/80 mb-2">{project.category}</p>
                   <h3 className="font-serif text-2xl text-white">{project.title}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-16 md:hidden">
            <a href="https://www.instagram.com/glimpsesofmine_/" target="_blank" rel="noreferrer" className="inline-block border-b border-beige-900 pb-1 text-xs uppercase tracking-widest hover:text-stone-600 transition-colors">
                View Instagram
            </a>
        </div>

      </div>
    </section>
  );
};