
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Philosophy from './components/Philosophy';
import SocialProof from './components/SocialProof';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#0f0f0f] min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Philosophy />
        <SocialProof />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;