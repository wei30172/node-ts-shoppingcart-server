import { IOrder } from "./../types/order"
import { model, Schema } from "mongoose"
import { generate } from 'shortid'

const orderSchema: Schema = new Schema(
  {
    _id: {
      type: String,
      default: generate(),
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    cartItems: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true
  }
)

export default model<IOrder>("Order", orderSchema)