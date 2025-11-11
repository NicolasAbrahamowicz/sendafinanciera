"use client"

import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function SavingsPlans() {
  const benefits = ["Automatización de aportes", "Flexibilidad total", "Retiros programados", "Sin penalidades"]

  return (
    <section id="ahorro" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B1B2A] mb-4">Planes de Ahorro</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ahorra de forma inteligente y flexible. Adaptamos el plan a tu capacidad
          </p>
        </div>

        {/* Card 1: USD */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border border-[#0EA5A5] p-8 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-[#0B1B2A] mb-2">Ahorro en USD</h3>
            <p className="text-gray-600 mb-6">Plan de ahorro flexible en dólares estadounidenses</p>

            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#0EA5A5] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <Link
              href="#formulario"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#0EA5A5] text-white rounded-full font-semibold hover:bg-[#0d8c8c] transition-all"
            >
              Quiero mi plan de ahorro
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
