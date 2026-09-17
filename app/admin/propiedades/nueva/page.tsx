"use client";

import React from "react";
import { PropertyForm } from "@/features/admin/components/PropertyForm";

export default function NuevaPropiedadPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
          Crear Nueva Propiedad
        </h1>
        <p className="text-xs text-sand-500 mt-0.5">
          Ingresa la información detallada segmentada por los 9 bloques del estándar SERINMOBILIARIO.
        </p>
      </div>

      <PropertyForm />
    </div>
  );
}
