import Image from "next/image"

export default function SecuritySection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B1B2A] to-[#0B1B2A]/95">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm h-96">
              <Image src="/security-finance.png" alt="Seguridad Financiera" fill className="object-contain" priority />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Seguridad Financiera</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Planes diseñados con solidez y transparencia. Cada decisión está pensada para proteger tu futuro y
              garantizar que tu dinero trabaje de manera segura y responsable.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#0EA5A5] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-200 text-lg">Transparencia total en cada paso</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#0EA5A5] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-200 text-lg">Protección de tus datos garantizada</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#0EA5A5] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-200 text-lg">Asesoría especializada disponible</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
