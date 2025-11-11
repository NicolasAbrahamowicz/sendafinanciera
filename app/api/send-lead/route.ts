// app/api/send-lead/route.ts
import { NextResponse } from "next/server";
export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { nombre, celular, email, tipo_plan, capacidad_mensual } = await req.json();

    // Forzamos strings (EmailJS odia undefined/null)
    const from_name = (nombre ?? "").toString().trim();
    const from_email = (email ?? "").toString().trim();
    const phone = (celular ?? "").toString().trim();
    const plan = (tipo_plan ?? "").toString().trim();
    const capacidad = (capacidad_mensual ?? "").toString().trim();

    if (!from_name || !from_email) {
      return NextResponse.json({ ok: false, error: "Nombre y Email son obligatorios" }, { status: 400 });
    }

    // Deben existir en Vercel
    const service_id = process.env.EMAILJS_SERVICE_ID!;
    const template_id = process.env.EMAILJS_TEMPLATE_ID!;
    const user_id = process.env.EMAILJS_PUBLIC_KEY!;        // <<— Public Key
    const accessToken = process.env.EMAILJS_ACCESS_TOKEN;   // <<— Private Key (opcional)

    // Variables EXACTAS que tiene tu template en EmailJS
    const template_params = {
      from_name,            // {{from_name}}
      from_email,           // {{from_email}}  (si tu template usa reply_to, renómbralo allá)
      celular: phone,       // {{celular}}
      tipo_plan: plan,      // {{tipo_plan}}
      capacidad_mensual: capacidad, // {{capacidad_mensual}}
    };

    const payload: any = { service_id, template_id, user_id, template_params };
    if (accessToken) payload.accessToken = accessToken; // opcional

    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const text = await res.text();
    if (!res.ok) throw new Error(`EmailJS ${res.status}: ${text}`);

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error("Send lead error:", e?.message || e);
    return NextResponse.json({ ok: false, error: e?.message || "Unknown error" }, { status: 500 });
  }
}
