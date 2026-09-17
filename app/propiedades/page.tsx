"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useProperties } from "@/features/properties/hooks/useProperties";
import { PropertyFilterBar } from "@/features/properties/components/PropertyFilterBar";
import { PropertyGrid } from "@/features/properties/components/PropertyGrid";
import { OperationType, PropertyType } from "@/features/properties/types";
import { DiamondIcon, WaveIcon, PalmIcon } from "@/components/ui/pillar-icons";

function PropiedadesContent() {
  const searchParams = useSearchParams();

  const initialOperation = (searchParams.get("operation") as OperationType) || undefined;
  const initialType = (searchParams.get("propertyType") as PropertyType) || undefined;
  const initialSector = searchParams.get("sector") || undefined;
  const initialMinPrice = searchParams.get("minPrice")
    ? Number(searchParams.get("minPrice"))
    : undefined;
  const initialMaxPrice = searchParams.get("maxPrice")
    ? Number(searchParams.get("maxPrice"))
    : undefined;

  const {
    properties,
    filters,
    isLoading,
    updateFilter,
    resetFilters,
    totalCount,
  } = useProperties({
    operation: initialOperation,
    propertyType: initialType,
    sector: initialSector,
    minPrice: initialMinPrice,
    maxPrice: initialMaxPrice,
  });

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen">
      {/* 1. Panoramic Editorial Header Banner matching the mockup */}
      <div className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 bg-[#F5F2EB] border-b border-sand-200/80 overflow-hidden">
        {/* Right Half: Penthouse Balcony View Over Ocean & Santa Marta Coastline */}
        <div
          className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85')`,
          }}
        >
          {/* Smooth Gradient blend into the light cream background on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F2EB] via-[#F5F2EB]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F5F2EB] via-transparent to-black/10" />

          {/* Script Signature on the Top Right */}
          <div className="absolute top-8 sm:top-12 right-6 sm:right-12 text-right hidden sm:block z-10">
            <div className="font-serif italic text-2xl sm:text-3xl text-gold-500 font-light drop-shadow-sm select-none">
              Santa Marta
            </div>
            <div className="flex items-center justify-end gap-2 text-forest-950/80 mt-0.5">
              <span className="text-[9px] uppercase tracking-[0.25em] font-sans font-medium">
                MÁS QUE UN DESTINO, UN ESTILO DE VIDA
              </span>
              <div className="w-8 h-[1px] bg-forest-900/40" />
            </div>
          </div>
        </div>

        {/* Left Side: Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl space-y-4">
            {/* Portafolio Seleccionado Pill */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-[1.5px] bg-gold-600" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-gold-800 font-semibold font-sans">
                PORTAFOLIO SELECCIONADO
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-forest-950 tracking-tight leading-[1.08]">
              Catálogo Inmobiliario
              <br />
              <span className="font-normal text-forest-900">Premium</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-xs sm:text-sm text-sand-500 font-sans font-light leading-relaxed max-w-lg">
              Descubre residencias de lujo, oportunidades de inversión y apartamentos frente al mar en los sectores más exclusivos de Santa Marta.
            </p>

            {/* 3 Value Pillars in a Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {/* Pillar 1: Vive el Caribe */}
              <div className="flex items-start gap-2.5">
                <div className="text-gold-600 shrink-0 mt-0.5">
                  <DiamondIcon className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-xs font-serif font-bold text-forest-950">
                    Vive el Caribe
                  </strong>
                  <span className="text-[9px] uppercase tracking-wider text-sand-500 font-medium block">
                    PROPIEDADES EXCEPCIONALES
                  </span>
                </div>
              </div>

              {/* Pillar 2: Invierte con confianza */}
              <div className="flex items-start gap-2.5">
                <div className="text-gold-600 shrink-0 mt-0.5">
                  <WaveIcon className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-xs font-serif font-bold text-forest-950">
                    Invierte con confianza
                  </strong>
                  <span className="text-[9px] uppercase tracking-wider text-sand-500 font-medium block">
                    ALTO POTENCIAL DE VALORIZACIÓN
                  </span>
                </div>
              </div>

              {/* Pillar 3: Tu nuevo comienzo */}
              <div className="flex items-start gap-2.5">
                <div className="text-gold-600 shrink-0 mt-0.5">
                  <PalmIcon className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-xs font-serif font-bold text-forest-950">
                    Tu nuevo comienzo
                  </strong>
                  <span className="text-[9px] uppercase tracking-wider text-sand-500 font-medium block">
                    SANTA MARTA TE ESPERA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Content Body with Floating Filter Bar and Properties Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative">
        {/* Filter Bar with Search, Dropdowns, and Advanced Checkbox Drawer */}
        <PropertyFilterBar
          filters={filters}
          onChange={updateFilter}
          onReset={resetFilters}
          totalResults={totalCount}
        />

        {/* Results Grid with Redesigned Cards */}
        <PropertyGrid
          properties={properties}
          isLoading={isLoading}
          onResetFilters={resetFilters}
        />

        {/* Bottom Script Signature and Palm Decoration */}
        <div className="mt-20 pt-10 border-t border-sand-200/80 text-center relative">
          <div className="font-serif italic text-lg sm:text-xl text-forest-950/70 font-light select-none">
            Propiedades que inspiran una vida extraordinaria
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PropiedadesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-32 text-center text-xs text-forest-900 font-sans">
          Cargando catálogo inmobiliario...
        </div>
      }
    >
      <PropiedadesContent />
    </Suspense>
  );
}
