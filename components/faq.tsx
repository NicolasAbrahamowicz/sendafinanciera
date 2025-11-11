"use client"

import { useState } from "react"

const QA = [
  {
    q: "¿En qué moneda cotizan?",
    a: "Todas las propuestas se expresan en USD (referencia dólar oficial) para mantener claridad y comparabilidad.",
  },
  {
    q: "¿Hay monto mínimo?",
    a: "No hay monto mínimo. Diseñamos el plan según tus objetivos y tu capacidad mensual; podés ajustar en el tiempo.",
  },
  {
    q: "¿Prometen rendimientos?",
    a: "No. Evitamos prometer números. Preferimos escenarios claros y responsables acorde a tu perfil y horizonte.",
  },
  {
    q: "¿Cómo es el proceso?",
    a: "3 pasos: Descubrimiento → Diseño a medida → Acompañamiento con seguimiento y ajustes cuando haga falta.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-[#081A28] py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Preguntas frecuentes</h2>

        <div className="mt-8 space-y-3">
          {QA.map((item, i) => (
            <div key={i} className="rounded-xl border border-slate-700 bg-[#0B2335]">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-5 py-4 text-left text-white font-semibold flex items-center justify-between"
              >
                {item.q}
                <span className="text-slate-400">{open === i ? "–" : "+"}</span>
              </button>
              {open === i && <p className="px-5 pb-5 text-slate-300">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
