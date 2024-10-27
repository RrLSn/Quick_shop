import Users from "../modules/users_modules.js";
import {
  registerValidation,
  loginValidation,
} from "../validation/validation.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

//Create a user
export const registerUser = async (req, res) => {
  // validate user before creating
  const { error, value } = registerValidation(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({
      message: "Validation failed",
      details: error.details[0].message,
    });
  }

  //Checking if user email or phone is already on database
  const emailExist = await Users.findOne({ email: req.body.email });
  const phoneExist = await Users.findOne({ phone: req.body.phone });
  if (emailExist) {
    return res.status(400).json({ message: "Email already exist" });
  } else if (phoneExist) {
    return res.status(400).json({ message: "phone already exist" });
  }

  //Hash password

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //Create a new User
  const User = new Users({
    fullname: req.body.fullname,
    email: req.body.email,
    phone: req.body.phone,
    password: hashedPassword,
  });

  try {
    const user = await User.save(value);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

//Login a user
export const loginUser = async (req, res) => {
  const { error } = loginValidation(req.body, { abortEarly: false });
  if (error)
    return res.status(400).json({
      message: "Validation failed",
      details: error.details[0].message,
    });

  //checking if email exist
  const user = await Users.findOne({ email: req.body.email });
  if (!user)
    return res.status(400).json({ message: "Invalid email or password" });

  //checking if password is correct
  const isValidPassword = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!isValidPassword)
    return res.status(400).json({ message: "Invalid email or password" });

  //create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("auth_token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "None",
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.status(200).json({
    message: "Logged in Sucessfully!",
    token,
    fullname: user.fullname,
    phone: user.phone,
    email: user.email,
  });
};

//SignOut User
export const sign_Out = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Error destroying session" });
    }

    res.clearCookie("auth_token", {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });
    return res.status(200).json({ message: "Logged out successfuly!" });
  });
};

//Forget User password and generate OTP
export const forget_password = async (req, res) => {
  const { email } = req.body;

  try {
    //checking if email exist
    const user = await Users.findOne({ email: email });
    if (!user) return res.status(404).json({ message: "User not found" });

    //Generate a 6-digits OTP
    const OTP = Math.floor(1000 + Math.random() * 9000);

    //Create a JWT toke for OTP with 5min expiration
    const otpToken = jwt.sign({ OTP }, process.env.TOKEN_SECRET, {
      expiresIn: "5m",
    });

    //Save OTP in user record
    user.otpToken = otpToken;
    await user.save();

    //Sending verification code with Nodemailer
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.STORE_EMAIL,
        pass: process.env.STORE_PASS,
      },
    });

    var mailOptions = {
      from: process.env.STORE_EMAIL,
      to: `${email}`,
      subject: "QUICK SHOP PASSWORD RECOVERY...",
      html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Quick Shop - OTP EMAIL</title>
  </head>
  <body>
    <div>
    <p>PASSWORD RECOVERY VERIFICATION CODE: 
    <br/>
    <h1>${OTP}</h1>
    </p>
    </div>
  </body>
</html>
`,
    };

    //Send the email
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.status(500).json({ message: `Error sending mail to ${email}` });
      } else {
        res.status(200).json({
          message: `We sent you a mail to ${email} with your verification code`,
          otpToken,
        });
      }
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

//Generate and resend a new OTP
export const resendOtp = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await Users.findOne({ email: email });
    if (!user) return res.status(404).json({ message: "User not found" });

    //Genrate new OTP and replace the old one
    const newOTP = Math.floor(1000 + Math.random() * 9000);
    const newOtpToken = jwt.sign({ OTP: newOTP }, process.env.TOKEN_SECRET, {
      expiresIn: "5m",
    });

    //Overwrite the old OTP n the user's record
    user.otpToken = newOtpToken;

    //Save the user
    await user.save();

    //Sending verification code with Nodemailer
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.STORE_EMAIL,
        pass: process.env.STORE_PASS,
      },
    });

    var mailOptions = {
      from: process.env.STORE_EMAIL,
      to: `${email}`,
      subject: "QUICK SHOP PASSWORD RECOVERY...",
      html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Quick Shop - OTP EMAIL</title>
  </head>
  <body>
    <div>
    <p>PASSWORD RECOVERY VERIFICATION CODE: 
    <br/>
    <h1>${newOTP}</h1>
    </p>
    </div>
  </body>
</html>
`,
    };

    //Send the email
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.status(500).json({ message: `Error sending mail to ${email}` });
      } else {
        res.status(200).json({
          message: `New OTP sent!`,
          otpToken: newOtpToken,
        });
      }
    });
  } catch (error) {
    res.status(500).json({ message: `Error resending OTP` });
  }
};

//Verified the latest generated OTP
export const verifyOTP = async (req, res) => {
  const { OTP, otpToken, email } = req.body;

  try {
    const user = await Users.findOne({ email: email });
    if (!user) return res.status(404).json({ message: "User not found" });

    //Verify the latest OTP token
    const decode = jwt.verify(otpToken, process.env.TOKEN_SECRET);

    if (decode.OTP === OTP) {
      //OTP is valid, genrate a reset token
      const resetToken = jwt.sign(
        { email: user.email },
        process.env.TOKEN_SECRET,
        { expiresIn: "10m" }
      );
      return res
        .status(200)
        .json({ resetToken, message: "OTP verified Successfully!" });
    } else {
      return res.status(400).json({ message: "Invalid OTP!" });
    }
  } catch (error) {
    return res.status(400).json({ message: "OTP has expired or invalid" });
  }
};

//Reset user password
export const resetPassword = async (req, res) => {
  const { resetToken, currentPassword, newPassword } = req.body;

  try {
    let user;
    if (req.user) {
      //Case 1: Authenticated user
      user = await Users.findById(req.user._id);

      //Check if the current password matches
      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch)
        return res
          .status(400)
          .json({ message: "Current password is incorrect" });
    } else if (resetToken) {
      //Case 2:Unauthenticated user, verify resetToken
      const decode = jwt.verify(resetToken, process.env.TOKEN_SECRET);

      if (!decode || !decode.email) {
        return res.status(404).json({ message: "Invalid token" });
      }
      // find user by the decoded email
      user = await Users.findOne({ email: decode.email });
    } else
      return res
        .status(404)
        .json({ message: "neither authencated user nor reset token found" });

    if (!user) return res.status(400).json({ message: "User not found" });

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;
    await user.save();
    res
      .status(200)
      .json({ message: "Password reset successfully, proceed to login" });
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token has expired" });
    }
    return res.status(400).json({ message: "Invalid request" });
  }
};
