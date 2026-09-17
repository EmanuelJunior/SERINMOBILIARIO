export interface Sector {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  lifestyle: string;
  appreciationRate: string; // Tasa de valorización anual
  averageM2Price: number;
  propertiesCount: number;
  featuredImage: string;
  gallery: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  order: number;
}
