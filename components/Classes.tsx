import React, { useState } from 'react';
import { Clock, Users, Flame, CheckCircle, Calendar, X } from 'lucide-react';
import { ClassSession } from '../types';

const classes: ClassSession[] = [
  {
    id: '1',
    title: 'CrossFit Elite',
    instructor: 'Alex R.',
    intensity: 'Alta',
    image: 'https://images.unsplash.com/photo-1533560904424-a0c61dc306fc?q=80&w=2070&auto=format&fit=crop',
    schedule: ['07:00 AM', '09:30 AM', '18:00 PM', '20:30 PM']
  },
  {
    id: '2',
    title: 'Yoga Flow',
    instructor: 'Maria S.',
    intensity: 'Baja',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop',
    schedule: ['08:00 AM', '10:00 AM', '17:30 PM', '19:00 PM']
  },
  {
    id: '3',
    title: 'HIIT Circuit',
    instructor: 'Carlos D.',
    intensity: 'Alta',
    image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=2025&auto=format&fit=crop',
    schedule: ['07:30 AM', '12:30 PM', '18:30 PM', '21:00 PM']
  },
  {
    id: '4',
    title: 'Spinning',
    instructor: 'Elena P.',
    intensity: 'Media',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
    schedule: ['07:15 AM', '09:00 AM', '19:15 PM', '20:45 PM']
  }
];

const Classes: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<ClassSession | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'success'>('idle');

  const handleBook = () => {
    if (selectedClass && selectedTime) {
      // Simulate booking
      setBookingStatus('success');
      setTimeout(() => {
        setBookingStatus('idle');
        setSelectedClass(null);
        setSelectedTime(null);
      }, 3000);
    }
  };

  return (
    <section id="classes" className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Nuestras Clases Dirigidas
          </h2>
          <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto">
            Selecciona tu clase favorita, elige un horario y asegura tu plaza en segundos.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {classes.map((cls) => (
            <div key={cls.id} className="group relative bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-slate-100 flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={cls.image} 
                  alt={cls.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    cls.intensity === 'Alta' ? 'bg-red-500 text-white' : 
                    cls.intensity === 'Media' ? 'bg-yellow-500 text-white' : 
                    'bg-green-500 text-white'
                  }`}>
                    <Flame className="w-3 h-3 mr-1" />
                    Intensidad {cls.intensity}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {cls.title}
                  </h3>
                  <div className="flex items-center text-brand-200 text-xs font-medium">
                    <Users className="flex-shrink-0 mr-1.5 h-3.5 w-3.5" />
                    Instructor: {cls.instructor}
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-sm text-slate-500 mb-6 line-clamp-2">
                  Sesión dinámica enfocada en {cls.title.toLowerCase()} para todos los niveles de condición física.
                </p>
                
                <div className="space-y-4 mb-6">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center">
                    <Clock className="w-3 h-3 mr-2 text-brand-600" />
                    Horarios Disponibles Hoy
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {cls.schedule.map((time) => (
                      <div 
                        key={time}
                        className="text-[11px] font-semibold text-slate-600 bg-slate-50 border border-slate-100 py-1.5 px-2 rounded-lg text-center"
                      >
                        {time}
                      </div>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={() => {
                    setSelectedClass(cls);
                    setSelectedTime(null);
                    setBookingStatus('idle');
                  }}
                  className="mt-auto w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-2xl transition-all shadow-lg shadow-brand-100 transform active:scale-95 flex items-center justify-center gap-2"
                >
                  Reservar Plaza
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {selectedClass && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300" onClick={() => setSelectedClass(null)}></div>
          
          <div className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            {bookingStatus === 'success' ? (
              <div className="p-12 text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">¡Reserva Confirmada!</h3>
                <p className="text-slate-500 mb-8">
                  Te esperamos en <strong>{selectedClass.title}</strong> a las <strong>{selectedTime}</strong>. 
                  Llega 5 minutos antes para el check-in.
                </p>
              </div>
            ) : (
              <>
                <div className="p-6 bg-brand-600 text-white flex justify-between items-center">
                  <h3 className="text-lg font-bold">Reserva tu plaza</h3>
                  <button onClick={() => setSelectedClass(null)} className="p-1 hover:bg-white/20 rounded-full">
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <img src={selectedClass.image} className="w-16 h-16 rounded-2xl object-cover" alt="" />
                    <div>
                      <h4 className="font-bold text-slate-900">{selectedClass.title}</h4>
                      <p className="text-sm text-slate-500">{selectedClass.instructor}</p>
                    </div>
                  </div>

                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Selecciona una sesión:</label>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {selectedClass.schedule.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 px-4 rounded-xl border-2 transition-all font-bold text-sm ${
                          selectedTime === time 
                          ? 'border-brand-600 bg-brand-50 text-brand-600 shadow-inner' 
                          : 'border-slate-100 hover:border-brand-200 text-slate-600'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>

                  <button
                    disabled={!selectedTime}
                    onClick={handleBook}
                    className="w-full py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-2xl shadow-xl shadow-brand-100 disabled:opacity-50 disabled:shadow-none transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="h-5 w-5" />
                    Confirmar Reserva
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Classes;