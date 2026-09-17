"use client";

import React from "react";
import { MapPin, Navigation, Compass, Plane, Anchor, ShoppingBag } from "lucide-react";
import { Property } from "../types";

interface PropertyLocationProps {
  property: Property;
}

export const PropertyLocation: React.FC<PropertyLocationProps> = ({ property }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-serif text-xl font-bold text-forest-950 pb-2 border-b border-sand-200">
        Ubicación y Entorno
      </h3>

      <div className="flex items-center gap-2 text-xs text-sand-500">
        <MapPin className="w-4 h-4 text-gold-600 shrink-0" />
        <span>
          {property.address} — Sector {property.sectorName}, Santa Marta, Magdalena
        </span>
      </div>

      {/* Styled Interactive / Visual Map Box */}
      <div className="relative w-full h-80 rounded-xs overflow-hidden border border-sand-300 shadow-sm bg-sand-100 flex flex-col items-center justify-center p-6 text-center">
        {/* Abstract Map Background Simulation */}
        <div
          className="absolute inset-0 opacity-40 bg-cover bg-center filter grayscale contrast-125"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-forest-950/20 backdrop-blur-[2px]" />

        {/* Central Pin */}
        <div className="relative z-10 flex flex-col items-center animate-bounce duration-1000">
          <div className="w-12 h-12 rounded-full bg-forest-900 border-2 border-gold-400 text-gold-400 flex items-center justify-center shadow-2xl">
            <MapPin className="w-6 h-6" />
          </div>
          <div className="mt-2 px-3 py-1 rounded-xs bg-forest-950/90 text-cream-50 text-xs font-semibold uppercase tracking-wider backdrop-blur-md border border-gold-500/40">
            {property.sectorName}
          </div>
        </div>

        <a
          href={`https://maps.google.com/?q=${property.coordinates.lat},${property.coordinates.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-white text-forest-900 text-xs font-semibold shadow-md hover:bg-gold-500 hover:text-forest-950 transition-colors"
        >
          <Navigation className="w-3.5 h-3.5" />
          Abrir en Google Maps
        </a>
      </div>

      {/* Proximities */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
        <div className="p-3 bg-white border border-sand-200 rounded-xs flex items-center gap-2.5">
          <Plane className="w-4 h-4 text-gold-600 shrink-0" />
          <div className="text-[11px]">
            <strong className="block text-forest-950">10 min</strong>
            <span className="text-sand-500">Aeropuerto Int.</span>
          </div>
        </div>

        <div className="p-3 bg-white border border-sand-200 rounded-xs flex items-center gap-2.5">
          <Anchor className="w-4 h-4 text-gold-600 shrink-0" />
          <div className="text-[11px]">
            <strong className="block text-forest-950">15 min</strong>
            <span className="text-sand-500">Marina de Yates</span>
          </div>
        </div>

        <div className="p-3 bg-white border border-sand-200 rounded-xs flex items-center gap-2.5">
          <ShoppingBag className="w-4 h-4 text-gold-600 shrink-0" />
          <div className="text-[11px]">
            <strong className="block text-forest-950">5 min</strong>
            <span className="text-sand-500">Centros Comerciales</span>
          </div>
        </div>

        <div className="p-3 bg-white border border-sand-200 rounded-xs flex items-center gap-2.5">
          <Compass className="w-4 h-4 text-gold-600 shrink-0" />
          <div className="text-[11px]">
            <strong className="block text-forest-950">Primera línea</strong>
            <span className="text-sand-500">Mar Caribe</span>
          </div>
        </div>
      </div>
    </div>
  );
};
