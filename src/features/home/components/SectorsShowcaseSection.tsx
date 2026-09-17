"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Sector } from "@/features/sectors/types";
import { SectorCard } from "@/features/sectors/components/SectorCard";
import { Button } from "@/components/ui/button";

interface SectorsShowcaseSectionProps {
  sectors: Sector[];
}

export const SectorsShowcaseSection: React.FC<SectorsShowcaseSectionProps> = ({ sectors }) => {
  // Tomamos los 4 sectores requeridos: Bello Horizonte, Rodadero, Salguero, Pozos Colorados
  const targetSectors = sectors.filter((s) =>
    ["bello-horizonte", "playa-salguero", "pozos-colorados", "el-rodadero"].includes(s.slug)
  );

  return (
    <section className="py-24 bg-forest-950 text-cream-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-luxury opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-luxury text-gold-400 font-semibold mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>Polos de Crecimiento & Valorización</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Sectores Estratégicos de Santa Marta
            </h2>
            <p className="text-sm text-cream-200/80 mt-3 font-sans leading-relaxed">
              Explora las zonas residenciales y turísticas más codiciadas de la Perla de América. Cada sector ofrece un estilo de vida distintivo y rendimientos inmobiliarios sólidos.
            </p>
          </div>

          <Link href="/sectores">
            <Button variant="gold-outline" size="md" className="group">
              <span>Explorar todos los sectores</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Sectors 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {targetSectors.map((sector) => (
            <SectorCard key={sector.id} sector={sector} />
          ))}
        </div>
      </div>
    </section>
  );
};
