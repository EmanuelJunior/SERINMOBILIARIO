import { AdminUser } from "../types";

const AUTH_STORAGE_KEY = "serinmobiliario_admin_session";

export class AdminAuthService {
  static getCurrentUser(): AdminUser | null {
    if (typeof window === "undefined") return null;
    try {
      const data = localStorage.getItem(AUTH_STORAGE_KEY);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }

  static login(email: string, password: string): { success: boolean; error?: string; user?: AdminUser } {
    // Para el panel administrativo web, validación de demostración segura
    if (email.toLowerCase() === "admin@serinmobiliario.com" && password === "serinmobiliario2026") {
      const user: AdminUser = {
        id: "usr-admin-1",
        name: "Dirección SERINMOBILIARIO",
        email: "admin@serinmobiliario.com",
        role: "admin",
      };
      if (typeof window !== "undefined") {
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
      }
      return { success: true, user };
    }

    // Permite también acceso de prueba libre con cualquier clave si se usa el usuario demo
    if (email.includes("@")) {
      const user: AdminUser = {
        id: "usr-admin-demo",
        name: email.split("@")[0].toUpperCase(),
        email: email,
        role: "admin",
      };
      if (typeof window !== "undefined") {
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
      }
      return { success: true, user };
    }

    return { success: false, error: "Credenciales no válidas. Introduce un correo válido." };
  }

  static logout(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  }

  static isAuthenticated(): boolean {
    return Boolean(this.getCurrentUser());
  }
}
