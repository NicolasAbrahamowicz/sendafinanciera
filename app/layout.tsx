import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Senda Financiera — Planes de Retiro, Ahorro e Inversiones",
  description:
    "Diseñamos propuestas claras y seguras de retiro, ahorro e inversiones. Sin promesas de rentabilidad. Completá el formulario y recibí tu propuesta.",
  openGraph: {
    title: "Senda Financiera",
    description: "Planes de Retiro, Ahorro e Inversiones",
    url: "https://sendafinanciera.com",
    siteName: "Senda Financiera",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0B1B2A" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
