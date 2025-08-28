export default function CTA() {
  return (
    <section id="cta" className="relative mx-auto max-w-7xl px-6 pb-28">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-8 backdrop-blur">
        <div className="pointer-events-none absolute -inset-1 -z-10 rounded-3xl opacity-40 blur-2xl [background:radial-gradient(400px_circle_at_20%_20%,rgba(217,70,239,0.25),transparent_60%),radial-gradient(400px_circle_at_80%_80%,rgba(56,189,248,0.25),transparent_60%)]" />

        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-2xl font-semibold sm:text-3xl">Book your pre‑flight consult</h3>
            <p className="mt-2 max-w-xl text-white/75">
              Tell us your dream itinerary and budget. Our flight concierges craft a plan that balances thrill, safety, and cost.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>• No commitment inquiry</li>
              <li>• Financing and group rates available</li>
              <li>• Travel insurance options</li>
            </ul>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-white/10 bg-black/40 p-5"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="mb-1 block text-xs uppercase tracking-wide text-white/70">Full Name</label>
                <input
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-cyan-300/40"
                  placeholder="Ada Lovelace"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-xs uppercase tracking-wide text-white/70">Email</label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-cyan-300/40"
                  placeholder="you@domain.com"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-xs uppercase tracking-wide text-white/70">Budget</label>
                <input
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-cyan-300/40"
                  placeholder="$20,000 - $60,000"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-xs uppercase tracking-wide text-white/70">Desired Program</label>
                <select className="w-full appearance-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/40">
                  <option className="bg-black" value="Orbital Sprint">Orbital Sprint</option>
                  <option className="bg-black" value="Earth Orbit Drift">Earth Orbit Drift</option>
                  <option className="bg-black" value="Lunar Edge Flyby">Lunar Edge Flyby</option>
                  <option className="bg-black" value="Student & Researcher">Student & Researcher</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-xs uppercase tracking-wide text-white/70">Notes</label>
                <textarea
                  rows={4}
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-cyan-300/40"
                  placeholder="Tell us what excites you most…"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-5 w-full rounded-xl bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_40px_rgba(56,189,248,0.35)] transition hover:brightness-110"
            >
              Request Pricing
            </button>
            <p className="mt-3 text-center text-xs text-white/60">
              We’ll get back to you within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
