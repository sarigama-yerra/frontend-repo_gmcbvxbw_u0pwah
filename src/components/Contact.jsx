import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    // This is a placeholder submission. In a full build, wire this to the backend.
    await new Promise((r) => setTimeout(r, 900))
    setStatus('Thanks — we will get back to you shortly!')
  }

  return (
    <section id="contact" className="relative bg-slate-950 py-24">
      <div className="absolute inset-0 opacity-30" aria-hidden>
        <div className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-fuchsia-500 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Let’s build something great</h2>
          <p className="mt-4 text-cyan-100/80">Tell us about your goals. We’ll respond within 1 business day.</p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-2xl space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input required name="name" placeholder="Your name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            <input required type="email" name="email" placeholder="Work email" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          </div>
          <input name="company" placeholder="Company" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <textarea required name="message" rows="5" placeholder="What can we help you build?" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-cyan-100/70">By submitting, you agree to our privacy policy.</p>
            <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 px-6 py-3 text-base font-semibold text-white shadow hover:opacity-90 transition-opacity">
              Send message
            </button>
          </div>
          {status && <p className="text-center text-sm text-cyan-100/90">{status}</p>}
        </form>
      </div>
    </section>
  )
}
