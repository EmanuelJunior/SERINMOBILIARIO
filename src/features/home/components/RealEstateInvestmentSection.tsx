"use client";

import React from "react";
import Link from "next/link";
import {
  TrendingUp,
  BarChart3,
  Landmark,
  ShieldCheck,
  ArrowRight,
  Mountain,
} from "lucide-react";

export const RealEstateInvestmentSection: React.FC = () => {
  return (
    <section className="relative py-14 sm:py-18 lg:py-20 bg-forest-950 text-cream-50 overflow-hidden">
      {/* Background Luxury Hotel & Real Estate Resort Architecture */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2400&q=90')`,
        }}
      />

      {/* Cinematic Layered Gradients: Deep Forest Green on the Left fading to Reveal the Hotel Property & Pool on the Right */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/92 via-65% to-forest-950/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-forest-950/75" />

      {/* Tropical Palm Leaf Shadows on the Left Side */}
      <div className="absolute -left-20 top-0 bottom-0 w-80 pointer-events-none opacity-20 mix-blend-overlay">
        <svg
          viewBox="0 0 200 600"
          fill="currentColor"
          className="w-full h-full text-forest-900"
        >
          <path d="M10,0 Q90,150 20,300 Q110,450 30,600 L0,600 L0,0 Z" />
          <path d="M40,50 Q130,200 60,350 Q150,500 70,600 L0,600 L0,50 Z" opacity="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Editorial Label: SANTA MARTA COLOMBIA */}
        <div className="flex justify-end mb-4 sm:mb-6">
          <div className="text-right">
            <div className="flex items-center justify-end gap-2">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-cream-100 font-sans font-medium">
                SANTA MARTA
              </span>
              <span className="w-7 h-[1px] bg-cream-200/50 inline-block" />
            </div>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-cream-300/70 font-sans block mt-0.5">
              COLOMBIA
            </span>
          </div>
        </div>

        {/* Main 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900/90 border border-gold-400/50 text-gold-300 text-[10px] sm:text-[11px] uppercase tracking-luxury font-medium font-sans backdrop-blur-md shadow-xs">
              <TrendingUp className="w-3.5 h-3.5 text-gold-400" />
              <span>ANÁLISIS DE MERCADO & PROYECCIÓN PATRIMONIAL</span>
            </div>

            {/* Main Headline */}
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.12]">
              <span className="text-gold-400 font-serif">Santa Marta:</span>
              <br />
              <span className="text-white">donde el Caribe se</span>
              <br />
              <span className="text-white">convierte en </span>
              <span className="text-gold-300 italic font-normal">patrimonio</span>
            </h2>

            {/* Description Paragraph */}
            <p className="text-xs sm:text-sm text-cream-100/80 font-sans leading-relaxed max-w-xl font-light">
              Playas paradisíacas, una Sierra Nevada majestuosa y un mercado inmobiliario en
              constante crecimiento, convierten a Santa Marta en el destino ideal para invertir,
              generar ingresos y construir un patrimonio de largo plazo.
            </p>

            {/* 3 Feature Cards in a Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
              {/* Card 1 */}
              <div className="p-4 sm:p-4.5 rounded-xs bg-[#062923]/80 backdrop-blur-md border border-forest-700/60 hover:border-gold-500/60 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-9 h-9 rounded-full border border-gold-400/60 bg-forest-950/90 flex items-center justify-center text-gold-400 mb-2.5 group-hover:bg-gold-500 group-hover:text-forest-950 transition-colors">
                    <Landmark className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-xs sm:text-sm font-bold text-white mb-1.5 leading-snug">
                    Rentabilidad por alquiler vacacional y turístico
                  </h3>
                  <p className="text-[11px] text-cream-200/70 font-sans leading-relaxed">
                    Activos en sectores como Salguero y Bello Horizonte alcanzan rendimientos anuales de hasta el 12% neto.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-4 sm:p-4.5 rounded-xs bg-[#062923]/80 backdrop-blur-md border border-forest-700/60 hover:border-gold-500/60 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-9 h-9 rounded-full border border-gold-400/60 bg-forest-950/90 flex items-center justify-center text-gold-400 mb-2.5 group-hover:bg-gold-500 group-hover:text-forest-950 transition-colors">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-xs sm:text-sm font-bold text-white mb-1.5 leading-snug">
                    Plusvalía sostenida en primera línea de mar
                  </h3>
                  <p className="text-[11px] text-cream-200/70 font-sans leading-relaxed">
                    La escasez natural de terrenos frente al mar garantiza una revalorización constante en el mediano y largo plazo.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-4 sm:p-4.5 rounded-xs bg-[#062923]/80 backdrop-blur-md border border-forest-700/60 hover:border-gold-500/60 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-9 h-9 rounded-full border border-gold-400/60 bg-forest-950/90 flex items-center justify-center text-gold-400 mb-2.5 group-hover:bg-gold-500 group-hover:text-forest-950 transition-colors">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-xs sm:text-sm font-bold text-white mb-1.5 leading-snug">
                    Protección patrimonial y diversificación
                  </h3>
                  <p className="text-[11px] text-cream-200/70 font-sans leading-relaxed">
                    Activos respaldados por escrituras públicas en un sector con demanda internacional creciente.
                  </p>
                </div>
              </div>
            </div>

            {/* Gold Action Button */}
            <div className="pt-2">
              <Link href="/servicios" className="inline-block w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xs bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-forest-950 hover:shadow-gold-glow hover:brightness-105 font-sans text-xs font-bold uppercase tracking-luxury transition-all flex items-center justify-center gap-3 shadow-md"
                >
                  <span>RECIBIR ANÁLISIS INMOBILIARIO PERSONALIZADO</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            {/* Bottom Meta Words */}
            <div className="flex items-center gap-5 pt-1 text-[10px] uppercase tracking-luxury text-cream-200/50 font-sans">
              <span>INVERSIÓN</span>
              <span className="text-cream-200/20">|</span>
              <span>ESTILO DE VIDA</span>
              <span className="text-cream-200/20">|</span>
              <span>LEGADO</span>
            </div>
          </div>

          {/* Right Column: Floating Indicators Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative p-6 sm:p-7 rounded-sm bg-[#05211C]/85 backdrop-blur-xl border border-gold-400/60 shadow-2xl space-y-5 ring-1 ring-gold-400/20">
              {/* Header Badge */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-950/90 border border-gold-400/40 text-gold-400 text-[10px] uppercase tracking-luxury font-semibold font-sans">
                  <BarChart3 className="w-3.5 h-3.5 text-gold-400" />
                  <span>INDICADORES DEL MERCADO</span>
                </div>
              </div>

              {/* Indicator 1 */}
              <div className="border-b border-forest-700/60 pb-4">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-400">
                    12.4%
                  </span>
                  <span className="text-gold-500/40 font-light text-xl">|</span>
                  <span className="text-[10px] uppercase tracking-luxury text-cream-200/80 font-semibold font-sans">
                    PROMEDIO ANUAL
                  </span>
                </div>
                <h4 className="font-serif text-sm font-bold text-white mt-1">
                  Valorización inmobiliaria en el Corredor Sur
                </h4>
                <p className="text-xs text-cream-200/70 mt-1 font-sans leading-relaxed">
                  Comportamiento sostenido en proyectos sobre planos y terminados en Bello Horizonte y Salguero.
                </p>
              </div>

              {/* Indicator 2 */}
              <div className="border-b border-forest-700/60 pb-4">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-400">
                    80%+
                  </span>
                  <span className="text-gold-500/40 font-light text-xl">|</span>
                  <span className="text-[10px] uppercase tracking-luxury text-cream-200/80 font-semibold font-sans">
                    TEMPORADA ALTA & PUENTES
                  </span>
                </div>
                <h4 className="font-serif text-sm font-bold text-white mt-1">
                  Tasa de Ocupación Turística
                </h4>
                <p className="text-xs text-cream-200/70 mt-1 font-sans leading-relaxed">
                  Flujo ininterrumpido de viajeros nacionales y extranjeros durante todo el año.
                </p>
              </div>

              {/* Indicator 3 */}
              <div>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-400">
                    100%
                  </span>
                  <span className="text-gold-500/40 font-light text-xl">|</span>
                  <span className="text-[10px] uppercase tracking-luxury text-cream-200/80 font-semibold font-sans">
                    SEGURIDAD JURÍDICA
                  </span>
                </div>
                <h4 className="font-serif text-sm font-bold text-white mt-1">
                  Blindaje Legal en Cada Escritura
                </h4>
                <p className="text-xs text-cream-200/70 mt-1 font-sans leading-relaxed">
                  Estudios de títulos a 20 años y asesoría notarial especializada bajo el lema "Su Confianza es Nuestra Seguridad".
                </p>
              </div>
            </div>

            {/* Bottom Right Signature & Brand Slogan */}
            <div className="pt-5 flex flex-col items-end text-right space-y-2.5">
              {/* Script Signature */}
              <div className="font-serif italic text-2xl sm:text-3xl text-gold-400/90 font-light tracking-wide drop-shadow-sm select-none">
                Santa Marta <br />
                <span className="text-xl sm:text-2xl text-gold-300">inspira patrimonio</span>
              </div>

              {/* Line and Slogan */}
              <div className="flex items-center gap-3 pt-0.5">
                <div className="w-10 h-[1px] bg-cream-200/30" />
                <div className="flex items-center gap-2 text-cream-200/70">
                  <Mountain className="w-4 h-4 text-gold-400" />
                  <span className="text-[9px] uppercase tracking-[0.25em] font-sans font-medium">
                    MÁS QUE UN DESTINO, UN MEJOR FUTURO
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
