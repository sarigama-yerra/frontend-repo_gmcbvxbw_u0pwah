import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 sm:px-8 md:pt-40">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow"
          >
            Building intelligent IT systems for ambitious teams
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-cyan-100/90 max-w-2xl"
          >
            We design, build, and run secure cloud platforms, data pipelines, and AI-powered apps that scale with your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#services" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 px-6 py-3 text-base font-semibold text-white shadow hover:opacity-90 transition-opacity">
              Explore our services
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/5 px-6 py-3 text-base font-medium text-white backdrop-blur hover:bg-white/10">
              Talk to an expert
            </a>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/10 to-slate-950/90" />
    </section>
  )
}
