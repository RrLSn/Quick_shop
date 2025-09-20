import express from "express";
import {
  addItemToCart,
  getItemsInCart,
  modifyQuatity,
  removeItemFrmCart,
} from "../controllers/cartController.js";

const router = express.Router();

router.route("/:userId/:itemId").delete(removeItemFrmCart);

router.route("/:userId").get(getItemsInCart);
router.route("/:userId/:itemId/:modification").post(modifyQuatity);

router.route("/").post(addItemToCart);

export default router;
