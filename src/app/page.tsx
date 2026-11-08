import Link from "next/link";

export const dynamic = "force-dynamic";

const modules = [
  {
    number: "01",
    title: "Punto de venta",
    description: "Gestión de ventas y operaciones comerciales.",
    icon: "▣",
  },
  {
    number: "02",
    title: "Inventario",
    description: "Control y organización de productos.",
    icon: "▤",
  },
  {
    number: "03",
    title: "Reportes",
    description: "Información y análisis del negocio.",
    icon: "▥",
  },
  {
    number: "04",
    title: "Clientes",
    description: "Administración de la información comercial.",
    icon: "♙",
  },
];

export default function MinimarketPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080F1D] text-white selection:bg-blue-500/30">

      {/* FONDO */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-48 right-[-10%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute bottom-[-200px] left-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.07] blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* CONTENEDOR PRINCIPAL */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] flex-col px-5 py-5 sm:px-8 lg:px-12">

        {/* BARRA SUPERIOR */}
        <header className="flex min-h-[76px] items-center justify-between rounded-2xl border border-white/[0.08] bg-[#101B2D]/80 px-5 shadow-xl shadow-black/10 backdrop-blur-xl sm:px-7">

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-gradient-to-br from-blue-500/25 to-cyan-500/10">
              <span className="text-lg font-black tracking-tighter text-blue-300">
                MJ
              </span>
            </div>

            <div>
              <h1 className="text-sm font-extrabold tracking-[0.12em] sm:text-base">
                MINIMARKET JOSÉ
              </h1>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                Centro de Guarenas
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-3 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-4 py-2 sm:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.7)]" />
            <span className="text-[11px] font-semibold tracking-wide text-emerald-300">
              PLATAFORMA COMERCIAL
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
            <span className="hidden sm:inline">Venezuela</span>
            <span className="text-blue-400">◆</span>
          </div>

        </header>

        {/* CONTENIDO */}
        <section className="flex flex-1 flex-col justify-center py-12 sm:py-16 lg:py-20">

          {/* ENCABEZADO DE BIENVENIDA */}
          <div className="mx-auto mb-12 w-full max-w-5xl text-center">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-4 py-2">
              <span className="text-xs text-blue-300">✦</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-200">
                Bienvenido a nuestra plataforma
              </span>
            </div>

            <h2 className="text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
              MINIMARKET{" "}
              <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                JOSÉ
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              Un espacio diseñado para gestionar nuestras operaciones
              comerciales de forma organizada, eficiente y profesional.
            </p>

          </div>

          {/* PANEL DE ACCESO */}
          <div className="mx-auto w-full max-w-5xl">

            <div className="relative overflow-hidden rounded-[28px] border border-blue-400/20 bg-gradient-to-br from-[#142641] via-[#101D31] to-[#0D1728] p-7 shadow-2xl shadow-black/30 sm:p-10 lg:p-12">

              {/* DETALLES DECORATIVOS */}
              <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-blue-300/[0.07]" />
              <div className="pointer-events-none absolute -right-10 -top-20 h-60 w-60 rounded-full border border-blue-300/[0.07]" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

              <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">

                {/* TEXTO */}
                <div>

                  <div className="mb-5 flex items-center gap-2">
                    <span className="h-[2px] w-8 bg-blue-400" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-300">
                      Centro de gestión
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold leading-tight sm:text-4xl">
                    Tu negocio,
                    <br />
                    <span className="text-blue-300">
                      bajo control.
                    </span>
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
                    Ingresa a nuestra plataforma de gestión comercial
                    y accede a las herramientas necesarias para las
                    operaciones diarias de Minimarket José.
                  </p>

                  <Link
                    href="/login"
                    className="group mt-9 inline-flex w-full items-center justify-center gap-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-7 py-4 text-sm font-extrabold tracking-wide text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:from-blue-400 hover:to-cyan-500 hover:shadow-blue-500/30 sm:w-auto"
                  >
                    <span>ACCEDER AL SISTEMA</span>
                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>

                  <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
                    <span className="text-emerald-400">●</span>
                    Acceso privado para personal autorizado
                  </div>

                </div>

                {/* IDENTIDAD VISUAL */}
                <div className="relative mx-auto w-full max-w-[340px]">

                  <div className="absolute inset-5 rounded-full bg-blue-500/20 blur-[70px]" />

                  <div className="relative rounded-[26px] border border-white/10 bg-[#0A1424]/70 p-6 shadow-2xl backdrop-blur-xl">

                    <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                        MINIMARKET JOSÉ
                      </span>
                      <span className="text-blue-300">✦</span>
                    </div>

                    <div className="py-12 text-center">

                      <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-[30px] border border-blue-300/20 bg-gradient-to-br from-blue-500/20 to-cyan-400/[0.05] shadow-[0_0_60px_rgba(37,99,235,.12)]">
                        <span className="bg-gradient-to-br from-white via-blue-200 to-blue-500 bg-clip-text text-6xl font-black tracking-tighter text-transparent">
                          MJ
                        </span>
                      </div>

                      <h4 className="mt-7 text-xl font-black tracking-[0.08em]">
                        MINIMARKET JOSÉ
                      </h4>

                      <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-300">
                        Calidad · Variedad · Confianza
                      </p>

                    </div>

                    <div className="flex items-center justify-between border-t border-white/[0.08] pt-5">
                      <span className="text-[10px] text-slate-500">
                        CENTRO DE GUARENAS
                      </span>
                      <span className="text-[10px] font-bold text-blue-300">
                        VENEZUELA
                      </span>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* MÓDULOS DEL SISTEMA */}
          <div className="mx-auto mt-12 w-full max-w-5xl">

            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white">
                  Herramientas de gestión
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Funcionalidades de nuestra plataforma
                </p>
              </div>

              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300">
                04 MÓDULOS
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">

              {modules.map((module) => (
                <article
                  key={module.number}
                  className="group rounded-2xl border border-white/[0.08] bg-[#111D30]/75 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-[#172944] sm:p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/10 text-xl text-blue-300 transition group-hover:bg-blue-500/20">
                      {module.icon}
                    </span>
                    <span className="text-[10px] font-bold text-slate-600">
                      {module.number}
                    </span>
                  </div>

                  <h4 className="mt-5 text-sm font-bold text-slate-200">
                    {module.title}
                  </h4>

                  <p className="mt-2 text-[11px] leading-5 text-slate-500">
                    {module.description}
                  </p>
                </article>
              ))}

            </div>
          </div>

        </section>

        {/* PIE DE APLICACIÓN */}
        <footer className="mt-auto border-t border-white/[0.07] py-6">

          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">

            <div>
              <p className="text-xs font-bold tracking-wider text-slate-400">
                MINIMARKET JOSÉ
              </p>
              <p className="mt-1 text-[10px] text-slate-600">
                Centro de Guarenas · Venezuela
              </p>
            </div>

            <p className="text-[10px] text-slate-600">
              © {new Date().getFullYear()} Minimarket José. Todos los derechos reservados.
            </p>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              <span className="text-[10px] font-semibold tracking-wider text-slate-500">
                PLATAFORMA COMERCIAL
              </span>
            </div>

          </div>

        </footer>

      </div>
    </main>
  );
}
