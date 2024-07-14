'use client'
import React from 'react';
import Hero from '@/components/hero';
import HeroTwo from '@/components/herotwo';
import About from '@/components/about';
import Portfolio from '@/components/portfolio';
import Services from '@/components/services';
import Contact from '@/components/contact';
import Navbar from '@/components/navbar';
import { useAppContext } from '@/context/AppContext';

const Home: React.FC = () => {
  const { theme } = useAppContext();

  return (
    <main className={`h-[500vh]`}>
      <Navbar />
      <div id="hero" style={{ height: '100vh' }}>
        <Hero />
      </div>
      <div id="about" style={{ height: '100vh' }}>
        <About />
      </div>
      <div id="services" style={{ height: '100vh' }}>
        <Services />
      </div>
      <div id="portfolio" style={{ height: '100vh' }}>
        <Portfolio />
      </div>
      <div id="contact" style={{ height: '100vh' }}>
        <Contact />
      </div>
    </main>
  );
}

export default Home;
