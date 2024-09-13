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

export const sign_Out = async (req, res) => {
  res.clearCookie("auth_token", {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });
  return res.status(200).json({ message: "Logged out successfuly!" });
};

export const forget_password = async (req, res) => {
  try {
    const { email } = req.body;
    //checking if email exist
    const user = await Users.findOne({ email: email });
    if (!user) return res.status(404).json({ message: "User not found" });

    //create and assign a token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
      expiresIn: "1h",
    });

    const resetLink = `https://quickshop-omega.vercel.app/auth/resetPassword/${token}`;

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "afo.sodiq022@gmail.com",
        pass: "thylfhhrbtfpnfai",
      },
    });

    var mailOptions = {
      from: "afo.sodiq022@gmail.com",
      to: `${email}`,
      subject: "Reset Your Password",
      text: `Click the link to reset your password: ${resetLink}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.status(500).json({ message: `Error sending mail to ${email}` });
      } else {
        res.status(200).json({ message: `We sent you a mail to ${email}` });
      }
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    const decode = jwt.verify(token, process.env.TOKEN_SECRET);
    const id = decode._id;
    const user = await Users.findById({ _id: id });

    if (!decode) return res.status(404).json({ message: "Invalid token" });

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
