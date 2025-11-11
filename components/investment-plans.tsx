"use client"

import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function InvestmentPlans() {
  const benefits = [
    "Perfilamiento de riesgo",
    "Diversificación inteligente",
    "Revisión periódica",
    "Acompañamiento integral",
  ]

  return (
    <section id="inversiones" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B1B2A] mb-4">Inversiones</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estrategias personalizadas según tu perfil y objetivos. Diversificación inteligente y acompañamiento
            integral.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Carteras */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-[#0B1B2A] mb-2">Carteras por objetivo</h3>
            <p className="text-gray-600 mb-6">Inversiones alineadas con tus metas financieras</p>

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
              Armar mi cartera
            </Link>
          </div>

          {/* Card 2: Wealth Management */}
          <div className="bg-white rounded-2xl border border-[#0EA5A5] p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="inline-block px-3 py-1 bg-[#0EA5A5]/10 text-[#0EA5A5] text-xs font-semibold rounded-full mb-4">
              Premium
            </div>
            <h3 className="text-2xl font-bold text-[#0B1B2A] mb-2">Wealth Management</h3>
            <p className="text-gray-600 mb-6">Gestión integral de tu patrimonio</p>

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
              Armar mi cartera
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
