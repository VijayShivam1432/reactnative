import express from 'express'
import { isAdmin, isAuthenticated } from '../middlewares/auth.js'
import { createOrder, getAdminOrders, getMyOrders, getOrderDetails, proccessOrder, processPayment } from '../controllers/order.js'

const router = express.Router()



router.post("/new", isAuthenticated, createOrder)
router.post("/payment", isAuthenticated, processPayment)

router.get("/my",isAuthenticated,getMyOrders)
router.get("/admin", isAuthenticated, isAdmin, getAdminOrders);
router.get("/single/:id",isAuthenticated,getOrderDetails).put(isAuthenticated,isAdmin,proccessOrder)
export default router