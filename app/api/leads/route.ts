import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nombre, celular, email, capacidad, tipo, moneda } = body

    // Validate required fields
    if (!nombre || !celular || !email || !capacidad || !tipo) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }

    // Format email content
    const emailContent = `
      <h2>Nuevo Lead de Senda Financiera</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Celular:</strong> ${celular}</p>
      <p><strong>Tipo de Plan:</strong> ${tipo}</p>
      <p><strong>Capacidad Mensual:</strong> USD ${capacidad}</p>
      <p><strong>Moneda:</strong> ${moneda}</p>
      <hr />
      <p><em>Enviado desde el formulario de Senda Financiera</em></p>
    `

    // Send email using Resend
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "noreply@sendafinanciera.com",
        to: "nicoabraha83@gmail.com",
        subject: `Nuevo Lead: ${nombre}`,
        html: emailContent,
        reply_to: email,
      }),
    })

    if (!resendResponse.ok) {
      console.error("[v0] Error sending email:", await resendResponse.text())
      return NextResponse.json({ error: "Error al enviar email" }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: "Email enviado correctamente" }, { status: 200 })
  } catch (error) {
    console.error("[v0] API route error:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
