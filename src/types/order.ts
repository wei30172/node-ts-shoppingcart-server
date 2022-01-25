import { Document } from "mongoose"
import { IProduct } from "./product";

export interface IOrder extends Document {
  email: string
  name: string
  address: string
  total: number
  cartItems: IProduct[]
}