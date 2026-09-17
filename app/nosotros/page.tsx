import React from "react";
import Link from "next/link";
import {
  Handshake,
  ShieldCheck,
  BarChart3,
} from "lucide-react";
import { DiamondIcon } from "@/components/ui/pillar-icons";
import { BrandLogo } from "@/components/ui/brand-logo";

export const revalidate = 0;

export default function NosotrosPage() {
  const values = [
    {
      title: "Confianza inquebrantable",
      desc: "Relaciones a largo plazo basadas en la honestidad, la claridad y el cumplimiento.",
      icon: Handshake,
    },
    {
      title: "Seguridad jurídica total",
      desc: "Rigurosidad legal en cada proceso para que su inversión esté siempre protegida.",
      icon: ShieldCheck,
    },
    {
      title: "Excelencia y sofisticación",
      desc: "Un servicio de alto nivel, con estándares premium en cada detalle.",
      icon: DiamondIcon,
    },
    {
      title: "Visión de futuro y plusvalía",
      desc: "Identificamos oportunidades hoy para el patrimonio de mañana.",
      icon: BarChart3,
    },
  ];

  const team = [
    {
      name: "Dra. Carolina Restrepo",
      role: "DIRECTORA GENERAL & ASUNTOS JURÍDICOS",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      bio: "Especialista en derecho inmobiliario y amplia experiencia en el sector corporativo del Caribe colombiano.",
    },
    {
      name: "Arq. Juan Sebastián Morales",
      role: "DIRECTOR DE VALORIZACIÓN & PORTAFOLIO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
      bio: "Arquitecto urbanista con amplia experiencia en desarrollos residenciales de alto valor en Santa Marta y Cartagena.",
    },
    {
      name: "Valeria Gómez de la Hoz",
      role: "DIRECTORA DE INVERSIONES TURÍSTICAS",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
      bio: "Especialista en estructuración de proyectos turísticos y asesoría a inversionistas nacionales e internacionales.",
    },
  ];

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen relative overflow-hidden">
      {/* 1. Header Editorial Banner */}
      <div className="relative pt-24 sm:pt-30 pb-20 sm:pb-24 bg-[#FAF8F5] border-b border-sand-200/60 overflow-hidden">

        {/* Right Half: Crystal-Clear Coastal Panorama with Terrace Lounge */}
        <div
          className="absolute right-0 top-0 bottom-0 w-full lg:w-[65%] xl:w-[60%] bg-cover bg-right"
          style={{
            backgroundImage: `url('/images/about-hero-terrace.jpg')`,
            maskImage:
              "linear-gradient(to right, transparent 0%, transparent 8%, black 35%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, transparent 8%, black 35%, black 100%)",
          }}
        >
          {/* Script Signature on the Top Right over the mountains and sky */}
          <div className="absolute top-6 sm:top-10 right-6 sm:right-16 text-right hidden sm:block z-10 pointer-events-none">
            <div className="font-serif italic text-3xl sm:text-4xl text-gold-500 font-light drop-shadow-sm select-none">
              Santa Marta
            </div>
            <div className="font-serif italic text-sm sm:text-base text-forest-950/80 font-light select-none -mt-1">
              siempre inspira
            </div>
            <div className="w-12 h-[1.5px] bg-gold-500/80 ml-auto mt-1.5" />
          </div>
        </div>

        {/* Bottom Right Organic Curved Swoop matching Image 1 */}
        <svg
          className="absolute -bottom-0.5 right-0 w-2/5 sm:w-1/3 h-16 sm:h-20 pointer-events-none text-[#FAF8F5] z-10"
          viewBox="0 0 500 100"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,100 C180,100 320,40 500,0 L500,100 Z" />
        </svg>

        {/* Left Side: Editorial Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-xl space-y-4 pt-4 sm:pt-6">
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-gold-800 font-semibold font-sans">
                — NUESTRA IDENTIDAD —
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl font-extrabold text-forest-950 tracking-tight leading-[1.06]">
              Sobre
              <br />
              <span className="font-bold text-forest-950">SERINMOBILIARIO</span>
            </h1>

            <p className="text-xs sm:text-sm text-sand-600 font-sans font-light leading-relaxed max-w-md">
              Una firma inmobiliaria nacida en Santa Marta para redefinir el estándar de profesionalismo, seguridad jurídica y valor en el mercado inmobiliario del Caribe.
            </p>

            <div className="flex items-center gap-2 pt-2 text-[10px] text-forest-950/80 font-sans tracking-widest uppercase font-medium">
              <span>SANTA MARTA, COLOMBIA</span>
              <span>—</span>
              <span>MÁS QUE UN DESTINO, UN ESTILO DE VIDA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 2. Floating Essence Showcase: "SU CONFIANZA ES NUESTRA SEGURIDAD" */}
        <div className="relative -mt-8 sm:-mt-12 mb-24 max-w-5xl mx-auto">
          {/* Circular Logo Crest with Double Gold Ring overlapping top border */}
          <div className="flex justify-center -mb-10 sm:-mb-12 relative z-30">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-gold-400 bg-forest-950 p-1 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.45)]">
              <div className="w-full h-full rounded-full border border-gold-500/50 flex items-center justify-center overflow-hidden">
                <BrandLogo size="md" className="!w-16 !h-16 sm:!w-20 sm:!h-20 border-0 shadow-none" withGlow={false} />
              </div>
            </div>
          </div>

          {/* Banner Card */}
          <div className="p-8 sm:p-12 pt-14 sm:pt-16 bg-gradient-to-b from-[#051C17] to-[#031410] text-cream-50 rounded-2xl border-2 border-gold-400/80 shadow-[0_20px_50px_rgba(7,43,36,0.35)] relative overflow-hidden text-center">
            {/* Subtle corner palm fronds */}
            <div className="absolute right-0 top-0 bottom-0 w-36 pointer-events-none opacity-10 bg-no-repeat bg-right bg-contain" />
            <div className="absolute left-0 top-0 bottom-0 w-36 pointer-events-none opacity-10 bg-no-repeat bg-left bg-contain" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
                &ldquo;SU CONFIANZA ES NUESTRA SEGURIDAD&rdquo;
              </h2>

              <p className="text-xs sm:text-sm text-[#E0DCD3] leading-relaxed font-light font-sans max-w-2xl mx-auto">
                Más que un eslogan, es el principio no negociable sobre el cual se fundó SERINMOBILIARIO. Entendemos que adquirir o vender una propiedad en Santa Marta representa una de las decisiones financieras más importantes de nuestros clientes. Por ello, brindamos un ecosistema donde la transparencia, la precisión jurídica y el trato de alto nivel convergen para su tranquilidad.
              </p>
            </div>
          </div>

          {/* Vertical watermark on right matching mockup */}
          <div className="hidden xl:flex flex-col items-center gap-1.5 absolute -right-24 top-1/2 -translate-y-1/2 text-[9px] uppercase tracking-[0.25em] text-sand-500 font-sans font-medium select-none pointer-events-none">
            <span>PROPIEDADES</span>
            <span>QUE CREAN</span>
            <span>HISTORIAS</span>
            <div className="w-6 h-[1.5px] bg-gold-600 mt-1" />
          </div>
        </div>

        {/* 3. Nuestra Historia Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-28">
          {/* Left Column: Text */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-gold-800 font-semibold font-sans">
                — NUESTRA HISTORIA —
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest-950 tracking-tight leading-[1.12]">
              Forjando confianza en las
              <br />
              costas del Magdalena
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-sand-600 leading-relaxed font-sans font-light">
              <p>
                SERINMOBILIARIO nace ante la necesidad de brindar a compradores e inversores una experiencia verdaderamente profesional, diferenciada de las prácticas inmobiliarias tradicionales. Ubicados estratégicamente en Santa Marta, nos especializamos en las zonas de mayor valorización del corredor sur y marítimo: Bello Horizonte, Playa Salguero, Pozos Colorados y El Rodadero.
              </p>
              <p>
                A lo largo de los años hemos asesorado a familias en la búsqueda de su hogar de retiro frente al mar, a empresarios en la venta de penthouses icónicos y a fondos de inversión en la adquisición de unidades hoteleras rentables. Conocemos el territorio, su potencial y las oportunidades que lo hacen único.
              </p>
            </div>

            <div className="pt-2">
              <span className="font-serif italic text-sm sm:text-base text-gold-700 select-none block">
                — Santa Marta, nuestro hogar. Su tranquilidad, nuestro compromiso.
              </span>
            </div>
          </div>

          {/* Right Column: Featured Sunset Terrace Photo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-xs overflow-hidden border border-sand-300 shadow-luxury aspect-[16/10] group">
              <img
                src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=85"
                alt="Terraza al atardecer frente al mar en Santa Marta"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Inset Badge Bottom Left */}
              <div className="absolute bottom-5 left-5 text-white z-10">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold block font-sans">
                  SANTA MARTA, COLOMBIA
                </span>
                <strong className="font-serif text-sm sm:text-base font-bold text-white drop-shadow-sm">
                  La Bahía más hermosa de América
                </strong>
              </div>

              {/* Inset Badge Right Edge */}
              <div className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 bg-forest-950/80 backdrop-blur-md border border-gold-400/40 p-3 rounded-xs max-w-[130px] text-right z-10">
                <span className="text-[8px] uppercase tracking-wider text-gold-300 font-medium font-sans leading-tight block">
                  INVERTIR AQUÍ TAMBIÉN ES CREER EN UN MEJOR MAÑANA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Nuestros Valores Section */}
        <div className="mb-28">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-sand-200/80">
            <div>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-gold-800 font-semibold font-sans block mb-1">
                PILARES FUNDAMENTALES
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-forest-950 tracking-tight">
                Nuestros valores
              </h3>
            </div>

            <div className="text-[10px] uppercase tracking-[0.2em] text-sand-500 font-sans font-medium">
              — PRINCIPIOS QUE GUÍAN CADA DECISIÓN
            </div>
          </div>

          {/* 4 Value Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="p-6 bg-white border border-sand-200/80 rounded-xs shadow-xs hover:border-gold-400/60 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-forest-950 border border-gold-400/60 flex items-center justify-center text-gold-400 mb-5 shadow-xs group-hover:bg-gold-500 group-hover:text-forest-950 transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-forest-950 mb-2 leading-snug">
                    {v.title}
                  </h4>
                  <p className="text-xs text-sand-500 leading-relaxed font-sans font-light">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. Equipo Directivo y Asesor Section */}
        <div className="mb-24">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-sand-200/80">
            <div>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-gold-800 font-semibold font-sans block mb-1">
                LIDERAZGO Y EXPERIENCIA
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-forest-950 tracking-tight">
                Equipo directivo y asesor
              </h3>
              <p className="text-xs text-sand-500 mt-1 font-sans font-light">
                Un equipo comprometido con la excelencia inmobiliaria y el acompañamiento seguro en cada negociación.
              </p>
            </div>

            <div className="text-[10px] uppercase tracking-[0.2em] text-sand-500 font-sans font-medium shrink-0">
              — PROFESIONALES QUE HACEN LA DIFERENCIA
            </div>
          </div>

          {/* Team Grid: 3 Members + 1 Editorial Quote */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-white border border-sand-200/80 rounded-xs overflow-hidden shadow-xs hover:border-gold-400/60 hover:shadow-md transition-all duration-300 group"
              >
                <div className="aspect-[4/3.8] overflow-hidden bg-forest-950 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h4 className="font-serif text-base font-bold text-forest-950 leading-snug">
                    {member.name}
                  </h4>
                  <span className="text-[10px] text-gold-700 uppercase tracking-wider font-semibold block mb-2.5 font-sans">
                    {member.role}
                  </span>
                  <p className="text-xs text-sand-500 leading-relaxed font-sans font-light">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}

            {/* Editorial Quote Column on the Right */}
            <div className="p-6 sm:p-8 rounded-xs bg-[#F5F2EB] border border-sand-300/80 flex flex-col justify-center h-full text-center">
              <span className="font-serif text-4xl sm:text-5xl text-gold-600 font-bold leading-none mb-2 select-none">
                &ldquo;
              </span>
              <p className="font-serif italic text-lg sm:text-xl font-bold text-forest-950 leading-snug mb-4">
                Grandes inversiones nacen de grandes alianzas
              </p>
              <div className="w-10 h-[1.5px] bg-gold-600 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

