
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { UseCases } from './components/UseCases';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { AppLinkButton } from './components/Button';
import { Gift, Sparkles, AlertCircle, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BetaModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md"
  >
    <motion.div 
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 20 }}
      className="bg-white rounded-[2rem] p-10 max-w-md w-full shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] border border-slate-200 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-2.5 bg-gradient-to-r from-brand-500 to-accent-600"></div>
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full bg-slate-50 text-slate-400 hover:text-slate-900 transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
      
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 bg-brand-50 text-brand-600 rounded-3xl flex items-center justify-center mb-8 rotate-3">
          <AlertCircle className="w-12 h-12" />
        </div>
        <h3 className="text-3xl font-black text-slate-950 mb-4 tracking-tight">Acceso Beta</h3>
        <p className="text-slate-600 mb-10 text-lg leading-relaxed">
          NIVELAPP está en fase de lanzamiento. Únete ahora para ser de los primeros en experimentar el poder de la <span className="text-brand-600 font-bold underline decoration-brand-200 underline-offset-4">Educación con IA</span>.
        </p>
        <button 
          onClick={onClose}
          className="group w-full py-5 bg-slate-950 text-white rounded-2xl font-black text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-950/20 flex items-center justify-center gap-3"
        >
          Entendido, ¡Vamos!
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  </motion.div>
);

const App: React.FC = () => {
  const [showBeta, setShowBeta] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBeta(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-500 selection:text-white">
      <AnimatePresence>
        {showBeta && <BetaModal onClose={() => setShowBeta(false)} />}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        
        <Features />
        
        {/* Free Access Highlight */}
        <section className="py-24 bg-slate-950 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-brand-500/20 blur-[150px] -z-10 rounded-full"></div>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center p-4 bg-brand-500/10 text-brand-400 rounded-3xl mb-8 border border-brand-500/20"
            >
              <Gift className="w-10 h-10" />
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
              Educación de Calidad, <span className="text-brand-500">Totalmente Gratis</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              El acceso a la universidad debe ser un derecho, no un privilegio. Por eso, todas nuestras herramientas de IA son gratuitas. Sin tarjetas, sin suscripciones ocultas.
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              <div className="flex items-center gap-3 text-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center border border-slate-800 shadow-xl">
                   <Sparkles className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-black uppercase tracking-wider text-slate-500">Inversión</p>
                  <p className="text-xl font-bold">$0.00 / mes</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center border border-slate-800 shadow-xl">
                   <Sparkles className="w-6 h-6 text-brand-400" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-black uppercase tracking-wider text-slate-500">Acceso</p>
                  <p className="text-xl font-bold">Ilimitado</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky CTA for Mobile */}
        <div className="fixed bottom-8 left-0 w-full z-40 px-6 md:hidden pointer-events-none">
            <div className="max-w-md mx-auto pointer-events-auto">
              <AppLinkButton 
                className="w-full !rounded-2xl !py-5 shadow-[0_20px_40px_-10px_rgba(14,165,233,0.5)] font-black text-lg uppercase tracking-tight" 
                text="Probar Gratis" 
              />
            </div>
        </div>

        <UseCases />
        
        {/* Giant Call to Action */}
        <section className="py-32 bg-brand-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tighter"
                >
                  ¿Listo para dominar tu examen de admisión?
                </motion.h2>
                <p className="text-xl md:text-2xl text-brand-50 mb-14 max-w-3xl mx-auto font-medium opacity-90 leading-relaxed">
                  Únete a miles de estudiantes que ya están hackeando su aprendizaje con IA. El futuro de tu carrera empieza hoy.
                </p>
                <div className="inline-block p-2 bg-white/10 rounded-[2.5rem] backdrop-blur-md">
                   <AppLinkButton 
                     className="!text-2xl !px-16 !py-7 !bg-slate-950 !text-white hover:!bg-slate-800 hover:scale-[1.02] !shadow-2xl font-black tracking-tight transition-all" 
                     text="Empezar Ahora - Es Gratis" 
                   />
                </div>
            </div>
        </section>

        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
