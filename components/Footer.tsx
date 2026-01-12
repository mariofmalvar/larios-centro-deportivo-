import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Dumbbell } from 'lucide-react';
import { View } from '../App';

interface FooterProps {
  setView: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer id="footer" className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-brand-600 p-1.5 rounded-md">
                <Dumbbell className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tighter">Larios <span className="text-brand-200">Sport Center</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Transformando vidas a través del movimiento y la tecnología. El primer gimnasio inteligente de la ciudad.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><button onClick={() => setView('home')} className="hover:text-brand-200 transition-colors text-left">Inicio</button></li>
              <li><button onClick={() => setView('classes')} className="hover:text-brand-200 transition-colors text-left">Clases</button></li>
              <li><button onClick={() => setView('ai-coach')} className="hover:text-brand-200 transition-colors text-left">Entrenador IA</button></li>
              <li><button onClick={() => setView('pricing')} className="hover:text-brand-200 transition-colors text-left">Precios</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Horario</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex justify-between"><span>Lunes - Viernes:</span> <span>05:00 - 23:00</span></li>
              <li className="flex justify-between"><span>Sábados:</span> <span>07:00 - 21:00</span></li>
              <li className="flex justify-between"><span>Domingos:</span> <span>08:00 - 20:00</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contacto</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-brand-200 flex-shrink-0" />
                <span>Av. Principal 123, Ciudad Deportiva, CP 28001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-brand-200 flex-shrink-0" />
                <span>+34 912 345 678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-brand-200 flex-shrink-0" />
                <span>info@lariossport.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Larios Sport Center. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;