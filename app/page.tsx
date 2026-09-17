import { PropertyService } from "@/features/properties/services/propertyService";
import { SectorService } from "@/features/sectors/services/sectorService";
import { HeroSection } from "@/features/home/components/HeroSection";
import { FeaturedPropertiesSection } from "@/features/home/components/FeaturedPropertiesSection";
import { SectorsShowcaseSection } from "@/features/home/components/SectorsShowcaseSection";
import { ServicesGridSection } from "@/features/home/components/ServicesGridSection";
import { RealEstateInvestmentSection } from "@/features/home/components/RealEstateInvestmentSection";
import { HowItWorksSection } from "@/features/home/components/HowItWorksSection";
import { TestimonialsSection } from "@/features/home/components/TestimonialsSection";
import { OwnersCTASection } from "@/features/home/components/OwnersCTASection";
import { FAQSection } from "@/features/home/components/FAQSection";

export const revalidate = 0; // Dynamic data

export default async function HomePage() {
  const featuredProperties = PropertyService.getFeatured();
  const allProperties = PropertyService.getPublished();
  const sectors = SectorService.getAll();

  const propertiesToDisplay =
    featuredProperties.length > 0 ? featuredProperties : allProperties;

  return (
    <main className="w-full min-h-screen">
      {/* 1. Hero con buscador multi-filtro y llamada editorial */}
      <HeroSection />

      {/* 2. Propiedades destacadas con cards grandes y especificaciones */}
      <FeaturedPropertiesSection properties={propertiesToDisplay} />

      {/* 3. Sectores clave: Bello Horizonte, Rodadero, Salguero, Pozos Colorados */}
      <SectorsShowcaseSection sectors={sectors} />

      {/* 4. Pilares de servicios: Comprar, Vender, Arrendar, Invertir */}
      <ServicesGridSection />

      {/* 5. Sección editorial de inversión inmobiliaria en Santa Marta */}
      <RealEstateInvestmentSection />

      {/* 6. Proceso de 3 pasos: Encuentra, Agenda, Conoce */}
      <HowItWorksSection />

      {/* 7. Testimonios de clientes e inversionistas */}
      <TestimonialsSection />

      {/* 8. Captación de propietarios: "¿Tienes una propiedad para vender o arrendar?" */}
      <OwnersCTASection />

      {/* 9. Preguntas frecuentes (FAQ) */}
      <FAQSection />
    </main>
  );
}
