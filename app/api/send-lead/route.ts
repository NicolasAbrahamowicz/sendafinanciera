import { NextResponse } from "next/server";
export const runtime = "nodejs"; // evita Edge

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nombre, celular, email, tipo_plan, capacidad_mensual } = body;

    // OJO: estos nombres deben coincidir con los del template en EmailJS
    const template_params = {
      // si tu template usa otros, cambialos aquí:
      from_name: nombre,         // o 'from_name'
      reply_to: email,           // o 'from_email'
      phone: celular,            // o 'celular'
      tipo_plan,
      capacidad_mensual,
      to_email: "nicoabraha83@gmail.com", // si tu template lo usa
    };

    const r = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,     // opcional
        accessToken: process.env.EMAILJS_ACCESS_TOKEN, // clave privada
        template_params,
      }),
    });

    const text = await r.text();
    if (!r.ok) {
      console.error("EmailJS error:", r.status, text);
      return NextResponse.json({ ok: false, status: r.status, error: text }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error("Send lead error:", e?.message || e);
    return NextResponse.json({ ok: false, error: e?.message || "Unknown error" }, { status: 500 });
  }
}
