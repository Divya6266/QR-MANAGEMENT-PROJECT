import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false
    },
    role: {
      type: String,
      enum: ['admin', 'manager', 'receptionist'],
      default: 'receptionist'
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
)

// Hash password before saving
adminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

// Compare password method
adminSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

export default mongoose.model('Admin', adminSchema)
