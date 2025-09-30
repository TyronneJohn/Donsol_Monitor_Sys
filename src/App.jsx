import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import ProjectsEvents from './pages/ProjectsEvents'
import Contact from './pages/Contact'
import Feedback from './pages/Feedback'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile';
import Executive from './pages/Executive';
import Legislative from './pages/Legislative';
import Barangays from './pages/Barangays';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-20 bg-gradient-to-b from-blue-100 via-white to-green-100 min-h-screen">
        <div className="container mx-auto max-w-[1280px] xl:max-w-[1440px] 2xl:max-w-[1600px] px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/*" element={<About />} />
            <Route path="/about/profile" element={<Profile />} />
            <Route path="/about/executive" element={<Executive />} />
            <Route path="/about/legislative" element={<Legislative />} />
            <Route path="/about/barangays" element={<Barangays />} />
            <Route path="/projects-events" element={<ProjectsEvents />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </main>
      <footer className="bg-gray-100 text-gray-500 text-sm py-4 text-center">
        © 2025 Municipality of Donsol. All Rights Reserved.
      </footer>
    </Router>
  )
}

export default App
