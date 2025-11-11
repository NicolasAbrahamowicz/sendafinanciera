"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, User, DollarSign, CheckCircle2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function LeadForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    celular: "",
    email: "",
    capacidad: "",
    tipo: "ahorro",
    aceptacion: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validate form
    if (!formData.nombre || !formData.celular || !formData.email || !formData.capacidad || !formData.aceptacion) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    const capacidadNum = Number(formData.capacidad)
    if (capacidadNum < 150) {
      toast({
        title: "Error",
        description: "El aporte mínimo es USD 150",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: formData.nombre,
          celular: formData.celular,
          email: formData.email,
          tipo_plan: formData.tipo,
          capacidad_mensual: formData.capacidad,
        }),
      })

      if (!response.ok) throw new Error("Error sending email")

      setSuccess(true)
      setFormData({
        nombre: "",
        celular: "",
        email: "",
        capacidad: "",
        tipo: "ahorro",
        aceptacion: false,
      })
      toast({
        title: "¡Listo!",
        description: "En breve te contactamos por WhatsApp o email.",
      })
      setTimeout(() => setSuccess(false), 5000)
    } catch (error) {
      console.error("Error:", error)
      toast({
        title: "Error",
        description: "Hubo un problema. Intenta de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="formulario" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 sm:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#0B1B2A] mb-2">Recibí tu propuesta sin costo</h2>
            <p className="text-gray-600">Completá el formulario y en breve nos ponemos en contacto</p>
          </div>

          {success && (
            <div className="mb-6 p-4 bg-[#0EA5A5]/10 border border-[#0EA5A5] rounded-lg flex items-start gap-3">
              <CheckCircle2 size={20} className="text-[#0EA5A5] mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-[#0EA5A5]">¡Listo!</p>
                <p className="text-sm text-[#0EA5A5]">En breve te contactamos por WhatsApp o email.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre */}
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre completo *
              </label>
              <div className="relative">
                <User size={18} className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5A5] focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Celular */}
            <div>
              <label htmlFor="celular" className="block text-sm font-medium text-gray-700 mb-2">
                Celular *
              </label>
              <div className="relative">
                <Phone size={18} className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="tel"
                  id="celular"
                  name="celular"
                  value={formData.celular}
                  onChange={handleChange}
                  placeholder="+54 9 11 XXXX-XXXX"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5A5] focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <div className="relative">
                <Mail size={18} className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5A5] focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Tipo */}
            <div>
              <label htmlFor="tipo" className="block text-sm font-medium text-gray-700 mb-2">
                Estoy interesado en *
              </label>
              <select
                id="tipo"
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5A5] focus:border-transparent"
              >
                <option value="ahorro">Plan de Ahorro</option>
                <option value="retiro">Plan de Retiro</option>
                <option value="inversiones">Inversiones</option>
                <option value="combinado">Combinado</option>
              </select>
            </div>

            {/* Capacidad de ahorro/inversión */}
            <div>
              <label htmlFor="capacidad" className="block text-sm font-medium text-gray-700 mb-2">
                Capacidad mensual (USD) - Mínimo USD 150 *
              </label>
              <div className="relative">
                <DollarSign size={18} className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="number"
                  id="capacidad"
                  name="capacidad"
                  value={formData.capacidad}
                  onChange={handleChange}
                  placeholder="Ej.: 500"
                  min="150"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5A5] focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Aceptación */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="aceptacion"
                name="aceptacion"
                checked={formData.aceptacion}
                onChange={handleChange}
                className="w-5 h-5 mt-1 rounded border-gray-300 text-[#0EA5A5] focus:ring-[#0EA5A5] cursor-pointer"
                required
              />
              <label htmlFor="aceptacion" className="text-sm text-gray-700 cursor-pointer">
                Acepto ser contactado por Senda Financiera por cualquier medio de comunicación *
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-[#0EA5A5] text-white rounded-full font-semibold hover:bg-[#0d8c8c] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {isSubmitting ? "Enviando..." : "Enviar y recibir propuesta"}
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-6">
            No compartimos tus datos. Política de privacidad • Términos
          </p>
        </div>
      </div>
    </section>
  )
}
