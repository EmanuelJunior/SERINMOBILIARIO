import React from "react";
import Link from "next/link";
import {
  Home,
  KeyRound,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServiciosPage() {
  const services = [
    {
      id: "compra",
      icon: Home,
      title: "Compra de Propiedades de Lujo",
      subtitle: "Asesoría patrimonial y búsqueda personalizada",
      description:
        "Guiamos a compradores nacionales e internacionales en la adquisición de inmuebles excepcionales en Santa Marta. Realizamos un filtrado exhaustivo de mercado para presentar únicamente opciones que cumplan con criterios rigurosos de calidad arquitectónica, vista y tradición legal.",
      deliverables: [
        "Presentación de portafolio off-market y exclusivo",
        "Estudio de títulos a 20 años sin costo para el comprador",
        "Negociación estratégica del mejor valor por metro cuadrado",
        "Acompañamiento en escrituración notarial y entrega de llaves",
      ],
      ctaText: "Ver propiedades en venta",
      ctaLink: "/propiedades?operation=venta",
    },
    {
      id: "venta",
      icon: KeyRound,
      title: "Comercialización y Venta de Inmuebles",
      subtitle: "Exposición nacional e internacional de alto nivel",
      description:
        "Diseñamos una estrategia integral para comercializar tu propiedad frente a compradores solventes. Con producción fotográfica de arquitectura, segmentación digital y una red consolidada de inversionistas, aseguramos ventas ágiles y a precio justo.",
      deliverables: [
        "Fotografía profesional, video con dron y renders 3D",
        "Publicación destacada en nuestro ecosistema digital",
        "Filtro crediticio y de solvencia de potenciales compradores",
        "Cierre jurídico blindado con promesas de compraventa notariales",
      ],
      ctaText: "Consignar mi propiedad",
      ctaLink: "/vende-tu-propiedad",
    },
    {
      id: "arrendamiento",
      icon: ShieldCheck,
      title: "Arrendamiento Residencial & Corporativo",
      subtitle: "Rentas con respaldo y póliza garantizada",
      description:
        "Gestionamos el arrendamiento de apartamentos y residencias de primer orden en Santa Marta. Ofrecemos a los propietarios tranquilidad absoluta mediante pólizas de cumplimiento que garantizan el pago puntual del canon y cuotas de administración.",
      deliverables: [
        "Estudio digital de asegurabilidad de arrendatarios en minutos",
        "Inventario fotográfico detallado de entrega y recepción",
        "Gestión de contratos con firmas digitales certificadas",
        "Mantenimiento preventivo y atención al inquilino",
      ],
      ctaText: "Explorar inmuebles en arriendo",
      ctaLink: "/propiedades?operation=arriendo",
    },
    {
      id: "inversion",
      icon: TrendingUp,
      title: "Estructuración de Inversiones Turísticas",
      subtitle: "Rentas en dólares y alta valorización hotelera",
      description:
        "Santa Marta lidera el crecimiento en turismo del Caribe colombiano. Asesoramos en la selección de activos inmobiliarios con licencias turísticas activas en Bello Horizonte y Playa Salguero, operados profesionalmente para maximizar el retorno de inversión (ROI).",
      deliverables: [
        "Análisis financiero con proyecciones de ocupación y tarifa media",
        "Selección de proyectos con entrega llave en mano y dotación",
        "Estructuración de esquemas tributarios y remesa de utilidades",
        "Monitoreo de valorización anual del sector",
      ],
      ctaText: "Consultar opciones de inversión",
      ctaLink: "/contacto",
    },
  ];

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-luxury text-gold-700 font-semibold mb-2 font-sans">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Servicios Inmobiliarios Integrales</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-950 tracking-tight">
          Nuestros Servicios Corporativos
        </h1>
        <p className="text-sm text-sand-500 mt-3 font-sans leading-relaxed">
          En SERINMOBILIARIO combinamos el conocimiento profundo del mercado de Santa Marta con una atención de clase mundial para compradores, vendedores e inversionistas.
        </p>
      </div>

      {/* Services List */}
      <div className="space-y-16">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 1;

          return (
            <div
              key={service.id}
              className={`p-8 sm:p-12 rounded-xs bg-white border border-sand-200 shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="w-12 h-12 rounded-xs bg-forest-950 text-gold-400 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>

                <span className="text-[10px] uppercase tracking-luxury text-gold-700 font-semibold block">
                  {service.subtitle}
                </span>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950">
                  {service.title}
                </h2>

                <p className="text-xs sm:text-sm text-sand-500 leading-relaxed font-sans">
                  {service.description}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-forest-900 mb-2">
                    Alcance del Servicio:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-forest-900/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Link href={service.ctaLink}>
                    <Button variant="gold" size="md" className="gap-2">
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 bg-cream-50 p-8 rounded-xs border border-sand-200 text-center">
                <div className="w-16 h-16 rounded-full bg-forest-950 text-gold-400 flex items-center justify-center mx-auto mb-4 border border-gold-400/30 shadow-gold-glow">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-forest-950 mb-2">
                  Atención Exclusiva SER
                </h3>
                <p className="text-xs text-sand-500 leading-relaxed font-sans mb-4">
                  Cada cliente cuenta con un gestor patrimonial asignado para asegurar discreción, rapidez y transparencia absoluta.
                </p>
                <span className="text-[10px] uppercase tracking-luxury text-gold-700 font-semibold font-sans">
                  "SU CONFIANZA ES NUESTRA SEGURIDAD"
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
