import express from 'express'
import * as authController from '../controllers/authController.js'
import { protect } from '../middleware/auth.js'

const router = express.Router()

router.post('/register', authController.adminRegister)
router.post('/login', authController.adminLogin)
router.get('/me', protect, authController.getAdmin)

export default router
