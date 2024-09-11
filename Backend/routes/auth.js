import express from "express";
import {
  registerUser,
  loginUser,
  sign_Out,
  forget_password,
} from "../controllers/usersController.js";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(sign_Out);
router.route("/forget_password").post(forget_password);

export default router;
