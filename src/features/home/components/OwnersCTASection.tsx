"use client";

import React from "react";
import Link from "next/link";
import { KeyRound, Camera, TrendingUp, FileText, ArrowRight } from "lucide-react";

export const OwnersCTASection: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-[#051C17] text-cream-50 overflow-hidden border-t border-gold-500/20">
      {/* Ambient Lighting Glows */}
      <div className="absolute left-1/4 top-0 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />
      <div className="absolute right-10 bottom-0 w-[500px] h-[500px] rounded-full bg-forest-800/20 blur-3xl pointer-events-none" />

      {/* Tropical Palm Leaf Shadows on the Bottom Left & Right */}
      <div className="absolute -left-12 -bottom-10 w-72 h-72 pointer-events-none opacity-25 mix-blend-screen">
        <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full text-forest-700">
          <path d="M0,200 Q80,120 20,40 Q100,100 120,0 Q110,80 180,40 Q130,120 200,140 Q120,150 150,200 Z" />
        </svg>
      </div>
      <div className="absolute -right-12 -bottom-10 w-64 h-64 pointer-events-none opacity-20 mix-blend-screen transform scale-x-[-1]">
        <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full text-forest-700">
          <path d="M0,200 Q80,120 20,40 Q100,100 120,0 Q110,80 180,40 Q130,120 200,140 Q120,150 200,200 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative flex items-center justify-between">
          {/* Vertical Left Label: SANTA MARTA */}
          <div className="hidden xl:flex absolute -left-10 top-1/2 -translate-y-1/2 flex-col items-center gap-3 select-none pointer-events-none">
            <div className="w-[1px] h-12 bg-cream-200/30" />
            <span
              className="text-[9px] uppercase tracking-[0.35em] text-cream-200/50 font-sans font-medium"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              SANTA MARTA
            </span>
            <div className="w-[1px] h-12 bg-cream-200/30" />
          </div>

          {/* Vertical Right Label: TU PROPIEDAD EN BUENAS MANOS */}
          <div className="hidden xl:flex absolute -right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-1 select-none pointer-events-none text-right">
            <span className="text-[9px] uppercase tracking-[0.2em] text-cream-200/40 font-sans leading-tight block">
              TU
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-cream-200/40 font-sans leading-tight block">
              PROPIEDAD
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-cream-200/40 font-sans leading-tight block">
              EN BUENAS
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-cream-200/40 font-sans leading-tight block">
              MANOS
            </span>
          </div>

          {/* Main 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6">
              {/* Capsule Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082923]/90 border border-gold-400/50 text-gold-300 text-[10px] sm:text-[11px] uppercase tracking-luxury font-medium font-sans backdrop-blur-md">
                <KeyRound className="w-3.5 h-3.5 text-gold-400" />
                <span>ATENCIÓN EXCLUSIVA A PROPIETARIOS</span>
              </div>

              {/* Main Headline exact to image */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.12]">
                <span className="text-white">¿Tienes una propiedad para</span>
                <br />
                <span className="text-gold-400 font-serif">vender o arrendar?</span>
              </h2>

              {/* Paragraph Description */}
              <p className="text-xs sm:text-sm text-cream-100/80 font-sans leading-relaxed max-w-lg font-light">
                Consigna tu inmueble en SERINMOBILIARIO. Conectamos tu propiedad con
                compradores calificados e inversionistas institucionales mediante un plan de marketing
                de alta gama y gestión legal completa.
              </p>

              {/* 3 Circular Icon Feature Items */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1">
                {/* Item 1 */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full border border-gold-400/60 bg-forest-950/80 flex items-center justify-center text-gold-400 shrink-0">
                    <Camera className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs text-cream-100 font-sans font-medium">
                    Fotografía arquitectónica
                  </span>
                </div>

                {/* Item 2 */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full border border-gold-400/60 bg-forest-950/80 flex items-center justify-center text-gold-400 shrink-0">
                    <TrendingUp className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs text-cream-100 font-sans font-medium">
                    Segmentación internacional
                  </span>
                </div>

                {/* Item 3 */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full border border-gold-400/60 bg-forest-950/80 flex items-center justify-center text-gold-400 shrink-0">
                    <FileText className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs text-cream-100 font-sans font-medium">
                    Estudio y cierre seguro
                  </span>
                </div>
              </div>

              {/* Bottom Line */}
              <div className="flex items-center gap-3 pt-3">
                <div className="w-8 h-[1px] bg-cream-200/30" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-cream-200/50 font-sans font-medium">
                  PROPIEDADES EXTRAORDINARIAS • GRANDES HISTORIAS
                </span>
              </div>
            </div>

            {/* Right Column: Framed Sunset Terrace Card with Glowing Gold Border */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border-2 border-gold-400/80 shadow-[0_0_35px_rgba(212,175,55,0.22)] bg-forest-950 aspect-[16/10] sm:aspect-[16/9.5] flex flex-col justify-between p-6 sm:p-8 group">
                {/* Background Sunset Terrace Photo */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85')`,
                  }}
                />
                {/* Gradient Overlays for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-950/40 to-forest-950/60" />

                {/* Top-Left Inset Motto */}
                <div className="relative z-10 space-y-0.5">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-cream-100 font-sans font-medium block drop-shadow-md">
                    MÁS QUE
                  </span>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-cream-100 font-sans font-medium block drop-shadow-md">
                    PROPIEDADES,
                  </span>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-cream-100 font-sans font-medium block drop-shadow-md">
                    GRANDES
                  </span>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-cream-100 font-sans font-medium block drop-shadow-md">
                    OPORTUNIDADES
                  </span>
                  <div className="w-7 h-[1.5px] bg-gold-400/90 mt-2" />
                </div>

                {/* Bottom Inset CTA Button & Slogan */}
                <div className="relative z-10 flex flex-col items-center sm:items-end w-full space-y-2.5">
                  <Link href="/vende-tu-propiedad" className="w-full sm:w-auto">
                    <button
                      type="button"
                      className="w-full sm:w-auto px-7 py-3.5 rounded-xs bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-forest-950 hover:shadow-gold-glow hover:brightness-105 font-sans text-xs font-bold uppercase tracking-luxury transition-all flex items-center justify-center gap-3 shadow-2xl"
                    >
                      <span>CONSIGNAR MI PROPIEDAD</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>

                  <span className="text-[10px] text-cream-100/90 drop-shadow-md font-sans text-center sm:text-right">
                    Sin exclusividades abusivas • Asesoría personalizada
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
