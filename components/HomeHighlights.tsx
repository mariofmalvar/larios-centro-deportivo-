import React, { useState } from 'react';
import { Shield, Zap, Target, HeartPulse, Trophy, Users, X, CheckCircle2, Map, Clock, Cpu, Apple } from 'lucide-react';
import { View } from '../App';

interface HighlightDetail {
  title: string;
  description: string;
  icon: any;
  image: string;
  fullContent: {
    subtitle: string;
    paragraphs: string[];
    features: string[];
    extraIcon: any;
  };
}

interface HomeHighlightsProps {
  setView: (view: View) => void;
}

const highlights: HighlightDetail[] = [
  {
    title: 'Instalaciones de Vanguardia',
    description: 'Más de 2.000m² equipados con maquinaria de última generación, zona de peso libre y área de entrenamiento funcional.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop',
    fullContent: {
      subtitle: 'Espacio diseñado para el máximo rendimiento',
      paragraphs: [
        'Nuestras instalaciones han sido diseñadas por arquitectos deportivos para optimizar el flujo de entrenamiento y la motivación. Contamos con techos altos de 6 metros y un sistema de renovación de aire inteligente que mantiene el oxígeno en niveles óptimos incluso en horas punta.',
        'La zona de peso libre cuenta con plataformas de levantamiento olímpico Eleiko y mancuernas de hasta 60kg para los atletas más exigentes.'
      ],
      features: [
        'Maquinaria Hammer Strength y LifeFitness Pro',
        'Zona de Calistenia y Rack de 15 metros',
        'Pista de sprint de 20 metros con césped artificial',
        'Vestuarios premium con taquillas digitales'
      ],
      extraIcon: Map
    }
  },
  {
    title: 'Entrenamiento con IA',
    description: 'Nuestros algoritmos basados en Gemini analizan tu progreso en tiempo real para ajustar tus rutinas automáticamente.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=2070&auto=format&fit=crop',
    fullContent: {
      subtitle: 'La ciencia de los datos aplicada a tu fuerza',
      paragraphs: [
        'A diferencia de otros centros, en Larios no te damos un PDF estático. Nuestra integración con Gemini 2.5 analiza cada repetición que registras, tu frecuencia cardíaca y tus niveles de fatiga para proponerte el peso exacto en tu próxima serie.',
        'El sistema aprende de tus patrones de sueño y estrés (vía wearables) para recomendarte días de descarga o mayor intensidad.'
      ],
      features: [
        'Ajuste dinámico de volumen y carga',
        'Análisis de biomecánica mediante visión artificial',
        'Predicción de estancamiento antes de que ocurra',
        'Chatbot de soporte técnico disponible 24/7'
      ],
      extraIcon: Cpu
    }
  },
  {
    title: 'Comunidad Larios',
    description: 'Únete a desafíos semanales, eventos exclusivos para socios y grupos de entrenamiento dirigidos por expertos.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2070&auto=format&fit=crop',
    fullContent: {
      subtitle: 'Mucho más que un lugar para sudar',
      paragraphs: [
        'Creemos que el fitness es un viaje social. Nuestra comunidad organiza salidas de trail running, barbacoas post-entrenamiento y talleres de técnica cada último sábado de mes.',
        'A través de nuestra App, podrás unirte a equipos, participar en el ranking mensual y ganar premios de nuestros patrocinadores premium.'
      ],
      features: [
        'Ranking mensual de objetivos por niveles',
        'Talleres de técnica avanzada gratuitos',
        'Eventos de networking deportivo',
        'Descuentos en marcas colaboradoras'
      ],
      extraIcon: Trophy
    }
  },
  {
    title: 'Bienestar y Salud',
    description: 'Acceso a planes nutricionales personalizados y zona de recuperación con fisioterapia y masajes deportivos.',
    icon: HeartPulse,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop',
    fullContent: {
      subtitle: 'Enfoque 360 en tu salud integral',
      paragraphs: [
        'El entrenamiento es solo el 30% del éxito. Por eso, integramos la recuperación como un pilar fundamental. Nuestra zona Zen ofrece baños de contraste y sauna finlandesa para acelerar la reparación muscular.',
        'Nuestros nutricionistas clínicos trabajan codo con codo con los entrenadores para asegurar que tu combustible sea el adecuado para tus metas.'
      ],
      features: [
        'Cabinas de crioterapia y sauna',
        'Servicio de fisioterapia clínica in-situ',
        'Bioimpedancia médica trimestral incluida',
        'Recetas saludables personalizadas en la App'
      ],
      extraIcon: Apple
    }
  }
];

