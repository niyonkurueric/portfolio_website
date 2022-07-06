import express from "express";
import { welcome } from "../../controllers/welcome";

const route = express.Router();

route.get("/", welcome);

export default route;
