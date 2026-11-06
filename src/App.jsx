import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ColorSimulator from './components/ColorSimulator';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ColorSimulator />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
