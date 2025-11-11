// app/api/send-lead/route.ts
import { NextResponse } from "next/server";
export const runtime = "nodejs"; // evitar Edge

export async function POST(req: Request) {
  try {
    const { nombre, celular, email, tipo_plan, capacidad_mensual } = await req.json();

    // Estos nombres deben coincidir con tu Template en EmailJS
    const template_params = {
      to_email: "nicoabraha83@gmail.com",
      from_name: nombre,
      from_email: email,          // si tu template usa reply_to, renómbralo
      celular,
      tipo_plan,
      capacidad_mensual,
    };

    // Payload con public key en el body (requerido por tu 400)
    const payload: any = {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      template_params,
      public_key: process.env.EMAILJS_PUBLIC_KEY, // <- CLAVE: incluilo siempre en server
      // compat histórico (algunas cuentas aún usan 'user_id'):
      user_id: process.env.EMAILJS_PUBLIC_KEY,
    };

    // Si tenés private key, agregá Authorization Bearer (opcional pero recomendado)
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (process.env.EMAILJS_ACCESS_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.EMAILJS_ACCESS_TOKEN}`;
      // alternativa: también podrías enviar accessToken en el body:
      // payload.accessToken = process.env.EMAILJS_ACCESS_TOKEN;
    }

    const r = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });

    const text = await r.text();
    if (!r.ok) throw new Error(`EmailJS ${r.status}: ${text}`);

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error("Send lead error:", e?.message || e);
    return NextResponse.json({ ok: false, error: e?.message || "Unknown error" }, { status: 500 });
  }
}
