
import React from 'react';
import { motion } from 'framer-motion';
import { AppLinkButton } from './Button';
import { Camera, Brain, GraduationCap, Check, Sparkles, Calculator, BookOpen, Atom, ArrowRight, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-24 lg:pt-52 lg:pb-40 overflow-hidden hero-grid">
      {/* Background Blobs */}
      <div className="blob bg-blue-300 w-[500px] h-[500px] rounded-full top-0 -left-64 opacity-20"></div>
      <div className="blob bg-purple-300 w-[500px] h-[500px] rounded-full -bottom-32 -right-32 opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          
          {/* Left Side: Text Content */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-bold uppercase tracking-widest mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 mr-2" />
              Revolucionando el Ingreso Universitario
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-8xl font-black tracking-tight mb-8 text-slate-950 leading-[1.05]"
            >
              Asegura tu vacante con <span className="gradient-text">IA Generativa</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-2xl"
            >
              NIVELAPP es tu tutor personal 24/7. Resuelve ejercicios con una foto, domina temas complejos en minutos y prepárate para los exámenes más difíciles de LATAM.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start"
            >
              <AppLinkButton 
                className="!text-xl !px-10 !py-5 shadow-2xl shadow-brand-500/40 w-full sm:w-auto hover:translate-y-[-2px]" 
                text="Probar Gratis Ahora" 
              />
              <button 
                onClick={() => document.getElementById('use-cases')?.scrollIntoView({behavior: 'smooth'})}
                className="group inline-flex items-center justify-center px-10 py-5 border-2 border-slate-200 text-lg font-bold rounded-full text-slate-700 hover:border-brand-500 hover:text-brand-600 hover:bg-white transition-all bg-white w-full sm:w-auto shadow-sm"
              >
                <Play className="mr-3 h-5 w-5 fill-current" />
                Cómo Funciona
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-10 flex items-center justify-center lg:justify-start gap-8"
            >
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?u=${i}`} alt="User" />
                ))}
                <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold">+2k</div>
              </div>
              <p className="text-sm text-slate-500 font-medium">Únete a más de <span className="text-slate-900 font-bold">2,000 estudiantes</span> preparándose hoy.</p>
            </motion.div>
          </div>

          {/* Right Side: Dynamic Visualization */}
          <div className="lg:w-2/5 relative perspective flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, rotateY: 20, scale: 0.9 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative z-10 w-[300px] md:w-[320px] bg-white rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border-[12px] border-slate-950 overflow-hidden animate-float"
            >
              {/* Phone Content Simulation */}
              <div className="bg-white h-[580px] flex flex-col font-sans">
                <div className="h-7 bg-slate-950 flex items-center justify-center">
                  <div className="w-16 h-4 bg-slate-900 rounded-full"></div>
                </div>
                
                <div className="p-5 flex-1 space-y-5 bg-slate-50">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-black text-slate-900 uppercase">NivelApp AI</span>
                    <Sparkles className="w-4 h-4 text-yellow-500" />
                  </div>

                  <div className="bg-white p-4 rounded-2xl shadow-soft border border-slate-100 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center text-brand-600">
                        <Camera className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-bold text-slate-800">Escaneando ejercicio...</span>
                    </div>
                    <div className="h-32 bg-slate-100 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-200">
                      <Calculator className="w-8 h-8 text-slate-300" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex gap-2">
                       <div className="w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center text-[10px] text-white font-bold">AI</div>
                       <div className="bg-brand-600 text-white p-3 rounded-2xl rounded-tl-none text-xs font-medium max-w-[85%] shadow-lg">
                         Detecto una integral por partes. ¿Quieres la resolución paso a paso?
                       </div>
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-soft border border-slate-100 space-y-2">
                       <p className="text-[10px] font-bold text-brand-600">PASO 1</p>
                       <p className="text-xs text-slate-700 leading-tight">Identificamos u = ln(x) y dv = x dx...</p>
                       <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="h-full bg-brand-500"
                          />
                       </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orbiting Elements - Moved inside to ensure relative/z-index context if needed, but keeping absolute positions */}
            </motion.div>

            {/* Orbiting Elements with higher z-index to stay ON TOP of the phone */}
            <div className="absolute -top-10 -right-10 z-20 bg-white p-4 rounded-2xl shadow-2xl animate-float-delayed border border-slate-100 flex items-center gap-3">
               <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                  <BookOpen className="w-6 h-6" />
               </div>
               <div>
                  <p className="text-xs font-black text-slate-900">PDF Resumido</p>
                  <p className="text-[10px] text-slate-500">24 páginas → 2 min</p>
               </div>
            </div>

            <div className="absolute bottom-10 -left-16 z-20 bg-white p-4 rounded-2xl shadow-2xl animate-float border border-slate-100 flex items-center gap-3">
               <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                  <Check className="w-6 h-6" />
               </div>
               <div>
                  <p className="text-xs font-black text-slate-900">Examen Listo</p>
                  <p className="text-[10px] text-slate-500">Nivel: Avanzado</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
