import { useState, useEffect } from 'react'
import api from '../services/api'
import '../styles/Dashboard.css'

export default function Dashboard() {
  const [visitors, setVisitors] = useState([])
  const [stats, setStats] = useState({
    total: 0,
    checkedIn: 0,
    checkedOut: 0
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchVisitors()
  }, [])

  const fetchVisitors = async () => {
    try {
      const response = await api.get('/visitors')
      setVisitors(response.data)
      
      const total = response.data.length
      const checkedIn = response.data.filter(v => v.status === 'checked-in').length
      const checkedOut = response.data.filter(v => v.status === 'checked-out').length
      
      setStats({ total, checkedIn, checkedOut })
    } catch (err) {
      setError('Failed to fetch visitors')
    } finally {
      setLoading(false)
    }
  }

  const handleCheckIn = async (visitorId) => {
    try {
      await api.put(`/visitors/${visitorId}/check-in`)
      fetchVisitors()
    } catch (err) {
      alert('Check-in failed')
    }
  }

  const handleCheckOut = async (visitorId) => {
    try {
      await api.put(`/visitors/${visitorId}/check-out`)
      fetchVisitors()
    } catch (err) {
      alert('Check-out failed')
    }
  }

  if (loading) return <div className="dashboard">Loading...</div>

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>

      {error && <div className="error-message">{error}</div>}

      <div className="stats-grid">
        <div className="stat-card">
          <h3>{stats.total}</h3>
          <p>Total Visitors</p>
        </div>
        <div className="stat-card">
          <h3>{stats.checkedIn}</h3>
          <p>Checked In</p>
        </div>
        <div className="stat-card">
          <h3>{stats.checkedOut}</h3>
          <p>Checked Out</p>
        </div>
      </div>

      <div className="visitors-table">
        <h3>Recent Visitors</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Purpose</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {visitors.map(visitor => (
              <tr key={visitor._id}>
                <td>{visitor.name}</td>
                <td>{visitor.email}</td>
                <td>{visitor.phone}</td>
                <td>{visitor.purpose}</td>
                <td><span className={`status ${visitor.status}`}>{visitor.status}</span></td>
                <td>
                  {visitor.status === 'pending' && (
                    <button onClick={() => handleCheckIn(visitor._id)} className="btn-checkin">
                      Check In
                    </button>
                  )}
                  {visitor.status === 'checked-in' && (
                    <button onClick={() => handleCheckOut(visitor._id)} className="btn-checkout">
                      Check Out
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
