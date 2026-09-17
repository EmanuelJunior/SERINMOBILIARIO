"use client";

import React from "react";
import { Property } from "../types";
import { PropertyCard } from "./PropertyCard";
import { PropertyCardSkeleton } from "@/components/feedback/loading";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyGridProps {
  properties: Property[];
  isLoading?: boolean;
  onResetFilters?: () => void;
}

export const PropertyGrid: React.FC<PropertyGridProps> = ({
  properties,
  isLoading = false,
  onResetFilters,
}) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <PropertyCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div className="bg-cream-50/50 border border-sand-300/80 rounded-xs p-12 text-center max-w-xl mx-auto my-12">
        <div className="w-16 h-16 rounded-full bg-forest-900/5 text-forest-900 flex items-center justify-center mx-auto mb-4">
          <Home className="w-8 h-8 text-forest-800/70" />
        </div>
        <h3 className="font-serif text-2xl text-forest-950 font-bold mb-2">
          No se encontraron propiedades
        </h3>
        <p className="text-xs text-sand-500 max-w-sm mx-auto mb-6 leading-relaxed">
          No hay propiedades que coincidan exactamente con tus criterios de búsqueda actuales en Santa Marta. Intenta ajustar o limpiar los filtros.
        </p>
        {onResetFilters && (
          <Button variant="primary" size="sm" onClick={onResetFilters}>
            Restablecer todos los filtros
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};
