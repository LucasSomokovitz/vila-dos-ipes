
import React from 'react';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Differentials } from '@/components/Differentials';
import { Location } from '@/components/Location';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Differentials />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
