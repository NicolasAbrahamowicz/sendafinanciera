"use client"

import { Lightbulb, Pencil, TrendingUp } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: <Lightbulb className="text-[#0EA5A5]" size={22} />,
      title: "Descubrimiento",
      text: "Entendemos tus objetivos y tu capacidad mensual.",
    },
    {
      icon: <Pencil className="text-[#0EA5A5]" size={22} />,
      title: "Diseño",
      text: "Armamos estrategias a medida y escenarios en USD (referencia dólar oficial), plazos y cobertura.",
    },
    {
      icon: <TrendingUp className="text-[#0EA5A5]" size={22} />,
      title: "Acompañamiento",
      text: "Seguimiento y ajustes cuando haga falta.",
    },
  ]

  return (
    <section id="como-funcionamos" className="bg-[#081A28] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">¿Cómo funcionamos?</h2>
        <p className="mt-2 text-center text-slate-300">Un proceso simple y transparente pensado para vos.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-slate-700 bg-[#0B2335] p-6">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0EA5A5]/10">
                  {s.icon}
                </div>
                <h3 className="text-white font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-slate-300">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
