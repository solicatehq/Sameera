import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Brands } from './components/Brands';
import { Rates } from './components/Rates';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-beige-50 font-sans selection:bg-beige-200 selection:text-stone-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Brands />
        <Rates />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;