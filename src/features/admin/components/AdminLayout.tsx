"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  PlusCircle,
  MapPin,
  SlidersHorizontal,
  LogOut,
  ExternalLink,
  Shield,
  Menu,
  X,
} from "lucide-react";
import { AdminAuthService } from "../services/adminAuthService";
import { SITE_CONFIG } from "@/lib/config";
import { BrandLogo } from "@/components/ui/brand-logo";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const currentUser = AdminAuthService.getCurrentUser();
    if (!currentUser && pathname !== "/admin/login") {
      router.push("/admin/login");
    } else {
      setUser(currentUser);
    }
  }, [pathname, router]);

  const handleLogout = () => {
    AdminAuthService.logout();
    router.push("/admin/login");
  };

  const navItems = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
    { href: "/admin/propiedades", label: "Inventario Inmuebles", icon: Building2 },
    { href: "/admin/propiedades/nueva", label: "Crear Inmueble", icon: PlusCircle },
    { href: "/admin/sectores", label: "Sectores Santa Marta", icon: MapPin },
    { href: "/admin/caracteristicas", label: "Filtros & Amenidades", icon: SlidersHorizontal },
  ];

  return (
    <div className="min-h-screen bg-sand-50 flex">
      {/* Sidebar Desktop */}
      <aside className="hidden lg:flex w-72 bg-forest-950 text-cream-50 flex-col border-r border-gold-500/20 shadow-luxury shrink-0">
        {/* Brand Header */}
        <div className="p-6 border-b border-forest-900 flex items-center gap-3">
          <BrandLogo size="sm" />
          <div className="min-w-0">
            <h1 className="font-serif text-sm font-bold tracking-tight text-white truncate">
              {SITE_CONFIG.name}
            </h1>
            <span className="text-[10px] text-gold-400 uppercase tracking-widest block font-sans">
              Gestión Web
            </span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <div className="text-[10px] uppercase tracking-luxury text-gold-400/80 px-3 py-2 font-semibold font-sans">
            Módulos de Catálogo
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.exact
              ? pathname === item.href
              : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-3 rounded-xs text-xs font-semibold uppercase tracking-wider transition-all ${
                  isActive
                    ? "bg-gold-500 text-forest-950 shadow-gold-glow font-bold"
                    : "text-cream-200/80 hover:bg-forest-900 hover:text-white"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-forest-950" : "text-gold-400"}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}

          <div className="pt-6 mt-6 border-t border-forest-900">
            <div className="text-[10px] uppercase tracking-luxury text-sand-400/70 px-3 py-2 font-semibold font-sans">
              Ecosistema
            </div>
            <Link
              href="/"
              target="_blank"
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xs text-xs text-cream-200/80 hover:bg-forest-900 hover:text-white"
            >
              <span className="flex items-center gap-2">
                <ExternalLink className="w-3.5 h-3.5 text-sand-400" />
                Ver Portal Público
              </span>
            </Link>
          </div>
        </nav>

        {/* User Footer & Logout */}
        <div className="p-4 border-t border-forest-900 bg-forest-900/50 flex items-center justify-between">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-full bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-400 font-bold text-xs">
              AD
            </div>
            <div className="min-w-0">
              <span className="block text-xs font-medium text-white truncate">
                {user?.name || "Administrador"}
              </span>
              <span className="block text-[10px] text-sand-400 truncate">
                {user?.email || "admin@serinmobiliario.com"}
              </span>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="p-1.5 text-sand-400 hover:text-red-400 transition-colors"
            title="Cerrar sesión"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Top Bar */}
        <header className="lg:hidden bg-forest-950 text-cream-50 p-4 flex items-center justify-between border-b border-gold-500/20">
          <div className="flex items-center gap-2.5">
            <BrandLogo size="sm" className="!w-9 !h-9" />
            <span className="font-serif text-sm font-bold">{SITE_CONFIG.name}</span>
          </div>

          <button
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="p-1.5 text-gold-400"
          >
            {isMobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </header>

        {/* Mobile Drawer */}
        {isMobileNavOpen && (
          <div className="lg:hidden bg-forest-950 border-b border-forest-900 p-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileNavOpen(false)}
                className="block px-4 py-2.5 text-xs uppercase tracking-wider text-cream-100 hover:bg-forest-900 rounded-xs"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2.5 text-xs uppercase tracking-wider text-red-400 hover:bg-forest-900 rounded-xs"
            >
              Cerrar sesión
            </button>
          </div>
        )}

        {/* Page Inner Container */}
        <main className="flex-1 p-6 sm:p-8 lg:p-10 max-w-7xl w-full mx-auto">{children}</main>
      </div>
    </div>
  );
};
