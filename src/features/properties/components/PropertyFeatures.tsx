"use client";

import React from "react";
import {
  Bed,
  Bath,
  Maximize2,
  Car,
  Layers,
  Calendar,
  Waves,
  Sparkles,
  ShieldCheck,
  Wind,
  CheckCircle2,
} from "lucide-react";
import { Property } from "../types";
import { formatArea } from "@/utils/format";

interface PropertyFeaturesProps {
  property: Property;
}

export const PropertyFeatures: React.FC<PropertyFeaturesProps> = ({ property }) => {
  return (
    <div className="space-y-8">
      {/* Key Numeric Specs Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="p-4 bg-cream-50/70 border border-sand-200 rounded-xs text-center">
          <Bed className="w-5 h-5 mx-auto text-forest-800 mb-1.5" />
          <span className="text-[11px] uppercase tracking-wider text-sand-500 block">
            Habitaciones
          </span>
          <span className="font-serif text-xl font-bold text-forest-950">
            {property.bedrooms}
          </span>
        </div>

        <div className="p-4 bg-cream-50/70 border border-sand-200 rounded-xs text-center">
          <Bath className="w-5 h-5 mx-auto text-forest-800 mb-1.5" />
          <span className="text-[11px] uppercase tracking-wider text-sand-500 block">
            Baños
          </span>
          <span className="font-serif text-xl font-bold text-forest-950">
            {property.bathrooms}
          </span>
        </div>

        <div className="p-4 bg-cream-50/70 border border-sand-200 rounded-xs text-center">
          <Maximize2 className="w-5 h-5 mx-auto text-forest-800 mb-1.5" />
          <span className="text-[11px] uppercase tracking-wider text-sand-500 block">
            Área Total
          </span>
          <span className="font-serif text-xl font-bold text-forest-950">
            {formatArea(property.builtArea)}
          </span>
        </div>

        <div className="p-4 bg-cream-50/70 border border-sand-200 rounded-xs text-center">
          <Car className="w-5 h-5 mx-auto text-forest-800 mb-1.5" />
          <span className="text-[11px] uppercase tracking-wider text-sand-500 block">
            Garajes
          </span>
          <span className="font-serif text-xl font-bold text-forest-950">
            {property.parkingSpaces}
          </span>
        </div>

        <div className="p-4 bg-cream-50/70 border border-sand-200 rounded-xs text-center">
          <Layers className="w-5 h-5 mx-auto text-forest-800 mb-1.5" />
          <span className="text-[11px] uppercase tracking-wider text-sand-500 block">
            Piso
          </span>
          <span className="font-serif text-xl font-bold text-forest-950">
            {property.floorNumber ? `Piso ${property.floorNumber}` : "Nivel 1"}
          </span>
        </div>

        <div className="p-4 bg-cream-50/70 border border-sand-200 rounded-xs text-center">
          <Calendar className="w-5 h-5 mx-auto text-forest-800 mb-1.5" />
          <span className="text-[11px] uppercase tracking-wider text-sand-500 block">
            Año
          </span>
          <span className="font-serif text-xl font-bold text-forest-950">
            {property.yearBuilt || 2023}
          </span>
        </div>
      </div>

      {/* Amenities & Highlights List */}
      <div>
        <h3 className="font-serif text-xl font-bold text-forest-950 mb-4 pb-2 border-b border-sand-200">
          Amenidades y Características Exclusivas
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {property.amenities.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 p-3 rounded-xs bg-white border border-sand-200/80 shadow-xs"
            >
              <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
              <span className="text-xs text-forest-900 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
