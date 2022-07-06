import bcrypt from "bcrypt";

const salt = bcrypt.genSaltSync(10, "b");

export const hashPassword = (plainPassword) => {
  const hash = bcrypt.hashSync(plainPassword, salt);
  return hash;
};
