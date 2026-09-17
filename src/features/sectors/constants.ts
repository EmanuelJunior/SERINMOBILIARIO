import { Sector } from "./types";

export const INITIAL_SECTORS: Sector[] = [
  {
    id: "sec-bello-horizonte",
    slug: "bello-horizonte",
    name: "Bello Horizonte",
    tagline: "El epicentro del descanso exclusivo y la alta hotelería en Santa Marta",
    description:
      "Ubicado en el corredor turístico del sur de Santa Marta, Bello Horizonte ofrece amplias playas de arena dorada, aguas tranquilas y una atmósfera serena. Es el hogar de complejos residenciales de lujo, condohoteles y resorts internacionales de primer nivel.",
    highlights: [
      "Playas amplias y de oleaje suave",
      "Cercanía a hoteles 5 estrellas y centros comerciales",
      "Alta rentabilidad por rentas vacacionales",
      "A sólo 7 minutos del Aeropuerto Internacional Simón Bolívar",
    ],
    lifestyle: "Familiar, vacacional de alta gama y retiro frente al mar.",
    appreciationRate: "+12.4% anual",
    averageM2Price: 8200000,
    propertiesCount: 14,
    featuredImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    ],
    coordinates: { lat: 11.1342, lng: -74.2281 },
    order: 1,
  },
  {
    id: "sec-playa-salguero",
    slug: "playa-salguero",
    name: "Playa Salguero",
    tagline: "Privacidad, arquitectura de vanguardia y atardeceres incomparables",
    description:
      "Playa Salguero se ha consolidado como el sector residencial de mayor proyección arquitectónica en Santa Marta. Sus modernos rascacielos frente al mar ofrecen vistas despejadas a la desembocadura del Río Gaira y la Sierra Nevada.",
    highlights: [
      "Edificios inteligentes con amenidades tipo resort",
      "Baja densidad y ambiente residencial exclusivo",
      "Acceso directo a playas tranquilas",
      "Conexión inmediata con El Rodadero Sur y el Centro",
    ],
    lifestyle: "Residencial de lujo, náutico y privacidad absoluta.",
    appreciationRate: "+14.8% anual",
    averageM2Price: 7900000,
    propertiesCount: 18,
    featuredImage:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    ],
    coordinates: { lat: 11.1895, lng: -74.2273 },
    order: 2,
  },
  {
    id: "sec-pozos-colorados",
    slug: "pozos-colorados",
    name: "Pozos Colorados",
    tagline: "Paisajes de postal entre el mar Caribe y las montañas verdes",
    description:
      "Pozos Colorados combina la majestuosidad de la Sierra Nevada con playas serenas de arena oscura rica en minerales. Es el enclave predilecto para condominios cerrados de alto perfil, casas de playa y desarrollos de segunda residencia de gran escala.",
    highlights: [
      "Entorno natural protegido y amplias zonas verdes",
      "Urbanizaciones privadas con campos deportivos y club houses",
      "Crecimiento constante de plusvalía y proyectos corporativos",
      "Excelente conectividad vial",
    ],
    lifestyle: "Naturaleza, exclusividad deportiva y bienestar integral.",
    appreciationRate: "+11.9% anual",
    averageM2Price: 7600000,
    propertiesCount: 11,
    featuredImage:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6c563aaec9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    ],
    coordinates: { lat: 11.1478, lng: -74.2294 },
    order: 3,
  },
  {
    id: "sec-el-rodadero",
    slug: "el-rodadero",
    name: "El Rodadero y Rodadero Sur",
    tagline: "El corazón turístico y náutico de mayor dinamismo de Santa Marta",
    description:
      "La bahía más icónica de Santa Marta ofrece una vibrante escena de entretenimiento, restaurantes gastronómicos, marinas y actividades acuáticas. Ideal para compradores que buscan alto flujo de ocupación turística durante todo el año.",
    highlights: [
      "La mayor demanda de ocupación turística de la región",
      "Caminata directa a playas, muelles de lanchas y restaurantes",
      "Opciones de inversión diversificadas en apartamentos turísticos",
      "Infraestructura consolidada y servicios 24/7",
    ],
    lifestyle: "Turístico dinámico, náutico y comercial.",
    appreciationRate: "+10.5% anual",
    averageM2Price: 6800000,
    propertiesCount: 22,
    featuredImage:
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
    ],
    coordinates: { lat: 11.2045, lng: -74.2279 },
    order: 4,
  },
  {
    id: "sec-centro-historico",
    slug: "centro-historico",
    name: "Centro Histórico & Marina",
    tagline: "Historia colonial, vida nocturna cosmopolita y puerto de yates",
    description:
      "El encanto del casco histórico más antiguo de Colombia con casas patrimoniales restauradas, cafés de especialidad, galerías de arte y la moderna Marina Internacional de Santa Marta.",
    highlights: [
      "Arquitectura patrimonial colonial y republicana",
      "Cercanía inmediata a la Marina Internacional de Yates",
      "Epicentro gastronómico y cultural de Santa Marta",
      "Inmuebles boutique de alta valorización",
    ],
    lifestyle: "Bohemio chic, náutico y cultural.",
    appreciationRate: "+13.1% anual",
    averageM2Price: 7400000,
    propertiesCount: 9,
    featuredImage:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    ],
    coordinates: { lat: 11.2408, lng: -74.211 },
    order: 5,
  },
];
