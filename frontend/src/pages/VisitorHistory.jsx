import { useState, useEffect } from 'react'
import api from '../services/api'
import '../styles/VisitorHistory.css'

export default function VisitorHistory() {
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    fetchHistory()
  }, [filter])

  const fetchHistory = async () => {
    try {
      const response = await api.get('/visitors')
      let filtered = response.data

      if (filter === 'checked-in') {
        filtered = filtered.filter(v => v.status === 'checked-in')
      } else if (filter === 'checked-out') {
        filtered = filtered.filter(v => v.status === 'checked-out')
      }

      setHistory(filtered)
    } catch (err) {
      setError('Failed to fetch history')
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString) => {
    if (!dateString) return '-'
    return new Date(dateString).toLocaleString()
  }

  if (loading) return <div className="history-page">Loading...</div>

  return (
    <div className="history-page">
      <h2>Visitor History</h2>

      {error && <div className="error-message">{error}</div>}

      <div className="filter-buttons">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All ({history.length})
        </button>
        <button
          className={`filter-btn ${filter === 'checked-in' ? 'active' : ''}`}
          onClick={() => setFilter('checked-in')}
        >
          Checked In
        </button>
        <button
          className={`filter-btn ${filter === 'checked-out' ? 'active' : ''}`}
          onClick={() => setFilter('checked-out')}
        >
          Checked Out
        </button>
      </div>

      <div className="history-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Purpose</th>
              <th>Host</th>
              <th>Check-In Time</th>
              <th>Check-Out Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {history.map(record => (
              <tr key={record._id}>
                <td>{record.name}</td>
                <td>{record.email}</td>
                <td>{record.company || '-'}</td>
                <td>{record.purpose}</td>
                <td>{record.hostName}</td>
                <td>{formatDate(record.checkInTime)}</td>
                <td>{formatDate(record.checkOutTime)}</td>
                <td>
                  <span className={`status ${record.status}`}>
                    {record.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {history.length === 0 && (
          <div className="no-data">No visitor records found</div>
        )}
      </div>
    </div>
  )
}
