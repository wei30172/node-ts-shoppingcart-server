import { Router } from "express"
import { getProducts, addProduct, updateProduct, deleteProduct } from "../controllers/products"
import { getOrders, addOrder, updateOrder, deleteOrder } from "../controllers/orders"

const router: Router = Router()

router.get("/api/products", getProducts)

router.post("/api/products", addProduct)

router.delete("/api/products/:id", deleteProduct)

router.put("/api/products/:id", updateProduct)

router.post("/api/orders", addOrder)

router.get("/api/orders", getOrders)

router.delete("/api/orders/:id", deleteOrder)

router.put("/api/orders/:id", updateOrder)

export default router