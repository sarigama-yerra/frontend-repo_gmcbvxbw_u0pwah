export default function About() {
  return (
    <section id="about" className="relative bg-slate-950 py-24">
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <div className="pointer-events-none absolute top-10 right-10 h-64 w-64 rounded-full bg-indigo-500/40 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Why teams choose us</h2>
          <p className="mt-4 text-cyan-100/80">We combine senior engineers, pragmatic processes, and a bias for action. Expect crisp communication, measurable outcomes, and a partner who cares about your roadmap like it’s our own.</p>
          <ul className="mt-6 grid gap-3 text-cyan-100/90">
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-400" /> Cloud-native architectures with security by design</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" /> Data platforms that unlock insights and automation</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-400" /> Rapid delivery with modern DevOps and product practices</li>
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400 opacity-50 blur-2xl" />
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl bg-slate-900/60 p-4">
                <p className="text-3xl font-bold text-white">50+</p>
                <p className="text-xs text-cyan-200/80">Products shipped</p>
              </div>
              <div className="rounded-2xl bg-slate-900/60 p-4">
                <p className="text-3xl font-bold text-white">99.95%</p>
                <p className="text-xs text-cyan-200/80">Uptime across fleets</p>
              </div>
              <div className="rounded-2xl bg-slate-900/60 p-4">
                <p className="text-3xl font-bold text-white">7x</p>
                <p className="text-xs text-cyan-200/80">Delivery velocity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
