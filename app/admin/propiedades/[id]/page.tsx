"use client";

import React, { use } from "react";
import { notFound } from "next/navigation";
import { PropertyService } from "@/features/properties/services/propertyService";
import { PropertyForm } from "@/features/admin/components/PropertyForm";

interface EditPropiedadPageProps {
  params: Promise<{ id: string }>;
}

export default function EditPropiedadPage({ params }: EditPropiedadPageProps) {
  const { id } = use(params);
  const property = PropertyService.getById(id);

  if (!property) {
    return (
      <div className="p-12 text-center bg-white border border-sand-200 rounded-xs">
        <h2 className="font-serif text-xl font-bold text-forest-950 mb-2">
          Propiedad no encontrada
        </h2>
        <p className="text-xs text-sand-500">
          El identificador de inmueble solicitado no existe en la base de datos web.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
          Editar Propiedad: {property.title}
        </h1>
        <p className="text-xs text-sand-500 mt-0.5">
          Modifica los parámetros por bloque. Los cambios se actualizarán de inmediato en el catálogo.
        </p>
      </div>

      <PropertyForm initialProperty={property} isEdit />
    </div>
  );
}
