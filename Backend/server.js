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

// Get all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Post product
app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get a product
app.get("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const searchedProduct = await Product.findById(id);
    res.status(200).json(searchedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update product
app.put("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      res.status(404).json({ message: "Product not Found" });
      const updatesProduct = await Product.findById(id);
      res.status(200).json(updatesProduct);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Delete product
app.delete("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res.status(404).json({ message: "Product not Found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

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
