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

export const registerUser = async (req, res) => {
  // validate user before creating
  const body = req.body;
  const validaion = Schema.validate({ body });
  res.send(validaion);
  //   try {
  //     const user = await Users.create(req.body);
  //     res.status(200).json(user);
  //   } catch (error) {
  //     res.status(400).json({ message: error });
  //   }
};

export const getUsers = async (req, res) => {
  try {
    const user = await Users.find({});
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (req, res) => {
  res.send("Logged In");
};
