import VisitorModel from '../models/Visitor.js'
import { generateQR } from '../utils/qrGenerator.js'

export const registerVisitor = async (req, res) => {
  try {
    const { name, email, phone, company, purpose, hostName } = req.body

    const visitor = new VisitorModel({
      name,
      email,
      phone,
      company,
      purpose,
      hostName,
      status: 'pending'
    })

    // Generate QR Code
    const qrCode = await generateQR({ visitorId: visitor._id, name, email })
    visitor.qrCode = qrCode

    await visitor.save()
    res.status(201).json({
      message: 'Visitor registered successfully',
      visitor
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getAllVisitors = async (req, res) => {
  try {
    const visitors = await VisitorModel.find()
    res.json(visitors)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getVisitorById = async (req, res) => {
  try {
    const visitor = await VisitorModel.findById(req.params.id)
    if (!visitor) {
      return res.status(404).json({ message: 'Visitor not found' })
    }
    res.json(visitor)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const checkInVisitor = async (req, res) => {
  try {
    const visitor = await VisitorModel.findByIdAndUpdate(
      req.params.id,
      {
        status: 'checked-in',
        checkInTime: new Date()
      },
      { new: true }
    )
    res.json({ message: 'Checked in successfully', visitor })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const checkOutVisitor = async (req, res) => {
  try {
    const visitor = await VisitorModel.findByIdAndUpdate(
      req.params.id,
      {
        status: 'checked-out',
        checkOutTime: new Date()
      },
      { new: true }
    )
    res.json({ message: 'Checked out successfully', visitor })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
