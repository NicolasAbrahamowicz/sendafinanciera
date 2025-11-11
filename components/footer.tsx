"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Mail, MessageCircle } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0B1B2A] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo-senda-financiera.png"
                alt="Senda Financiera"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="font-bold">Senda</span>
            </div>
            <p className="text-gray-400 text-sm">Planes de Retiro, Ahorro e Inversiones.</p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Planes</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="#retiro" className="hover:text-[#0EA5A5] transition-colors">
                  Retiro
                </Link>
              </li>
              <li>
                <Link href="#ahorro" className="hover:text-[#0EA5A5] transition-colors">
                  Ahorro
                </Link>
              </li>
              <li>
                <Link href="#inversiones" className="hover:text-[#0EA5A5] transition-colors">
                  Inversiones
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="#preguntas" className="hover:text-[#0EA5A5] transition-colors">
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-[#0EA5A5] transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-[#0EA5A5] transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Seguinos</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#0EA5A5] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0EA5A5] transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0EA5A5] transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-xs text-gray-400 space-y-2">
              <p>
                <strong>Sin promesas de rentabilidad.</strong> La información es de carácter informativo. No solicitamos
                claves. Sujeto a normativa vigente.
              </p>
              <p>
                Reportamos a <span className="text-gray-300">@abaxgrupo</span> y{" "}
                <span className="text-gray-300">@ser_financiero</span>
              </p>
            </div>
            <div className="text-xs text-gray-400 space-y-2">
              <p>
                <Link href="#" className="hover:text-[#0EA5A5] transition-colors">
                  Política de privacidad
                </Link>
              </p>
              <p>
                <Link href="#" className="hover:text-[#0EA5A5] transition-colors">
                  Términos y condiciones
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {currentYear} Senda Financiera. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
