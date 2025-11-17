import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <footer className="bg-slate-950 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-cyan-100/70">© {new Date().getFullYear()} BlueOrbit IT. All rights reserved.</p>
          <div className="text-sm text-cyan-100/60">Built with secure, scalable tech — ready for enterprise.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
