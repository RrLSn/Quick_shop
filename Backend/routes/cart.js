import express from "express";
import {
  addItemToCart,
  getItemsInCart,
  removerItemFrmCart,
} from "../controllers/cartController.js";

const router = express.Router();

router.route("/:userId/:itemId").delete(removerItemFrmCart);

router.route("/:userId").get(getItemsInCart);

router.route("/").post(addItemToCart);

export default router;
