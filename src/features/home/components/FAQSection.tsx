"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "¿Pueden extranjeros comprar propiedades e invertir legalmente en Santa Marta?",
      a: "Sí, la legislación colombiana permite a personas extranjeras adquirir bienes inmuebles en el país con plenos derechos de propiedad privada mediante escritura pública registrada ante Notaría y la Oficina de Instrumentos Públicos. Además, inversiones inmobiliarias superiores a ciertos montos pueden calificar para la obtención de visa de inversionista o residente.",
    },
    {
      q: "¿Cómo garantizan la seguridad jurídica de las propiedades comercializadas?",
      a: "Bajo nuestro lema 'Su confianza es nuestra seguridad', realizamos un exhaustivo estudio de títulos a 20 años de tradición, verificación de gravámenes, embargos o pleitos pendientes, paz y salvo de impuestos prediales y de administración. Solo comercializamos propiedades debidamente saneadas.",
    },
    {
      q: "¿Cómo funciona el agendamiento de visitas presenciales y virtuales?",
      a: "A través de nuestra plataforma, puedes elegir la propiedad de tu interés, seleccionar el día y la hora que mejor te convenga. Tu cita queda automáticamente programada y sincronizada con nuestro sistema comercial Clientify, y un asesor senior se comunicará contigo de inmediato para coordinar los accesos.",
    },
    {
      q: "¿Qué rentabilidad promedio genera un apartamento turístico en Bello Horizonte o Playa Salguero?",
      a: "Los apartamentos turísticos con licencia y administración hotelera profesional en primera línea de playa en Santa Marta registran rentabilidades netas anuales entre el 9% y el 13%, superando con creces la renta tradicional y beneficiándose adicionalmente de la valorización del metro cuadrado.",
    },
    {
      q: "¿Qué costos adicionales implica la compra de un inmueble en Colombia?",
      a: "Comúnmente, los gastos notariales se comparten por partes iguales (50% comprador, 50% vendedor). Los derechos de registro y el impuesto de beneficencia corresponden al comprador (aproximadamente 2.5% a 3% del valor escriturado). Nuestro equipo te entrega una liquidación exacta y transparente antes de firmar promesa de compraventa.",
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-sand-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-luxury text-gold-700 font-semibold mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Respuestas Claras</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950">
            Preguntas Frecuentes
          </h2>
          <p className="text-sm text-sand-500 mt-3 font-sans">
            Resolvemos tus dudas sobre compras, trámites notariales, inversiones extranjeras y arriendos en Santa Marta.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-sand-200 rounded-xs overflow-hidden transition-all bg-cream-50/40"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-cream-100 transition-colors"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-forest-950">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold-600 shrink-0 transition-transform duration-300 ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-sand-500 font-sans leading-relaxed border-t border-sand-200/60 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
