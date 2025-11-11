export default function SecuritySection() {
  return (
    <section className="bg-[#0A1B2A] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* Imagen o ilustración va en el lado izquierdo si la tenés */}
          <div className="hidden md:block rounded-2xl border border-slate-700 bg-[#0B2335] h-[320px]" />

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Seguridad Financiera</h2>
            <p className="mt-4 text-slate-300">
              Planes diseñados con solidez y transparencia. Cada decisión está pensada para proteger tu futuro y que
              tu dinero trabaje de manera segura y responsable. <b>Cotización en USD (referencia dólar oficial).</b>
            </p>

            <ul className="mt-6 space-y-3 text-slate-200">
              <li>✔ Transparencia total en cada paso</li>
              <li>✔ Protección de tus datos garantizada</li>
              <li>✔ Asesoría especializada disponible</li>
              <li>✔ Respaldo: Zurich (seguros) & Balanz (mercados)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
