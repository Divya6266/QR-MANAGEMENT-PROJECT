import Admin from '../models/Admin.js'
import { generateToken } from '../utils/jwt.js'

export const adminRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body

    const existingAdmin = await Admin.findOne({ email })
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists' })
    }

    const admin = new Admin({ name, email, password })
    await admin.save()

    const token = generateToken(admin._id)
    res.status(201).json({
      message: 'Admin registered successfully',
      token,
      admin: { id: admin._id, name: admin.name, email: admin.email }
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body

    const admin = await Admin.findOne({ email }).select('+password')
    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const isPasswordValid = await admin.comparePassword(password)
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    const token = generateToken(admin._id)
    res.json({
      message: 'Logged in successfully',
      token,
      admin: { id: admin._id, name: admin.name, email: admin.email, role: admin.role }
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getAdmin = async (req, res) => {
  try {
    const admin = await Admin.findById(req.user.id)
    res.json(admin)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
