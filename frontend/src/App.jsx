import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './styles/App.css'

// Pages
import AdminLogin from './pages/AdminLogin'
import AdminRegister from './pages/AdminRegister'
import Dashboard from './pages/Dashboard'
import VisitorRegistration from './pages/VisitorRegistration'
import VisitorHistory from './pages/VisitorHistory'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsAuthenticated(!!token)

    // Redirect to login if not authenticated and not on public pages
    if (!token && !['/login', '/register', '/visitor'].includes(location.pathname)) {
      navigate('/login')
    }
  }, [navigate, location])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('admin')
    setIsAuthenticated(false)
    navigate('/login')
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>🎟️ QR Visitor Management</h1>
          {isAuthenticated && (
            <div className="nav-links">
              <a href="/dashboard" className="nav-link">Dashboard</a>
              <a href="/history" className="nav-link">History</a>
              <a href="/visitor" className="nav-link">Register Visitor</a>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/history" element={<VisitorHistory />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/register" element={<AdminRegister />} />
          <Route path="/visitor" element={<VisitorRegistration />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
