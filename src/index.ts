import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser";
import shopRoutes from "./routes"

const app: Express = express()

app.use(bodyParser.json());
app.use(cors())
app.use(shopRoutes)

app.get('/', (req, res) => {
  res.send('Hello to Shoppingcart API')
})

const CONNECTION_URL: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@shoppingcart.c3r9w.mongodb.net/shopping-cart?retryWrites=true&w=majority`
const PORT: string | number = process.env.PORT || 5000

const options = {}

mongoose
  .connect(CONNECTION_URL, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    console.log(`${error} did not connect`)
  })