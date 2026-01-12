import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative pt-20 pb-16 md:pt-32 md:pb-24 flex items-center min-h-[90vh] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym Interior" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50/80 to-white/90"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-brand-100 bg-brand-50 text-brand-700 font-medium text-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-600 mr-2 animate-pulse"></span>
              Nueva tecnología Gemini AI integrada
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Libera tu máximo</span>{' '}
              <span className="block text-brand-600 xl:inline">potencial</span>
            </h1>
            <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Más que un gimnasio, somos una comunidad dedicada a tu evolución. 
              Entrenamiento de alta intensidad, recuperación y ahora, planes personalizados con Inteligencia Artificial.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="space-y-4 sm:space-y-0 sm:flex sm:gap-4">
                <a href="#ai-coach" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-brand-600 hover:bg-brand-700 md:py-4 md:text-lg md:px-10 shadow-lg shadow-brand-100 transition-all hover:scale-105">
                  Probar Entrenador IA
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="#classes" className="flex items-center justify-center px-8 py-3 border border-slate-200 text-base font-medium rounded-full text-brand-700 bg-white hover:bg-slate-50 md:py-4 md:text-lg md:px-10 transition-all">
                  Ver Clases
                  <PlayCircle className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-2xl shadow-2xl lg:max-w-md overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
               <img
                className="w-full object-cover h-96 sm:h-[500px]"
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
                alt="Woman training in the gym"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                 <p className="text-white font-bold text-lg">Zona de Alto Rendimiento</p>
                 <p className="text-brand-200 text-sm font-medium">Equipamiento premium disponible 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;