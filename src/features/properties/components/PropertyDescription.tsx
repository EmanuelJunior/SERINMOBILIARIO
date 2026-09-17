"use client";

import React from "react";
import { Property } from "../types";
import { ShieldCheck, Award } from "lucide-react";

interface PropertyDescriptionProps {
  property: Property;
}

export const PropertyDescription: React.FC<PropertyDescriptionProps> = ({ property }) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-serif text-xl font-bold text-forest-950 mb-3 pb-2 border-b border-sand-200">
          Acerca de este Inmueble
        </h3>
        <p className="text-sm text-sand-500 leading-relaxed font-sans whitespace-pre-line">
          {property.description}
        </p>
      </div>

      {/* SERINMOBILIARIO Trust Seal */}
      <div className="p-5 rounded-xs bg-forest-950 text-cream-100 border border-gold-500/30 flex items-start gap-4 shadow-luxury">
        <div className="p-2.5 rounded-full bg-gold-500/10 border border-gold-500/40 text-gold-400 shrink-0">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div>
          <h4 className="font-serif text-base font-semibold text-gold-300">
            Garantía Jurídica y Comercial SERINMOBILIARIO
          </h4>
          <p className="text-xs text-cream-200/80 mt-1 leading-relaxed">
            Inmueble con estudio de títulos previo verificado. Tradición legal libre de gravámenes, paz y salvo de administración e impuestos prediales al día para una transacción 100% segura.
          </p>
          <span className="inline-block mt-2 text-[10px] tracking-widest uppercase text-gold-400 font-semibold font-sans">
            "SU CONFIANZA ES NUESTRA SEGURIDAD"
          </span>
        </div>
      </div>
    </div>
  );
};
