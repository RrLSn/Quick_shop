import Joi from "joi";

//Validation
export const registerValidation = (data) => {
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
        new RegExp(
          "^[a-zA-Z0-9!@#$%^&*()_+\\-=\\[\\]{};'\":,.<>?\\/|`~]{3,30}$"
        )
      )
      .min(5)
      .required(),
  });
  return Schema.validate(data);
};

export const passwordValidation = (data) => {
  const Schema = Joi.object({
    newPassword: Joi.string()
      .pattern(
        new RegExp(
          "^[a-zA-Z0-9!@#$%^&*()_+\\-=\\[\\]{};'\":,.<>?\\/|`~]{5,30}$"
        )
      )
      .min(3)
      .required(),
  });
  return Schema.validate(data, { abortEarly: false });
};

export const updateUserValidation = (data) => {
  const Schema = Joi.object({
    fullname: Joi.string().min(6).optional(),
    email: Joi.string()
      .max(255)
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .optional(),
    phone: Joi.string().pattern(new RegExp("^\\+?[0-9]{3,30}$")).optional(),
  });
  return Schema.validate(data, { abortEarly: false });
};
