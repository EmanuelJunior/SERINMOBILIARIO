import { notFound } from "next/navigation";
import Link from "next/link";
import { SectorService } from "@/features/sectors/services/sectorService";
import { PropertyService } from "@/features/properties/services/propertyService";
import { PropertyGrid } from "@/features/properties/components/PropertyGrid";
import { formatCurrency } from "@/utils/format";
import {
  MapPin,
  TrendingUp,
  Compass,
  CheckCircle2,
  Building,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SectorPageProps {
  params: Promise<{ slug: string }>;
}

export default async function SectorDetailPage({ params }: SectorPageProps) {
  const { slug } = await params;
  const sector = SectorService.getBySlug(slug);

  if (!sector) {
    notFound();
  }

  const propertiesInSector = PropertyService.getPublished().filter(
    (p) =>
      p.sectorId === sector.id ||
      p.sectorName.toLowerCase() === sector.name.toLowerCase()
  );

  return (
    <div className="w-full">
      {/* Sector Hero */}
      <div className="relative min-h-[500px] flex items-end pt-32 pb-16 bg-forest-950">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${sector.featuredImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-forest-950/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Link
            href="/sectores"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-luxury text-gold-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a todos los sectores</span>
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-gold-400/40 text-gold-300 text-xs uppercase tracking-wider mb-3">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Plusvalía estimada: {sector.appreciationRate}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
              {sector.name}
            </h1>

            <p className="text-base sm:text-lg text-cream-100/90 mt-2 font-light leading-relaxed">
              {sector.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Sector Details & Specs Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white border border-sand-200 rounded-xs p-6 shadow-luxury grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="border-r border-sand-200/80 last:border-0">
            <span className="text-[10px] uppercase tracking-wider text-sand-500 block">
              Precio Promedio m²
            </span>
            <span className="font-serif text-xl sm:text-2xl font-bold text-forest-950">
              {formatCurrency(sector.averageM2Price)}
            </span>
          </div>

          <div className="border-r border-sand-200/80 last:border-0">
            <span className="text-[10px] uppercase tracking-wider text-sand-500 block">
              Tasa de Valorización
            </span>
            <span className="font-serif text-xl sm:text-2xl font-bold text-gold-600">
              {sector.appreciationRate}
            </span>
          </div>

          <div className="border-r border-sand-200/80 last:border-0">
            <span className="text-[10px] uppercase tracking-wider text-sand-500 block">
              Inmuebles Activos
            </span>
            <span className="font-serif text-xl sm:text-2xl font-bold text-forest-950">
              {propertiesInSector.length} disponibles
            </span>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-wider text-sand-500 block">
              Estilo de Vida
            </span>
            <span className="text-xs font-semibold text-forest-900 block mt-1 line-clamp-1">
              {sector.lifestyle}
            </span>
          </div>
        </div>
      </div>

      {/* Sector Information & Editorial */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
              Vivir e Invertir en {sector.name}
            </h2>
            <p className="text-sm text-sand-500 leading-relaxed font-sans">
              {sector.description}
            </p>
          </div>

          <div className="lg:col-span-5 bg-cream-50 p-6 rounded-xs border border-sand-200">
            <h3 className="font-serif text-lg font-bold text-forest-950 mb-3">
              Aspectos Destacados del Sector
            </h3>
            <div className="space-y-2.5">
              {sector.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-forest-900">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Properties in Sector */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-sand-200">
            <div>
              <span className="text-xs uppercase tracking-luxury text-gold-700 font-semibold block mb-1">
                Oferta Disponible
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
                Propiedades en {sector.name}
              </h2>
            </div>

            <Link href={`/propiedades?sector=${encodeURIComponent(sector.name)}`}>
              <Button variant="outline" size="sm">
                Ver con filtros avanzados
              </Button>
            </Link>
          </div>

          <PropertyGrid properties={propertiesInSector} />
        </div>
      </div>
    </div>
  );
}
