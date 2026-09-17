"use client";

import React, { useState } from "react";
import {
  KeyRound,
  ShieldCheck,
  Camera,
  Users,
  Award,
  CheckCircle2,
  Building,
  DollarSign,
  Send,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/feedback/toast";
import { sendLeadToClientify } from "@/lib/clientify";

export default function VendeTuPropiedadPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form State
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [propertyType, setPropertyType] = useState("apartamento");
  const [sector, setSector] = useState("Bello Horizonte");
  const [estimatedPrice, setEstimatedPrice] = useState("");
  const [operation, setOperation] = useState("venta");
  const [notes, setNotes] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ownerName || !phone || !email) {
      toast({
        type: "error",
        title: "Datos requeridos",
        description: "Por favor completa tu nombre, teléfono y correo electrónico.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await sendLeadToClientify({
        name: ownerName,
        phone,
        email,
        propertyTitle: `Captación: ${propertyType.toUpperCase()} en ${sector}`,
        sector,
        price: estimatedPrice,
        leadSource: "Web_Vende_Tu_Propiedad",
        notes: `Operación deseada: ${operation.toUpperCase()}. Valor estimado: ${estimatedPrice}. Detalles: ${notes}`,
        tags: ["Propietario_Captacion", `Operacion_${operation}`, `Sector_${sector}`],
      });

      setIsSuccess(true);
      toast({
        type: "success",
        title: "Solicitud de consignación recibida",
        description: "Un asesor senior de SERINMOBILIARIO se comunicará contigo en menos de 24 horas.",
      });
    } catch (err: any) {
      toast({
        type: "error",
        title: "Error al enviar",
        description: err.message || "No se pudo enviar el formulario.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-luxury text-gold-700 font-semibold mb-2 font-sans">
          <KeyRound className="w-3.5 h-3.5" />
          <span>Servicio Exclusivo para Propietarios</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-950 tracking-tight">
          Vende o Arrienda tu Propiedad en Santa Marta
        </h1>
        <p className="text-sm text-sand-500 mt-3 font-sans leading-relaxed">
          Comercializamos tu patrimonio con el más alto rigor profesional, fotografía arquitectónica de revista y acceso directo a compradores e inversores calificados.
        </p>
      </div>

      {/* Main Grid: Benefits + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Beneficios & Proceso */}
        <div className="lg:col-span-7 space-y-12">
          {/* Beneficios */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-forest-950 mb-6">
              ¿Por qué confiar tu propiedad a SERINMOBILIARIO?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-5 bg-white border border-sand-200 rounded-xs">
                <Camera className="w-6 h-6 text-gold-600 mb-3" />
                <h4 className="font-serif text-base font-bold text-forest-950">
                  Producción Audiovisual de Lujo
                </h4>
                <p className="text-xs text-sand-500 mt-1 leading-relaxed">
                  Fotografía profesional, tomas con dron de playas y recorridos 3D que destacan el valor real de tu inmueble.
                </p>
              </div>

              <div className="p-5 bg-white border border-sand-200 rounded-xs">
                <Users className="w-6 h-6 text-gold-600 mb-3" />
                <h4 className="font-serif text-base font-bold text-forest-950">
                  Compradores Pre-Calificados
                </h4>
                <p className="text-xs text-sand-500 mt-1 leading-relaxed">
                  Filtramos rigurosamente a los interesados verificando solvencia financiera y capacidad de compra antes de programar visitas.
                </p>
              </div>

              <div className="p-5 bg-white border border-sand-200 rounded-xs">
                <ShieldCheck className="w-6 h-6 text-gold-600 mb-3" />
                <h4 className="font-serif text-base font-bold text-forest-950">
                  Acompañamiento Jurídico Notarial
                </h4>
                <p className="text-xs text-sand-500 mt-1 leading-relaxed">
                  Redacción de promesas de compraventa blindadas y coordinación con notarías e instrumentos públicos de Santa Marta.
                </p>
              </div>

              <div className="p-5 bg-white border border-sand-200 rounded-xs">
                <Award className="w-6 h-6 text-gold-600 mb-3" />
                <h4 className="font-serif text-base font-bold text-forest-950">
                  Valoración Comercial Precisa
                </h4>
                <p className="text-xs text-sand-500 mt-1 leading-relaxed">
                  Estudio de mercado con valores reales de metro cuadrado transados en Santa Marta para evitar sobreprecios o desvalorizaciones.
                </p>
              </div>
            </div>
          </div>

          {/* Proceso transparente de 4 pasos */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-forest-950 mb-6">
              Nuestro Proceso de Comercialización
            </h2>

            <div className="space-y-4">
              {[
                {
                  step: "01",
                  title: "Valoración y Diagnóstico Legal",
                  desc: "Visitamos la propiedad, analizamos certificados de tradición y acordamos el precio óptimo de mercado.",
                },
                {
                  step: "02",
                  title: "Producción de Material Premium",
                  desc: "Fotografía arquitectónica, redacción editorial y publicación en nuestra plataforma web y canales internacionales.",
                },
                {
                  step: "03",
                  title: "Gestión de Visitas y Negociación",
                  desc: "Atención personalizada de prospectos, informes periódicos de avance y negociación firme de ofertas.",
                },
                {
                  step: "04",
                  title: "Firma de Promesa y Escrituración",
                  desc: "Acompañamiento en el desembolso de dineros y entrega material protocolizada del inmueble.",
                },
              ].map((p, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xs bg-cream-50/70 border border-sand-200"
                >
                  <span className="font-serif text-xl font-bold text-gold-700 w-8 shrink-0">
                    {p.step}
                  </span>
                  <div>
                    <strong className="block text-sm text-forest-950 font-serif">
                      {p.title}
                    </strong>
                    <p className="text-xs text-sand-500 mt-0.5 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Formulario de Captación */}
        <div className="lg:col-span-5">
          <div className="bg-white border-2 border-gold-500/40 rounded-xs p-6 sm:p-8 shadow-luxury sticky top-28">
            {isSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-forest-950">
                  ¡Propiedad Registrada!
                </h3>
                <p className="text-xs text-sand-500 max-w-sm mx-auto leading-relaxed">
                  Hemos canalizado tus datos hacia nuestro equipo directivo en Clientify. Nos pondremos en contacto contigo a la brevedad para coordinar la visita y valoración.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setIsSuccess(false);
                    setOwnerName("");
                    setEmail("");
                    setPhone("");
                  }}
                >
                  Registrar otro inmueble
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-sand-200 pb-3 mb-2">
                  <span className="text-[10px] uppercase tracking-luxury text-gold-700 font-semibold block">
                    Formulario de Consignación
                  </span>
                  <h3 className="font-serif text-xl font-bold text-forest-950">
                    Consigna tu Inmueble
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setOperation("venta")}
                    className={`p-2 rounded-xs border text-xs font-semibold ${
                      operation === "venta"
                        ? "bg-forest-900 text-cream-50 border-forest-900"
                        : "bg-cream-50 text-forest-900 border-sand-300"
                    }`}
                  >
                    Deseo Vender
                  </button>
                  <button
                    type="button"
                    onClick={() => setOperation("arriendo")}
                    className={`p-2 rounded-xs border text-xs font-semibold ${
                      operation === "arriendo"
                        ? "bg-forest-900 text-cream-50 border-forest-900"
                        : "bg-cream-50 text-forest-900 border-sand-300"
                    }`}
                  >
                    Deseo Arrendar
                  </button>
                </div>

                <Input
                  label="Nombre del Propietario"
                  placeholder="Ej. Juan Felipe Morales"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  required
                />

                <Input
                  label="Teléfono o WhatsApp"
                  placeholder="+57 300 000 0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />

                <Input
                  label="Correo Electrónico"
                  type="email"
                  placeholder="juan@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-forest-900/80 mb-1">
                      Tipo de Inmueble
                    </label>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full bg-cream-50/70 text-xs px-3 py-2.5 rounded-xs border border-sand-300"
                    >
                      <option value="apartamento">Apartamento</option>
                      <option value="penthouse">Penthouse</option>
                      <option value="casa-playa">Casa de Playa / Villa</option>
                      <option value="condohotel">Condo-hotel turístico</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-forest-900/80 mb-1">
                      Sector en Santa Marta
                    </label>
                    <select
                      value={sector}
                      onChange={(e) => setSector(e.target.value)}
                      className="w-full bg-cream-50/70 text-xs px-3 py-2.5 rounded-xs border border-sand-300"
                    >
                      <option value="Bello Horizonte">Bello Horizonte</option>
                      <option value="Playa Salguero">Playa Salguero</option>
                      <option value="Pozos Colorados">Pozos Colorados</option>
                      <option value="El Rodadero">El Rodadero</option>
                      <option value="Centro Histórico">Centro Histórico</option>
                      <option value="Otro sector">Otro sector</option>
                    </select>
                  </div>
                </div>

                <Input
                  label="Precio Esperado / Estimado (COP)"
                  placeholder="Ej. 1.200.000.000"
                  value={estimatedPrice}
                  onChange={(e) => setEstimatedPrice(e.target.value)}
                />

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-forest-900/80 mb-1">
                    Detalles del Inmueble (Área, alcobas, vista...)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe brevemente las características principales de tu propiedad..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-cream-50/70 text-xs p-3 rounded-xs border border-sand-300"
                  />
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  size="md"
                  className="w-full shadow-gold-glow"
                  isLoading={isSubmitting}
                >
                  <Send className="w-4 h-4 mr-1.5" />
                  Enviar Propiedad para Valoración
                </Button>

                <p className="text-[10px] text-sand-400 text-center">
                  Tus datos están protegidos bajo estricta confidencialidad. Sincronizado con Clientify.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
