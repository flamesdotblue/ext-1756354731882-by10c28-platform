import { Rocket, Orbit, Mountain, DollarSign } from 'lucide-react';

const programs = [
  {
    icon: Rocket,
    title: 'Orbital Sprint',
    price: 'from $19,900',
    blurb:
      'A 90‑minute suborbital hop with breathless views of the blue marble. Zero‑G dance included.',
    highlights: ['Zero‑G session', 'Panoramic window seats', 'Carbon‑offset included'],
  },
  {
    icon: Orbit,
    title: 'Earth Orbit Drift',
    price: 'from $59,900',
    blurb:
      'Circle the planet in style. 24 hours in LEO with auroras, sunrises, and stargazing lounges.',
    highlights: ['LEO capsule suite', '2 guided EVA simulations', 'Chef‑crafted meals'],
  },
  {
    icon: Mountain,
    title: 'Lunar Edge Flyby',
    price: 'from $149,000',
    blurb:
      'Skim the Moon’s serene horizon. Capture the iconic Earthrise and the silent seas below.',
    highlights: ['Moon‑rise corridor', 'Astronomer onboard', 'Deep‑space photo kit'],
  },
  {
    icon: DollarSign,
    title: 'Student & Researcher',
    price: 'grants available',
    blurb:
      'Discounted micro‑gravity time and payload slots for schools, labs, and curious minds.',
    highlights: ['Micro‑g experiments', 'Mentored program', 'Flexible payload options'],
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background:radial-gradient(600px_circle_at_var(--x,50%)_var(--y,30%),rgba(168,85,247,0.25),transparent_60%)]" />

      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-semibold sm:text-4xl">Choose Your Mission</h2>
          <p className="mt-2 max-w-xl text-white/70">
            Transparent pricing. Flexible schedules. Same trusted safety standards across every ride.
          </p>
        </div>
        <a
          href="#cta"
          className="hidden rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white/90 backdrop-blur md:inline-block hover:bg-white/10"
        >
          Price Breakdown
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {programs.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 backdrop-blur-md transition hover:border-cyan-300/30 hover:shadow-[0_0_40px_rgba(56,189,248,0.15)]"
          >
            <div className="absolute inset-px -z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
              background:
                'conic-gradient(from 180deg at 50% 50%, rgba(56,189,248,0.15), rgba(217,70,239,0.15), rgba(56,189,248,0.15))',
            }} />
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-black/40 text-cyan-300">
                <p.icon size={22} />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-white/70">{p.price}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/80">{p.blurb}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {p.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                Reserve Interest
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
