"use client"

import Link from "next/link"
import { Shield, Zap, Lock } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A1B2A]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* Copy */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Construí el futuro que querés con planes de retiro, ahorro e inversión
            </h1>

            <p className="mt-4 text-slate-300 text-lg">
              Cotización en <span className="font-semibold">USD (referencia dólar oficial)</span>, con{" "}
              <span className="font-semibold">aportes flexibles</span> y{" "}
              <span className="font-semibold">estrategias diseñadas a medida</span> de tus objetivos y necesidades.
            </p>

            {/* Bullets */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-200">
                <Shield size={16} className="text-[#0EA5A5]" />
                <span>Planes transparentes y flexibles</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-200">
                <Zap size={16} className="text-[#0EA5A5]" />
                <span>Acompañamiento real de expertos</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-200">
                <Lock size={16} className="text-[#0EA5A5]" />
                <span>100% online y seguro</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                href="#formulario"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#0EA5A5] text-white rounded-full font-semibold hover:bg-[#0d8c8c] transition-all shadow-lg hover:shadow-xl"
              >
                Quiero mi propuesta
              </Link>
              <Link
                href="#planes"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-slate-600 text-white font-semibold hover:bg-white/5 transition-all"
              >
                Ver planes
              </Link>
            </div>

            <p className="mt-4 text-xs text-slate-400">
              Reportamos a <span className="underline">@abaxgrupo</span> y <span className="underline">@ser_financiero</span>.
            </p>
          </div>

          {/* Tarjeta de “seguridad” opcional (puede reemplazarse por una imagen) */}
          <div className="rounded-2xl border border-slate-700 bg-[#0B2335] p-6">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0EA5A5]/10">
                <Shield className="text-[#0EA5A5]" size={20} />
              </div>
              <div>
                <p className="text-white font-semibold">Seguridad financiera</p>
                <p className="text-slate-300 text-sm">Solidez y transparencia en cada paso.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
