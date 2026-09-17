import { Sector } from "../types";
import { INITIAL_SECTORS } from "../constants";

const STORAGE_KEY = "serinmobiliario_sectors_v2";

export class SectorService {
  private static getStoredSectors(): Sector[] {
    if (typeof window === "undefined") return INITIAL_SECTORS;
    try {
      localStorage.removeItem("serinmobiliario_sectors_v1");
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_SECTORS));
        return INITIAL_SECTORS;
      }
      const stored: Sector[] = JSON.parse(data);
      let needsSave = false;
      const merged = [...stored];

      for (const initSector of INITIAL_SECTORS) {
        const existingIdx = merged.findIndex((s) => s.id === initSector.id);
        if (existingIdx === -1) {
          merged.push(initSector);
          needsSave = true;
        } else if (merged[existingIdx].featuredImage !== initSector.featuredImage) {
          merged[existingIdx].featuredImage = initSector.featuredImage;
          merged[existingIdx].gallery = initSector.gallery;
          needsSave = true;
        }
      }

      if (needsSave) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      }
      return merged;
    } catch {
      return INITIAL_SECTORS;
    }
  }

  private static saveSectors(sectors: Sector[]): void {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sectors));
    } catch (e) {
      console.error("Error guardando sectores:", e);
    }
  }

  static getAll(): Sector[] {
    const sectors = this.getStoredSectors();
    return [...sectors].sort((a, b) => a.order - b.order);
  }

  static getBySlug(slug: string): Sector | undefined {
    const sectors = this.getStoredSectors();
    return sectors.find((s) => s.slug.toLowerCase() === slug.toLowerCase());
  }

  static getById(id: string): Sector | undefined {
    const sectors = this.getStoredSectors();
    return sectors.find((s) => s.id === id);
  }

  static create(sector: Omit<Sector, "id">): Sector {
    const sectors = this.getStoredSectors();
    const newSector: Sector = {
      ...sector,
      id: `sec-${Date.now()}`,
    };
    sectors.push(newSector);
    this.saveSectors(sectors);
    return newSector;
  }

  static update(id: string, updates: Partial<Sector>): Sector | null {
    const sectors = this.getStoredSectors();
    const index = sectors.findIndex((s) => s.id === id);
    if (index === -1) return null;

    sectors[index] = { ...sectors[index], ...updates };
    this.saveSectors(sectors);
    return sectors[index];
  }

  static delete(id: string): boolean {
    const sectors = this.getStoredSectors();
    const filtered = sectors.filter((s) => s.id !== id);
    if (filtered.length === sectors.length) return false;
    this.saveSectors(filtered);
    return true;
  }
}
