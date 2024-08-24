import express from "express";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productsController.js";

const router = express.Router();

router.route("/").get(getProducts).post(createProduct);
router.route("/:id").get(getProduct).delete(deleteProduct).put(updateProduct);

export default router;
