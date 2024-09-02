import express from "express";
import {
  registerUser,
  loginUser,
  //   loggedInUser,
} from "../controllers/usersController.js";
// import Users from "../modules/users_modules.js";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
// router.get("/user", loggedInUser, async (req, res) => {
//   try {
//     const user = await Users.findById(req.user._id).select("-password");
//     if (!user) return res.status(404).json({ message: "User not found" });

//     res.json({
//       fullname: user.fullname,
//       email: user.email,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

export default router;
