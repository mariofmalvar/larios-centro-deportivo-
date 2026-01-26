import React, { useState } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { View } from '../App';

interface NavbarProps {
  setView: (view: View) => void;
  currentView: View;
}

const Navbar: React.FC<NavbarProps> = ({ setView, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: { name: string; view: View }[] = [
    { name: 'Inicio', view: 'home' },
    { name: 'Clases', view: 'classes' },
    { name: 'Entrenador IA', view: 'ai-coach' },
    { name: 'Equipo', view: 'team' },
    { name: 'Precios', view: 'pricing' },
  ];

  const handleNavClick = (view: View) => {
    setView(view);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer" 
            onClick={() => handleNavClick('home')}
          >
            <div className="bg-brand-600 p-2 rounded-lg">
              <Dumbbell className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-2xl tracking-tighter text-slate-800">Larios <span className="text-brand-600">Sport Center</span></span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.view)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentView === link.view 
                    ? 'text-brand-600 bg-brand-50' 
                    : 'text-slate-600 hover:text-brand-600'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => handleNavClick('checkout')}
                className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-brand-100 transition-all transform hover:-translate-y-0.5"
              >
                Únete Ahora
              </button>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-brand-600 hover:bg-slate-100 focus:outline-none"
            >
              <span className="sr-only">Abrir menú</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 absolute w-full shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.view)}
                className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${
                  currentView === link.view 
                  ? 'text-brand-600 bg-brand-50' 
                  : 'text-slate-600 hover:text-brand-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('checkout')}
              className="block w-full text-center bg-brand-600 text-white px-5 py-3 rounded-md font-semibold mt-4 shadow-lg"
            >
              Únete Ahora
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;