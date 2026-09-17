"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { SITE_CONFIG } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/feedback/toast";
import { sendLeadToClientify } from "@/lib/clientify";

export default function ContactoPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("comprar");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      toast({
        type: "error",
        title: "Campos requeridos",
        description: "Por favor completa tu nombre, correo y número de teléfono.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await sendLeadToClientify({
        name,
        email,
        phone,
        leadSource: "Web_Contacto_General",
        notes: `Interés: ${interest.toUpperCase()}. Mensaje: ${message}`,
        tags: ["Contacto_General", `Interes_${interest}`],
      });

      setIsSubmitted(true);
      toast({
        type: "success",
        title: "Mensaje recibido",
        description: "Un asesor comercial se pondrá en contacto contigo prontamente.",
      });
    } catch (err: any) {
      toast({
        type: "error",
        title: "Error al enviar",
        description: err.message || "Ocurrió un error al enviar tu consulta.",
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
          <Phone className="w-3.5 h-3.5" />
          <span>Canales de Atención</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-forest-950 tracking-tight">
          Contacto Comercial & Atención en Santa Marta
        </h1>
        <p className="text-sm text-sand-500 mt-3 font-sans leading-relaxed">
          Estamos a tu disposición para asesorarte en la adquisición, venta o arriendo de propiedades de lujo en el Caribe colombiano.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Info, Channels, Social & Map */}
        <div className="lg:col-span-6 space-y-8">
          <div className="p-8 bg-white border border-sand-200 rounded-xs shadow-luxury space-y-6">
            <h3 className="font-serif text-2xl font-bold text-forest-950">
              Oficina Principal
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-forest-900/90 font-sans">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-forest-950">Dirección:</strong>
                  <span>{SITE_CONFIG.address}</span>
                  <span className="block text-sand-400 text-xs">
                    {SITE_CONFIG.city}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-600 shrink-0" />
                <div>
                  <strong className="block text-forest-950">Línea Directa:</strong>
                  <a
                    href={`tel:${SITE_CONFIG.phoneClean}`}
                    className="hover:text-gold-600 transition-colors"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-600 shrink-0" />
                <div>
                  <strong className="block text-forest-950">Correo Electrónico:</strong>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="hover:text-gold-600 transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold-600 shrink-0" />
                <div>
                  <strong className="block text-forest-950">Horarios de Atención:</strong>
                  <span>Lunes a Sábado: 8:00 AM - 6:30 PM (Jornada continua)</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp CTA */}
            <div className="pt-4 border-t border-sand-200">
              <a
                href={`https://wa.me/${SITE_CONFIG.phoneClean}?text=Hola%20SERINMOBILIARIO,%20deseo%20asesor%C3%ADa%20inmobiliaria.`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xs bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contactar por WhatsApp Oficial</span>
              </a>
            </div>

            {/* Social Networks */}
            <div className="pt-4 border-t border-sand-100 flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-sand-500 font-semibold">
                Síguenos en Redes:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-sand-300 text-forest-800 hover:bg-gold-500 hover:text-forest-950 flex items-center justify-center transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={SITE_CONFIG.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-sand-300 text-forest-800 hover:bg-gold-500 hover:text-forest-950 flex items-center justify-center transition-colors"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={SITE_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-sand-300 text-forest-800 hover:bg-gold-500 hover:text-forest-950 flex items-center justify-center transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Styled Map Box */}
          <div className="relative h-64 rounded-xs overflow-hidden border border-sand-300 bg-sand-200">
            <div
              className="absolute inset-0 bg-cover bg-center filter contrast-125"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-forest-950/40 backdrop-blur-[1px]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10 text-white">
              <div className="w-10 h-10 rounded-full bg-gold-500 text-forest-950 flex items-center justify-center mb-2 shadow-gold-glow">
                <MapPin className="w-5 h-5" />
              </div>
              <strong className="font-serif text-lg text-white">
                Edificio Bahía Marina, Santa Marta
              </strong>
              <span className="text-xs text-cream-200 mt-0.5">
                Bahía de Santa Marta, Magdalena
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-6">
          <div className="p-8 sm:p-10 bg-white border-2 border-gold-500/40 rounded-xs shadow-luxury">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-forest-950">
                  ¡Mensaje Enviado con Éxito!
                </h3>
                <p className="text-xs text-sand-500 max-w-sm mx-auto leading-relaxed">
                  Tu solicitud ha sido radicada y enviada a nuestro equipo de atención comercial en Clientify. Nos comunicaremos contigo en el menor tiempo posible.
                </p>
                <Button variant="outline" size="sm" onClick={() => setIsSubmitted(false)}>
                  Enviar otra consulta
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-sand-200 pb-3 mb-2">
                  <span className="text-[10px] uppercase tracking-luxury text-gold-700 font-semibold block">
                    Formulario Directo
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-forest-950">
                    Escríbenos un Mensaje
                  </h3>
                </div>

                <Input
                  label="Nombre Completo"
                  placeholder="Ej. Andrés Morales"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Correo Electrónico"
                    type="email"
                    placeholder="andres@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Input
                    label="Teléfono o WhatsApp"
                    placeholder="+57 300 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-forest-900/80 mb-1.5">
                    ¿Cuál es tu principal interés?
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full bg-cream-50/70 text-forest-950 text-xs px-3.5 py-3 rounded-xs border border-sand-300 focus:outline-none focus:border-gold-500"
                  >
                    <option value="comprar">Deseo Comprar una Propiedad</option>
                    <option value="invertir">Deseo Invertir en Turismo / Rentas</option>
                    <option value="vender">Deseo Vender mi Inmueble</option>
                    <option value="arrendar">Busco Arriendo de Lujo</option>
                    <option value="asesoria">Asesoría Notarial / Jurídica</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-forest-900/80 mb-1.5">
                    Mensaje o Consulta
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe tus requerimientos, presupuesto o sector preferido en Santa Marta..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-cream-50/70 text-forest-950 text-xs p-3.5 rounded-xs border border-sand-300 focus:outline-none focus:border-gold-500"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  size="md"
                  className="w-full shadow-gold-glow"
                  isLoading={isSubmitting}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Consulta a SERINMOBILIARIO
                </Button>

                <p className="text-[10px] text-sand-400 text-center">
                  Tus datos son tratados bajo confidencialidad y sincronizados con el CRM comercial Clientify.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
