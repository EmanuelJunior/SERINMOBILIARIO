import React from "react";
import Link from "next/link";
import {
  Home,
  BarChart3,
  Key,
  Palmtree,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Briefcase,
} from "lucide-react";
import { DiamondIcon } from "@/components/ui/pillar-icons";

export const revalidate = 0;

export default function ServiciosPage() {
  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen relative overflow-hidden">
      {/* 1. Header Editorial Banner */}
      <div className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 border-b border-sand-200/60 overflow-hidden bg-[#FAF8F5]">
        {/* Right Half: Crystal-Clear Coastal Panorama with Terrace Lounge matching Nosotros */}
        <div
          className="absolute right-0 top-0 bottom-0 w-full lg:w-[65%] xl:w-[60%] bg-cover bg-right sm:bg-center"
          style={{
            backgroundImage: `url('/images/services-hero-terrace.jpg')`,
            maskImage:
              "linear-gradient(to right, transparent 0%, transparent 8%, black 35%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, transparent 8%, black 35%, black 100%)",
          }}
        >
          {/* Script Signature on the far right */}
          <div className="absolute top-6 sm:top-10 right-8 sm:right-16 text-right hidden lg:block pointer-events-none select-none z-10">
            <div className="font-serif italic text-2xl sm:text-3xl text-gold-500 font-light drop-shadow-sm">
              Santa Marta
            </div>
            <div className="font-serif italic text-xs sm:text-sm text-forest-950/80 font-light -mt-0.5">
              más que un destino, una mejor inversión.
            </div>
            <div className="w-10 h-[1.5px] bg-gold-600 ml-auto mt-1" />
          </div>
        </div>

        {/* Bottom Right Organic Curved Swoop */}
        <svg
          className="absolute -bottom-0.5 right-0 w-2/5 sm:w-1/3 h-14 sm:h-18 pointer-events-none text-[#FAF8F5] z-10"
          viewBox="0 0 500 100"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,100 C180,100 320,40 500,0 L500,100 Z" />
        </svg>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-sand-300/80 shadow-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-gold-500 ring-2 ring-gold-400/30" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-forest-900 font-semibold font-sans">
              Servicios Inmobiliarios Integrales
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-forest-950 tracking-tight leading-tight max-w-4xl mx-auto">
            Nuestros Servicios Corporativos
          </h1>

          <p className="text-xs sm:text-sm text-sand-600 mt-3 font-sans leading-relaxed max-w-2xl mx-auto">
            En SERINMOBILIARIO combinamos el conocimiento profundo del mercado de Santa Marta con una atención de clase mundial para compradores, vendedores, arrendadores e inversionistas.
          </p>

          {/* 3 Horizontal Value Pillars */}
          <div className="inline-flex flex-wrap items-center justify-center gap-6 sm:gap-10 bg-white/90 backdrop-blur-md border border-sand-200/80 rounded-2xl py-4 px-6 sm:px-10 shadow-sm mt-8">
            {/* Pillar 1 */}
            <div className="flex items-center gap-3 text-left">
              <div className="w-9 h-9 rounded-full bg-[#F5F2EB] border border-gold-400/50 flex items-center justify-center text-gold-700 shrink-0">
                <DiamondIcon className="w-4 h-4" />
              </div>
              <div>
                <div className="font-serif font-bold text-xs sm:text-sm text-forest-950 leading-snug">
                  Atención exclusiva
                </div>
                <div className="text-[10px] sm:text-[11px] text-sand-500 font-sans">
                  Un servicio personalizado en cada etapa.
                </div>
              </div>
            </div>

            <div className="hidden md:block w-px h-8 bg-sand-200" />

            {/* Pillar 2 */}
            <div className="flex items-center gap-3 text-left">
              <div className="w-9 h-9 rounded-full bg-[#F5F2EB] border border-gold-400/50 flex items-center justify-center text-gold-700 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="font-serif font-bold text-xs sm:text-sm text-forest-950 leading-snug">
                  Respaldo jurídico
                </div>
                <div className="text-[10px] sm:text-[11px] text-sand-500 font-sans">
                  Transacciones seguras y transparentes.
                </div>
              </div>
            </div>

            <div className="hidden md:block w-px h-8 bg-sand-200" />

            {/* Pillar 3 */}
            <div className="flex items-center gap-3 text-left">
              <div className="w-9 h-9 rounded-full bg-[#F5F2EB] border border-gold-400/50 flex items-center justify-center text-gold-700 shrink-0">
                <BarChart3 className="w-4 h-4" />
              </div>
              <div>
                <div className="font-serif font-bold text-xs sm:text-sm text-forest-950 leading-snug">
                  Inversión inteligente
                </div>
                <div className="text-[10px] sm:text-[11px] text-sand-500 font-sans">
                  Oportunidades con alto potencial en Santa Marta.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Services Cards Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10 sm:space-y-12">
        {/* CARD 1: Compra de Propiedades de Lujo */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-sand-200/70 shadow-[0_8px_30px_rgba(7,43,36,0.04)] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-forest-950 text-gold-400 flex items-center justify-center border border-gold-500/40 shadow-md shrink-0">
                <Home className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-gold-800 font-bold block font-sans">
                  ASESORÍA PATRIMONIAL Y BÚSQUEDA PERSONALIZADA
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-forest-950 leading-tight">
                  Compra de Propiedades de Lujo
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-sand-600 leading-relaxed font-sans font-light">
              Guiamos a compradores nacionales e internacionales en la adquisición de inmuebles excepcionales en Santa Marta. Realizamos un filtrado exhaustivo de mercado para presentar únicamente opciones que cumplan con criterios rigurosos de calidad arquitectónica, vista y tradición legal.
            </p>

            <div>
              <div className="text-[11px] uppercase tracking-wider font-semibold text-forest-950 mb-3 font-sans">
                ALCANCE DEL SERVICIO:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="flex items-start gap-2 text-xs text-sand-700 leading-snug">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>Presentación de portafolio off-market y exclusivo</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-sand-700 leading-snug">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>Estudio de títulos a 20 años sin costo para el comprador</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-sand-700 leading-snug">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>Negociación estratégica del mejor valor por m²</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-sand-700 leading-snug">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>Acompañamiento en escrituración notarial y entrega de llaves</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/propiedades?operation=venta"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-forest-950 font-semibold px-6 py-3 rounded-lg text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all group"
              >
                <span>VER PROPIEDADES EN VENTA</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85"
              alt="Propiedad de lujo con terraza y piscina en Santa Marta"
              className="w-full h-full object-cover"
            />
            {/* Soft Frosted Editorial Overlay */}
            <div className="absolute top-4 left-4 max-w-[240px] bg-white/85 backdrop-blur-md p-3.5 rounded-xl border border-white/60 shadow-sm">
              <div className="font-serif italic text-xs sm:text-sm text-forest-950 font-medium leading-snug">
                &ldquo;Propiedades extraordinarias para vidas extraordinarias.&rdquo;
              </div>
              <div className="w-6 h-0.5 bg-gold-600 mt-1.5" />
            </div>

            {/* Bottom Location Tag */}
            <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-950/80 backdrop-blur-sm text-[10px] text-gold-300 font-sans tracking-widest uppercase">
              <MapPin className="w-3 h-3 text-gold-400" />
              <span>SANTA MARTA, COLOMBIA</span>
            </div>
          </div>
        </div>

        {/* CARD 2: Comercialización y Venta de Inmuebles (Reversed) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-sand-200/70 shadow-[0_8px_30px_rgba(7,43,36,0.04)] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-md order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85"
              alt="Comercialización inmobiliaria ejecutiva"
              className="w-full h-full object-cover"
            />
            {/* Dark Frosted Editorial Overlay */}
            <div className="absolute top-4 left-4 max-w-[240px] bg-forest-950/80 backdrop-blur-md p-3.5 rounded-xl border border-forest-800/80 text-cream-50 shadow-sm">
              <div className="font-serif italic text-xs sm:text-sm text-gold-300 font-medium leading-snug">
                &ldquo;Tu propiedad, en manos expertas, con alcance global.&rdquo;
              </div>
              <div className="w-6 h-0.5 bg-gold-400 mt-1.5" />
            </div>

            {/* Brand Logo folder representation */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-2.5 rounded-xl border border-sand-200 flex items-center justify-between text-[11px] font-serif font-bold text-forest-950">
              <span>SERINMOBILIARIO</span>
              <span className="text-[9px] uppercase tracking-wider text-gold-700 font-sans">PORTAFOLIO EXCLUSIVO</span>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-forest-950 text-gold-400 flex items-center justify-center border border-gold-500/40 shadow-md shrink-0">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-gold-800 font-bold block font-sans">
                  EXPOSICIÓN NACIONAL E INTERNACIONAL DE ALTO NIVEL
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-forest-950 leading-tight">
                  Comercialización y Venta de Inmuebles
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-sand-600 leading-relaxed font-sans font-light">
              Diseñamos una estrategia integral para comercializar tu propiedad frente a compradores solventes. Con producción fotográfica de arquitectura, segmentación digital y una red consolidada de inversionistas, aseguramos ventas ágiles y a precio justo.
            </p>

            <div>
              <div className="text-[11px] uppercase tracking-wider font-semibold text-forest-950 mb-3 font-sans">
                ALCANCE DEL SERVICIO:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="flex items-start gap-2 text-xs text-sand-700 leading-snug">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>Fotografía profesional, video con dron y renders 3D</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-sand-700 leading-snug">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>Publicación destacada en nuestro ecosistema digital</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-sand-700 leading-snug">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>Filtro crediticio y de solvencia de potenciales compradores</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-sand-700 leading-snug">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>Cierre jurídico blindado con promesas de compraventa notariales</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/vende-tu-propiedad"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-forest-950 font-semibold px-6 py-3 rounded-lg text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all group"
              >
                <span>CONSIGNAR MI PROPIEDAD</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* CARD 3: Arrendamiento Residencial & Corporativo */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-sand-200/70 shadow-[0_8px_30px_rgba(7,43,36,0.04)] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-forest-950 text-gold-400 flex items-center justify-center border border-gold-500/40 shadow-md shrink-0">
                <Key className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-gold-800 font-bold block font-sans">
                  RENTAS CON RESPALDO Y PÓLIZA GARANTIZADA
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-forest-950 leading-tight">
                  Arrendamiento Residencial &amp; Corporativo
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-sand-600 leading-relaxed font-sans font-light">
              Gestionamos el arrendamiento de apartamentos y residencias de primer orden en Santa Marta. Ofrecemos a los propietarios tranquilidad absoluta mediante pólizas de cumplimiento que garantizan el pago puntual del canon y cuotas de administración.
            </p>

            <div>
              <div className="text-[11px] uppercase tracking-wider font-semibold text-forest-950 mb-3 font-sans">
                ALCANCE DEL SERVICIO:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="flex items-start gap-2 text-xs text-sand-700 leading-snug">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>Estudio digital de asegurabilidad de arrendatarios</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-sand-700 leading-snug">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>Inventario fotográfico detallado de entrega y recepción</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-sand-700 leading-snug">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>Gestión de contratos con firmas digitales certificadas</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-sand-700 leading-snug">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>Mantenimiento preventivo y atención al inquilino</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/propiedades?operation=arriendo"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-forest-950 font-semibold px-6 py-3 rounded-lg text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all group"
              >
                <span>EXPLORAR INMUEBLES EN ARRIENDO</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Showcase + Micro Editorial Box */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-12 gap-3 h-72 sm:h-80 lg:h-96">
            <div className="sm:col-span-8 relative rounded-2xl overflow-hidden shadow-md h-full">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85"
                alt="Habitación de lujo frente al mar en Santa Marta"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Editorial Quote Card on the side */}
            <div className="sm:col-span-4 bg-[#F5F2EB] rounded-2xl p-4 flex flex-col justify-between border border-sand-300/60 text-forest-950">
              <div>
                <div className="font-serif italic text-xs sm:text-sm font-semibold leading-snug text-forest-900">
                  &ldquo;Hogares temporales, experiencias permanentes.&rdquo;
                </div>
                <div className="w-6 h-0.5 bg-gold-600 my-3" />
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-[10px] font-sans font-bold uppercase tracking-wider text-forest-900">
                  <Home className="w-3.5 h-3.5 text-gold-700 shrink-0" />
                  <span>Estancias tranquilas</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-sans font-bold uppercase tracking-wider text-forest-900">
                  <Briefcase className="w-3.5 h-3.5 text-gold-700 shrink-0" />
                  <span>Gestión profesional</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-sans font-bold uppercase tracking-wider text-forest-900">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-700 shrink-0" />
                  <span>Tu inversión protegida</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 4: Estructuración de Inversiones Turísticas (Reversed) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-sand-200/70 shadow-[0_8px_30px_rgba(7,43,36,0.04)] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-md order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85"
              alt="Condohotel e inversión turística en el Caribe"
              className="w-full h-full object-cover"
            />
            {/* Dark Frosted Editorial Overlay */}
            <div className="absolute top-4 left-4 max-w-[240px] bg-forest-950/80 backdrop-blur-md p-3.5 rounded-xl border border-forest-800/80 text-cream-50 shadow-sm">
              <div className="font-serif italic text-xs sm:text-sm text-gold-300 font-medium leading-snug">
                &ldquo;Invertir hoy en el paraíso, es construir el mañana.&rdquo;
              </div>
              <div className="w-6 h-0.5 bg-gold-400 mt-1.5" />
            </div>

            {/* Bottom Location Tag */}
            <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-950/80 backdrop-blur-sm text-[10px] text-gold-300 font-sans tracking-widest uppercase">
              <MapPin className="w-3 h-3 text-gold-400" />
              <span>SANTA MARTA, COLOMBIA</span>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-forest-950 text-gold-400 flex items-center justify-center border border-gold-500/40 shadow-md shrink-0">
                <Palmtree className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-gold-800 font-bold block font-sans">
                  RENTAS EN DÓLARES Y ALTA VALORIZACIÓN HOTELERA
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-forest-950 leading-tight">
                  Estructuración de Inversiones Turísticas
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-sand-600 leading-relaxed font-sans font-light">
              Santa Marta lidera el crecimiento en turismo del Caribe colombiano. Asesoramos en la selección de activos inmobiliarios con licencias turísticas activas en Bello Horizonte y Playa Salguero, operados profesionalmente para maximizar el retorno de inversión (ROI).
            </p>

            <div>
              <div className="text-[11px] uppercase tracking-wider font-semibold text-forest-950 mb-3 font-sans">
                ALCANCE DEL SERVICIO:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="flex items-start gap-2 text-xs text-sand-700 leading-snug">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>Análisis financiero con proyecciones de ocupación y tarifa media</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-sand-700 leading-snug">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>Selección de proyectos con entrega llave en mano y dotación</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-sand-700 leading-snug">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>Estructuración de esquemas tributarios y emisora de utilidades</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-sand-700 leading-snug">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>Monitoreo de valorización anual del sector</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contacto?subject=inversiones"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-forest-950 font-semibold px-6 py-3 rounded-lg text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all group"
              >
                <span>CONSULTAR OPCIONES DE INVERSIÓN</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
