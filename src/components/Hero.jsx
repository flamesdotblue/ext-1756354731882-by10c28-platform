import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full" aria-label="Hero">
      <div className="relative h-[92vh] w-full overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Spline
            scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-widest text-white/80">
            NEW ERA • AFFORDABLE SPACE JOURNEYS
          </span>
          <h1 className="text-4xl font-semibold leading-tight sm:text-6xl md:text-7xl">
            Ride the Cosmic Current
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
            AstraWay makes space travel thrilling, safe, and surprisingly attainable. From orbital flybys to lunar vistas—book your seat at a down‑to‑Earth price.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#programs"
              className="group rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-blue-500 px-7 py-3 text-sm font-semibold text-black shadow-[0_0_40px_rgba(56,189,248,0.35)] transition-transform hover:scale-[1.02]"
            >
              Explore Programs
            </a>
            <a
              href="#cta"
              className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/10"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
