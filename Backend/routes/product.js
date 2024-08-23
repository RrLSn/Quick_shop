import express from "express";
const router = express.Router();
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productsController.js";

// router.get("/", getProducts);
// router.get("/:id", getProduct);
// router.post("/", createProduct);
// router.delete("/:id", deleteProduct);
// router.put("/:id", updateProduct);

router.route("/").get(getProducts).post(createProduct);
router.route("/:id").get(getProduct).delete(deleteProduct).put(updateProduct);

export default router;
