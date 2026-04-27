import express from 'express'
import * as visitorController from '../controllers/visitorController.js'
import { protect } from '../middleware/auth.js'

const router = express.Router()

router.post('/register', visitorController.registerVisitor)
router.get('/', protect, visitorController.getAllVisitors)
router.get('/:id', protect, visitorController.getVisitorById)
router.put('/:id/check-in', protect, visitorController.checkInVisitor)
router.put('/:id/check-out', protect, visitorController.checkOutVisitor)

export default router
