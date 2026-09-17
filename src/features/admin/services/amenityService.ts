import { AmenityItem } from "../types";

const AMENITIES_STORAGE_KEY = "serinmobiliario_amenities_v1";

const INITIAL_AMENITIES: AmenityItem[] = [
  { id: "am-1", name: "Vista al mar frontal", category: "vistas", active: true },
  { id: "am-2", name: "Acceso directo a playa", category: "vistas", active: true },
  { id: "am-3", name: "Piscina infinity", category: "bienestar", active: true },
  { id: "am-4", name: "Jacuzzi privado", category: "bienestar", active: true },
  { id: "am-5", name: "Gimnasio equipado", category: "bienestar", active: true },
  { id: "am-6", name: "Sauna y Turco", category: "bienestar", active: true },
  { id: "am-7", name: "Ascensor directo a residencia", category: "servicios", active: true },
  { id: "am-8", name: "Planta eléctrica de suplencia total", category: "servicios", active: true },
  { id: "am-9", name: "Seguridad armada 24/7", category: "seguridad", active: true },
  { id: "am-10", name: "Cámaras de vigilancia CCTV", category: "seguridad", active: true },
  { id: "am-11", name: "Amoblado de lujo", category: "servicios", active: true },
  { id: "am-12", name: "Zona BBQ y terraza panorámica", category: "bienestar", active: true },
];

export class AmenityService {
  static getAll(): AmenityItem[] {
    if (typeof window === "undefined") return INITIAL_AMENITIES;
    try {
      const data = localStorage.getItem(AMENITIES_STORAGE_KEY);
      if (!data) {
        localStorage.setItem(AMENITIES_STORAGE_KEY, JSON.stringify(INITIAL_AMENITIES));
        return INITIAL_AMENITIES;
      }
      return JSON.parse(data);
    } catch {
      return INITIAL_AMENITIES;
    }
  }

  static toggleActive(id: string): void {
    const list = this.getAll();
    const item = list.find((a) => a.id === id);
    if (item) {
      item.active = !item.active;
      if (typeof window !== "undefined") {
        localStorage.setItem(AMENITIES_STORAGE_KEY, JSON.stringify(list));
      }
    }
  }

  static add(name: string, category: AmenityItem["category"]): AmenityItem {
    const list = this.getAll();
    const newItem: AmenityItem = {
      id: `am-${Date.now()}`,
      name,
      category,
      active: true,
    };
    list.push(newItem);
    if (typeof window !== "undefined") {
      localStorage.setItem(AMENITIES_STORAGE_KEY, JSON.stringify(list));
    }
    return newItem;
  }

  static delete(id: string): void {
    const list = this.getAll().filter((a) => a.id !== id);
    if (typeof window !== "undefined") {
      localStorage.setItem(AMENITIES_STORAGE_KEY, JSON.stringify(list));
    }
  }
}
