import express from "express";
import {
  registerUser,
  loginUser,
  loggedInUser,
} from "../controllers/usersController.js";
import Users from "../modules/users_modules.js";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.get("/user").get(loggedInUser, async (req, res) => {
  const user = await Users.findById(req.user._id).select();
});

export default router;
