import express from "express";
import { userValidation } from "../../validation/userValidation/User.Validation";
import { userController } from "../../controllers/user.controller";

const userRoute = express.Router();
userRoute.post("/", userValidation, userController.Signup);
export default userRoute;
