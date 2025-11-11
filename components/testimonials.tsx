"use client"

import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Finalmente encontré asesoría clara sin presiones. Senda Financiera me ayudó a entender mis opciones.",
      author: "María G.",
      role: "Profesional independiente",
    },
    {
      quote: "Me encanta la transparencia. Saben explicar conceptos complejos de forma simple y accesible.",
      author: "Carlos M.",
      role: "Ejecutivo",
    },
    {
      quote: "El seguimiento continuo hace toda la diferencia. Siento que tengo un equipo que cuida mi futuro.",
      author: "Laura T.",
      role: "Emprendedora",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B1B2A] mb-4">Lo que dicen de nosotros</h2>
          <p className="text-lg text-gray-600">Confían en nosotros para su futuro financiero</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#F8FAFC] rounded-2xl p-8 border border-gray-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#0EA5A5] text-[#0EA5A5]" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-[#0B1B2A]">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center text-sm text-gray-600 bg-[#F8FAFC] rounded-lg p-4 inline-block w-full">
          <p>🔒 Datos protegidos • Sin spam • Confidencialidad garantizada</p>
        </div>
      </div>
    </section>
  )
}
