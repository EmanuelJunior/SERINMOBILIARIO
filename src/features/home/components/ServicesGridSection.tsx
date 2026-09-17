"use client";

import React from "react";
import Link from "next/link";
import { KeyRound, TrendingUp, ShieldCheck, Home, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";

export const ServicesGridSection: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: "Comprar Propiedades",
      subtitle: "Portafolio Selecto",
      description:
        "Acceso exclusivo a residencias frente al mar, penthouses y villas privadas en Santa Marta. Acompañamiento jurídico de principio a fin.",
      link: "/propiedades?operation=venta",
      cta: "Ver portafolio en venta",
    },
    {
      icon: KeyRound,
      title: "Vender tu Inmueble",
      subtitle: "Máxima Exposición",
      description:
        "Estrategia de comercialización premium, fotografía arquitectónica, segmentación de compradores calificados y cierre seguro.",
      link: "/vende-tu-propiedad",
      cta: "Consignar mi propiedad",
    },
    {
      icon: ShieldCheck,
      title: "Arrendamiento Premium",
      subtitle: "Garantía y Tranquilidad",
      description:
        "Gestión integral de rentas corporativas y residenciales con póliza de arrendamiento y calificación exhaustiva de inquilinos.",
      link: "/propiedades?operation=arriendo",
      cta: "Explorar arriendos",
    },
    {
      icon: TrendingUp,
      title: "Inversión Inmobiliaria",
      subtitle: "Rendimientos Turísticos",
      description:
        "Asesoría en activos con rentabilidad hotelera en Bello Horizonte y Salguero, proyecciones de plusvalía y retorno de capital en dólares o pesos.",
      link: "/servicios",
      cta: "Conocer modelos de inversión",
    },
  ];

  return (
    <section className="py-24 bg-cream-50/70 border-y border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-luxury text-gold-700 font-semibold block mb-2 font-sans">
            Soluciones Integrales
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950">
            Nuestros Servicios Corporativos
          </h2>
          <p className="text-sm text-sand-500 mt-3 font-sans leading-relaxed">
            Estructuramos procesos transparentes y confidenciales respaldados por el lema que guía cada una de nuestras operaciones.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                variant="default"
                hoverEffect
                className="p-8 flex flex-col justify-between group bg-white border border-sand-200"
              >
                <div>
                  <div className="w-12 h-12 rounded-xs bg-forest-950 text-gold-400 flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-forest-950 transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] uppercase tracking-luxury text-gold-700 font-semibold block mb-1">
                    {service.subtitle}
                  </span>

                  <h3 className="font-serif text-xl font-bold text-forest-950 mb-3 group-hover:text-gold-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-sand-500 leading-relaxed font-sans">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-sand-100">
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-forest-900 group-hover:text-gold-600 transition-colors"
                  >
                    <span>{service.cta}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
