"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        "Buscábamos un penthouse frente al mar en Bello Horizonte tanto para disfrute familiar como para rentas vacacionales. La discreción, el estudio jurídico del predio y la sincronización con el agendamiento nos dieron la total certidumbre de compra.",
      author: "Dr. Roberto Silva & Familia",
      location: "Bogotá D.C. — Propietarios en Bello Horizonte",
      role: "Inversionistas Residenciales",
    },
    {
      quote:
        "Adquirí un apartamento turístico en Playa Salguero asesorado por SERINMOBILIARIO. El inmueble ya se encuentra operando con un 84% de ocupación comprobada. Su lema 'Su confianza es nuestra seguridad' se cumplió al 100%.",
      author: "Ing. Mauricio Valenzuela",
      location: "Medellín — Inversionista en Salguero",
      role: "Inversionista Turístico",
    },
    {
      quote:
        "Consigné mi propiedad en Pozos Colorados para la venta y en menos de 45 días encontramos un comprador calificado. La presentación visual y la gestión notarial de escrituración fueron impecables.",
      author: "Beatriz Helena Cárdenas",
      location: "Santa Marta — Propietaria Vendedora",
      role: "Propietaria",
    },
  ];

  return (
    <section className="py-24 bg-cream-50/70 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-luxury text-gold-700 font-semibold block mb-2 font-sans">
            Historias de Éxito
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950">
            La Confianza de Nuestros Clientes
          </h2>
          <p className="text-sm text-sand-500 mt-3 font-sans leading-relaxed">
            Testimonios reales de compradores, inversionistas y propietarios que han consolidado su patrimonio en Santa Marta con nosotros.
          </p>
        </div>

        {/* Testimonials 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xs bg-white border border-sand-200 shadow-sm flex flex-col justify-between relative group hover:border-gold-500/50 hover:shadow-luxury transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-gold-500/20 mb-4" />

              <div className="flex items-center gap-1 mb-4 text-gold-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-500" />
                ))}
              </div>

              <p className="text-xs sm:text-sm text-forest-900/90 font-serif italic leading-relaxed mb-6">
                "{t.quote}"
              </p>

              <div className="pt-4 border-t border-sand-100 font-sans">
                <strong className="block text-sm font-semibold text-forest-950">
                  {t.author}
                </strong>
                <span className="text-[11px] text-gold-700 block font-medium">
                  {t.role}
                </span>
                <span className="text-[10px] text-sand-400 block mt-0.5">
                  {t.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