const HomeHighlights: React.FC<HomeHighlightsProps> = ({ setView }) => {
  const [selectedHighlight, setSelectedHighlight] = useState<HighlightDetail | null>(null);

  const closeModal = () => setSelectedHighlight(null);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-brand-600 uppercase mb-3">Descubre Larios</h2>
            <p className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Diseñado para quienes buscan <span className="text-brand-600 italic">excelencia</span> en cada repetición.
            </p>
          </div>
          <div className="flex gap-4">
             <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-brand-600">50+</span>
                <span className="text-xs text-slate-500 font-medium">Clases/Semana</span>
             </div>
             <div className="w-px h-10 bg-slate-200"></div>
             <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-brand-600">24/7</span>
                <span className="text-xs text-slate-500 font-medium">Acceso Total</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-3xl bg-slate-100 flex flex-col md:flex-row min-h-[300px] transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-600/10 mix-blend-multiply group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center bg-white">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
                <button 
                  onClick={() => setSelectedHighlight(item)}
                  className="mt-6 flex items-center text-brand-600 font-bold text-xs uppercase tracking-widest cursor-pointer group-hover:translate-x-2 transition-transform outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 rounded px-1"
                >
                  Saber más <Target className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-brand-600 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-brand-100">
           <div className="flex items-center gap-6">
              <div className="hidden sm:flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-md">
                 <Trophy className="h-8 w-8 text-brand-200" />
              </div>
              <div>
                 <h4 className="text-xl font-bold">¿Listo para el siguiente nivel?</h4>
                 <p className="text-brand-100 text-sm opacity-80">Únete hoy y obtén un análisis de bioimpedancia gratuito.</p>
              </div>
           </div>
           <button 
             onClick={() => setView('checkout')}
             className="whitespace-nowrap px-8 py-4 bg-white text-brand-600 font-bold rounded-2xl hover:bg-brand-50 transition-colors shadow-lg active:scale-95"
           >
              Comenzar mi transformación
           </button>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedHighlight && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300" 
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-y-auto animate-in zoom-in-95 slide-in-from-bottom-10 duration-500">
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 z-20 p-2 bg-white/90 backdrop-blur rounded-full text-slate-900 hover:bg-brand-600 hover:text-white shadow-md transition-all"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="flex flex-col">
              {/* Header Image */}
              <div className="relative h-64 sm:h-80 shrink-0">
                <img 
                  src={selectedHighlight.image} 
                  alt={selectedHighlight.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-brand-600 text-white rounded-xl shadow-lg">
                      <selectedHighlight.icon className="h-5 w-5" />
                    </div>
                    <span className="text-white font-bold uppercase tracking-widest text-xs drop-shadow-md">Nuestra Propuesta</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow-lg">{selectedHighlight.title}</h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 sm:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                  <div className="lg:col-span-3 space-y-6">
                    <h4 className="text-xl font-bold text-slate-900 flex items-center">
                      <selectedHighlight.fullContent.extraIcon className="mr-3 h-6 w-6 text-brand-600" />
                      {selectedHighlight.fullContent.subtitle}
                    </h4>
                    
                    {selectedHighlight.fullContent.paragraphs.map((p, i) => (
                      <p key={i} className="text-slate-600 leading-relaxed text-lg">
                        {p}
                      </p>
                    ))}

                    <div className="pt-6 border-t border-slate-100 flex items-center gap-4 text-slate-500">
                       <Clock className="h-5 w-5 text-brand-600" />
                       <span className="text-sm font-medium">Disponible para todos los niveles de membresía</span>
                    </div>
                  </div>

                  <div className="lg:col-span-2 space-y-4">
                    <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Lo que incluye:</h5>
                    <div className="space-y-3">
                      {selectedHighlight.fullContent.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <CheckCircle2 className="h-5 w-5 text-brand-600 shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-sm font-medium leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button 
                      onClick={closeModal}
                      className="w-full mt-6 py-4 bg-brand-600 text-white font-bold rounded-2xl shadow-lg shadow-brand-100 hover:bg-brand-700 transition-all active:scale-95"
                    >
                      Entendido, cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HomeHighlights;