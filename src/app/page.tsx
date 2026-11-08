
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const advantages = [
  {
    number: '01',
    title: 'Calidad',
    description: 'Productos seleccionados para ofrecerte calidad y confianza en cada compra.',
  },
  {
    number: '02',
    title: 'Variedad',
    description: 'Una amplia variedad de opciones para satisfacer tus necesidades.',
  },
  {
    number: '03',
    title: 'Buenos precios',
    description: 'Excelentes opciones comerciales para clientes particulares y negocios.',
  },
];

export default function MinimarketPage() {
  return (
    <main className="min-h-screen bg-[#101713] text-white overflow-hidden">

      {/* ESTILOS DE LA PORTADA */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        .gold-gradient {
          background: linear-gradient(110deg, #f1d49b, #c49a54, #ead09b);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-glow {
          background:
            radial-gradient(ellipse at 80% 35%, rgba(32, 105, 69, .25), transparent 55%),
            radial-gradient(ellipse at 15% 90%, rgba(195, 151, 79, .08), transparent 40%);
        }

        .grid-pattern {
          background-image:
            linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);
          background-size: 55px 55px;
        }

        .gold-line {
          background: linear-gradient(90deg, #c49a54, transparent);
        }

        .premium-card {
          transition: transform .3s ease, border-color .3s ease,
            background .3s ease;
        }

        .premium-card:hover {
          transform: translateY(-6px);
          border-color: rgba(215, 180, 119, .5);
          background: rgba(255,255,255,.055);
        }

        .access-button {
          transition: all .25s ease;
        }

        .access-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(196,154,84,.25);
        }

        @keyframes appear {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-appear {
          animation: appear .8s ease both;
        }
      `}</style>

      {/* FONDO DECORATIVO */}
      <div className="fixed inset-0 pointer-events-none hero-glow grid-pattern opacity-80" />

      {/* NAVEGACIÓN */}
      <header className="relative z-20 border-b border-white/[0.07] bg-[#101713]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-24 flex items-center justify-between">

          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl border border-[#c49a54]/50 flex items-center justify-center bg-[#c49a54]/10">
              <span className="text-2xl font-black gold-gradient">MJ</span>
            </div>

            <div>
              <p className="text-lg font-black tracking-[0.12em]">
                MINIMARKET <span className="text-[#d5b477]">JOSÉ</span>
              </p>
              <p className="text-[10px] tracking-[0.25em] text-gray-400 uppercase">
                Centro de Guarenas
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-9 text-sm text-gray-300">
            <a href="#inicio" className="hover:text-[#d5b477] transition">
              Inicio
            </a>
            <a href="#nosotros" className="hover:text-[#d5b477] transition">
              Nosotros
            </a>
            <a href="#ventajas" className="hover:text-[#d5b477] transition">
              Nuestra propuesta
            </a>
          </nav>

          <Link
            href="/login"
            className="hidden sm:inline-flex items-center gap-3 border border-[#c49a54]/60 px-5 py-3 rounded-lg text-sm font-bold text-[#e4c58c] hover:bg-[#c49a54] hover:text-[#101713] transition"
          >
            Acceder al sistema
            <span>↗</span>
          </Link>

          <Link
            href="/login"
            className="sm:hidden text-xs font-bold text-[#e4c58c] border border-[#c49a54]/50 px-3 py-2 rounded-lg"
          >
            Acceder
          </Link>
        </div>
      </header>

      {/* HERO PRINCIPAL */}
      <section
        id="inicio"
        className="relative z-10 min-h-[690px] flex items-center"
      >
        <div className="max-w-7xl w-full mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-[1.2fr_.8fr] gap-16 items-center">

          <div className="animate-appear">

            <div className="flex items-center gap-3 mb-9">
              <span className="w-9 h-[2px] bg-[#c49a54]" />
              <span className="text-[#d5b477] text-xs font-bold tracking-[0.3em] uppercase">
                Calidad que genera confianza
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[76px] leading-[1.08] font-black tracking-tight">
              TU MERCADO.
              <br />
              TU CONFIANZA.
              <br />
              <span className="gold-gradient">
                TU MEJOR OPCIÓN.
              </span>
            </h1>

            <p className="mt-8 text-gray-300 text-lg sm:text-xl leading-relaxed max-w-xl">
              En <strong className="text-white">MINIMARKET JOSÉ</strong>
              {' '}trabajamos para ofrecerte productos de calidad,
              variedad y excelentes precios.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                href="/login"
                className="access-button inline-flex items-center gap-5 bg-gradient-to-r from-[#d8b779] to-[#b78b48] text-[#172019] px-8 py-4 rounded-lg font-extrabold text-sm tracking-wide"
              >
                ENTRAR AL SISTEMA
                <span className="text-lg">→</span>
              </Link>

              <a
                href="#nosotros"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-lg border border-white/15 text-gray-200 text-sm font-semibold hover:border-[#c49a54] hover:text-[#e5c58c] transition"
              >
                Conócenos
              </a>

            </div>

            <div className="flex items-center gap-3 mt-12 text-sm text-gray-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Ventas al mayor y al detal
              <span className="text-gray-600">|</span>
              Centro de Guarenas
            </div>

          </div>

          {/* PANEL GRÁFICO SIN FOTOGRAFÍAS */}
          <div className="relative hidden lg:block animate-appear">

            <div className="absolute inset-0 rounded-full bg-emerald-500/10 blur-[90px]" />

            <div className="relative border border-[#c49a54]/25 bg-gradient-to-br from-[#1b2b22] to-[#111b16] rounded-3xl p-10 shadow-2xl">

              <div className="flex justify-between items-center">
                <span className="text-[10px] tracking-[0.3em] text-[#d5b477] font-bold">
                  NUESTRA IDENTIDAD
                </span>
                <span className="text-[#d5b477] text-xl">✦</span>
              </div>

              <div className="py-16 text-center">
                <div className="w-32 h-32 mx-auto rounded-3xl border border-[#c49a54]/50 bg-[#c49a54]/10 flex items-center justify-center">
                  <span className="text-6xl font-black gold-gradient">
                    MJ
                  </span>
                </div>

                <h2 className="mt-9 text-3xl font-black tracking-[0.08em]">
                  MINIMARKET JOSÉ
                </h2>

                <div className="w-20 h-[2px] gold-line mx-auto my-6" />

                <p className="text-gray-400 text-sm tracking-[0.2em] uppercase">
                  Calidad · Variedad · Confianza
                </p>
              </div>

              <div className="border-t border-white/10 pt-6 flex justify-between items-center">
                <span className="text-xs text-gray-400">
                  CENTRO DE GUARENAS
                </span>
                <span className="text-xs text-[#d5b477] font-semibold">
                  VENEZUELA
                </span>
              </div>

            </div>

            <div className="absolute -bottom-7 -left-7 bg-[#c49a54] text-[#142019] rounded-xl px-6 py-4 shadow-xl">
              <p className="text-xs font-black tracking-widest">
                MAYOR Y DETAL
              </p>
              <p className="text-[10px] mt-1 font-medium">
                Siempre a tu servicio
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FRANJA COMERCIAL */}
      <section className="relative z-10 border-y border-white/[0.08] bg-[#18231d]/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 grid grid-cols-1 sm:grid-cols-3 gap-7">

          <div className="flex items-center gap-4">
            <span className="text-[#d5b477] text-3xl font-light">01</span>
            <div>
              <p className="font-bold text-white">Calidad</p>
              <p className="text-xs text-gray-400 mt-1">
                Productos de confianza
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:border-l sm:border-white/10 sm:pl-8">
            <span className="text-[#d5b477] text-3xl font-light">02</span>
            <div>
              <p className="font-bold text-white">Variedad</p>
              <p className="text-xs text-gray-400 mt-1">
                Opciones para tus necesidades
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:border-l sm:border-white/10 sm:pl-8">
            <span className="text-[#d5b477] text-3xl font-light">03</span>
            <div>
              <p className="font-bold text-white">Buenos precios</p>
              <p className="text-xs text-gray-400 mt-1">
                Mayor y detal
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* NOSOTROS */}
      <section
        id="nosotros"
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-28"
      >
        <div className="max-w-3xl">

          <span className="text-[#d5b477] text-xs font-bold tracking-[0.3em] uppercase">
            Conoce nuestra marca
          </span>

          <h2 className="mt-6 text-4xl sm:text-5xl font-black leading-tight">
            Cerca de ti,
            <span className="gold-gradient"> comprometidos contigo.</span>
          </h2>

          <p className="mt-7 text-gray-400 text-lg leading-relaxed">
            MINIMARKET JOSÉ es una propuesta comercial ubicada en el
            Centro de Guarenas, orientada a ofrecer productos de calidad
            y alternativas de compra al mayor y al detal.
          </p>

          <p className="mt-5 text-gray-400 text-lg leading-relaxed">
            Nuestra prioridad es brindar una atención cercana,
            variedad y una experiencia de compra basada en la confianza.
          </p>

        </div>
      </section>

      {/* VENTAJAS */}
      <section
        id="ventajas"
        className="relative z-10 bg-[#18231d]/70 border-y border-white/[0.07]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

          <div className="max-w-2xl mb-14">
            <span className="text-[#d5b477] text-xs font-bold tracking-[0.3em] uppercase">
              Nuestra propuesta
            </span>

            <h2 className="mt-5 text-4xl sm:text-5xl font-black">
              Lo que nos
              <span className="gold-gradient"> distingue.</span>
            </h2>

            <p className="mt-5 text-gray-400 leading-relaxed">
              Trabajamos para ofrecerte una experiencia comercial
              basada en calidad, variedad y buenos precios.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">

            {advantages.map((item) => (
              <article
                key={item.number}
                className="premium-card border border-white/10 bg-white/[0.025] rounded-2xl p-8"
              >
                <span className="text-4xl font-light gold-gradient">
                  {item.number}
                </span>

                <div className="w-10 h-[2px] gold-line mt-7 mb-6" />

                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* LLAMADA A LA ACCIÓN */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-[#c49a54]/30 bg-gradient-to-br from-[#21372a] to-[#142019] p-9 sm:p-16 text-center">

          <div className="absolute w-72 h-72 rounded-full bg-emerald-400/10 blur-[90px] -top-32 -right-20" />

          <div className="relative">
            <span className="text-[#d5b477] text-xs tracking-[0.3em] font-bold uppercase">
              MINIMARKET JOSÉ
            </span>

            <h2 className="mt-6 text-3xl sm:text-5xl font-black">
              Bienvenido a nuestra casa.
            </h2>

            <p className="mt-5 text-gray-300 max-w-xl mx-auto leading-relaxed">
              Accede a nuestra plataforma de gestión comercial
              a través del sistema.
            </p>

            <Link
              href="/login"
              className="access-button inline-flex items-center gap-4 mt-9 bg-gradient-to-r from-[#d8b779] to-[#b78b48] text-[#172019] px-9 py-4 rounded-lg font-extrabold text-sm"
            >
              ENTRAR AL SISTEMA
              <span className="text-lg">→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10 bg-[#0b110e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">

          <div className="flex flex-col md:flex-row justify-between items-center gap-7">

            <div className="text-center md:text-left">
              <p className="font-black tracking-[0.12em]">
                MINIMARKET <span className="text-[#d5b477]">JOSÉ</span>
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Centro de Guarenas · Venezuela
              </p>
            </div>

            <Link
              href="/login"
              className="text-sm text-[#d5b477] hover:text-white transition font-semibold"
            >
              Acceso al sistema →
            </Link>

            <p className="text-xs text-gray-600 text-center">
              © {new Date().getFullYear()} MINIMARKET JOSÉ.
              Todos los derechos reservados.
            </p>

          </div>
        </div>
      </footer>

    </main>
  );
}
