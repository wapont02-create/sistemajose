import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function MinimarketPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* Fondo decorativo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-emerald-700/20 rounded-full blur-3xl" />
      </div>

      {/* Cabecera */}
      <header className="relative z-10 border-b border-white/10 bg-slate-900/70">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-black tracking-wide">
              <span className="text-emerald-400">MINIMARKET</span> JOSÉ
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Centro de Guarenas
            </p>
          </div>

          <Link
            href="/login"
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-5 py-3 rounded-xl transition"
          >
            Entrar al sistema
          </Link>
        </div>
      </header>

      {/* Presentación principal */}
      <section className="relative z-10 min-h-[75vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full grid md:grid-cols-2 gap-12 items-center">

          <div>
            <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 py-2 rounded-full text-sm font-semibold mb-7">
              <span className="w-2 h-2 bg-emerald-400 rounded-full" />
              Tu minimarket de confianza
            </span>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
              MINIMARKET
              <span className="block text-emerald-400">JOSÉ</span>
            </h2>

            <p className="text-xl sm:text-2xl text-slate-300 mt-7 font-semibold">
              Ventas al mayor y al detal
            </p>

            <p className="text-slate-400 text-lg mt-4 max-w-xl leading-relaxed">
              Productos de calidad al mejor precio.
              Estamos en el Centro de Guarenas para ofrecerte
              variedad, calidad y atención de confianza.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/login"
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-emerald-500/20 transition"
              >
                Entrar al sistema →
              </Link>
            </div>

            <p className="text-slate-500 text-sm mt-5">
              Centro de Guarenas · Venezuela
            </p>
          </div>

          {/* Imagen decorativa */}
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full" />

            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-3xl p-10 shadow-2xl">
              <div className="text-center">
                <div className="text-8xl mb-7">🛒</div>

                <h3 className="text-3xl font-black text-white">
                  MINIMARKET JOSÉ
                </h3>

                <div className="w-20 h-1 bg-emerald-400 mx-auto my-6 rounded-full" />

                <p className="text-emerald-400 text-xl font-bold">
                  Calidad y buenos precios
                </p>

                <p className="text-slate-400 mt-3">
                  Tu compra, nuestra prioridad.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Pie de página */}
      <footer className="relative z-10 border-t border-white/10 bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} MINIMARKET JOSÉ.
            Todos los derechos reservados.
          </p>
          <p className="text-slate-500 text-xs mt-2">
            Centro de Guarenas · Ventas al mayor y al detal
          </p>
        </div>
      </footer>

    </main>
  );
}
