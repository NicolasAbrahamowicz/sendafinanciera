import { NextResponse } from "next/server";
export const runtime = "nodejs"; // evitar Edge

export async function POST(req: Request) {
  try {
    const { nombre, celular, email, tipo_plan, capacidad_mensual } = await req.json();

    // Validación mínima (evita undefined)
    const from_name = (nombre || "").toString().trim();
    const from_email = (email || "").toString().trim();
    const phone = (celular || "").toString().trim();
    const plan = (tipo_plan || "").toString().trim();
    const capacidad = (capacidad_mensual || "").toString().trim();

    if (!from_name || !from_email) {
      return NextResponse.json({ ok: false, error: "Nombre y Email son obligatorios" }, { status: 400 });
    }

    // Verificamos que la PUBLIC KEY esté disponible en runtime
    const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;
    if (!PUBLIC_KEY) {
      console.error("FALTA EMAILJS_PUBLIC_KEY en este deploy");
      return NextResponse.json({ ok: false, error: "Server sin EMAILJS_PUBLIC_KEY" }, { status: 500 });
    }

    // Estos nombres deben coincidir con los placeholders de tu Template en EmailJS
    const template_params = {
      from_name,            // {{from_name}}
      from_email,           // {{from_email}}  (si tu template usa reply_to, cambialo)
      celular: phone,       // {{celular}}
      tipo_plan: plan,      // {{tipo_plan}}
      capacidad_mensual: capacidad, // {{capacidad_mensual}}
    };

    // Payload mínimo VÁLIDO para REST
    const payload: Record<string, any> = {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      public_key: PUBLIC_KEY,               // <- CLAVE: EmailJS lo pide explícitamente
      user_id: PUBLIC_KEY,                  // compat
      template_params,
    };

    // Recomendado: token privado si lo tenés
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (process.env.EMAILJS_ACCESS_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.EMAILJS_ACCESS_TOKEN}`;
      // Alternativa (opcional): payload.accessToken = process.env.EMAILJS_ACCESS_TOKEN;
    }

    const r = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
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
