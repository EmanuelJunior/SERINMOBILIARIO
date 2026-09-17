"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Bed,
  Bath,
  Maximize2,
  MapPin,
  Waves,
  Heart,
  ArrowRight,
} from "lucide-react";
import { Property } from "../types";
import { formatCurrency, formatArea } from "@/utils/format";

interface PropertyCardProps {
  property: Property;
  layout?: "grid" | "horizontal";
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="group relative bg-white border border-sand-200/90 rounded-sm overflow-hidden shadow-sm hover:shadow-luxury-hover hover:border-gold-500/40 transition-all duration-300 flex flex-col">
      {/* Media Box */}
      <div className="relative aspect-[16/10.5] overflow-hidden bg-forest-950">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ backgroundImage: `url(${property.featuredImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-transparent to-black/25" />

        {/* Top Badges and Favorite Heart */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5 flex-wrap">
            {/* Operation Badge */}
            <span
              className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs backdrop-blur-md shadow-xs ${
                property.operation === "venta"
                  ? "bg-forest-950 text-cream-50 border border-forest-800"
                  : property.operation === "inversion"
                  ? "bg-emerald-950 text-emerald-200 border border-emerald-800"
                  : "bg-white/90 text-forest-950 border border-sand-300"
              }`}
            >
              {property.operation}
            </span>

            {/* Featured Badge */}
            {property.isFeatured && (
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs bg-gold-500 text-forest-950 border border-gold-400 backdrop-blur-md shadow-xs">
                DESTACADA
              </span>
            )}
          </div>

          {/* Favorite Heart Button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
            className="w-8 h-8 rounded-full bg-forest-950/40 backdrop-blur-md border border-white/20 text-white hover:text-red-400 flex items-center justify-center transition-all shadow-xs"
            aria-label="Guardar en favoritos"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isFavorite ? "fill-red-500 text-red-500" : "text-white"
              }`}
            />
          </button>
        </div>

        {/* Reference Code Tag on the Right */}
        <div className="absolute top-1/2 right-3 -translate-y-1/2 z-10 hidden sm:block">
          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-xs bg-black/60 text-cream-200 backdrop-blur-sm border border-white/10">
            {property.code}
          </span>
        </div>

        {/* Bottom Overlay on Image: Price & Sea View Badge */}
        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-end justify-between z-10">
          <div className="text-white">
            <div className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white drop-shadow-md">
              {formatCurrency(property.price, property.currency)}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="sm:hidden text-[9px] font-mono font-medium px-1.5 py-0.5 rounded-xs bg-black/60 text-cream-200">
              {property.code}
            </span>
            {property.seaView && (
              <span className="inline-flex items-center gap-1 text-[10px] text-cyan-200 bg-forest-950/85 backdrop-blur-md px-2 py-0.5 rounded-xs border border-cyan-400/20 shadow-xs">
                <Waves className="w-3 h-3 text-cyan-300" />
                <span>Vista al mar</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Sector & City */}
          <div className="flex items-center gap-1.5 text-xs text-sand-500 mb-1.5">
            <MapPin className="w-3.5 h-3.5 text-gold-600 shrink-0" />
            <span className="font-bold text-forest-900 uppercase tracking-wider text-[11px]">
              {property.sectorName}
            </span>
            <span className="text-sand-300">•</span>
            <span className="text-[11px] text-sand-500 font-medium">Santa Marta</span>
          </div>

          {/* Title */}
          <Link href={`/propiedades/${property.slug}`}>
            <h3 className="font-serif text-base sm:text-lg font-bold text-forest-950 group-hover:text-gold-700 transition-colors line-clamp-1 leading-snug">
              {property.title}
            </h3>
          </Link>

          {/* Subtitle / Tagline */}
          <p className="text-xs text-sand-500 line-clamp-2 mt-1.5 leading-relaxed font-sans font-light">
            {property.tagline || property.description}
          </p>
        </div>

        {/* Specs Grid */}
        <div className="pt-3.5 mt-4 border-t border-sand-200/80 flex items-center justify-between text-xs text-forest-900/80 font-sans">
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4 text-forest-700/60" />
            <span>
              <strong>{property.bedrooms}</strong> Hab
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-forest-700/60" />
            <span>
              <strong>{property.bathrooms}</strong> Baños
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <Maximize2 className="w-4 h-4 text-forest-700/60" />
            <span>{formatArea(property.builtArea)}</span>
          </div>
        </div>

        {/* Action Button: Outlined style with arrow matching the mockup */}
        <div className="pt-3 mt-3">
          <Link href={`/propiedades/${property.slug}`} className="block w-full">
            <button
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold uppercase tracking-luxury text-forest-900 border border-sand-300 hover:border-gold-500 hover:bg-cream-50 hover:text-gold-800 transition-all rounded-xs"
            >
              <span>VER FICHA COMPLETA</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
