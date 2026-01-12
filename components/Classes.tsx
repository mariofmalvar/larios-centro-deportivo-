import React from 'react';
import { Clock, Users, Flame } from 'lucide-react';
import { ClassSession } from '../types';

const classes: ClassSession[] = [
  {
    id: '1',
    title: 'CrossFit Elite',
    time: '07:00 AM',
    instructor: 'Alex R.',
    intensity: 'Alta',
    image: 'https://images.unsplash.com/photo-1533560904424-a0c61dc306fc?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Yoga Flow',
    time: '09:00 AM',
    instructor: 'Maria S.',
    intensity: 'Baja',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'HIIT Circuit',
    time: '06:00 PM',
    instructor: 'Carlos D.',
    intensity: 'Alta',
    image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=2025&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Spinning',
    time: '07:30 PM',
    instructor: 'Elena P.',
    intensity: 'Media',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop'
  }
];

const Classes: React.FC = () => {
  return (
    <section id="classes" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Nuestras Clases
          </h2>
          <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto">
            Desde alta intensidad hasta recuperación plena. Encuentra tu ritmo con nuestros instructores certificados.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {classes.map((cls) => (
            <div key={cls.id} className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={cls.image} 
                  alt={cls.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    cls.intensity === 'Alta' ? 'bg-red-100 text-red-800' : 
                    cls.intensity === 'Media' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-green-100 text-green-800'
                  }`}>
                    <Flame className="w-3 h-3 mr-1" />
                    {cls.intensity}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                  {cls.title}
                </h3>
                
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-slate-500">
                    <Clock className="flex-shrink-0 mr-1.5 h-4 w-4 text-brand-500" />
                    {cls.time}
                  </div>
                  <div className="flex items-center text-sm text-slate-500">
                    <Users className="flex-shrink-0 mr-1.5 h-4 w-4 text-brand-500" />
                    {cls.instructor}
                  </div>
                </div>
                
                <button className="mt-6 w-full bg-slate-50 hover:bg-brand-50 text-brand-700 font-medium py-2 rounded-lg transition-colors text-sm border border-slate-200 hover:border-brand-200">
                  Reservar Plaza
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;