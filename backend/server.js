import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/database.js'
import authRoutes from './routes/auth.js'
import visitorRoutes from './routes/visitors.js'

dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Database Connection
connectDB().catch(err => {
  console.log('MongoDB connection failed, but server starting anyway...')
})

// Routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/visitors', visitorRoutes)

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() })
})

// 404 Handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' })
})

// Start Server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
