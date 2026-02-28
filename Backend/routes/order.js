import express from "express";
import { placeOrder } from "../controllers/OrderController.js";

const router = express.Router();

router.route("/:userId").post(placeOrder);

export default router;
