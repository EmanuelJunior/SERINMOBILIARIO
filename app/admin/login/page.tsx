"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, Mail, ShieldCheck, ArrowRight } from "lucide-react";
import { AdminAuthService } from "@/features/admin/services/adminAuthService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SITE_CONFIG } from "@/lib/config";
import { useToast } from "@/components/feedback/toast";
import { BrandLogo } from "@/components/ui/brand-logo";

export default function AdminLoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = useState("admin@serinmobiliario.com");
  const [password, setPassword] = useState("serinmobiliario2026");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const result = AdminAuthService.login(email, password);

    if (result.success) {
      toast({
        type: "success",
        title: "Sesión iniciada",
        description: "Bienvenido al gestor de contenido web de SERINMOBILIARIO.",
      });
      router.push("/admin");
    } else {
      toast({
        type: "error",
        title: "Error de autenticación",
        description: result.error || "Credenciales incorrectas.",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-forest-950 flex flex-col justify-center items-center p-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />

      <div className="w-full max-w-md bg-white rounded-xs border border-gold-400/30 p-8 shadow-2xl relative z-10">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <BrandLogo size="lg" className="mx-auto mb-3" />

          <h1 className="font-serif text-2xl font-bold text-forest-950">
            {SITE_CONFIG.name}
          </h1>
          <span className="text-[10px] uppercase tracking-luxury text-gold-700 font-semibold block mt-0.5">
            Panel de Gestión Web
          </span>
          <p className="text-xs text-sand-500 mt-2">
            Acceso exclusivo para la administración de contenidos, catálogo y sectores.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            label="Correo Corporativo"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={<Mail className="w-4 h-4" />}
            required
          />

          <Input
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<Lock className="w-4 h-4" />}
            required
          />

          <div className="p-3 bg-cream-50 rounded-xs border border-gold-300/40 text-[11px] text-forest-900/80 space-y-1">
            <div className="font-semibold text-gold-700 uppercase tracking-wider flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Acceso de demostración</span>
            </div>
            <div>Usuario: <strong>admin@serinmobiliario.com</strong></div>
            <div>Contraseña: <strong>serinmobiliario2026</strong></div>
          </div>

          <Button
            type="submit"
            variant="gold"
            size="md"
            className="w-full shadow-gold-glow"
            isLoading={isLoading}
          >
            <span>Ingresar al Administrador</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </form>

        <div className="mt-6 pt-4 border-t border-sand-200 text-center">
          <Link
            href="/"
            className="text-xs text-sand-500 hover:text-forest-900 transition-colors"
          >
            ← Volver al portal público
          </Link>
        </div>
      </div>
    </div>
  );
}
