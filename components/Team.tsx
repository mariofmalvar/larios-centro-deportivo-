import React, { useState } from 'react';
import { GraduationCap, Instagram, Linkedin, Mail, Trophy, X, Target, CheckCircle2, CreditCard, Star, BookOpen, Quote, Award, Briefcase } from 'lucide-react';

interface Instructor {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  methodology: string;
  studies: string[];
  experience: string;
  contact: {
    instagram: string;
    linkedin?: string;
    email: string;
    handle: string;
  };
  specialty: string;
  goals: string[];
}

const instructors: Instructor[] = [
  {
    id: 'alex',
    name: 'Alex Rodríguez',
    role: 'Head of CrossFit & Performance',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=1974&auto=format&fit=crop',
    bio: 'Ex-atleta de halterofilia con más de 12 años dedicados al alto rendimiento. Mi enfoque se centra en la precisión técnica y la superación de límites mentales.',
    methodology: 'Basada en la periodización científica del entrenamiento de fuerza y la optimización de patrones de movimiento olímpicos.',
    experience: '12 años entrenando a atletas de competición y cuerpos de seguridad.',
    studies: [
      'Grado en Ciencias de la Actividad Física y del Deporte (CAFYD)',
      'Máster en Alto Rendimiento Deportivo (COE)',
      'Certificación CrossFit Level 3 (CCFT)',
      'Especialista en Movilidad Articular (FRS)'
    ],
    specialty: 'Halterofilia y Acondicionamiento Metabólico',
    goals: ['Ganancia Muscular', 'Resistencia', 'Alto Rendimiento'],
    contact: {
      handle: '@alex_performance_larios',
      instagram: 'https://instagram.com/alex_performance_larios',
      linkedin: 'alex-rodriguez-sport',
      email: 'alex.rodriguez@lariossport.com'
    }
  },
  {
    id: 'maria',
    name: 'Maria Santos',
    role: 'Yoga & Mindfulness Director',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop',
    bio: 'Psicóloga y yogui. Entiendo el cuerpo como el reflejo de la mente. Mi misión es ayudarte a encontrar el equilibrio entre la fuerza física y la paz interior.',
    methodology: 'Vinyasa Flow consciente integrado con técnicas de reducción de estrés basadas en la atención plena (MBSR).',
    experience: '8 años impartiendo retiros internacionales y formación de profesores.',
    studies: [
      'Grado en Psicología Clínica (UCM)',
      'Certificación E-RYT 500 Yoga Alliance (India)',
      'Experto en Meditación Vipassana',
      'Formación en Yoga Terapéutico'
    ],
    specialty: 'Vinyasa Flow y Gestión del Estrés',
    goals: ['Flexibilidad y Movilidad', 'Salud Mental', 'Salud General'],
    contact: {
      handle: '@maria_zen_larios',
      instagram: 'https://instagram.com/maria_zen_larios',
      linkedin: 'maria-santos-yoga',
      email: 'maria.santos@lariossport.com'
    }
  },
  {
    id: 'carlos',
    name: 'Carlos Díaz',
    role: 'HIIT & Functional Master Trainer',
    image: 'https://images.unsplash.com/photo-1491756592342-243a13d32504?q=80&w=2048&auto=format&fit=crop',
    studies: [
      'Técnico Superior en Acondicionamiento Físico (TSAF)',
      'Especialista en Entrenamiento en Suspensión y Kettlebells',
      'Certificación Nacional en Nutrición Deportiva'
    ],
    bio: 'Apasionado del movimiento funcional. Creo en entrenamientos cortos pero de máxima eficiencia para personas con vidas ocupadas que no quieren renunciar a su salud.',
    methodology: 'Circuitos de alta densidad metabólica combinados con entrenamiento de fuerza funcional progresivo.',
    experience: '10 años como consultor de fitness corporativo y entrenador personal.',
    specialty: 'Entrenamiento por Intervalos y Quema de Grasa',
    goals: ['Pérdida de Peso', 'Resistencia', 'Funcionalidad'],
    contact: {
      handle: '@carlos_hiit_pro',
      instagram: 'https://instagram.com/carlos_hiit_pro',
      linkedin: 'carlos-diaz-fitness',
      email: 'carlos.diaz@lariossport.com'
    }
  },
  {
    id: 'elena',
    name: 'Elena Peña',
    role: 'Indoor Cycling & Nutrition Expert',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop',
    bio: 'La nutrición es el 70% del éxito. Mi enfoque combina la ciencia de los alimentos con la pasión por el ciclismo para transformar tu composición corporal.',
    methodology: 'Nutrición basada en la evidencia científica huyendo de dietas milagro. Programación de cardio por zonas de potencia.',
    experience: '6 años trabajando en clínicas de nutrición y centros de alto rendimiento ciclista.',
    studies: [
      'Grado en Nutrición Humana y Dietética',
      'Certificación Oficial Schwinn Cycling MPower',
      'Máster en Nutrición Deportiva Avanzada',
      'ISAK Nivel 2 (Antropometría)'
    ],
    specialty: 'Resistencia Cardiovascular y Composición Corporal',
    goals: ['Salud General', 'Pérdida de Peso', 'Nutrición'],
    contact: {
      handle: '@elena_nutri_cycle',
      instagram: 'https://instagram.com/elena_nutri_cycle',
      email: 'elena.pena@lariossport.com'
    }
  }
];

