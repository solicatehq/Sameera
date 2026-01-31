import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled || isOpen 
          ? 'bg-pink_mist-50/80 backdrop-blur-xl border-b border-crushed_berry-900/5 py-4' 
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group relative z-50">
          <span className="font-serif text-2xl md:text-3xl tracking-wide text-crushed_berry-900 font-medium relative z-10">
            Sameera Fatima
          </span>
          <span className="text-crushed_berry-400 font-serif text-3xl">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-crushed_berry-500 hover:text-crushed_berry-900 text-[10px] uppercase tracking-[0.25em] transition-colors relative group font-sans font-medium"
            >
              {link.name}
              <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-crushed_berry-900 transition-all duration-500 ease-out group-hover:w-full group-hover:left-0"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-crushed_berry-800 focus:outline-none z-50 relative p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-pink_mist-50 z-40 flex flex-col justify-center items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
          <div className="flex flex-col space-y-8 text-center">
            {NAV_LINKS.map((link, idx) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-crushed_berry-900 text-4xl font-serif italic hover:text-crushed_berry-600 transition-colors"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="absolute bottom-12 text-crushed_berry-400 text-xs tracking-widest uppercase">
            @glimpsesofmine_
          </div>
      </div>
    </nav>
  );
};