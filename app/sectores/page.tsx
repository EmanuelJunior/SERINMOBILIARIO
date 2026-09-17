import Link from "next/link";
import { SectorService } from "@/features/sectors/services/sectorService";
import { SectorCard } from "@/features/sectors/components/SectorCard";
import { BarChart3 } from "lucide-react";
import { PalmIcon, DiamondIcon } from "@/components/ui/pillar-icons";

export const revalidate = 0;

export default function SectoresPage() {
  const sectors = SectorService.getAll();

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen relative overflow-hidden">
      {/* 1. Panoramic Editorial Header Banner */}
      <div className="relative pt-28 sm:pt-32 pb-14 sm:pb-16 bg-[#FAF8F5] border-b border-sand-200/60 overflow-hidden">
        {/* Right Half: Panoramic Beach & Sierra Nevada Coastline of Santa Marta */}
        <div
          className="absolute right-0 top-0 bottom-0 w-full lg:w-[65%] xl:w-[60%] bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85')`,
            maskImage:
              "linear-gradient(to right, transparent 0%, transparent 8%, black 35%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, transparent 8%, black 35%, black 100%)",
          }}
        >
          {/* Script Signature on the Top Right over the water & hills */}
          <div className="absolute top-6 sm:top-10 right-6 sm:right-16 text-right hidden sm:block z-10 pointer-events-none select-none">
            <div className="font-serif italic text-3xl sm:text-4xl text-gold-500 font-light drop-shadow-sm">
              Santa Marta
            </div>
            <div className="flex items-center justify-end gap-2 text-forest-950/80 mt-1">
              <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-medium text-forest-900/90">
                MÁS QUE UN DESTINO — UN ESTILO DE VIDA
              </span>
            </div>
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

        {/* Left Side: Editorial Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl space-y-4">
            {/* Pill / Eyebrow */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-[1.5px] bg-gold-600" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-gold-800 font-semibold font-sans">
                GUÍA DE ZONAS & PLUSVALÍA
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-forest-950 tracking-tight leading-[1.08]">
              Sectores Exclusivos
              <br />
              <span className="font-normal text-forest-900">de Santa Marta</span>
            </h1>

            {/* Subtitle Description with inline sector links */}
            <p className="text-xs sm:text-sm text-sand-600 font-sans font-light leading-relaxed max-w-xl">
              Descubre la identidad única de cada polo inmobiliario en la costa samaria. Desde la tranquilidad hotelera de{" "}
              <Link
                href="/sectores/bello-horizonte"
                className="text-forest-950 font-medium underline decoration-gold-400 decoration-1 underline-offset-2 hover:text-gold-700 transition-colors"
              >
                Bello Horizonte
              </Link>{" "}
              y{" "}
              <Link
                href="/sectores/pozos-colorados"
                className="text-forest-950 font-medium underline decoration-gold-400 decoration-1 underline-offset-2 hover:text-gold-700 transition-colors"
              >
                Pozos Colorados
              </Link>
              , hasta el vanguardismo de{" "}
              <Link
                href="/sectores/playa-salguero"
                className="text-forest-950 font-medium underline decoration-gold-400 decoration-1 underline-offset-2 hover:text-gold-700 transition-colors"
              >
                Playa Salguero
              </Link>{" "}
              y el patrimonio histórico del Centro. Invierte en más que una propiedad: invierte en un estilo de vida.
            </p>

            {/* 3 Value Pillars in a Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-3 max-w-2xl">
              {/* Pillar 1: ALTA PLUSVALÍA */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-sand-300/80 bg-white/60 shadow-xs flex items-center justify-center shrink-0 text-gold-700">
                  <BarChart3 className="w-4 h-4 text-gold-700" />
                </div>
                <div>
                  <strong className="block text-[11px] font-serif font-bold uppercase tracking-wider text-forest-950">
                    ALTA PLUSVALÍA
                  </strong>
                  <span className="text-[10px] text-sand-500 font-sans leading-tight block">
                    Una ciudad en constante crecimiento
                  </span>
                </div>
              </div>

              {/* Pillar 2: ESTILO DE VIDA ÚNICO */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-sand-300/80 bg-white/60 shadow-xs flex items-center justify-center shrink-0 text-gold-700">
                  <PalmIcon className="w-4 h-4 text-gold-700" />
                </div>
                <div>
                  <strong className="block text-[11px] font-serif font-bold uppercase tracking-wider text-forest-950">
                    ESTILO DE VIDA ÚNICO
                  </strong>
                  <span className="text-[10px] text-sand-500 font-sans leading-tight block">
                    Mar, naturaleza y cultura todo el año
                  </span>
                </div>
              </div>

              {/* Pillar 3: GRANDES OPORTUNIDADES */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-sand-300/80 bg-white/60 shadow-xs flex items-center justify-center shrink-0 text-gold-700">
                  <DiamondIcon className="w-4 h-4 text-gold-700" />
                </div>
                <div>
                  <strong className="block text-[11px] font-serif font-bold uppercase tracking-wider text-forest-950">
                    GRANDES OPORTUNIDADES
                  </strong>
                  <span className="text-[10px] text-sand-500 font-sans leading-tight block">
                    Invierte hoy en el futuro del Caribe colombiano
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Sectors Grid matching mockup (3 on top row, 2 centered on bottom row) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="flex flex-wrap justify-center gap-6">
          {sectors.map((sector) => (
            <div
              key={sector.id}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <SectorCard sector={sector} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

