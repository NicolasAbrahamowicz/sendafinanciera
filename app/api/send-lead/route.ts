// app/api/send-lead/route.ts
import { NextResponse } from "next/server";
export const runtime = "nodejs"; // evitar Edge

export async function POST(req: Request) {
  try {
    const { nombre, celular, email, tipo_plan, capacidad_mensual } = await req.json();

    // Deben coincidir con TU template EmailJS
    const template_params = {
      to_email: "nicoabraha83@gmail.com",   // si tu template lo usa
      from_name: nombre,                    // {{from_name}}
      from_email: email,                    // {{from_email}} (o reply_to si lo renombraste)
      celular,                              // {{celular}}
      tipo_plan,                            // {{tipo_plan}}
      capacidad_mensual,                    // {{capacidad_mensual}}
    };

    const r = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // CLAVE: usar el access token privado en Authorization
        "Authorization": `Bearer ${process.env.EMAILJS_ACCESS_TOKEN!}`,
      },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        template_params,
      }),
    });

    const text = await r.text();
    if (!r.ok) throw new Error(`EmailJS ${r.status}: ${text}`);
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error("Send lead error:", e?.message || e);
    return NextResponse.json({ ok: false, error: e?.message || "Unknown error" }, { status: 500 });
  }
}
