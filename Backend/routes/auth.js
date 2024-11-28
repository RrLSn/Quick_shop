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
  userDeliveryInfo,
  // googleUserAuth,
} from "../controllers/usersController.js";
// import passport from "passport";

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
router.route("/userDeliveryInfo").put(isAuthenticated, userDeliveryInfo);
router.route("/google/callback");
// .get(passport.authenticate("google", { session: false }), googleUserAuth);

export default router;
