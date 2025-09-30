// Navbar.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import logo from '/Donsol.png'

function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-gradient-to-r from-[#0057A0] to-[#003c73] backdrop-blur shadow-lg">
      <div className="w-full px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-6">
          
          {/* Logo + Text */}
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

          {/* NAVIGATION PAGES */}
          <nav className="hidden md:flex items-center gap-7">
            <NavLink 
              to="/" 
              className="px-2 py-1 text-white hover:text-yellow-400 transition"
            >
              Home
            </NavLink>

            {/* ABOUT US DROPDOWN */}
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
                <motion.span 
                  animate={{ rotate: aboutOpen ? 180 : 0 }} 
                  transition={{ duration: 0.3 }}
                >
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
                    {/* Featured Card (Left) */}
                    <li className="row-span-4">
                      <NavLink 
                        to="/about/profile"
                        className="block h-full rounded-md bg-gradient-to-b from-blue-50 to-white p-6 hover:shadow-md transition"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium">Municipality Profile</div>
                        <p className="text-sm text-muted-foreground">
                          Overview and general info about the municipality.
                        </p>
                      </NavLink>
                    </li>

                    {/* Grid Links (Right) */}
                    <li>
                      <NavLink 
                        to="/about/executive" 
                        className="block rounded-md p-3 hover:bg-[#eaf2ff]"
                      >
                        <div className="font-medium text-sm">Executive Officials</div>
                        <p className="text-xs text-muted-foreground">
                          List of the current executive officials of Donsol.
                        </p>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink 
                        to="/about/legislative" 
                        className="block rounded-md p-3 hover:bg-[#eaf2ff]"
                      >
                        <div className="font-medium text-sm">Legislative Officials</div>
                        <p className="text-xs text-muted-foreground">
                          Members of the municipal council and their roles.
                        </p>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink 
                        to="/about/barangays" 
                        className="block rounded-md p-3 hover:bg-[#eaf2ff]"
                      >
                        <div className="font-medium text-sm">Barangays</div>
                        <p className="text-xs text-muted-foreground">
                          List and details of all barangays under Donsol.
                        </p>
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

          {/* LOGIN BUTTON ONLY */}
          <div className="hidden md:flex items-center gap-3">
            <NavLink 
              to="/login" 
              className="px-4 py-2 rounded-xl bg-yellow-400 text-black font-semibold shadow hover:bg-yellow-300 transition-colors duration-200"
            >
              Login
            </NavLink>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Navbar
