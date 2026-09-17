import { Property, PropertyFilters, PropertyStatus } from "../types";
import { INITIAL_PROPERTIES } from "../constants";

const STORAGE_KEY = "serinmobiliario_properties_v2";

export class PropertyService {
  private static getStoredProperties(): Property[] {
    if (typeof window === "undefined") return INITIAL_PROPERTIES;
    try {
      // Clear legacy storage key if present
      localStorage.removeItem("serinmobiliario_properties_v1");

      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_PROPERTIES));
        return INITIAL_PROPERTIES;
      }

      const stored: Property[] = JSON.parse(data);
      let needsSave = false;
      const merged = [...stored];

      // Guarantee all initial properties exist in the stored list
      for (const initProp of INITIAL_PROPERTIES) {
        const existingIdx = merged.findIndex((p) => p.id === initProp.id);
        if (existingIdx === -1) {
          merged.push(initProp);
          needsSave = true;
        } else {
          // Sync images and details if initial property has newer or more verified housing images
          if (
            !merged[existingIdx].images ||
            merged[existingIdx].images.length < (initProp.images?.length || 0)
          ) {
            merged[existingIdx].images = initProp.images;
            merged[existingIdx].featuredImage = initProp.featuredImage;
            needsSave = true;
          }
        }
      }

      if (needsSave) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      }

      return merged;
    } catch {
      return INITIAL_PROPERTIES;
    }
  }

  private static saveProperties(properties: Property[]): void {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(properties));
    } catch (e) {
      console.error("Error guardando propiedades:", e);
    }
  }

  static getAll(): Property[] {
    return this.getStoredProperties();
  }

  static getPublished(): Property[] {
    return this.getStoredProperties().filter(
      (p) => p.status === "publicada" || p.status === "destacada"
    );
  }

  static getFeatured(): Property[] {
    return this.getStoredProperties().filter(
      (p) => p.isFeatured && (p.status === "publicada" || p.status === "destacada")
    );
  }

  static getBySlug(slug: string): Property | undefined {
    return this.getStoredProperties().find((p) => p.slug === slug);
  }

  static getById(id: string): Property | undefined {
    return this.getStoredProperties().find((p) => p.id === id);
  }

  static getBySectorSlug(sectorSlug: string): Property[] {
    const slug = sectorSlug.toLowerCase();
    return this.getPublished().filter((p) => {
      const pSectorId = p.sectorId.toLowerCase().replace("sec-", "");
      const pSectorName = p.sectorName.toLowerCase();
      return (
        pSectorId === slug ||
        pSectorId.includes(slug) ||
        pSectorName.includes(slug)
      );
    });
  }

  static getSimilar(property: Property, limit = 3): Property[] {
    return this.getPublished()
      .filter((p) => p.id !== property.id)
      .filter((p) => p.sectorId === property.sectorId || p.propertyType === property.propertyType)
      .slice(0, limit);
  }

  static filter(filters: PropertyFilters): Property[] {
    let result = this.getPublished();

    if (filters.search) {
      const query = filters.search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.sectorName.toLowerCase().includes(query) ||
          p.code.toLowerCase().includes(query)
      );
    }

    if (filters.operation && filters.operation !== "todos") {
      result = result.filter((p) => p.operation === filters.operation);
    }

    if (filters.propertyType && filters.propertyType !== "todos") {
      result = result.filter((p) => {
        if (filters.propertyType === "casa-playa") {
          return p.propertyType === "casa-playa" || p.propertyType === "villa-campestre";
        }
        return p.propertyType === filters.propertyType;
      });
    }

    if (filters.sector && filters.sector !== "todos") {
      const query = filters.sector.toLowerCase();
      result = result.filter((p) => {
        const id = p.sectorId.toLowerCase().replace("sec-", "");
        const name = p.sectorName.toLowerCase();
        return (
          p.sectorId === filters.sector ||
          name === query ||
          name.includes(query) ||
          query.includes(name) ||
          id.includes(query.replace("sec-", "")) ||
          query.includes(id)
        );
      });
    }

    if (filters.minPrice !== undefined && filters.minPrice > 0) {
      result = result.filter((p) => p.price >= (filters.minPrice ?? 0));
    }

    if (filters.maxPrice !== undefined && filters.maxPrice > 0) {
      result = result.filter((p) => p.price <= (filters.maxPrice ?? Infinity));
    }

    if (filters.minBedrooms !== undefined && filters.minBedrooms > 0) {
      result = result.filter((p) => p.bedrooms >= (filters.minBedrooms ?? 0));
    }

    if (filters.minBathrooms !== undefined && filters.minBathrooms > 0) {
      result = result.filter((p) => p.bathrooms >= (filters.minBathrooms ?? 0));
    }

    if (filters.minArea !== undefined && filters.minArea > 0) {
      result = result.filter((p) => p.builtArea >= (filters.minArea ?? 0));
    }

    if (filters.seaView) result = result.filter((p) => p.seaView);
    if (filters.pool) result = result.filter((p) => p.pool);
    if (filters.balcony) result = result.filter((p) => p.balcony);
    if (filters.elevator) result = result.filter((p) => p.elevator);
    if (filters.gym) result = result.filter((p) => p.gym);
    if (filters.furnished) result = result.filter((p) => p.furnished);
    if (filters.beachfront) result = result.filter((p) => p.beachfront);

    if (filters.sortBy) {
      switch (filters.sortBy) {
        case "price-asc":
          result.sort((a, b) => a.price - b.price);
          break;
        case "price-desc":
          result.sort((a, b) => b.price - a.price);
          break;
        case "featured":
          result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
          break;
        case "newest":
        default:
          result.sort(
            (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
          break;
      }
    }

    return result;
  }

  static create(data: Omit<Property, "id" | "createdAt" | "updatedAt">): Property {
    const list = this.getStoredProperties();
    const now = new Date().toISOString();
    const newProperty: Property = {
      ...data,
      id: `prop-${Date.now()}`,
      createdAt: now,
      updatedAt: now,
    };
    list.unshift(newProperty);
    this.saveProperties(list);
    return newProperty;
  }

  static update(id: string, updates: Partial<Property>): Property | null {
    const list = this.getStoredProperties();
    const index = list.findIndex((p) => p.id === id);
    if (index === -1) return null;

    list[index] = {
      ...list[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    this.saveProperties(list);
    return list[index];
  }

  static delete(id: string): boolean {
    const list = this.getStoredProperties();
    const filtered = list.filter((p) => p.id !== id);
    if (filtered.length === list.length) return false;
    this.saveProperties(filtered);
    return true;
  }

  static getStats() {
    const list = this.getStoredProperties();
    return {
      total: list.length,
      published: list.filter((p) => p.status === "publicada" || p.status === "destacada").length,
      draft: list.filter((p) => p.status === "borrador").length,
      sold: list.filter((p) => p.status === "vendida").length,
      rented: list.filter((p) => p.status === "arrendada").length,
      featured: list.filter((p) => p.isFeatured).length,
    };
  }
}
