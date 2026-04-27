import mongoose from 'mongoose'

const visitorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    phone: {
      type: String,
      required: true
    },
    company: {
      type: String,
      trim: true
    },
    purpose: {
      type: String,
      required: true
    },
    hostName: {
      type: String,
      required: true
    },
    qrCode: {
      type: String
    },
    checkInTime: {
      type: Date
    },
    checkOutTime: {
      type: Date
    },
    status: {
      type: String,
      enum: ['pending', 'checked-in', 'checked-out'],
      default: 'pending'
    }
  },
  { timestamps: true }
)

export default mongoose.model('Visitor', visitorSchema)
