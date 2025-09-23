import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-[rgb(var(--color-border))] bg-[rgb(var(--color-card))]/80 backdrop-blur">
      <div className="container mx-auto max-w-[1280px] xl:max-w-[1440px] 2xl:max-w-[1600px] px-6 lg:px-8">
        <div className="flex h-16 lg:h-18 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 font-semibold text-base lg:text-lg">
            <span className="text-[rgb(var(--color-primary))]">MUNICIPALITY OF DONSOL</span>
          </Link>
          <nav className="hidden gap-8 md:flex">
            <NavLink to="/" className={({ isActive }) => `text-base ${isActive ? 'font-semibold' : 'muted hover:text-[rgb(var(--color-text))]'}`}>Home</NavLink>

            <div className="relative" tabIndex="0" onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setAboutOpen(false) }}>
              <button type="button" className="text-base muted hover:text-[rgb(var(--color-text))] flex items-center gap-1" onClick={() => setAboutOpen((v) => !v)} aria-expanded={aboutOpen} aria-haspopup="menu">
                About Us
                <span className={`transition-transform ${aboutOpen ? 'rotate-180' : ''}`}>▾</span>
              </button>
              {aboutOpen && (
                <div className="absolute left-0 mt-2 w-72 rounded-md border border-[rgb(var(--color-border))] bg-[rgb(var(--color-card))] p-2 shadow-lg">
                  <NavLink to="/about/profile" className="block rounded px-4 py-2 text-base hover:bg-slate-50" onClick={() => setAboutOpen(false)}>Municipality Profile</NavLink>
                  <NavLink to="/about/executive" className="block rounded px-4 py-2 text-base hover:bg-slate-50" onClick={() => setAboutOpen(false)}>Executive Officials</NavLink>
                  <NavLink to="/about/legislative" className="block rounded px-4 py-2 text-base hover:bg-slate-50" onClick={() => setAboutOpen(false)}>Legislative Officials</NavLink>
                  <NavLink to="/about/barangays" className="block rounded px-4 py-2 text-base hover:bg-slate-50" onClick={() => setAboutOpen(false)}>Barangays</NavLink>
                </div>
              )}
            </div>

            <NavLink to="/projects-events" className={({ isActive }) => `text-base ${isActive ? 'font-semibold' : 'muted hover:text-[rgb(var(--color-text))]'}`}>Projects & Events</NavLink>
            <NavLink to="/reports" className={({ isActive }) => `text-base ${isActive ? 'font-semibold' : 'muted hover:text-[rgb(var(--color-text))]'}`}>Reports</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `text-base ${isActive ? 'font-semibold' : 'muted hover:text-[rgb(var(--color-text))]'}`}>Contact Us</NavLink>
          </nav>
          <div className="flex items-center gap-3">
            <NavLink to="/login" className="btn-primary">Login</NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar


