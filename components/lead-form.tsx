"use client"

import type React from "react"
import { useState } from "react"

export default function LeadForm() {
  const [isSubmitting, setSubmitting] = useState(false)
  const [ok, setOk] = useState<null | boolean>(null)

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setOk(null)
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      setOk(res.ok)
      if (res.ok) form.reset()
    } catch {
      setOk(false)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="formulario" className="bg-[#0A1B2A] py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-2xl border border-slate-700 bg-[#0B2335] p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-white">Armá tu propuesta</h3>
          <p className="mt-1 text-slate-300">
            Completá tus datos y te acercamos alternativas. Cotizamos en USD (referencia dólar oficial).
          </p>

          <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="text-sm text-slate-300">Nombre *</label>
              <input name="from_name" required className="mt-1 w-full rounded-lg border border-slate-700 bg-[#091C2A] px-3 py-2 text-white outline-none" />
            </div>

            <div className="sm:col-span-1">
              <label className="text-sm text-slate-300">Email *</label>
              <input type="email" name="from_email" required className="mt-1 w-full rounded-lg border border-slate-700 bg-[#091C2A] px-3 py-2 text-white outline-none" />
            </div>

            <div className="sm:col-span-1">
              <label className="text-sm text-slate-300">Celular</label>
              <input name="celular" className="mt-1 w-full rounded-lg border border-slate-700 bg-[#091C2A] px-3 py-2 text-white outline-none" />
            </div>

            <div className="sm:col-span-1">
              <label className="text-sm text-slate-300">Tipo de plan *</label>
              <select name="tipo_plan" required className="mt-1 w-full rounded-lg border border-slate-700 bg-[#091C2A] px-3 py-2 text-white outline-none">
                <option value="retiro">Retiro</option>
                <option value="ahorro">Ahorro</option>
                <option value="inversiones">Inversiones</option>
                <option value="proteccion_mas_acumulacion">Protección + Acumulación</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="text-sm text-slate-300">Capacidad mensual (USD) *</label>
              <input
                name="capacidad_mensual"
                type="number"
                inputMode="numeric"
                required
                className="mt-1 w-full rounded-lg border border-slate-700 bg-[#091C2A] px-3 py-2 text-white outline-none"
                placeholder="Indicanos un rango aproximado"
              />
              <p className="mt-1 text-xs text-slate-400">Aportes flexibles. Diseñamos estrategias a medida de tus objetivos.</p>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-[#0EA5A5] py-3 font-semibold text-white hover:bg-[#0d8c8c] transition-all disabled:opacity-60"
              >
                {isSubmitting ? "Enviando..." : "Enviar y recibir propuesta"}
              </button>
              {ok === true && <p className="mt-3 text-sm text-emerald-400 text-center">¡Listo! Te escribimos a la brevedad.</p>}
              {ok === false && <p className="mt-3 text-sm text-rose-400 text-center">No pudimos enviar tu solicitud. Probá nuevamente.</p>}
            </div>
          </form>

          <p className="text-xs text-gray-500 text-center mt-6">No compartimos tus datos. Política de privacidad • Términos</p>
        </div>
      </div>
    </section>
  )
}
