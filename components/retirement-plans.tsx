"use client"

import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function RetirementPlans() {
  const benefits = [
    "Aporte mensual flexible",
    "Horizonte 5 a 20 años",
    "Protección con flexibilidad",
    "Disciplina de ahorro",
  ]

  return (
    <section id="retiro" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B1B2A] mb-4">Planes de Retiro</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Prepárate para una jubilación tranquila con planes adaptados a tu situación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Retiro privado */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-[#0B1B2A] mb-2">Retiro privado</h3>
            <p className="text-gray-600 mb-6">Acumula activos con tranquilidad y flexibilidad</p>

            <ul className="space-y-3 mb-8">
              {benefits.slice(0, 3).map((benefit, index) => (
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
              Simular mi retiro
            </Link>
          </div>

          {/* Card 2: Protección + Acumulación */}
          <div className="bg-white rounded-2xl border border-[#0EA5A5] p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="inline-block px-3 py-1 bg-[#0EA5A5]/10 text-[#0EA5A5] text-xs font-semibold rounded-full mb-4">
              Recomendado
            </div>
            <h3 className="text-2xl font-bold text-[#0B1B2A] mb-2">Protección + Acumulación</h3>
            <p className="text-gray-600 mb-6">Seguro de vida + ahorro integrado</p>

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
              Simular mi retiro
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
