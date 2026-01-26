import React, { useState } from 'react';
import { CreditCard, ShieldCheck, User, Mail, Phone, Calendar, Lock, CheckCircle, ArrowLeft, Trophy, Zap, Shield } from 'lucide-react';
import { View } from '../App';

interface CheckoutProps {
  planName: string;
  setView: (view: View) => void;
}

const plans = [
  { name: 'Básico', price: 29, icon: Shield },
  { name: 'Pro', price: 49, icon: Zap },
  { name: 'Elite', price: 89, icon: Trophy }
];

const Checkout: React.FC<CheckoutProps> = ({ planName, setView }) => {
  const [selectedPlan, setSelectedPlan] = useState<string>(planName);
  const [isSuccess, setIsSuccess] = useState(false);

  const currentPlanData = plans.find(p => p.name === selectedPlan) || plans[1];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center animate-in zoom-in-95 duration-500">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 text-green-600 rounded-full mb-8">
          <CheckCircle className="h-12 w-12" />
        </div>
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">¡Bienvenido a la familia, Guerrero!</h2>
        <p className="text-xl text-slate-600 mb-10 max-w-lg mx-auto">
          Tu suscripción al plan <span className="text-brand-600 font-bold">{selectedPlan}</span> se ha procesado correctamente. Revisa tu email para los detalles de acceso.
        </p>
        <button 
          onClick={() => setView('home')}
          className="px-10 py-4 bg-brand-600 text-white font-bold rounded-2xl shadow-xl hover:bg-brand-700 transition-all"
        >
          Ir a mi panel de control
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 lg:py-20">
      <button 
        onClick={() => setView('pricing')}
        className="flex items-center text-slate-500 hover:text-brand-600 font-medium mb-8 transition-colors group"
      >
        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Volver a planes
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* 0. Plan Selection */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mr-3 text-sm font-bold">1</span>
                Elige tu Membresía
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {plans.map((plan) => (
                  <button
                    key={plan.name}
                    type="button"
                    onClick={() => setSelectedPlan(plan.name)}
                    className={`relative p-5 rounded-2xl border-2 transition-all flex flex-col items-center text-center gap-3 ${
                      selectedPlan === plan.name 
                      ? 'border-brand-600 bg-brand-50 ring-4 ring-brand-500/10' 
                      : 'border-slate-100 hover:border-slate-200 bg-white'
                    }`}
                  >
                    <div className={`p-2 rounded-xl ${selectedPlan === plan.name ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                      <plan.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className={`font-bold text-sm ${selectedPlan === plan.name ? 'text-brand-600' : 'text-slate-700'}`}>{plan.name}</p>
                      <p className="text-lg font-extrabold text-slate-900">${plan.price}<span className="text-[10px] text-slate-400 font-normal">/mes</span></p>
                    </div>
                    {selectedPlan === plan.name && (
                      <div className="absolute -top-2 -right-2 bg-brand-600 text-white p-1 rounded-full shadow-lg">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 1. Personal Info */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mr-3 text-sm font-bold">2</span>
                Datos Personales
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Nombre Completo</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input required type="text" placeholder="Ej. Juan Pérez" className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Correo Electrónico</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input required type="email" placeholder="juan@ejemplo.com" className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Teléfono</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input required type="tel" placeholder="+34 600 000 000" className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">DNI / NIE</label>
                  <div className="relative">
                    <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input required type="text" placeholder="12345678X" className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Payment Info */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-900 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mr-3 text-sm font-bold">3</span>
                  Detalles del Pago
                </h3>
                <div className="flex gap-2">
                  <div className="w-10 h-6 bg-slate-100 rounded border border-slate-200 flex items-center justify-center"><span className="text-[8px] font-bold text-slate-400">VISA</span></div>
                  <div className="w-10 h-6 bg-slate-100 rounded border border-slate-200 flex items-center justify-center"><span className="text-[8px] font-bold text-slate-400">MC</span></div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Número de Tarjeta</label>
                  <div className="relative">
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input required type="text" placeholder="0000 0000 0000 0000" className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Fecha de Caducidad</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input required type="text" placeholder="MM/AA" className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">CVV</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input required type="text" placeholder="123" className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-3 p-4 bg-blue-50 text-blue-700 rounded-2xl text-sm border border-blue-100">
                <ShieldCheck className="h-5 w-5 shrink-0" />
                <p>Tus datos están protegidos mediante cifrado SSL de 256 bits. No almacenamos los números de tu tarjeta.</p>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-brand-600 text-white font-bold text-lg rounded-2xl shadow-xl shadow-brand-100 hover:bg-brand-700 transition-all transform hover:-translate-y-1 active:scale-95"
            >
              Confirmar suscripción {selectedPlan}
            </button>
          </form>
        </div>

        {/* Sidebar Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-6">
              <h3 className="text-lg font-bold text-slate-900 pb-4 border-b border-slate-100">Resumen del Pedido</h3>
              
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-slate-900 font-bold flex items-center gap-2">
                    <currentPlanData.icon className="h-4 w-4 text-brand-600" />
                    Plan Larios {selectedPlan}
                  </p>
                  <p className="text-slate-500 text-xs italic mt-1">Suscripción mensual recurrente</p>
                </div>
                <span className="text-slate-900 font-bold">${currentPlanData.price}</span>
              </div>

              <div className="space-y-2">
                 <div className="flex justify-between text-sm text-slate-500">
                    <span>Cuota Mensual</span>
                    <span>${currentPlanData.price}.00</span>
                 </div>
                 <div className="flex justify-between text-sm text-slate-500">
                    <span>Matrícula</span>
                    <span className="text-green-600 font-medium uppercase text-[10px] tracking-wider">Bonificación IA</span>
                 </div>
                 <div className="flex justify-between text-sm text-slate-500">
                    <span>IVA (21%)</span>
                    <span>Incluido</span>
                 </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                 <span className="text-lg font-bold text-slate-900">Total Hoy</span>
                 <span className="text-2xl font-extrabold text-brand-600">
                   ${currentPlanData.price}.00
                 </span>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl space-y-4">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Beneficios del Plan {selectedPlan}</h4>
                <div className="space-y-3">
                  <div className="flex items-center text-xs text-slate-700 gap-2 font-medium">
                    <CheckCircle className="h-3 w-3 text-brand-600 shrink-0" /> Acceso total 24/7
                  </div>
                  <div className="flex items-center text-xs text-slate-700 gap-2 font-medium">
                    <CheckCircle className="h-3 w-3 text-brand-600 shrink-0" /> Entrenador IA Gemini 2.5
                  </div>
                  {selectedPlan !== 'Básico' && (
                    <div className="flex items-center text-xs text-slate-700 gap-2 font-medium">
                      <CheckCircle className="h-3 w-3 text-brand-600 shrink-0" /> Clases dirigidas ilimitadas
                    </div>
                  )}
                  {selectedPlan === 'Elite' && (
                    <div className="flex items-center text-xs text-slate-700 gap-2 font-medium">
                      <CheckCircle className="h-3 w-3 text-brand-600 shrink-0" /> Sesiones de Nutrición & Spa
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="px-4 text-center">
               <p className="text-[10px] text-slate-400 leading-relaxed uppercase tracking-tighter">
                  Al confirmar la compra, aceptas nuestros términos de servicio y política de privacidad. Puedes cancelar en cualquier momento desde tu panel de usuario.
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;