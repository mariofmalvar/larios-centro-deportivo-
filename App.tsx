import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Classes from './components/Classes';
import AICoach from './components/AICoach';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Classes />
        <AICoach />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;