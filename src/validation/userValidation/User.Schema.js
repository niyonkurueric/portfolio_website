import joi from "@hapi/joi";

export const userSchema = joi.object({
  firstname: joi.string().required(),
  lastname: joi.string().required(),
  email: joi.string().email().required(),
  password: joi
    .string()
    .pattern(
      new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)
    )
    .message(
      "Password must atleast have a special character ,a number and min character must be eight"
    )
    .required(),
});
