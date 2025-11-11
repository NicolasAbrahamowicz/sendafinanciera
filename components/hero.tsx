"use client"

import Link from "next/link"
import { ArrowRight, Shield, Lock, Zap } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0B1B2A] to-[#0d2d3f] pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0EA5A5] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#0EA5A5] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="text-balance">
                Construí el futuro que siempre quisiste con planes de retiro, ahorro e inversión
              </span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              Asesoría clara y personalizada para alcanzar tus metas financieras. Sin compromisos vacíos, solo
              estrategias que funcionan.
            </p>

            {/* Trust badges */}
            <div className="space-y-3">
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

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#formulario"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#0EA5A5] text-white rounded-full font-semibold hover:bg-[#0d8c8c] transition-all shadow-lg hover:shadow-xl"
              >
                Armar mi propuesta
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#planes"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Ver planes
              </Link>
            </div>

            <p className="text-xs text-gray-400 pt-4">
              Reportamos a <span className="font-semibold">@abaxgrupo</span> y{" "}
              <span className="font-semibold">@ser_financiero</span>
            </p>
          </div>

          {/* Right visual */}
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0EA5A5] to-transparent rounded-3xl opacity-10"></div>
            <div className="relative bg-gradient-to-br from-[#0EA5A5]/20 to-transparent rounded-3xl p-12 border border-[#0EA5A5]/30">
              <div className="space-y-6">
                <div className="w-24 h-24 bg-[#0EA5A5]/30 rounded-2xl flex items-center justify-center">
                  <Shield size={48} className="text-[#0EA5A5]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Seguridad financiera</h3>
                  <p className="text-gray-300 text-sm">Planes diseñados con solidez y transparencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
