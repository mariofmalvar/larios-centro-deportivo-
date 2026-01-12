import React, { useState } from 'react';
import { CreditCard, ShieldCheck, User, Mail, Phone, Calendar, Lock, CheckCircle, ArrowLeft } from 'lucide-react';
import { View } from '../App';

interface CheckoutProps {
  planName: string;
  setView: (view: View) => void;
}

const Checkout: React.FC<CheckoutProps> = ({ planName, setView }) => {
  const [isSuccess, setIsSuccess] = useState(false);

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
          Tu suscripción al plan <span className="text-brand-600 font-bold">{planName}</span> se ha procesado correctamente. Revisa tu email para los detalles de acceso.
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
        className="flex items-center text-slate-500 hover:text-brand-600 font-medium mb-8 transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Volver a planes
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Info */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mr-3 text-sm">1</span>
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

            {/* Payment Info */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-900 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mr-3 text-sm">2</span>
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
              Confirmar y Pagar
            </button>
          </form>
        </div>

        {/* Sidebar Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-6">
            <h3 className="text-lg font-bold text-slate-900 pb-4 border-b border-slate-100">Resumen del Pedido</h3>
            
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-900 font-bold">Membresía Larios {planName}</p>
                <p className="text-slate-500 text-sm italic">Acceso inmediato tras el pago</p>
              </div>
              <span className="text-slate-900 font-bold">
                {planName === 'Básico' ? '$29' : planName === 'Pro' ? '$49' : '$89'}
              </span>
            </div>

            <div className="space-y-2">
               <div className="flex justify-between text-sm text-slate-500">
                  <span>Cuota Mensual</span>
                  <span>{planName === 'Básico' ? '$29.00' : planName === 'Pro' ? '$49.00' : '$89.00'}</span>
               </div>
               <div className="flex justify-between text-sm text-slate-500">
                  <span>Matrícula</span>
                  <span className="text-green-600 font-medium">GRATIS</span>
               </div>
               <div className="flex justify-between text-sm text-slate-500">
                  <span>IVA (21%)</span>
                  <span>Incluido</span>
               </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
               <span className="text-lg font-bold text-slate-900">Total Hoy</span>
               <span className="text-2xl font-extrabold text-brand-600">
                {planName === 'Básico' ? '$29.00' : planName === 'Pro' ? '$49.00' : '$89.00'}
               </span>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Beneficios Destacados</h4>
              <div className="space-y-2">
                <div className="flex items-center text-xs text-slate-600 gap-2">
                  <CheckCircle className="h-3 w-3 text-brand-600" /> Acceso 24/7 a instalaciones
                </div>
                <div className="flex items-center text-xs text-slate-600 gap-2">
                  <CheckCircle className="h-3 w-3 text-brand-600" /> App Móvil con Entrenador IA
                </div>
                <div className="flex items-center text-xs text-slate-600 gap-2">
                  <CheckCircle className="h-3 w-3 text-brand-600" /> Cancelación flexible sin compromiso
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;