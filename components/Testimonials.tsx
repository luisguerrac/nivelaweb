import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Mateo L.",
    role: "Ingresó a Ing. Sistemas",
    content: "La función de tomar foto a los ejercicios me salvó. Tenía guías viejas sin respuestas, y la IA me explicó cómo resolver cada una paso a paso.",
    image: "https://picsum.photos/seed/mateo/100/100"
  },
  {
    name: "Sofía R.",
    role: "Ingresó a Medicina",
    content: "Subí mis PDFs de biología y NIVELAPP me creó un plan de estudio con flashcards automáticas. Estudiar anatomía fue mucho más fácil así.",
    image: "https://picsum.photos/seed/sofia/100/100"
  },
  {
    name: "Andrés C.",
    role: "Ingresó a Arquitectura",
    content: "Me encantó tener un Tutor IA en cada lección. Si no entendía algo del texto, le preguntaba ahí mismo y me daba ejemplos extra.",
    image: "https://picsum.photos/seed/andres/100/100"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Estudiantes que Lograron su Ingreso
          </h2>
          <p className="mt-4 text-xl text-slate-500">
            Historias reales de éxito usando la tecnología de NIVELAPP.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 relative hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-8 italic leading-relaxed">"{t.content}"</p>
              <div className="flex items-center">
                <img src={t.image} alt={t.name} className="h-12 w-12 rounded-full ring-2 ring-brand-200" />
                <div className="ml-4">
                  <h4 className="text-slate-900 font-bold">{t.name}</h4>
                  <p className="text-brand-600 text-sm font-semibold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};