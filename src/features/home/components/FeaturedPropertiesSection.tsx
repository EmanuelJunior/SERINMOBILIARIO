"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Property } from "@/features/properties/types";
import { PropertyCard } from "@/features/properties/components/PropertyCard";
import { Button } from "@/components/ui/button";

interface FeaturedPropertiesSectionProps {
  properties: Property[];
}

export const FeaturedPropertiesSection: React.FC<FeaturedPropertiesSectionProps> = ({
  properties,
}) => {
  const displayProperties = properties.slice(0, 8);

  return (
    <section className="py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-luxury text-gold-700 font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Colección Exclusiva</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-950 tracking-tight">
              Propiedades Destacadas
            </h2>
            <p className="text-sm text-sand-500 mt-3 font-sans leading-relaxed">
              Curaduría de inmuebles de alto valor arquitectónico, ubicaciones privilegiadas y alto potencial de rentabilidad en Santa Marta.
            </p>
          </div>

          <Link href="/propiedades">
            <Button variant="outline" size="md" className="group">
              <span>Ver catálogo completo</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};
