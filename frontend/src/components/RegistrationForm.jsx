import { useState } from 'react'
import api from '../services/api'

export const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    purpose: '',
    hostName: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await api.post('/visitors/register', formData)
      alert('Visitor registered successfully!')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        purpose: '',
        hostName: ''
      })
    } catch (error) {
      alert('Error registering visitor')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <div className="form-group">
        <label>Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
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
        />
      </div>
      <div className="form-group">
        <label>Phone *</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Company</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Purpose *</label>
        <input
          type="text"
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          required
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
        />
      </div>
      <button type="submit" className="submit-btn">Register</button>
    </form>
  )
}
