
import React from 'react';
import { CheckCircle } from 'lucide-react';

const cases = [
  {
    title: "Escaneo de Ejercicios: La IA explica lo que ve",
    // Image: Smartphone being used to scan math/study notes on a desk
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=800&q=80", 
    points: [
      "Toma una foto de cualquier ejercicio matemático o científico", 
      "La IA analiza la imagen y detecta los enunciados automáticamente", 
      "Recibe una explicación paso a paso de la resolución"
    ],
    color: "text-brand-600"
  },
  {
    title: "De PDF a Flashcards Interactivas",
    // Image: Tablet showing digital study flashcards and notes
    image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=800&q=80",
    points: [
      "Sube tus guías de estudio o libros en formato PDF", 
      "NIVELAPP extrae los conceptos clave y crea tarjetas de memoria", 
      "Estudia de forma eficiente con repetición espaciada"
    ],
    color: "text-accent-600"
  },
  {
    title: "Comprensión Literaria y Evaluación Online",
    // Image: Happy group of students with a laptop/tablet representing success and satisfaction
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    points: [
      "Resúmenes inteligentes de textos literarios complejos", 
      "Evaluaciones en línea automáticas al finalizar cada lectura", 
      "Estudiantes felices y preparados para el éxito académico"
    ],
    color: "text-green-600"
  }
];

export const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center md:text-left">
            Adaptado a tu Carrera
          </h2>
          <div className="h-1 w-20 bg-brand-600 rounded-full mx-auto md:mx-0"></div>
          <p className="mt-4 text-xl text-slate-600 text-center md:text-left">
            No importa qué estudies, las herramientas de PDF y Foto de NIVELAPP se adaptan a ti.
          </p>
        </div>

        <div className="space-y-24">
          {cases.map((item, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              {/* Image Side */}
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute inset-0 bg-brand-600 rounded-3xl transform rotate-3 opacity-10 group-hover:rotate-6 transition-transform duration-300"></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="relative rounded-3xl shadow-2xl w-full object-cover h-72 md:h-96 transition-all duration-500 hover:scale-[1.02] border border-white"
                />
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-100 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity"></div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">{item.title}</h3>
                <ul className="space-y-5">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start justify-center md:justify-start">
                      <CheckCircle className={`h-6 w-6 ${item.color} mr-3 mt-1 flex-shrink-0`} />
                      <span className="text-lg text-slate-700 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
