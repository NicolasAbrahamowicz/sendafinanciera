"use client"

import { Lightbulb, Pencil, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function HowItWorks() {
  const steps = [
    {
      icon: Lightbulb,
      title: "Descubrimiento",
      description: "Entendemos tus objetivos y tu capacidad mensual",
    },
    {
      icon: Pencil,
      title: "Diseño",
      description: "Armamos escenarios en pesos/USD, plazos y cobertura",
    },
    {
      icon: TrendingUp,
      title: "Acompañamiento",
      description: "Seguimiento y ajustes cuando haga falta",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B1B2A] mb-4">¿Cómo funcionamos?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Un proceso simple y transparente pensado para vos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connection line on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-4 w-8 h-1 bg-[#0EA5A5]/30"></div>
                )}

                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-[#0EA5A5]/10 flex items-center justify-center mb-6 border-2 border-[#0EA5A5]">
                    <Icon size={32} className="text-[#0EA5A5]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0B1B2A] mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Link
            href="#formulario"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#0EA5A5] text-white rounded-full font-semibold hover:bg-[#0d8c8c] transition-all shadow-lg"
          >
            Quiero mi propuesta
          </Link>
        </div>
      </div>
    </section>
  )
}
