
import React from 'react';
import { Brain, Github, Twitter, Linkedin, Heart } from 'lucide-react';
import { AppLinkButton } from './Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-brand-600 p-2 rounded-xl mr-3">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight">
                NIVEL<span className="text-brand-500">APP</span>
              </span>
            </div>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Empoderando a la próxima generación de profesionales con herramientas de IA de vanguardia. Educación libre, abierta y potente.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="p-2.5 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-all"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="p-2.5 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-all"><Github className="h-5 w-5" /></a>
              <a href="#" className="p-2.5 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-all"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 tracking-tight">Plataforma</h4>
            <ul className="space-y-4 text-base text-slate-400">
              <li><a href="#features" className="hover:text-brand-400 transition-colors">Características</a></li>
              <li><a href="#use-cases" className="hover:text-brand-400 transition-colors">Casos de Uso</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Simulacros</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">API para Colegios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 tracking-tight">Recursos</h4>
            <ul className="space-y-4 text-base text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Guía de Estudio</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Blog Académico</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Soporte 24/7</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Privacidad</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 tracking-tight">Tu Futuro</h4>
            <p className="text-slate-400 text-base mb-8 leading-relaxed">
              No dejes tu ingreso a la suerte. Obtén la ventaja competitiva que necesitas hoy.
            </p>
            <AppLinkButton className="w-full justify-center !py-4 !rounded-2xl shadow-2xl shadow-brand-600/20" text="Entrar a la App" />
          </div>
        </div>

        <div className="border-t border-slate-900 pt-12 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p className="mb-4 md:mb-0 font-medium">
            &copy; {new Date().getFullYear()} NIVELAPP. Hecho con <Heart className="inline w-3.5 h-3.5 text-red-500 fill-current" /> para estudiantes de LATAM.
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