const rates = [
  { title: 'Sesión Individual', price: '45€', detail: 'Entrenamiento 1 a 1 de 60 min', perSession: '45€/sesión' },
  { title: 'Bono 5 Sesiones', price: '200€', detail: 'Ahorra 25€ en tu plan mensual', perSession: '40€/sesión', popular: true },
  { title: 'Bono 10 Sesiones', price: '350€', detail: 'La mejor opción para transformación total', perSession: '35€/sesión' }
];

const allGoals = Array.from(new Set(instructors.flatMap(i => i.goals)));

const Team: React.FC = () => {
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [isRatesModalOpen, setIsRatesModalOpen] = useState(false);
  const [selectedInstructor, setSelectedInstructor] = useState<Instructor | null>(null);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  const recommendedTrainers = instructors.filter(i => selectedGoal && i.goals.includes(selectedGoal));

  const closeModal = () => {
    setIsRequestModalOpen(false);
    setIsRatesModalOpen(false);
    setSelectedInstructor(null);
    setSelectedGoal(null);
    setStep(1);
  };

  return (
    <section id="team" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-widest text-brand-600 uppercase mb-3">Nuestra Élite</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Perfiles <span className="text-brand-600 italic">Reales</span>. Resultados Probados.
          </p>
          <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-lg">
            Cada uno de nuestros instructores es un referente en su disciplina, con una formación académica sólida y años de experiencia práctica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {instructors.map((coach) => (
            <div 
              key={coach.id} 
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
            >
              {/* Image Section */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={coach.image} 
                  alt={coach.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent"></div>
                
                {/* Social Floating Handle */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-[10px] font-bold">
                    <Instagram className="h-3 w-3" />
                    {coach.contact.handle}
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block px-3 py-1 bg-brand-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg mb-2 shadow-lg">
                    {coach.specialty}
                  </span>
                  <h3 className="text-xl font-bold text-white">{coach.name}</h3>
                  <p className="text-brand-200 text-xs font-medium">{coach.role}</p>
                </div>
              </div>

              {/* Quick Info */}
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-slate-600 text-sm italic mb-6 line-clamp-3">
                  "{coach.bio}"
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-slate-500 text-xs">
                    <Award className="h-4 w-4 text-brand-600" />
                    <span>{coach.experience}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500 text-xs">
                    <BookOpen className="h-4 w-4 text-brand-600" />
                    <span>{coach.studies[0]}</span>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex gap-2">
                    <a href={coach.contact.instagram} className="p-2.5 bg-slate-50 text-slate-400 hover:bg-brand-50 hover:text-brand-600 rounded-2xl transition-all">
                      <Instagram className="h-4 w-4" />
                    </a>
                    <a href={`mailto:${coach.contact.email}`} className="p-2.5 bg-slate-50 text-slate-400 hover:bg-brand-50 hover:text-brand-600 rounded-2xl transition-all">
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                  <button 
                    onClick={() => setSelectedInstructor(coach)}
                    className="px-5 py-2.5 bg-brand-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-brand-700 transition-all shadow-md active:scale-95"
                  >
                    Perfil Completo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Box */}
        <div className="mt-20 bg-brand-600 rounded-[3rem] p-10 md:p-20 relative overflow-hidden text-center text-white">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-white rounded-full blur-[100px]"></div>
             <div className="absolute bottom-1/2 right-1/4 w-80 h-80 bg-brand-200 rounded-full blur-[100px]"></div>
          </div>
          <h3 className="text-3xl md:text-5xl font-extrabold mb-8 relative z-10 leading-tight">¿Buscas un cambio radical?</h3>
          <p className="text-brand-100 text-xl mb-12 max-w-3xl mx-auto relative z-10 leading-relaxed">
            Nuestros entrenadores personales diseñarán un plan integral de entrenamiento, nutrición y suplementación para que alcances tus metas en tiempo récord.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <button 
              onClick={() => setIsRequestModalOpen(true)}
              className="px-12 py-5 bg-white text-brand-600 font-black text-lg rounded-2xl hover:bg-brand-50 transition-all shadow-2xl active:scale-95"
            >
              Reservar Entrenador Personal
            </button>
            <button 
              onClick={() => setIsRatesModalOpen(true)}
              className="px-12 py-5 bg-transparent border-2 border-white/30 text-white font-black text-lg rounded-2xl hover:bg-white/10 transition-all active:scale-95"
            >
              Ver Tarifas de Élite
            </button>
          </div>
        </div>
      </div>

      {/* PROFESSIONAL PROFILE MODAL */}
      {selectedInstructor && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl animate-in fade-in" onClick={closeModal}></div>
          <div className="relative bg-white w-full max-w-5xl max-h-[90vh] rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500">
            <button onClick={closeModal} className="absolute top-8 right-8 p-3 text-slate-400 hover:text-brand-600 bg-slate-100 rounded-full transition-all z-50">
              <X className="h-6 w-6" />
            </button>

            <div className="flex flex-col md:flex-row h-full overflow-y-auto">
              {/* Profile Sidebar */}
              <div className="md:w-2/5 relative">
                <img src={selectedInstructor.image} className="w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-12 left-12 right-12 text-white">
                  <h3 className="text-4xl font-black mb-2">{selectedInstructor.name}</h3>
                  <p className="text-brand-200 font-bold uppercase tracking-widest text-sm mb-6">{selectedInstructor.role}</p>
                  <div className="flex gap-4">
                     <a href={selectedInstructor.contact.instagram} className="flex items-center gap-2 text-xs font-bold text-white/80 hover:text-white transition-colors">
                        <Instagram className="h-4 w-4" /> {selectedInstructor.contact.handle}
                     </a>
                  </div>
                </div>
              </div>

              {/* Profile Details */}
              <div className="flex-grow p-10 md:p-16 space-y-12">
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <Quote className="h-6 w-6 text-brand-600" />
                    <h4 className="text-sm font-bold uppercase tracking-tighter text-slate-400">Biografía Profesional</h4>
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed italic">
                    {selectedInstructor.bio}
                  </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <section className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Target className="h-5 w-5 text-brand-600" />
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">Metodología</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {selectedInstructor.methodology}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedInstructor.goals.map(g => (
                        <span key={g} className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-lg uppercase">
                          {g}
                        </span>
                      ))}
                    </div>
                  </section>

                  <section className="space-y-6">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-5 w-5 text-brand-600" />
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">Formación y Títulos</h4>
                    </div>
                    <ul className="space-y-4">
                      {selectedInstructor.studies.map((s, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-4 w-4 text-brand-500 shrink-0 mt-0.5" />
                          <span className="text-slate-600 text-sm font-medium">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                <div className="pt-12 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-brand-50 rounded-2xl">
                      <Briefcase className="h-6 w-6 text-brand-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase">Trayectoria</p>
                      <p className="text-slate-900 font-bold">{selectedInstructor.experience}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      closeModal();
                      setIsRequestModalOpen(true);
                      setSelectedGoal(selectedInstructor.goals[0]);
                      setStep(2);
                    }}
                    className="w-full sm:w-auto px-10 py-4 bg-brand-600 text-white font-black rounded-2xl shadow-xl hover:bg-brand-700 transition-all active:scale-95"
                  >
                    Entrenar con {selectedInstructor.name.split(' ')[0]}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* REQUEST COACH MODAL (EXISTING REFINED) */}
      {isRequestModalOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-in fade-in" onClick={closeModal}></div>
          <div className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <button onClick={closeModal} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-brand-600 bg-slate-50 rounded-full transition-colors z-20">
              <X className="h-6 w-6" />
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-brand-600 p-8 text-white hidden md:flex flex-col justify-between">
                <div>
                  <Target className="h-10 w-10 text-brand-200 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Plan Elite</h3>
                  <p className="text-brand-100 text-sm opacity-80 leading-relaxed">
                    Personalización absoluta para resultados fuera de lo común.
                  </p>
                </div>
                <div className="space-y-4">
                   <div className="flex items-center gap-3 text-xs font-bold text-brand-200 uppercase tracking-widest">
                      <div className={`w-8 h-1 rounded-full ${step >= 1 ? 'bg-white' : 'bg-white/20'}`}></div>
                      Meta
                   </div>
                   <div className="flex items-center gap-3 text-xs font-bold text-brand-200 uppercase tracking-widest">
                      <div className={`w-8 h-1 rounded-full ${step >= 2 ? 'bg-white' : 'bg-white/20'}`}></div>
                      Experto
                   </div>
                </div>
              </div>

              <div className="flex-grow p-8 md:p-12">
                {step === 1 ? (
                  <div className="animate-in slide-in-from-right-4 duration-300">
                    <h4 className="text-2xl font-extrabold text-slate-900 mb-2">Define tu victoria</h4>
                    <p className="text-slate-500 mb-8">Selecciona tu objetivo principal para recomendarte al experto ideal.</p>
                    
                    <div className="grid grid-cols-1 gap-3">
                      {allGoals.map((goal) => (
                        <button
                          key={goal}
                          onClick={() => {
                            setSelectedGoal(goal);
                            setStep(2);
                          }}
                          className={`w-full text-left p-4 rounded-2xl border-2 transition-all group flex items-center justify-between ${
                            selectedGoal === goal 
                            ? 'border-brand-600 bg-brand-50 text-brand-600' 
                            : 'border-slate-100 hover:border-brand-100 hover:bg-slate-50 text-slate-600'
                          }`}
                        >
                          <span className="font-bold">{goal}</span>
                          <Target className={`h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity ${selectedGoal === goal ? 'opacity-100' : ''}`} />
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="animate-in slide-in-from-right-4 duration-300">
                    <button onClick={() => setStep(1)} className="text-brand-600 font-bold text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
                      <Target className="h-3 w-3" /> Cambiar objetivo
                    </button>
                    <h4 className="text-2xl font-extrabold text-slate-900 mb-6">Expertos en "{selectedGoal}"</h4>
                    
                    <div className="space-y-4 mb-8">
                      {recommendedTrainers.map((trainer) => (
                        <div 
                          key={trainer.id} 
                          className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-200 transition-all cursor-pointer group"
                          onClick={() => { setSelectedInstructor(trainer); setIsRequestModalOpen(false); }}
                        >
                          <img src={trainer.image} className="w-16 h-16 rounded-xl object-cover" alt="" />
                          <div className="flex-grow">
                            <h5 className="font-bold text-slate-900 group-hover:text-brand-600 transition-colors">{trainer.name}</h5>
                            <p className="text-xs text-slate-500">{trainer.role}</p>
                          </div>
                          <CheckCircle2 className="h-6 w-6 text-brand-600" />
                        </div>
                      ))}
                    </div>

                    <form className="space-y-4">
                      <input type="text" placeholder="Nombre completo" className="w-full px-5 py-4 bg-slate-100 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none font-medium" />
                      <input type="email" placeholder="Email de contacto" className="w-full px-5 py-4 bg-slate-100 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none font-medium" />
                      <button 
                        type="button"
                        onClick={closeModal}
                        className="w-full py-4 bg-brand-600 text-white font-black rounded-2xl shadow-lg hover:bg-brand-700 transition-all transform active:scale-95"
                      >
                        Solicitar Primera Sesión
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* RATES MODAL (EXISTING REFINED) */}
      {isRatesModalOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-in fade-in" onClick={closeModal}></div>
          <div className="relative bg-white w-full max-w-4xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 p-8 md:p-16">
            <button onClick={closeModal} className="absolute top-8 right-8 p-2 text-slate-400 hover:text-brand-600 bg-slate-50 rounded-full transition-colors">
              <X className="h-6 w-6" />
            </button>

            <div className="text-center mb-16">
              <div className="inline-flex p-4 bg-brand-50 text-brand-600 rounded-3xl mb-4">
                <CreditCard className="h-8 w-8" />
              </div>
              <h3 className="text-4xl font-black text-slate-900">Tarifas de Élite</h3>
              <p className="text-slate-500 mt-2 text-lg">Programas de entrenamiento personal premium.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {rates.map((rate, i) => (
                <div 
                  key={i} 
                  className={`relative p-10 rounded-[2.5rem] border-2 transition-all flex flex-col items-center text-center ${
                    rate.popular ? 'border-brand-600 bg-brand-50 shadow-2xl scale-105' : 'border-slate-100 bg-white'
                  }`}
                >
                  {rate.popular && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-brand-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-2 shadow-xl">
                      <Star className="h-3 w-3 fill-current" /> Recomendado
                    </span>
                  )}
                  <h4 className="font-bold text-slate-900 mb-4 text-xl">{rate.title}</h4>
                  <div className="mb-6">
                    <span className="text-5xl font-black text-slate-900">{rate.price}</span>
                  </div>
                  <p className="text-[10px] text-brand-600 font-black uppercase tracking-widest mb-6 py-1 px-3 bg-brand-100 rounded-lg">{rate.perSession}</p>
                  <p className="text-sm text-slate-600 mb-10 leading-relaxed font-medium">{rate.detail}</p>
                  <button 
                    onClick={closeModal}
                    className={`mt-auto w-full py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${
                      rate.popular 
                      ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-xl' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Contratar
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-slate-50 rounded-[2rem] flex items-center gap-6 border border-slate-100">
               <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-600 shrink-0 shadow-sm">
                  <Star className="h-6 w-6" />
               </div>
               <p className="text-sm text-slate-500 leading-relaxed">
                  <strong>Servicio Premium:</strong> Todas las tarifas incluyen acceso a vestuarios VIP, suplementación post-entreno y seguimiento biomecánico semanal. Las sesiones tienen una duración de 60 minutos efectivos.
               </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;