import React from 'react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-rose_white-50 border-t border-rose_white-100 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left Column: Sticky Header */}
          <div className="md:col-span-4 lg:col-span-5 relative">
            <div className="sticky top-32">
              <span className="text-[10px] font-sans uppercase tracking-[0.4em] text-rose_white-900/40 mb-6 block">
                Feedback
              </span>
              <h2 className="font-serif text-5xl md:text-6xl text-deep_rose-900 leading-[0.9] mb-8">
                Client <br /> <span className="italic text-rose_white-900/50">Love.</span>
              </h2>
              <p className="text-deep_rose-600/80 font-light max-w-sm leading-relaxed text-sm md:text-base">
                Collaborating with brands to create authentic, engaging stories that resonate with audiences.
              </p>
            </div>
          </div>

          {/* Right Column: Testimonial List Vertical Scroll */}
          <div className="md:col-span-8 lg:col-span-7 relative h-[600px] overflow-hidden mask-vertical-fade">
            {/* Gradients to fade top/bottom */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-rose_white-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rose_white-50 to-transparent z-10 pointer-events-none"></div>

            <div className="flex flex-col gap-8 animate-scroll-vertical hover:[animation-play-state:paused]">
              {/* Duplicating the list multiple times to ensure seamless loop */}
              {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                <div key={`${t.id}-${i}`} className="bg-white p-10 md:p-12 border border-rose_white-100 hover:border-rose_white-200 transition-all hover:shadow-sm group mx-4">
                  <div className="mb-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-rose_white-900">
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                    </svg>
                  </div>
                  <p className="font-serif text-2xl md:text-3xl text-deep_rose-800 leading-relaxed mb-8 opacity-90">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-4 border-t border-rose_white-100 pt-6">
                    <div className="h-10 w-10 rounded-full bg-rose_white-100 flex items-center justify-center text-rose_white-900 font-serif italic text-lg">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-rose_white-900 uppercase tracking-widest mb-0.5">{t.author}</span>
                      <span className="block text-[10px] text-zinc-400 uppercase tracking-widest">{t.platform}</span>
                    </div>
                  </div>
                </div>
              ))}
              {/* Second Set for Loop */}
              {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                <div key={`${t.id}-duplicate-${i}`} className="bg-white p-10 md:p-12 border border-rose_white-100 hover:border-rose_white-200 transition-all hover:shadow-sm group mx-4">
                  <div className="mb-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-rose_white-900">
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                    </svg>
                  </div>
                  <p className="font-serif text-2xl md:text-3xl text-deep_rose-800 leading-relaxed mb-8 opacity-90">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-4 border-t border-rose_white-100 pt-6">
                    <div className="h-10 w-10 rounded-full bg-rose_white-100 flex items-center justify-center text-rose_white-900 font-serif italic text-lg">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-rose_white-900 uppercase tracking-widest mb-0.5">{t.author}</span>
                      <span className="block text-[10px] text-zinc-400 uppercase tracking-widest">{t.platform}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};