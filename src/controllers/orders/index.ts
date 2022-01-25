import { Response, Request } from "express"
import { IOrder } from "./../../types/order"
import Order from "../../models/order"

const addOrder = async (req: Request, res: Response): Promise<void> => {
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.address ||
    !req.body.total ||
    !req.body.cartItems
  ) {
    res.send({ message: "Data is required." });
  }

  try {
    const body = req.body as Pick<IOrder, "email" | "name" | "address" | "total" | "cartItems">

    const order: IOrder = new Order({
      email: body.email,
      name: body.name,
      address: body.address,
      total: body.total,
      cartItems: body.cartItems,
    })

    const newOrder: IOrder = await order.save()

    res
      .status(201)
      .json({ message: "Order added", order: newOrder })
  } catch (error) {
    throw error
  }
}

const getOrders = async (req: Request, res: Response): Promise<void> => {
  try {
    const orders: IOrder[] = await Order.find()
    res.status(200).json({ orders })
  } catch (error) {
    throw error
  }
}

const deleteOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedOrder: IOrder | null = await Order.findByIdAndDelete(
      req.params.id
    )
    res.status(200).json({
      message: "Order deleted",
      order: deletedOrder,
    })
  } catch (error) {
    throw error
  }
}

const updateOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req
    const updateOrder: IOrder | null = await Order.findByIdAndUpdate(
      { _id: id },
      body
    )
    const allOrders: IOrder[] = await Order.find()
    res.status(200).json({
      message: "Order updated",
      order: updateOrder,
      orders: allOrders,
    })
  } catch (error) {
    throw error
  }
}

export { getOrders, addOrder, updateOrder, deleteOrder }