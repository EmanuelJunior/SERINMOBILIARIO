"use client";

import React from "react";
import { Property } from "../types";
import { PropertyCard } from "./PropertyCard";

interface SimilarPropertiesProps {
  properties: Property[];
}

export const SimilarProperties: React.FC<SimilarPropertiesProps> = ({ properties }) => {
  if (properties.length === 0) return null;

  return (
    <div className="mt-16 pt-12 border-t border-sand-200">
      <div className="mb-8 text-center max-w-xl mx-auto">
        <span className="text-xs uppercase tracking-luxury text-gold-600 font-semibold block mb-2">
          Colección Relacionada
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
          Propiedades Similares en Santa Marta
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((prop) => (
          <PropertyCard key={prop.id} property={prop} />
        ))}
      </div>
    </div>
  );
};
