export interface ScheduleRequest {
  propertyId: string;
  propertyTitle: string;
  propertySector: string;
  propertyPrice: number | string;
  propertyUrl?: string;

  date: string; // YYYY-MM-DD
  timeSlot: string; // ej: "10:00 AM", "03:00 PM"
  visitType: "presencial" | "videollamada";

  // Datos del cliente
  fullName: string;
  email: string;
  phone: string;
  notes?: string;

  // Metadata para Clientify
  leadSource?: string;
  utmSource?: string;
}

export interface TimeSlotOption {
  time: string;
  period: "mañana" | "tarde";
  available: boolean;
}
