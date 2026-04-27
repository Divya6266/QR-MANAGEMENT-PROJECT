import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/qr-visitor-management')
    console.log(`MongoDB Connected: ${conn.connection.host}`)
    return conn
  } catch (error) {
    console.warn(`MongoDB Connection Warning: ${error.message}`)
    console.log('Continuing without database...')
  }
}

export default connectDB
