import { motion, AnimatePresence } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import logo from '/Donsol.png'

function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false) // Mobile sidebar toggle

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-gradient-to-r from-[#0057A0] to-[#003c73] shadow-lg">
      <div className="w-full px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <motion.img
              src={logo}
              alt="Municipality of Donsol Logo"
              className="h-14 w-14 rounded-full shadow-md border-2 border-yellow-400"
            />
            <div className="flex flex-col leading-tight text-white">
              <span className="text-xs uppercase tracking-wide">
                Republic of the Philippines
              </span>
              <span className="text-lg md:text-xl font-bold">
                MUNICIPALITY OF DONSOL
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-7">
            <NavLink to="/" className="px-2 py-1 text-white hover:text-yellow-400 transition">
              Home
            </NavLink>

            {/* About Us Dropdown */}
            <div
              className="relative"
              tabIndex="0"
              onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setAboutOpen(false) }}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-2 py-1 text-white hover:text-yellow-400 transition"
                onClick={() => setAboutOpen((v) => !v)}
              >
                About Us
                <motion.span animate={{ rotate: aboutOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  ▾
                </motion.span>
              </button>

              {aboutOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 mt-2 w-[500px] lg:w-[700px] rounded-xl border border-slate-200 bg-white p-4 shadow-lg"
                >
                  <ul className="grid gap-4 md:grid-cols-[1.5fr_2fr]">
                    <li className="row-span-4">
                      <NavLink to="/about/profile" onClick={() => setAboutOpen(false)} className="block h-full rounded-md bg-gradient-to-b from-blue-50 to-white p-6 hover:shadow-md transition">
                        <div className="mt-4 mb-2 text-lg font-medium">Municipality Profile</div>
                        <p className="text-sm text-muted-foreground">Overview and general info about the municipality.</p>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/about/executive" onClick={() => setAboutOpen(false)} className="block rounded-md p-3 hover:bg-[#eaf2ff]">
                        <div className="font-medium text-sm">Executive Officials</div>
                        <p className="text-xs text-muted-foreground">List of the current executive officials of Donsol.</p>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/about/legislative" onClick={() => setAboutOpen(false)} className="block rounded-md p-3 hover:bg-[#eaf2ff]">
                        <div className="font-medium text-sm">Legislative Officials</div>
                        <p className="text-xs text-muted-foreground">Members of the municipal council and their roles.</p>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/about/barangays" onClick={() => setAboutOpen(false)} className="block rounded-md p-3 hover:bg-[#eaf2ff]">
                        <div className="font-medium text-sm">Barangays</div>
                        <p className="text-xs text-muted-foreground">List and details of all barangays under Donsol.</p>
                      </NavLink>
                    </li>
                  </ul>
                </motion.div>
              )}
            </div>

            <NavLink to="/projects-events" className="px-2 py-1 text-white hover:text-yellow-400 transition">Projects & Events</NavLink>
            <NavLink to="/contact" className="px-2 py-1 text-white hover:text-yellow-400 transition">Contact Us</NavLink>
            <NavLink to="/dashboard" className="px-2 py-1 text-white hover:text-yellow-400 transition">Dashboard</NavLink>
            <NavLink to="/feedback" className="px-2 py-1 text-white hover:text-yellow-400 transition">Feedback</NavLink>
          </nav>

          {/* Desktop Login Button */}
          <div className="hidden md:flex items-center gap-3">
            <NavLink to="/login" className="px-4 py-2 rounded-xl bg-yellow-400 text-black font-semibold shadow hover:bg-yellow-300 transition-colors duration-200">
              Login
            </NavLink>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Right-to-Left with Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setMenuOpen(false);
                setAboutOpen(false);
              }}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Sidebar */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 z-50 h-full w-64 bg-gradient-to-b from-[#0057A0] to-[#003c73] p-6 shadow-xl flex flex-col"
            >
              {/* X Button */}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setAboutOpen(false);
                }}
                className="self-end mb-4 text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <NavLink to="/" onClick={() => setMenuOpen(false)} className="block text-white py-2 hover:text-yellow-400 transition">Home</NavLink>

              {/* Mobile About Us Dropdown */}
              <div className="mt-2">
                <button 
                  onClick={() => setAboutOpen(!aboutOpen)} 
                  className="w-full flex justify-between items-center text-white py-2 hover:text-yellow-400 transition"
                >
                  About Us
                  <motion.span animate={{ rotate: aboutOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>▾</motion.span>
                </button>
                <AnimatePresence>
                  {aboutOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="flex flex-col ml-4 overflow-hidden"
                    >
                      <NavLink to="/about/profile" onClick={() => setMenuOpen(false)} className="block text-white py-1 hover:text-yellow-400 transition">Municipality Profile</NavLink>
                      <NavLink to="/about/executive" onClick={() => setMenuOpen(false)} className="block text-white py-1 hover:text-yellow-400 transition">Executive Officials</NavLink>
                      <NavLink to="/about/legislative" onClick={() => setMenuOpen(false)} className="block text-white py-1 hover:text-yellow-400 transition">Legislative Officials</NavLink>
                      <NavLink to="/about/barangays" onClick={() => setMenuOpen(false)} className="block text-white py-1 hover:text-yellow-400 transition">Barangays</NavLink>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink to="/projects-events" onClick={() => setMenuOpen(false)} className="block text-white py-2 hover:text-yellow-400 transition">Projects & Events</NavLink>
              <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="block text-white py-2 hover:text-yellow-400 transition">Contact Us</NavLink>
              <NavLink to="/dashboard" onClick={() => setMenuOpen(false)} className="block text-white py-2 hover:text-yellow-400 transition">Dashboard</NavLink>
              <NavLink to="/feedback" onClick={() => setMenuOpen(false)} className="block text-white py-2 hover:text-yellow-400 transition">Feedback</NavLink>
              <NavLink to="/login" onClick={() => setMenuOpen(false)} className="block bg-yellow-400 text-black rounded-xl px-4 py-2 font-semibold mt-4 hover:bg-yellow-300 transition">Login</NavLink>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
