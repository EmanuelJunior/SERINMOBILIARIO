export type OperationType = "venta" | "arriendo" | "inversion";

export type PropertyType =
  | "apartamento"
  | "penthouse"
  | "casa-playa"
  | "condohotel"
  | "villa-campestre"
  | "lote-inversion";

export type PropertyStatus = "publicada" | "borrador" | "vendida" | "arrendada" | "destacada";

export interface PropertyAmenity {
  id: string;
  name: string;
  category: "vistas" | "bienestar" | "servicios" | "seguridad";
  iconName?: string;
}

export interface Property {
  id: string;
  slug: string;
  code: string; // Ej: SER-1048
  title: string;
  tagline: string;
  description: string;
  price: number;
  currency: "COP" | "USD";
  adminFee?: number; // Cuota administración mensual
  operation: OperationType;
  propertyType: PropertyType;
  status: PropertyStatus;
  isFeatured: boolean;

  // Ubicación
  sectorId: string;
  sectorName: string;
  address: string;
  zone: string; // Santa Marta
  coordinates: {
    lat: number;
    lng: number;
  };

  // Características cuantitativas
  bedrooms: number;
  bathrooms: number;
  parkingSpaces: number;
  builtArea: number; // m²
  privateArea?: number; // m²
  floorNumber?: number;
  yearBuilt?: number;
  estrato?: number;

  // Características cualitativas
  seaView: boolean;
  pool: boolean;
  balcony: boolean;
  elevator: boolean;
  gym: boolean;
  furnished: boolean;
  airConditioning: boolean;
  privateSecurity: boolean;
  beachfront: boolean;
  terrace: boolean;
  amenities: string[];

  // Galería multimedia
  featuredImage: string;
  images: string[];
  videoUrl?: string;
  virtualTourUrl?: string;

  // Clientify & SEO
  clientifyTag?: string;
  metaTitle?: string;
  metaDescription?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PropertyFilters {
  search?: string;
  operation?: OperationType | "todos";
  propertyType?: PropertyType | "todos";
  sector?: string;
  minPrice?: number;
  maxPrice?: number;
  minBedrooms?: number;
  minBathrooms?: number;
  minArea?: number;
  maxArea?: number;
  seaView?: boolean;
  pool?: boolean;
  balcony?: boolean;
  elevator?: boolean;
  gym?: boolean;
  furnished?: boolean;
  beachfront?: boolean;
  sortBy?: "price-asc" | "price-desc" | "newest" | "featured";
}
