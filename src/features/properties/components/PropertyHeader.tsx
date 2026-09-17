"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Sparkles, Share2, Heart } from "lucide-react";
import { Property } from "../types";
import { formatCurrency } from "@/utils/format";
import { Badge } from "@/components/ui/badge";

interface PropertyHeaderProps {
  property: Property;
}

export const PropertyHeader: React.FC<PropertyHeaderProps> = ({ property }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: property.tagline,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Enlace copiado al portapapeles.");
    }
  };

  return (
    <div className="border-b border-sand-200/80 pb-6 mb-8">
      {/* Top Meta & Badges */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <Badge
            variant={
              property.operation === "venta"
                ? "forest"
                : property.operation === "inversion"
                ? "gold"
                : "cream"
            }
          >
            {property.operation}
          </Badge>

          {property.isFeatured && (
            <Badge variant="gold" className="gap-1">
              <Sparkles className="w-3 h-3" />
              Destacada
            </Badge>
          )}

          <Badge variant="outline" className="text-forest-900 border-sand-300">
            {property.propertyType}
          </Badge>

          <span className="text-xs font-mono text-sand-500 uppercase tracking-wider px-2 py-0.5 bg-sand-100 rounded-xs">
            Ref: {property.code}
          </span>
        </div>

        {/* Share & Save Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="p-2 rounded-xs border border-sand-300 hover:border-gold-500 text-forest-800 hover:text-gold-600 transition-colors"
            title="Compartir ficha"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Title & Sector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold-700 font-semibold mb-2">
            <MapPin className="w-3.5 h-3.5 text-gold-600" />
            <Link
              href={`/sectores/${property.sectorId.replace("sec-", "")}`}
              className="hover:underline"
            >
              {property.sectorName}
            </Link>
            <span className="text-sand-300">•</span>
            <span>{property.address}</span>
            <span className="text-sand-300">•</span>
            <span>Santa Marta, Colombia</span>
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-950 tracking-tight leading-tight">
            {property.title}
          </h1>

          <p className="text-sm text-sand-500 mt-2 font-sans leading-relaxed">
            {property.tagline}
          </p>
        </div>

        {/* Price Column */}
        <div className="lg:col-span-4 lg:text-right">
          <span className="text-xs uppercase tracking-widest text-sand-500 block">
            {property.operation === "arriendo" ? "Canon de Arrendamiento" : "Valor de Inversión"}
          </span>
          <div className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 tracking-tight text-gradient-gold">
            {formatCurrency(property.price, property.currency)}
          </div>
          {property.adminFee ? (
            <span className="text-xs text-sand-400 block mt-1">
              Administración mensual: {formatCurrency(property.adminFee)} COP
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};
