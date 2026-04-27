import { useState } from 'react'
import api from '../services/api'
import '../styles/VisitorRegistration.css'

export default function VisitorRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    purpose: '',
    hostName: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [qrCode, setQrCode] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      const response = await api.post('/visitors/register', formData)
      setSuccess('Visitor registered successfully!')
      setQrCode(response.data.visitor.qrCode)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        purpose: '',
        hostName: ''
      })
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="visitor-registration">
      <div className="registration-container">
        <h2>Visitor Registration</h2>
        
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+91 9876543210"
              />
            </div>

            <div className="form-group">
              <label>Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="ABC Corp"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Purpose of Visit *</label>
              <input
                type="text"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                required
                placeholder="Meeting / Delivery / Support"
              />
            </div>

            <div className="form-group">
              <label>Host Name *</label>
              <input
                type="text"
                name="hostName"
                value={formData.hostName}
                onChange={handleChange}
                required
                placeholder="Manager Name"
              />
            </div>
          </div>

          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? 'Processing...' : 'Generate QR Code'}
          </button>
        </form>

        {qrCode && (
          <div className="qr-result">
            <h3>QR Code Generated!</h3>
            <img src={qrCode} alt="QR Code" className="qr-image" />
            <p>Please scan this QR code at entry</p>
          </div>
        )}
      </div>
    </div>
  )
}
