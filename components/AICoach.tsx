import React, { useState } from 'react';
import { generateWorkoutPlan } from '../services/geminiService';
import { FitnessGoal, ExperienceLevel, WorkoutPlanResponse, DailyRoutine } from '../types';
import { Sparkles, Activity, CheckCircle2, Loader2, ChevronRight, Utensils } from 'lucide-react';

const AICoach: React.FC = () => {
  const [goal, setGoal] = useState<FitnessGoal>(FitnessGoal.GENERAL_HEALTH);
  const [level, setLevel] = useState<ExperienceLevel>(ExperienceLevel.BEGINNER);
  const [days, setDays] = useState<number>(3);
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<WorkoutPlanResponse | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setPlan(null);
    try {
      const result = await generateWorkoutPlan(goal, level, days);
      setPlan(result);
    } catch (e) {
      console.error(e);
      alert("Hubo un error conectando con la IA. Por favor intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-coach" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-600 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-500 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-brand-500/20 rounded-full mb-4 ring-1 ring-brand-500/50">
            <Sparkles className="h-6 w-6 text-brand-400" />
          </div>
          <h2 className="text-3xl font-extrabold sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-brand-200">
            Tu Entrenador Personal con IA
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Utilizamos la potencia de Gemini 2.5 para crear una rutina 100% adaptada a tus objetivos y nivel.
            Sin costo adicional para miembros.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Controls Panel */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 shadow-xl h-fit">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Activity className="mr-2 h-5 w-5 text-brand-400" />
              Configura tu Plan
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Tu Objetivo Principal</label>
                <div className="grid grid-cols-1 gap-2">
                  {Object.values(FitnessGoal).map((g) => (
                    <button
                      key={g}
                      onClick={() => setGoal(g)}
                      className={`text-left px-4 py-3 rounded-lg text-sm transition-all ${
                        goal === g 
                        ? 'bg-brand-600 text-white shadow-lg shadow-brand-900/50' 
                        : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Nivel de Experiencia</label>
                <div className="flex rounded-lg bg-slate-700/50 p-1">
                  {Object.values(ExperienceLevel).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLevel(l)}
                      className={`flex-1 py-2 text-sm rounded-md transition-all ${
                        level === l 
                        ? 'bg-brand-500 text-white font-medium shadow' 
                        : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Días por Semana: {days}</label>
                <input 
                  type="range" 
                  min="2" 
                  max="6" 
                  value={days} 
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>2 días</span>
                  <span>6 días</span>
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={loading}
                className="w-full flex items-center justify-center py-4 px-6 border border-transparent rounded-xl shadow-lg text-base font-medium text-white bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
                    Generando Rutina...
                  </>
                ) : (
                  <>
                    <Sparkles className="-ml-1 mr-2 h-5 w-5" />
                    Generar Plan con IA
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-2">
            {!plan && !loading && (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center bg-slate-800/30 rounded-2xl border border-slate-700 border-dashed">
                <DumbbellIcon className="h-16 w-16 text-slate-600 mb-4" />
                <p className="text-slate-400 text-lg">Configura tus preferencias y genera tu rutina perfecta.</p>
              </div>
            )}

            {loading && (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center space-y-4">
                 <div className="relative">
                    <div className="w-16 h-16 border-4 border-brand-500/30 border-t-brand-500 rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Sparkles className="h-6 w-6 text-brand-400 animate-pulse" />
                    </div>
                 </div>
                 <p className="text-brand-200 animate-pulse">Consultando a Gemini 2.5...</p>
                 <div className="flex gap-2 text-sm text-slate-500">
                    <span className="animate-bounce delay-75">Analizando biomecánica</span>
                    <span className="animate-bounce delay-150">•</span>
                    <span className="animate-bounce delay-200">Calculando volumen</span>
                    <span className="animate-bounce delay-300">•</span>
                    <span className="animate-bounce delay-500">Optimizando nutrición</span>
                 </div>
              </div>
            )}

            {plan && (
              <div className="space-y-6 animate-fade-in-up">
                 <div className="bg-gradient-to-r from-brand-900/50 to-slate-800 p-6 rounded-xl border border-brand-500/30">
                    <h4 className="text-lg font-semibold text-brand-200 mb-2">Consejo del Coach</h4>
                    <p className="text-slate-200 italic">"{plan.generalAdvice}"</p>
                 </div>

                 <div className="grid gap-6">
                    {plan.weeklyPlan.map((day, idx) => (
                      <RoutineCard key={idx} day={day} />
                    ))}
                 </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const RoutineCard: React.FC<{ day: DailyRoutine }> = ({ day }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white text-slate-900 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-2xl border border-slate-100">
      <div 
        className="p-5 flex items-center justify-between cursor-pointer bg-slate-50 hover:bg-slate-100 border-b border-slate-200"
        onClick={() => setExpanded(!expanded)}
      >
        <div>
           <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold uppercase rounded-full tracking-wide">
                {day.day}
              </span>
              <h4 className="text-lg font-bold text-slate-800">{day.focus}</h4>
           </div>
        </div>
        <ChevronRight className={`h-6 w-6 text-slate-400 transition-transform ${expanded ? 'rotate-90' : ''}`} />
      </div>

      {expanded && (
        <div className="p-5 bg-white">
          <div className="mb-4 p-3 bg-brand-50/50 border-l-4 border-brand-600 rounded-r-md flex gap-3">
             <Utensils className="h-5 w-5 text-brand-700 flex-shrink-0 mt-0.5" />
             <p className="text-sm text-slate-700 font-medium">{day.nutritionTip}</p>
          </div>

          <div className="space-y-3">
            {day.exercises.map((ex, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-brand-100 hover:bg-brand-50/30 transition-colors">
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-slate-600 text-xs font-bold mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-800">{ex.name}</p>
                    <p className="text-xs text-slate-500 mt-1">{ex.notes}</p>
                  </div>
                </div>
                <div className="mt-2 sm:mt-0 flex gap-4 text-sm font-medium text-brand-600 pl-9 sm:pl-0">
                  <span>{ex.sets} Series</span>
                  <span className="text-slate-300">|</span>
                  <span>{ex.reps} Reps</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Helper icon
const DumbbellIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m6.5 6.5 11 11" />
    <path d="m21 21-1-1" />
    <path d="m3 3 1 1" />
    <path d="m18 22 4-4" />
    <path d="m2 6 4-4" />
    <path d="m3 10 7-7" />
    <path d="m14 21 7-7" />
  </svg>
);

export default AICoach;