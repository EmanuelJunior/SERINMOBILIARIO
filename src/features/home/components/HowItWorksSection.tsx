"use client";

import React from "react";
import { Search, CalendarCheck, Home, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Encuentra",
      subtitle: "Exploración Inteligente",
      description:
        "Navega por nuestro catálogo curado con filtros de alta precisión: sectores de Santa Marta, vistas frontales al mar, rentabilidad vacacional o tipologías exclusivas.",
      icon: Search,
    },
    {
      number: "02",
      title: "Agenda",
      subtitle: "Sincronización Inmediata con Clientify",
      description:
        "Selecciona el día y hora que mejor se acomoden a tu itinerario. Puedes elegir entre recorrido presencial guiado en Santa Marta o videollamada interactiva en vivo.",
      icon: CalendarCheck,
    },
    {
      number: "03",
      title: "Conoce",
      subtitle: "Decisión Segura & Patrimonio",
      description:
        "Visita la propiedad junto a un asesor patrimonial senior de SERINMOBILIARIO. Revisión minuciosa de documentación, tradición legal y cierre transparente.",
      icon: Home,
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-luxury text-gold-700 font-semibold block mb-2 font-sans">
            Experiencia Digital Fluida
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950">
            ¿Cómo Funciona Nuestra Plataforma?
          </h2>
          <p className="text-sm text-sand-500 mt-3 font-sans leading-relaxed">
            Hemos simplificado el proceso de búsqueda, agendamiento y adquisición inmobiliaria para que cada paso sea ágil, claro y seguro.
          </p>
        </div>

        {/* Steps 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative p-8 rounded-xs bg-cream-50/50 border border-sand-200 hover:border-gold-500/50 hover:shadow-luxury transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xs bg-forest-950 text-gold-400 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-forest-950 transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="font-serif text-3xl font-bold text-sand-300 group-hover:text-gold-500/40 transition-colors">
                    {step.number}
                  </span>
                </div>

                <span className="text-[10px] uppercase tracking-luxury text-gold-700 font-semibold block mb-1">
                  {step.subtitle}
                </span>

                <h3 className="font-serif text-2xl font-bold text-forest-950 mb-3 group-hover:text-gold-700 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-sand-500 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link href="/propiedades">
            <Button variant="gold" size="lg">
              <span>Iniciar búsqueda ahora</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
