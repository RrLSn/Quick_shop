import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
// import Product from "./modules/product_module.js";
import productRoutes from "./routes/product.js";

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;

mongoose
  .connect(
    "mongodb+srv://soulfulQuest:QdfEhah6Woe1uFQ1@quickshop.x4gb9.mongodb.net/QuickShop?retryWrites=true&w=majority&appName=QuickShop"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
  })
  .catch(() => {
    console.log("Connection Error!");
  });

//Router
app.use("/api/products", productRoutes);
