import Users from "../modules/users_modules.js";
import Joi from "joi";

//Validation

const Schema = Joi.object({
  fullname: Joi.string().min(6).required(),
  email: Joi.string()
    .max(255)
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  phone: Joi.string()
    .pattern(new RegExp("^\\+?[0-9]{3,30}$"))
    .min(8)
    .required(),
  password: Joi.string()
    .pattern(
      new RegExp("^[a-zA-Z0-9!@#$%^&*()_+\\-=\\[\\]{};'\":,.<>?\\/|`~]{3,30}$")
    )
    .min(5)
    .required(),
});

//Create a user
export const registerUser = async (req, res) => {
  // validate user before creating
  const { error, value } = Schema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({
      message: "Validation failed",
      details: error.details.map((err) => err.message),
    });
  }
  try {
    const user = await Users.create(value);
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
