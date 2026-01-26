import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeHighlights from './components/HomeHighlights';
import Classes from './components/Classes';
import AICoach from './components/AICoach';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import { ArrowLeft } from 'lucide-react';

export type View = 'home' | 'classes' | 'ai-coach' | 'pricing' | 'team' | 'checkout';

function App() {
  const [history, setHistory] = useState<View[]>(['home']);
  const currentView = history[history.length - 1];
  const [selectedPlan, setSelectedPlan] = useState<string>('Pro');

  // Scroll to top when changing views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const navigateTo = (newView: View) => {
    if (newView !== currentView) {
      setHistory(prev => [...prev, newView]);
    }
  };

  const goBack = () => {
    if (history.length > 1) {
      setHistory(prev => prev.slice(0, -1));
    }
  };

  const handleJoinPlan = (planName: string) => {
    setSelectedPlan(planName);
    navigateTo('checkout');
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero setView={navigateTo} />
            <HomeHighlights setView={navigateTo} />
          </>
        );
      case 'classes':
        return (
          <div className="pt-20">
            <div className="bg-brand-600 py-16 text-white text-center">
              <h1 className="text-4xl font-bold">Nuestras Clases</h1>
              <p className="mt-2 text-brand-100 opacity-80 uppercase tracking-widest text-sm">Explora tu pasión por el fitness</p>
            </div>
            <Classes />
          </div>
        );
      case 'ai-coach':
        return (
          <div className="pt-20">
            <div className="bg-brand-600 py-16 text-white text-center">
              <h1 className="text-4xl font-bold">Entrenador IA</h1>
              <p className="mt-2 text-brand-100 opacity-80 uppercase tracking-widest text-sm">Personalización extrema con Gemini 2.5</p>
            </div>
            <AICoach />
          </div>
        );
      case 'pricing':
        return (
          <div className="pt-20">
            <div className="bg-brand-600 py-16 text-white text-center">
              <h1 className="text-4xl font-bold">Membresías y Precios</h1>
              <p className="mt-2 text-brand-100 opacity-80 uppercase tracking-widest text-sm">Elige el plan que mejor se adapte a ti</p>
            </div>
            <Pricing onSelectPlan={handleJoinPlan} />
          </div>
        );
      case 'team':
        return (
          <div className="pt-20">
            <div className="bg-brand-600 py-16 text-white text-center">
              <h1 className="text-4xl font-bold">Nuestro Equipo</h1>
              <p className="mt-2 text-brand-100 opacity-80 uppercase tracking-widest text-sm">Profesionales de élite a tu servicio</p>
            </div>
            <Team />
          </div>
        );
      case 'checkout':
        return (
          <div className="pt-20">
            <Checkout planName={selectedPlan} setView={navigateTo} />
          </div>
        );
      default:
        return <Hero setView={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col relative">
      <Navbar setView={navigateTo} currentView={currentView} />
      
      {/* Botón Volver Atrás Global */}
      {currentView !== 'home' && (
        <button 
          onClick={goBack}
          className="fixed top-24 left-4 md:left-8 z-[45] flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full text-slate-700 font-bold text-sm shadow-lg hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all group animate-in slide-in-from-left-4 duration-300"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Volver atrás</span>
        </button>
      )}

      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer setView={navigateTo} />
    </div>
  );
}

export default App;