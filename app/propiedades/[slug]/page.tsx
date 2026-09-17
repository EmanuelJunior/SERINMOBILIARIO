import { notFound } from "next/navigation";
import { PropertyService } from "@/features/properties/services/propertyService";
import { PropertyGallery } from "@/features/properties/components/PropertyGallery";
import { PropertyHeader } from "@/features/properties/components/PropertyHeader";
import { PropertyFeatures } from "@/features/properties/components/PropertyFeatures";
import { PropertyDescription } from "@/features/properties/components/PropertyDescription";
import { PropertyLocation } from "@/features/properties/components/PropertyLocation";
import { SimilarProperties } from "@/features/properties/components/SimilarProperties";
import { PropertyScheduler } from "@/features/scheduling/components/PropertyScheduler";

interface PropertyPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PropertyDetailPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = PropertyService.getBySlug(slug);

  if (!property) {
    notFound();
  }

  const similar = PropertyService.getSimilar(property, 3);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. Encabezado principal y precio */}
      <PropertyHeader property={property} />

      {/* 2. Galería de fotografías con visor lightbox */}
      <div className="mb-10">
        <PropertyGallery images={property.images} title={property.title} />
      </div>

      {/* 3. Contenedor a dos columnas: Contenido principal + Widget de Agenda Clientify */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Columna Principal Izquierda */}
        <div className="lg:col-span-8 space-y-10">
          {/* Características cuantitativas y amenidades */}
          <PropertyFeatures property={property} />

          {/* Descripción editorial y sello de confianza */}
          <PropertyDescription property={property} />

          {/* Ubicación y mapa en Santa Marta */}
          <PropertyLocation property={property} />
        </div>

        {/* Columna Lateral Derecha: Agenda con Clientify CRM */}
        <div className="lg:col-span-4">
          <PropertyScheduler property={property} />
        </div>
      </div>

      {/* 4. Propiedades similares en Santa Marta */}
      <SimilarProperties properties={similar} />
    </div>
  );
}
