import { useState } from 'react'
import { Menu, X, CircuitBoard, Phone, Info, Briefcase } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services', icon: <Briefcase className="h-4 w-4" /> },
    { label: 'About', href: '#about', icon: <Info className="h-4 w-4" /> },
    { label: 'Contact', href: '#contact', icon: <Phone className="h-4 w-4" /> },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl bg-white/10 backdrop-blur supports-[backdrop-filter]:bg-white/10 border border-white/20 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-2">
              <div className="relative">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-tr from-fuchsia-500 to-cyan-400 blur"></span>
                <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white border border-white/10">
                  <CircuitBoard className="h-5 w-5 text-cyan-300" />
                </div>
              </div>
              <div className="ml-2">
                <p className="text-white font-semibold tracking-wide">BlueOrbit IT</p>
                <p className="text-xs text-cyan-200/80">Future-ready solutions</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2">
                  {item.icon}
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90 transition-opacity">
                Start a project
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 p-2 text-white">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 sm:px-6">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} className="text-sm text-white/90 hover:text-white transition-colors inline-flex items-center gap-2">
                    {item.icon}
                    {item.label}
                  </a>
                ))}
                <a href="#contact" className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90 transition-opacity">
                  Start a project
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
