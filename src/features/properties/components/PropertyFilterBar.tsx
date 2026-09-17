"use client";

import React, { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  RotateCcw,
  Waves,
  MapPin,
} from "lucide-react";
import { PropertyFilters, OperationType, PropertyType } from "../types";

interface PropertyFilterBarProps {
  filters: PropertyFilters;
  onChange: (key: keyof PropertyFilters, value: any) => void;
  onReset: () => void;
  totalResults: number;
}

export const PropertyFilterBar: React.FC<PropertyFilterBarProps> = ({
  filters,
  onChange,
  onReset,
  totalResults,
}) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="bg-white border border-sand-200 rounded-sm p-4 sm:p-5 shadow-luxury mb-10 -mt-6 sm:-mt-8 relative z-30">
      {/* Primary Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
        {/* Search Input */}
        <div className="lg:col-span-4 relative">
          <Search className="w-4 h-4 text-sand-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar por palabra clave, sector, código SER..."
            value={filters.search || ""}
            onChange={(e) => onChange("search", e.target.value)}
            className="w-full bg-cream-50/70 text-forest-950 text-xs pl-10 pr-4 py-3 rounded-xs border border-sand-300 focus:outline-none focus:border-gold-500 focus:bg-white transition-all font-sans"
          />
        </div>

        {/* Operation Filter */}
        <div className="lg:col-span-2">
          <select
            value={filters.operation || "todos"}
            onChange={(e) => onChange("operation", e.target.value as OperationType | "todos")}
            className="w-full bg-cream-50/70 text-forest-950 text-xs px-3.5 py-3 rounded-xs border border-sand-300 focus:outline-none focus:border-gold-500 font-sans"
          >
            <option value="todos">Todas las operaciones</option>
            <option value="venta">Venta</option>
            <option value="arriendo">Arriendo</option>
            <option value="inversion">Inversión turística</option>
          </select>
        </div>

        {/* Sector Filter */}
        <div className="lg:col-span-3">
          <select
            value={filters.sector || "todos"}
            onChange={(e) => onChange("sector", e.target.value)}
            className="w-full bg-cream-50/70 text-forest-950 text-xs px-3.5 py-3 rounded-xs border border-sand-300 focus:outline-none focus:border-gold-500 font-sans"
          >
            <option value="todos">Todos los sectores de Santa Marta</option>
            <option value="Bello Horizonte">Bello Horizonte</option>
            <option value="Playa Salguero">Playa Salguero</option>
            <option value="Pozos Colorados">Pozos Colorados</option>
            <option value="El Rodadero">El Rodadero y Rodadero Sur</option>
            <option value="Centro Histórico">Centro Histórico & Marina</option>
            <option value="Taganga">Taganga / Colinas</option>
          </select>
        </div>

        {/* Property Type */}
        <div className="lg:col-span-2">
          <select
            value={filters.propertyType || "todos"}
            onChange={(e) => onChange("propertyType", e.target.value as PropertyType | "todos")}
            className="w-full bg-cream-50/70 text-forest-950 text-xs px-3.5 py-3 rounded-xs border border-sand-300 focus:outline-none focus:border-gold-500 font-sans"
          >
            <option value="todos">Tipos de inmueble</option>
            <option value="apartamento">Apartamento de Lujo</option>
            <option value="penthouse">Grand Penthouse</option>
            <option value="condohotel">Condo-hotel turístico</option>
            <option value="casa-playa">Villa de playa</option>
          </select>
        </div>

        {/* Advanced Filters Button (Dark Forest Green with Gold icon) */}
        <div className="lg:col-span-1 flex justify-end">
          <button
            type="button"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className={`w-full lg:w-11 h-11 rounded-xs flex items-center justify-center transition-all ${
              showAdvanced
                ? "bg-gold-500 text-forest-950 shadow-gold-glow"
                : "bg-forest-950 hover:bg-forest-900 text-gold-400 border border-forest-800"
            }`}
            title="Filtros avanzados"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Advanced Drawer */}
      {showAdvanced && (
        <div className="mt-5 pt-5 border-t border-sand-200/80 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Bedrooms */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-forest-900/80 mb-2">
                Habitaciones mínimas
              </label>
              <div className="flex gap-1.5">
                {[0, 1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => onChange("minBedrooms", num === 0 ? undefined : num)}
                    className={`flex-1 py-1.5 text-xs font-medium rounded-xs border transition-colors ${
                      (filters.minBedrooms || 0) === num
                        ? "bg-gold-500 text-forest-950 border-gold-500 font-bold"
                        : "bg-white text-forest-900 border-sand-300 hover:border-sand-400"
                    }`}
                  >
                    {num === 0 ? "Todas" : `${num}+`}
                  </button>
                ))}
              </div>
            </div>

            {/* Bathrooms */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-forest-900/80 mb-2">
                Baños mínimos
              </label>
              <div className="flex gap-1.5">
                {[0, 1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => onChange("minBathrooms", num === 0 ? undefined : num)}
                    className={`flex-1 py-1.5 text-xs font-medium rounded-xs border transition-colors ${
                      (filters.minBathrooms || 0) === num
                        ? "bg-gold-500 text-forest-950 border-gold-500 font-bold"
                        : "bg-white text-forest-900 border-sand-300 hover:border-sand-400"
                    }`}
                  >
                    {num === 0 ? "Todos" : `${num}+`}
                  </button>
                ))}
              </div>
            </div>

            {/* Order / Sort */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-forest-900/80 mb-2">
                Ordenar resultados
              </label>
              <select
                value={filters.sortBy || "newest"}
                onChange={(e) => onChange("sortBy", e.target.value)}
                className="w-full bg-cream-50/70 text-forest-950 text-xs px-3 py-2 rounded-xs border border-sand-300 focus:outline-none focus:border-gold-500"
              >
                <option value="newest">Más recientes</option>
                <option value="featured">Destacadas primero</option>
                <option value="price-asc">Precio: Menor a Mayor</option>
                <option value="price-desc">Precio: Mayor a Menor</option>
              </select>
            </div>

            {/* Reset Action */}
            <div className="flex items-end">
              <button
                type="button"
                onClick={onReset}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs uppercase tracking-wider font-semibold text-sand-500 hover:text-red-700 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Limpiar filtros
              </button>
            </div>
          </div>

          {/* Luxury Checkboxes */}
          <div className="mt-5 pt-4 border-t border-sand-100 flex flex-wrap gap-3 items-center">
            <span className="text-[11px] uppercase tracking-wider font-bold text-forest-900/60">
              Características:
            </span>

            {[
              { key: "seaView", label: "Vista al mar", icon: Waves },
              { key: "beachfront", label: "Frente a la playa" },
              { key: "pool", label: "Piscina" },
              { key: "balcony", label: "Balcón" },
              { key: "elevator", label: "Ascensor" },
              { key: "gym", label: "Gimnasio" },
              { key: "furnished", label: "Amoblado" },
            ].map(({ key, label, icon: Icon }) => (
              <label
                key={key}
                className="inline-flex items-center gap-1.5 text-xs text-forest-900 cursor-pointer select-none bg-cream-50/60 hover:bg-cream-100 px-3 py-1.5 rounded-xs border border-sand-200 transition-colors"
              >
                <input
                  type="checkbox"
                  checked={Boolean((filters as any)[key])}
                  onChange={(e) => onChange(key as any, e.target.checked)}
                  className="rounded border-sand-300 text-forest-900 focus:ring-gold-500 w-3.5 h-3.5"
                />
                {Icon && <Icon className="w-3.5 h-3.5 text-gold-600" />}
                <span>{label}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Sub-bar matching mockup: "Mostrando 6 propiedades disponibles en Santa Marta" - "— Santa Marta, Colombia" */}
      <div className="mt-4 pt-3 border-t border-sand-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-sand-500 font-sans">
        <div>
          Mostrando <strong className="text-forest-950 font-bold">{totalResults} propiedades</strong> disponibles en Santa Marta
        </div>

        <div className="flex items-center gap-1.5 text-[11px] text-sand-400">
          <span>—</span>
          <MapPin className="w-3.5 h-3.5 text-gold-600" />
          <span>Santa Marta, Colombia</span>
        </div>
      </div>
    </div>
  );
};
