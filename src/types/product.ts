import { Document } from "mongoose"

export interface IProduct extends Document {
  image: string,
  title: string,
  description: string,
  availableSizes: string[],
  price: number,
}