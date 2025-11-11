"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "¿Cuál es el aporte mínimo?",
      answer:
        "El aporte mínimo es USD 150. Sin embargo, diseñamos planes acordes a tu capacidad y podés ajustar en el tiempo según tu situación.",
    },
    {
      question: "¿Puedo cambiar de moneda de pesos a USD?",
      answer:
        "Sí. Si trabajas en pesos, es normal hacer la transición a dólares al tipo de cambio oficial. Te asesoramos sobre cuándo y cómo hacerlo de la mejor forma.",
    },
    {
      question: "¿Puedo pausar o modificar el aporte?",
      answer: "Claro. La flexibilidad es clave. Adaptamos tu plan a cambios en tu situación sin problemas.",
    },
    {
      question: "¿Cómo funciona el proceso?",
      answer:
        "Es simple: conversás con nuestro equipo, definimos tu objetivo, armamos una propuesta personalizada y empezás cuando quieras. Todo online.",
    },
    {
      question: "¿Garantizan resultados o rentabilidad?",
      answer:
        "No hacemos promesas de rentabilidad. Diseñamos estrategias realistas basadas en objetivos claros y acompañamiento profesional.",
    },
    {
      question: "¿Cómo protegen mi información?",
      answer:
        "Todo se gestiona a través de plataformas reguladas y seguras. Nunca pedimos claves bancarias. Tu información está siempre protegida.",
    },
  ]

  return (
    <section id="preguntas" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B1B2A] mb-4">Preguntas frecuentes</h2>
          <p className="text-lg text-gray-600">Resolvemos tus dudas sobre nuestros planes</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-left font-semibold text-[#0B1B2A]">{faq.question}</h3>
                <ChevronDown
                  size={20}
                  className={`text-[#0EA5A5] flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
