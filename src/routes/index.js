import express from "express";
import welcomeRoute from './api/welcome'
import userRoute from "./api/User";
const routes = express.Router()
routes.use('/', welcomeRoute)
routes.use('/register',userRoute)
export default routes