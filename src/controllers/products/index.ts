import { Response, Request } from "express"
import { IProduct } from "./../../types/product"
import Product from "../../models/product"

const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products: IProduct[] = await Product.find()
    res.status(200).json({ products })
  } catch (error) {
    throw error
  }
}

const addProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<IProduct, 'image' | 'title' | 'description' | 'availableSizes' | 'price'>

    const newProduct: IProduct = new Product({
      image: body.image,
      title: body.title,
      description: body.description,
      availableSizes: body.availableSizes,
      price: body.price,
    })
    const savedProduct: IProduct = await newProduct.save()

    res
      .status(201)
      .json({ message: "Product added", product: savedProduct })
  } catch (error) {
    throw error
  }
}

const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedProduct: IProduct | null = await Product.findByIdAndDelete(
      req.params.id
    )
    res.status(200).json({
      message: "Product deleted",
      product: deletedProduct,
    })
  } catch (error) {
    throw error
  }
}

const updateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req
    const updateProduct: IProduct | null = await Product.findByIdAndUpdate(
      { _id: id },
      body
    )
    const allProduct: IProduct[] = await Product.find()
    res.status(200).json({
      message: "Product updated",
      product: updateProduct,
      products: allProduct
    })
  } catch (error) {
    throw error
  }
}
export { getProducts, addProduct, deleteProduct, updateProduct }