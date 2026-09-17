import { ScheduleRequest } from "../types";
import { sendLeadToClientify, ClientifyResponse } from "@/lib/clientify";

export class SchedulingClientifyService {
  /**
   * Procesa la reserva de visita inmobiliaria y despacha el prospecto a Clientify
   */
  static async bookAppointment(request: ScheduleRequest): Promise<ClientifyResponse> {
    try {
      const response = await sendLeadToClientify({
        name: request.fullName,
        email: request.email,
        phone: request.phone,
        propertyId: request.propertyId,
        propertyTitle: request.propertyTitle,
        sector: request.propertySector,
        price: request.propertyPrice,
        url: request.propertyUrl || (typeof window !== "undefined" ? window.location.href : ""),
        leadSource: "Web_Agendamiento_Ficha",
        date: request.date,
        time: request.timeSlot,
        notes: `Modalidad: ${request.visitType.toUpperCase()}. Comentarios: ${
          request.notes || "Ninguno"
        }`,
        tags: [
          "Visita_Agendada",
          `Sector_${request.propertySector.replace(/\s+/g, "_")}`,
          `Tipo_${request.visitType}`,
        ],
      });

      return response;
    } catch (error) {
      console.error("Error al procesar el agendamiento con Clientify:", error);
      throw new Error("No fue posible sincronizar el agendamiento con el CRM.");
    }
  }

  /**
   * Genera franjas horarias disponibles para una fecha seleccionada
   */
  static getAvailableSlots(dateString: string) {
    const slots = [
      { time: "09:00 AM", period: "mañana" as const, available: true },
      { time: "10:30 AM", period: "mañana" as const, available: true },
      { time: "11:45 AM", period: "mañana" as const, available: true },
      { time: "02:30 PM", period: "tarde" as const, available: true },
      { time: "04:00 PM", period: "tarde" as const, available: true },
      { time: "05:15 PM", period: "tarde" as const, available: true },
    ];

    // Simula disponibilidad según día de la semana
    const day = new Date(dateString).getDay();
    if (day === 6) {
      // Sábado solo mañanas
      return slots.filter((s) => s.period === "mañana");
    }

    return slots;
  }
}
