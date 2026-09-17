import { NextRequest, NextResponse } from "next/server";
import { sendLeadToClientify } from "@/lib/clientify";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const result = await sendLeadToClientify({
      name: body.name || "Interesado Web",
      email: body.email,
      phone: body.phone,
      propertyId: body.propertyId,
      propertyTitle: body.propertyTitle,
      sector: body.sector,
      price: body.price,
      url: body.url,
      leadSource: body.leadSource || "API_Route_SERINMOBILIARIO",
      date: body.date,
      time: body.time,
      notes: body.notes,
      tags: body.tags || ["API_Lead"],
    });

    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Error procesando webhook de Clientify" },
      { status: 500 }
    );
  }
}
