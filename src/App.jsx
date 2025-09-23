import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Barangays from './pages/Barangays.jsx'
import BarangayDashboard from './pages/BarangayDashboard.jsx'
import ProjectsEvents from './pages/ProjectsEvents.jsx'
import Reports from './pages/Reports.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import AboutProfile from './pages/AboutProfile.jsx'
import AboutExecutive from './pages/AboutExecutive.jsx'
import AboutLegislative from './pages/AboutLegislative.jsx'
import AboutBarangays from './pages/AboutBarangays.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="container mx-auto w-full max-w-[1280px] xl:max-w-[1440px] 2xl:max-w-[1600px] px-6 lg:px-8 py-10 flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/profile" element={<AboutProfile />} />
            <Route path="/about/executive" element={<AboutExecutive />} />
            <Route path="/about/legislative" element={<AboutLegislative />} />
            <Route path="/about/barangays" element={<AboutBarangays />} />
            <Route path="/barangays" element={<Barangays />} />
            <Route path="/barangays/:name" element={<BarangayDashboard />} />
            <Route path="/projects-events" element={<ProjectsEvents />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <footer className="border-t border-[rgb(var(--color-border))] bg-[rgb(var(--color-card))]">
          <div className="container mx-auto max-w-[1280px] xl:max-w-[1440px] 2xl:max-w-[1600px] px-6 lg:px-8 py-6 text-sm muted">
            © {new Date().getFullYear()} Municipality of Donsol. All rights reserved.
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
