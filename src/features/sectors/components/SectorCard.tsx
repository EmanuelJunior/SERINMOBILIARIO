"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, MapPin, Building2 } from "lucide-react";
import { Sector } from "../types";
import { formatCurrency } from "@/utils/format";

interface SectorCardProps {
  sector: Sector;
}

export const SectorCard: React.FC<SectorCardProps> = ({ sector }) => {
  return (
    <Link
      href={`/sectores/${sector.slug}`}
      className="group relative block overflow-hidden rounded-xs bg-[#051C17] aspect-[3.3/4] shadow-luxury transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Background Image with smooth zoom on hover */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ backgroundImage: `url(${sector.featuredImage})` }}
      />

      {/* Gradient Overlays: Subtle top darkening + Deep forest green bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#051C17] via-[#051C17]/85 via-50% to-transparent opacity-95 transition-opacity duration-300 group-hover:opacity-98" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-transparent opacity-60" />

      {/* Top Bar: Appreciation Rate Badge + Round Action Button */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-[#0B251F]/90 backdrop-blur-md border border-gold-500/50 text-[11px] font-bold uppercase tracking-wider text-gold-400 font-sans shadow-sm">
          <TrendingUp className="w-3.5 h-3.5 text-gold-400" />
          <span>{sector.appreciationRate}</span>
        </span>

        <div className="w-9 h-9 rounded-full bg-forest-950/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-gold-500 group-hover:text-forest-950 group-hover:border-gold-500 transition-all duration-300 shadow-sm">
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 flex flex-col justify-end">
        {/* Location Tag */}
        <div className="flex items-center gap-1 text-gold-400 text-[10px] uppercase tracking-[0.2em] font-semibold mb-1 font-sans">
          <MapPin className="w-3 h-3 text-gold-400" />
          <span>SANTA MARTA, COLOMBIA</span>
        </div>

        {/* Sector Name */}
        <h3 className="font-serif text-2xl font-bold text-white tracking-tight leading-snug mb-1.5 group-hover:text-gold-300 transition-colors">
          {sector.name}
        </h3>

        {/* Sector Tagline */}
        <p className="text-xs text-[#E8E2D6]/90 line-clamp-2 mb-3.5 leading-relaxed font-sans font-light">
          {sector.tagline}
        </p>

        {/* Divider & Metadata Bar */}
        <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs text-white/90 font-sans">
          <span>
            Promedio m²:{" "}
            <strong className="text-gold-400 font-bold ml-1">
              {formatCurrency(sector.averageM2Price)}
            </strong>
          </span>

          <div className="flex items-center gap-1.5 text-white/75 text-[11px] font-medium">
            <Building2 className="w-3.5 h-3.5 text-sand-300" />
            <span>{sector.propertiesCount} inmuebles</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
