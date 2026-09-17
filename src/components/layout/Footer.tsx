"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  ArrowUpRight,
  Lock,
} from "lucide-react";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/lib/config";
import { BrandLogo } from "@/components/ui/brand-logo";

export const Footer: React.FC = () => {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;
  return (
    <footer className="bg-forest-950 text-cream-100 border-t border-gold-500/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-forest-800/80">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <BrandLogo size="lg" />
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
                  {SITE_CONFIG.name}
                </h3>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-luxury text-gold-400 font-sans block font-semibold mt-0.5">
                  {SITE_CONFIG.slogan}
                </span>
              </div>
            </div>

            <p className="text-xs text-cream-200/80 leading-relaxed font-sans max-w-sm">
              Ecosistema digital inmobiliario especializado en la comercialización e inversión de residencias de alto nivel, penthouses y condohoteles en Santa Marta, Colombia.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-gold-500/40 text-gold-400 hover:bg-gold-500 hover:text-forest-950 flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-gold-500/40 text-gold-400 hover:bg-gold-500 hover:text-forest-950 flex items-center justify-center transition-colors"
                title="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-gold-500/40 text-gold-400 hover:bg-gold-500 hover:text-forest-950 flex items-center justify-center transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Sectores Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-luxury text-gold-400 font-semibold font-sans">
              Sectores Exclusivos
            </h4>
            <ul className="space-y-2 text-xs text-cream-200/80">
              <li>
                <Link
                  href="/sectores/bello-horizonte"
                  className="hover:text-gold-300 transition-colors flex items-center justify-between"
                >
                  <span>Bello Horizonte</span>
                  <ArrowUpRight className="w-3 h-3 text-gold-500/70" />
                </Link>
              </li>
              <li>
                <Link
                  href="/sectores/playa-salguero"
                  className="hover:text-gold-300 transition-colors flex items-center justify-between"
                >
                  <span>Playa Salguero</span>
                  <ArrowUpRight className="w-3 h-3 text-gold-500/70" />
                </Link>
              </li>
              <li>
                <Link
                  href="/sectores/pozos-colorados"
                  className="hover:text-gold-300 transition-colors flex items-center justify-between"
                >
                  <span>Pozos Colorados</span>
                  <ArrowUpRight className="w-3 h-3 text-gold-500/70" />
                </Link>
              </li>
              <li>
                <Link
                  href="/sectores/el-rodadero"
                  className="hover:text-gold-300 transition-colors flex items-center justify-between"
                >
                  <span>El Rodadero y Rodadero Sur</span>
                  <ArrowUpRight className="w-3 h-3 text-gold-500/70" />
                </Link>
              </li>
              <li>
                <Link
                  href="/sectores/centro-historico"
                  className="hover:text-gold-300 transition-colors flex items-center justify-between"
                >
                  <span>Centro Histórico & Marina</span>
                  <ArrowUpRight className="w-3 h-3 text-gold-500/70" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Navegación y Servicios Col */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-luxury text-gold-400 font-semibold font-sans">
              Servicios
            </h4>
            <ul className="space-y-2 text-xs text-cream-200/80">
              <li>
                <Link href="/propiedades?operation=venta" className="hover:text-gold-300 transition-colors">
                  Comprar Propiedades
                </Link>
              </li>
              <li>
                <Link href="/vende-tu-propiedad" className="hover:text-gold-300 transition-colors">
                  Vender mi Inmueble
                </Link>
              </li>
              <li>
                <Link href="/propiedades?operation=arriendo" className="hover:text-gold-300 transition-colors">
                  Arrendamientos Premium
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-gold-300 transition-colors">
                  Asesoría en Inversión
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-gold-300 transition-colors">
                  Sobre SERINMOBILIARIO
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto Santa Marta */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-luxury text-gold-400 font-semibold font-sans">
              Atención en Santa Marta
            </h4>
            <div className="space-y-2.5 text-xs text-cream-200/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <span>{SITE_CONFIG.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <span>{SITE_CONFIG.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="p-3 rounded-xs bg-forest-900/60 border border-gold-500/20 text-[11px] text-cream-200/70 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Estudio de títulos y seguridad jurídica certificada.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-sand-400 font-sans">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. Todos los derechos reservados. Santa Marta, Colombia.
          </p>

          <div className="flex items-center gap-4">
            <Link href="/nosotros" className="hover:text-gold-300 transition-colors">
              Términos y Privacidad
            </Link>
            <span className="text-forest-800">•</span>
            <Link
              href="/admin/login"
              className="hover:text-gold-300 transition-colors flex items-center gap-1"
            >
              <Lock className="w-3 h-3 text-gold-500" />
              <span>Panel Administrativo</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
