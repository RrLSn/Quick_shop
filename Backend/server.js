import express from "express";
// import path from "path";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "./modules/product_module.js";
// import Product from "../modules/products.module.js";

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// // Get all products

// app.get("/api/products", (req, res) => {
//   const limit = parseInt(req.query.limit);
//   if (!isNaN(limit) && limit > 0) {
//     res.json(Products.slice(0, limit));
//   } else {
//     res.json({ data: Products });
//   }
// });

// //Get a single products
// let searchedProduct;
// app.get("/api/products/:id", (req, res) => {
//   const id = req.params.id;
//   searchedProduct = Products.find((product) => product.product_id === id);

//   res.status(200).json(searchedProduct);

//   //Get Feature Product
//   // const searchedFeaturedProduct = products.find((product) => {
//   //   product.product_attributes.Features ===
//   //     searchedProduct.product_attributes.Features;
//   // });
//   Products.forEach((product) => {
//     console.log(product.offer.store_name);
//   });

//   // const searchResult = searchedFeaturedProduct;
//   // console.log(feature);
//   // const featuredProducts = searchResult.filter((result) => {
//   //   return (
//   //     result.product_attributes.Features ===
//   //       searchResult.product_attributes.Features &&
//   //     result.id !== searchResult.id
//   //   );
//   // });
//   // console.log(feature);
//   // res.status(200).json({ message: "OK", data: featuredProducts });
// });

// // Search product
// app.get("/api/search", (req, res) => {
//   const { title } = req.query;

//   if (!title || title.trim() === "") {
//     res.status(400).json({ message: "Product name required for search" });
//   } else {
//     // try {
//     const searchedProduct = Products.filter((product) => {
//       const result = product.product_title.toLowerCase();
//       return result.includes(title.toLowerCase());
//     });
//     return res.status(200).json({ message: "Ok", data: searchedProduct });
//     // } catch (error) {
//     //   console.log(error);
//     //   res.status(500).json({ error: "Internal server error" });
//     // }
//   }
// });

// // //Get Featured Products
// // app.get("/api/search", (req, res) => {
// //   const { title } = req.query;
// //   // const featuredProducts = products.filter(
// //   //   (product) => product.product_attributes.Features
// //   // );
// //   if (!featured || featured.trim()) {
// //     res.status(404).json({ message: "Title query parameter is required" });
// //   }
// //   const searchedProduct = products.find((product) => {
// //     product.product_attributes.Features.toLowerCase().includes(
// //       featured.toLowerCase()
// //     );

// //     const { feature, categories } = searchedProduct;
// //     if (!searchedProduct) {
// //       res.status(404).json({ message: "Product not found" });
// //     }

// //     const relatedFeaturedProduct = products.filter((r_product) => {
// //       r_product.offer.store_name === categories;
// //     });
// //   });
// //   res.status(200).json({ message: "Ok", data: featuredProducts });
// // });

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
