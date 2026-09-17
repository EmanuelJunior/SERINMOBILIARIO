export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: "admin" | "editor";
  avatar?: string;
}

export interface AmenityItem {
  id: string;
  name: string;
  category: "vistas" | "bienestar" | "servicios" | "seguridad";
  active: boolean;
}
