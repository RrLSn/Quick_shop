import Users from "../modules/users_modules.js";
import { registerValidation, loginValidation } from "../Validation.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

  //Checking if user is already on database
  const emailExist = await Users.findOne({ email: req.body.email });
  if (emailExist) {
    return res.status(400).json({ message: "Email already exist" });
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
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

  res.header("auth_token", token);
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "Strict",
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.status(200).json({ message: "Logged in Sucessfully!" });
};
