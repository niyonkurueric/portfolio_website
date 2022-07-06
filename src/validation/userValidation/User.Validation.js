import { userSchema } from "./User.Schema";

export const userValidation = (req, res, next) => {
  const value = userSchema.validate(req.body);
  if (value.error) {
    res.status(400).json({
      error: 1,
      message: value.error.details[0].message,
    });
  } else {
    next();
  }
};
