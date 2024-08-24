import express from "express";
import {
  registerUser,
  loginUser,
  getUsers,
} from "../controllers/usersController.js";

const router = express.Router();

router.route("/register").post(registerUser).get(getUsers);
router.route("/login").post(loginUser);

export default router;
