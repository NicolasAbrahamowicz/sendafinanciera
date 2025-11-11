// app/api/send-lead/route.ts
import { NextResponse } from "next/server";
export const runtime = "nodejs"; // evitar Edge

type Lead = {
  nombre?: string;
  celular?: string;
  email?: string;
  tipo_plan?: string;           // "retiro" | "ahorro" | "inversion"
  capacidad_mensual?: string;   // "500 USD", "300.000 ARS", etc.
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Lead;

    // 1) Validación mínima (evita undefined en template_params)
    const nombre = String(body.nombre || "").trim();
    const celular = String(body.celular || "").trim();
    const email = String(body.email || "").trim();
    const tipo_plan = String(body.tipo_plan || "").trim();
    const capacidad_mensual = String(body.capacidad_mensual || "").trim();

    if (!nombre || !email) {
      return NextResponse.json(
        { ok: false, error: "Nombre y Email son obligatorios" },
        { status: 400 },
      );
    }

    // 2) Deben coincidir EXACTO con los placeholders del Template
    const template_params = {
      from_name: nombre,
      from_email: email,
      celular,
      tipo_plan,
      capacidad_mensual,
    };

    // 3) Payload mínimo válido (sin to_email)
    const payload: Record<string, any> = {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      public_key: process.env.EMAILJS_PUBLIC_KEY, // requerido por tu 400 previo
      template_params,
    };

    // Opcional (recomendado): si tenés private key, suma Bearer
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (process.env.EMAILJS_ACCESS_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.EMAILJS_ACCESS_TOKEN}`;
      // Alternativa: payload.accessToken = process.env.EMAILJS_ACCESS_TOKEN;
    }

    const r = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });

    const text = await r.text();
    if (!r.ok) {
      // Log detallado para leer el mensaje real de EmailJS en Vercel Logs
      console.error("EmailJS error:", r.status, text);
      return NextResponse.json(
        { ok: false, status: r.status, error: text },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error("Send lead error:", e?.message || e);
    return NextResponse.json(
      { ok: false, error: e?.message || "Unknown error" },
      { status: 500 },
    );
  }
}
