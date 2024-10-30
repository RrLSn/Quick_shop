import express from "express";
import {
  registerUser,
  loginUser,
  sign_Out,
  forget_password,
  resetPassword,
  resendOtp,
  verifyOTP,
  updatePasssword,
  isAuthenticated,
  updateUserInfo,
} from "../controllers/usersController.js";

const router = express.Router();

router.route("/logout").get(sign_Out);

router.route("/resetPassword").post(resetPassword);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/forget_password").post(forget_password);
router.route("/resend_otp").post(resendOtp);
router.route("/verify_otp").post(verifyOTP);
router.route("/updatePassword").put(isAuthenticated, updatePasssword);
router.route("/updateUserInfo").put(isAuthenticated, updateUserInfo);

export default router;
