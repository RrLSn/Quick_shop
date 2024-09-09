import express from "express";
import {
  registerUser,
  loginUser,
  sign_Out,
} from "../controllers/usersController.js";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(sign_Out);

export default router;
