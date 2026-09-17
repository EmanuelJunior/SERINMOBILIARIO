"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, MapPin, Building, DollarSign, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection: React.FC = () => {
  const router = useRouter();
  const [operation, setOperation] = useState<string>("venta");
  const [propertyType, setPropertyType] = useState<string>("todos");
  const [sector, setSector] = useState<string>("todos");
  const [priceRange, setPriceRange] = useState<string>("todos");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (operation && operation !== "todos") params.set("operation", operation);
    if (propertyType && propertyType !== "todos") params.set("propertyType", propertyType);
    if (sector && sector !== "todos") params.set("sector", sector);
    if (priceRange && priceRange !== "todos") {
      if (priceRange === "1000m") params.set("maxPrice", "1000000000");
      if (priceRange === "2000m") {
        params.set("minPrice", "1000000000");
        params.set("maxPrice", "2000000000");
      }
      if (priceRange === "plus2000m") params.set("minPrice", "2000000000");
    }

    router.push(`/propiedades?${params.toString()}`);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 bg-forest-950 overflow-hidden">
      {/* Background High-End Real Estate Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2200&q=85')`,
        }}
      />

      {/* Luxury Layered Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/85 to-forest-950/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-forest-950/60" />
      <div className="absolute inset-0 bg-pattern-luxury opacity-30" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-3xl space-y-6">
          {/* Slogan Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900/80 border border-gold-400/40 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
            <span className="text-[11px] uppercase tracking-luxury text-gold-300 font-semibold font-sans">
              SU CONFIANZA ES NUESTRA SEGURIDAD
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-md">
            Encuentra el lugar donde comienza tu{" "}
            <span className="text-gradient-gold italic">próxima historia</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-cream-100/90 font-sans font-light leading-relaxed max-w-2xl">
            Propiedades seleccionadas para vivir, invertir y disfrutar en Santa Marta.
            Asesoría jurídica y comercial de alto nivel en el Caribe colombiano.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/propiedades">
              <Button variant="gold" size="lg" className="shadow-gold-glow group">
                <span>Explorar propiedades</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <Link href="/vende-tu-propiedad">
              <Button variant="gold-outline" size="lg" className="backdrop-blur-sm">
                Quiero vender mi propiedad
              </Button>
            </Link>
          </div>
        </div>

        {/* Integrated Luxury Search Bar */}
        <div className="mt-16 max-w-5xl bg-forest-950/90 backdrop-blur-xl border border-gold-400/30 rounded-xs shadow-2xl p-4 sm:p-6">
          {/* Operation Tabs */}
          <div className="flex gap-2 mb-4 border-b border-forest-800/80 pb-3">
            {[
              { id: "venta", label: "Comprar" },
              { id: "inversion", label: "Inversión Turística" },
              { id: "arriendo", label: "Arrendar" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setOperation(tab.id)}
                className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-xs transition-all ${
                  operation === tab.id
                    ? "bg-gold-500 text-forest-950 font-bold shadow-gold-glow"
                    : "text-cream-200 hover:text-white hover:bg-forest-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Inputs Row */}
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Sector */}
            <div>
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-gold-400 mb-1">
                Sector en Santa Marta
              </label>
              <div className="relative">
                <select
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className="w-full bg-forest-900/90 text-cream-50 text-xs px-3.5 py-3 rounded-xs border border-forest-700/80 focus:outline-none focus:border-gold-500"
                >
                  <option value="todos">Todos los sectores</option>
                  <option value="Bello Horizonte">Bello Horizonte</option>
                  <option value="Playa Salguero">Playa Salguero</option>
                  <option value="Pozos Colorados">Pozos Colorados</option>
                  <option value="El Rodadero">El Rodadero y Rodadero Sur</option>
                  <option value="Centro Histórico">Centro Histórico & Marina</option>
                  <option value="Taganga">Taganga / Colinas</option>
                </select>
              </div>
            </div>

            {/* Property Type */}
            <div>
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-gold-400 mb-1">
                Tipo de Inmueble
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full bg-forest-900/90 text-cream-50 text-xs px-3.5 py-3 rounded-xs border border-forest-700/80 focus:outline-none focus:border-gold-500"
              >
                <option value="todos">Todos los tipos</option>
                <option value="apartamento">Apartamento de Lujo</option>
                <option value="penthouse">Grand Penthouse</option>
                <option value="condohotel">Condo-Hotel Turístico</option>
                <option value="casa-playa">Villa / Casa de Playa</option>
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-[10px] font-semibold uppercase tracking-wider text-gold-400 mb-1">
                Rango de Precio
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full bg-forest-900/90 text-cream-50 text-xs px-3.5 py-3 rounded-xs border border-forest-700/80 focus:outline-none focus:border-gold-500"
              >
                <option value="todos">Cualquier presupuesto</option>
                <option value="1000m">Hasta \$1.000 Millones COP</option>
                <option value="2000m">\$1.000M - \$2.000M COP</option>
                <option value="plus2000m">Más de \$2.000 Millones COP</option>
              </select>
            </div>

            {/* Search Submit */}
            <div className="flex items-end">
              <Button
                type="submit"
                variant="gold"
                size="md"
                className="w-full h-[42px] gap-2 shadow-gold-glow"
              >
                <Search className="w-4 h-4" />
                <span>Buscar Inmuebles</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
