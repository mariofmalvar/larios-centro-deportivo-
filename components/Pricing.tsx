import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Básico',
    price: 29,
    features: ['Acceso al gimnasio 24/7', 'Taquilla de uso diario', 'Acceso app móvil', '1 Consulta inicial'],
    cta: 'Empezar',
    popular: false,
  },
  {
    name: 'Pro',
    price: 49,
    features: ['Todo lo de Básico', 'Clases ilimitadas', 'Acceso Entrenador IA Premium', 'Invitado Gratis (2x/mes)', 'Análisis corporal mensual'],
    cta: 'Más Popular',
    popular: true,
  },
  {
    name: 'Elite',
    price: 89,
    features: ['Todo lo de Pro', 'Entrenador Personal (2x/mes)', 'Servicio de toallas', 'Nutricionista dedicado', 'Acceso a Spa'],
    cta: 'Máximo Nivel',
    popular: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Planes Simples
          </h2>
          <p className="mt-4 text-xl text-slate-500">
            Sin contratos de permanencia. Cancela cuando quieras.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border ${tier.popular ? 'border-brand-600 shadow-2xl scale-105 z-10' : 'border-slate-200 shadow-sm'} bg-white p-8`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                  Recomendado
                </div>
              )}
              
              <h3 className="text-xl font-semibold text-slate-900">{tier.name}</h3>
              <p className="mt-4 flex items-baseline text-slate-900">
                <span className="text-5xl font-extrabold tracking-tight">${tier.price}</span>
                <span className="ml-1 text-xl font-semibold text-slate-500">/mes</span>
              </p>
              
              <ul className="mt-6 space-y-4 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex">
                    <Check className="flex-shrink-0 w-5 h-5 text-brand-600" />
                    <span className="ml-3 text-slate-500 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#join"
                className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-xl text-center font-medium ${
                  tier.popular
                    ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-100'
                    : 'bg-brand-50 text-brand-700 hover:bg-brand-100'
                } transition-all`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;