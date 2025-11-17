import { Cpu, Cloud, Shield, Database, Workflow, Zap } from 'lucide-react'

const services = [
  {
    icon: Cpu,
    title: 'AI & Automation',
    description: 'Deploy ML models, copilots, and workflow automations that boost productivity and cut costs.'
  },
  {
    icon: Cloud,
    title: 'Cloud Platforms',
    description: 'Design secure, scalable cloud architectures on AWS, Azure, and GCP with IaC and FinOps baked in.'
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Modern data stacks, streaming pipelines, and analytics platforms for real-time decision making.'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Zero-trust architectures, SOC2 readiness, and continuous security monitoring.'
  },
  {
    icon: Workflow,
    title: 'DevOps & SRE',
    description: 'Automated CI/CD, observability, and reliability engineering to keep systems fast and stable.'
  },
  {
    icon: Zap,
    title: 'Product Engineering',
    description: 'Full‑stack product teams shipping delightful web and mobile experiences at startup speed.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 opacity-30" aria-hidden>
        <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-fuchsia-500 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-10 h-80 w-80 rounded-full bg-cyan-500 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Services</h2>
          <p className="mt-4 text-cyan-100/80">We partner from strategy to ship. Start small or launch an enterprise program.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:-translate-y-1 hover:bg-white/10">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-cyan-100/80">{description}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl transition-opacity group-hover:opacity-80" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
