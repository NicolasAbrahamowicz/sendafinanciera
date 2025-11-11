"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#retiro", label: "Retiro" },
    { href: "#ahorro", label: "Ahorro" },
    { href: "#inversiones", label: "Inversiones" },
    { href: "#preguntas", label: "Preguntas" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/logo-senda-financiera.png"
              alt="Senda Financiera"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="hidden sm:block text-lg font-semibold text-[#0B1B2A]">Senda</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[#0EA5A5] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#formulario"
              className="px-6 py-2 bg-[#0EA5A5] text-white rounded-full font-medium text-sm hover:bg-[#0d8c8c] transition-colors shadow-md hover:shadow-lg"
            >
              Quiero mi propuesta
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#formulario"
              className="block px-4 py-2 bg-[#0EA5A5] text-white rounded-lg font-medium text-center hover:bg-[#0d8c8c] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Quiero mi propuesta
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
