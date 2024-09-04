import express from "express";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  // searchProduct,
} from "../controllers/productsController.js";
// import Product from "../modules/product_module.js";

const router = express.Router();

router.route("/").get(getProducts).post(createProduct);
// router.route("/search").get(searchProduct);
router.route("/:id").get(getProduct).delete(deleteProduct).put(updateProduct);

export default router;
