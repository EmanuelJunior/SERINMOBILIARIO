"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageSquare, Compass, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/ui/brand-logo";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/propiedades", label: "Propiedades" },
    { href: "/sectores", label: "Sectores" },
    { href: "/servicios", label: "Servicios" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/vende-tu-propiedad", label: "Vende tu Propiedad" },
    { href: "/contacto", label: "Contacto" },
  ];

  const isHome = pathname === "/";
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || !isHome
          ? "bg-forest-950/95 backdrop-blur-md shadow-luxury py-3 border-b border-gold-500/20"
          : "bg-gradient-to-b from-forest-950/90 via-forest-950/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Slogan */}
        <Link href="/" className="flex items-center gap-3 sm:gap-3.5 group">
          <BrandLogo size="md" />
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-gold-300 transition-colors leading-tight">
              {SITE_CONFIG.name}
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-luxury text-gold-400 font-sans font-semibold mt-0.5">
              {SITE_CONFIG.slogan}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs uppercase tracking-editorial font-medium transition-all duration-200 relative py-1 ${
                  isActive
                    ? "text-gold-400 font-semibold"
                    : "text-cream-100/90 hover:text-gold-300"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action CTA & WhatsApp Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`https://wa.me/${SITE_CONFIG.phoneClean}?text=Hola%20SERINMOBILIARIO,%20deseo%20informaci%C3%B3n%20sobre%20propiedades%20en%20Santa%20Marta.`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full text-cream-100 hover:text-gold-400 hover:bg-white/10 transition-colors"
            title="Chat directo por WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
          </a>

          <Link href="/propiedades">
            <Button variant="gold" size="sm" className="shadow-gold-glow">
              Encuentra tu propiedad
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="xl:hidden p-2 text-cream-100 hover:text-gold-400 transition-colors"
          aria-label="Abrir menú"
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-forest-950/98 border-b border-gold-500/30 px-6 py-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2 text-xs uppercase tracking-luxury font-medium transition-colors ${
                  pathname === link.href
                    ? "text-gold-400 font-bold border-l-2 border-gold-400 pl-3"
                    : "text-cream-100 hover:text-gold-300 pl-3"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 mt-2 border-t border-forest-800 space-y-3">
              <Link
                href="/propiedades"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block"
              >
                <Button variant="gold" size="md" className="w-full">
                  Encuentra tu propiedad
                </Button>
              </Link>

              <a
                href={`tel:${SITE_CONFIG.phoneClean}`}
                className="flex items-center justify-center gap-2 py-3 text-xs uppercase tracking-luxury text-cream-200"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>{SITE_CONFIG.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
