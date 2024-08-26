import Users from "../modules/users_modules.js";
import { registerValidation } from "../Validation.js";
import bcrypt from "bcryptjs";

//Create a user
export const registerUser = async (req, res) => {
  // validate user before creating
  const { error, value } = registerValidation(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({
      message: "Validation failed",
      details: error.details.map((err) => err.message),
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

// GET a User
export const getUsers = async (req, res) => {
  try {
    const user = await Users.find({});
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

//Login a use
export const loginUser = async (req, res) => {
  res.send("Logged In");
};
