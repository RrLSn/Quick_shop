import express from "express";
const router = express.Router();
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productsController.js";

router.get("/", getProducts);
router.get("/:id", getProduct);
router.get("/", createProduct);
router.get("/:id", deleteProduct);
router.get("/:id", updateProduct);

export default router;
