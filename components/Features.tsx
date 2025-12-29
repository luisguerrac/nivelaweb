import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Camera, Brain, Layers, GraduationCap, Zap } from 'lucide-react';

const features = [
  {
    icon: <FileText className="h-6 w-6 text-brand-600" />,
    title: "Sube tu PDF y Estudia",
    description: "Carga libros o guías en PDF. NIVELAPP analiza el contenido y genera automáticamente un plan de estudio detallado para tu nivelación."
  },
  {
    icon: <Camera className="h-6 w-6 text-accent-600" />,
    title: "Foto-Solución con IA",
    description: "¿Trabado en un ejercicio? Toma una foto o sube la imagen. Nuestra IA te explica en tiempo real cómo resolverlo paso a paso."
  },
  {
    icon: <Layers className="h-6 w-6 text-green-600" />,
    title: "Ecosistema de Aprendizaje",
    description: "Cada lección incluye Flashcards para memorizar, Explicación textual detallada y un Examen de conocimientos."
  },
  {
    icon: <Brain className="h-6 w-6 text-yellow-500" />,
    title: "Tutor IA en Cada Lección",
    description: "Nunca estudiarás solo. Un asistente virtual experto en el tema está disponible 24/7 en cada módulo para resolver tus dudas."
  },
  {
    icon: <GraduationCap className="h-6 w-6 text-pink-500" />,
    title: "Simulacros de Ingreso",
    description: "Entrena con exámenes tipo admisión de las mejores universidades. Mide tu tiempo y puntaje real antes del gran día."
  },
  {
    icon: <Zap className="h-6 w-6 text-orange-500" />,
    title: "Nivelación Acelerada",
    description: "Detectamos tus vacíos académicos y adaptamos el contenido para que alcances el nivel universitario en tiempo récord."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">Herramientas Poderosas</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Todo lo que necesitas para Ingresar
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            NIVELAPP combina tecnología visual y textual para que aprendas más rápido.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="relative p-8 bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-accent-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="bg-slate-50 rounded-xl p-4 inline-block mb-6 group-hover:bg-brand-50 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};