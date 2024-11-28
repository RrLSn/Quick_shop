import express from "express";
import {
  addItemToCart,
  getItemsInCart,
  removerItemFrmCart,
} from "../controllers/cartController.js";

const router = express.Router();

router.route("/cart/:userId/:itemId").delete(removerItemFrmCart);

router.route("/cart/:userId").get(getItemsInCart);

router.route("/").post(addItemToCart);

export default router;
