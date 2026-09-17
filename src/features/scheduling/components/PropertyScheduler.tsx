"use client";

import React, { useState } from "react";
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  Mail,
  CheckCircle2,
  Video,
  MapPin,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { Property } from "@/features/properties/types";
import { SchedulingClientifyService } from "../services/clientify";
import { ScheduleRequest } from "../types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/feedback/toast";
import { SITE_CONFIG } from "@/lib/config";

interface PropertySchedulerProps {
  property: Property;
}

export const PropertyScheduler: React.FC<PropertySchedulerProps> = ({ property }) => {
  const { toast } = useToast();

  // Estados del flujo por pasos
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  });
  const [selectedTime, setSelectedTime] = useState<string>("10:30 AM");
  const [visitType, setVisitType] = useState<"presencial" | "videollamada">("presencial");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [confirmationData, setConfirmationData] = useState<{
    leadId?: string;
    opportunityId?: string;
  } | null>(null);

  const availableSlots = SchedulingClientifyService.getAvailableSlots(selectedDate);

  const handleNextToClientData = () => {
    if (!selectedDate || !selectedTime) {
      toast({
        type: "error",
        title: "Selección incompleta",
        description: "Por favor escoge fecha y franja horaria para continuar.",
      });
      return;
    }
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !email) {
      toast({
        type: "error",
        title: "Datos requeridos",
        description: "Nombre, teléfono y correo son obligatorios.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const payload: ScheduleRequest = {
        propertyId: property.id,
        propertyTitle: property.title,
        propertySector: property.sectorName,
        propertyPrice: property.price,
        date: selectedDate,
        timeSlot: selectedTime,
        visitType,
        fullName,
        email,
        phone,
        notes,
      };

      const result = await SchedulingClientifyService.bookAppointment(payload);

      setConfirmationData({
        leadId: result.leadId,
        opportunityId: result.opportunityId,
      });

      toast({
        type: "success",
        title: "Visita programada con éxito",
        description: "Se ha creado la oportunidad en el sistema comercial Clientify.",
      });

      setStep(3);
    } catch (err: any) {
      toast({
        type: "error",
        title: "Error en el agendamiento",
        description: err.message || "Ocurrió un error al procesar tu solicitud.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hola SERINMOBILIARIO, he programado una visita para la propiedad "${property.title}" (Ref: ${property.code}) el día ${selectedDate} a las ${selectedTime}. Mi nombre es ${fullName}.`
  );

  return (
    <div className="bg-white border-2 border-gold-500/30 rounded-xs shadow-luxury overflow-hidden sticky top-24">
      {/* Header with Clientify Sync Badge */}
      <div className="p-5 bg-forest-950 text-cream-50 border-b border-gold-500/20">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[10px] uppercase tracking-luxury text-gold-400 font-semibold font-sans">
            Agenda Digital Privada
          </span>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-forest-900/90 border border-gold-400/30 text-[10px] text-cream-100">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Sync Clientify CRM</span>
          </div>
        </div>

        <h3 className="font-serif text-xl font-bold tracking-tight text-white">
          Agendar Visita Exclusiva
        </h3>
        <p className="text-xs text-cream-200/70 mt-1">
          Atención personalizada por un asesor patrimonial de SERINMOBILIARIO.
        </p>
      </div>

      {/* Scheduler Steps */}
      <div className="p-5">
        {step === 1 && (
          <div className="space-y-5">
            {/* Modalidad de Visita */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-forest-900/80 mb-2">
                Modalidad de la cita
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setVisitType("presencial")}
                  className={`flex items-center justify-center gap-2 p-2.5 rounded-xs border text-xs font-semibold transition-all ${
                    visitType === "presencial"
                      ? "bg-forest-900 text-cream-50 border-forest-900 shadow-sm"
                      : "bg-cream-50/50 text-forest-800 border-sand-300 hover:border-sand-400"
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Presencial en Sitio</span>
                </button>

                <button
                  type="button"
                  onClick={() => setVisitType("videollamada")}
                  className={`flex items-center justify-center gap-2 p-2.5 rounded-xs border text-xs font-semibold transition-all ${
                    visitType === "videollamada"
                      ? "bg-forest-900 text-cream-50 border-forest-900 shadow-sm"
                      : "bg-cream-50/50 text-forest-800 border-sand-300 hover:border-sand-400"
                  }`}
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>Videollamada Live</span>
                </button>
              </div>
            </div>

            {/* Selector de Fecha */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-forest-900/80 mb-2">
                Selecciona la fecha
              </label>
              <div className="relative">
                <input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-cream-50/70 text-forest-950 text-xs px-3.5 py-2.5 rounded-xs border border-sand-300 focus:outline-none focus:border-gold-500 font-sans"
                />
              </div>
            </div>

            {/* Franjas Horarias */}
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-forest-900/80 mb-2">
                Horario disponible
              </label>
              <div className="grid grid-cols-3 gap-2">
                {availableSlots.map((slot) => (
                  <button
                    key={slot.time}
                    type="button"
                    onClick={() => setSelectedTime(slot.time)}
                    className={`p-2 rounded-xs border text-xs font-mono transition-all ${
                      selectedTime === slot.time
                        ? "bg-gold-500 text-forest-950 border-gold-500 font-bold shadow-xs"
                        : "bg-white text-forest-800 border-sand-300 hover:border-gold-400"
                    }`}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
            </div>

            <Button
              variant="gold"
              size="md"
              className="w-full"
              onClick={handleNextToClientData}
            >
              Continuar con mis datos
            </Button>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="p-3 bg-cream-100 rounded-xs border border-sand-200 text-xs flex justify-between items-center text-forest-900">
              <div>
                <strong>{selectedDate}</strong> a las <strong>{selectedTime}</strong> (
                {visitType})
              </div>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-gold-700 underline text-[11px] font-semibold"
              >
                Cambiar
              </button>
            </div>

            <Input
              label="Nombre completo"
              placeholder="Ej. Carlos Mendoza"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              icon={<User className="w-4 h-4" />}
              required
            />

            <Input
              label="Teléfono o WhatsApp"
              placeholder="+57 300 123 4567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              icon={<Phone className="w-4 h-4" />}
              required
            />

            <Input
              label="Correo electrónico"
              type="email"
              placeholder="carlos@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={<Mail className="w-4 h-4" />}
              required
            />

            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-forest-900/80 mb-1.5">
                Comentarios o preguntas (opcional)
              </label>
              <textarea
                rows={2}
                placeholder="¿Tienes alguna solicitud especial o rango de inversión?"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-cream-50/70 text-forest-950 text-xs p-3 rounded-xs border border-sand-300 focus:outline-none focus:border-gold-500"
              />
            </div>

            <div className="pt-2 flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="md"
                onClick={() => setStep(1)}
                disabled={isSubmitting}
              >
                Atrás
              </Button>
              <Button
                type="submit"
                variant="gold"
                size="md"
                className="flex-1"
                isLoading={isSubmitting}
              >
                Confirmar y Agendar en Clientify
              </Button>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="text-center py-4 space-y-4 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 border-2 border-emerald-500 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h4 className="font-serif text-2xl font-bold text-forest-950">
                ¡Visita Agendada!
              </h4>
              <p className="text-xs text-sand-500 mt-1 max-w-xs mx-auto">
                Tu solicitud ha sido sincronizada con el CRM comercial de SERINMOBILIARIO.
              </p>
            </div>

            <div className="p-4 bg-cream-50 rounded-xs border border-gold-300/60 text-left text-xs space-y-1.5 font-sans">
              <div className="flex justify-between">
                <span className="text-sand-500">Inmueble:</span>
                <strong className="text-forest-950 font-medium truncate max-w-[180px]">
                  {property.title}
                </strong>
              </div>
              <div className="flex justify-between">
                <span className="text-sand-500">Fecha y Hora:</span>
                <strong className="text-forest-950">
                  {selectedDate} • {selectedTime}
                </strong>
              </div>
              <div className="flex justify-between">
                <span className="text-sand-500">Modalidad:</span>
                <strong className="text-forest-950 capitalize">{visitType}</strong>
              </div>
              {confirmationData?.opportunityId && (
                <div className="flex justify-between pt-1 border-t border-sand-200">
                  <span className="text-sand-400">ID Oportunidad:</span>
                  <span className="font-mono text-gold-700 font-semibold">
                    {confirmationData.opportunityId}
                  </span>
                </div>
              )}
            </div>

            {/* Direct WhatsApp CTA */}
            <a
              href={`https://wa.me/${SITE_CONFIG.phoneClean}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xs bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs uppercase tracking-wider shadow-sm transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              Notificar por WhatsApp Inmediato
            </a>

            <button
              type="button"
              onClick={() => {
                setStep(1);
                setConfirmationData(null);
              }}
              className="text-xs text-sand-500 hover:text-forest-900 underline block mx-auto"
            >
              Agendar otra cita
            </button>
          </div>
        )}
      </div>

      {/* Security note footer */}
      <div className="p-3 bg-sand-100 border-t border-sand-200 text-center text-[11px] text-sand-500 flex items-center justify-center gap-1.5">
        <Sparkles className="w-3 h-3 text-gold-600" />
        <span>Atención discreta y confidencial garantizada.</span>
      </div>
    </div>
  );
};
