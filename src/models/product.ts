import { IProduct } from "./../types/product"
import { model, Schema } from "mongoose"
import { generate } from 'shortid'

const productSchema: Schema = new Schema(
  {
    _id: {
      type: String,
      default: generate(),
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    availableSizes: {
      type: [String],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    count: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
)

export default model<IProduct>("Product", productSchema)