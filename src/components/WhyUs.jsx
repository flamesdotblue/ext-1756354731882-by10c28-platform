import { Shield, BadgeCheck, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Safety First, Always',
    desc: 'Every capsule triple‑redundant, human‑rated, and continuously monitored by veteran flight directors.',
  },
  {
    icon: BadgeCheck,
    title: 'Transparent Pricing',
    desc: 'No hidden fees. Clear inclusions and financing options to make space a reachable reality.',
  },
  {
    icon: Sparkles,
    title: 'Out‑of‑this‑World Comfort',
    desc: 'Panoramic windows, ambient lighting, and chef‑selected menus to elevate your orbit.',
  },
];

export default function WhyUs() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-24">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Why Fly AstraWay</h2>
        <p className="mx-auto mt-2 max-w-2xl text-white/70">
          We merge aerospace rigor with immersive hospitality. The result? A cosmic journey that feels both epic and effortless.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-fuchsia-300/30"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/30 to-cyan-400/30 text-cyan-300">
              <f.icon size={22} />
            </div>
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-white/75">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
