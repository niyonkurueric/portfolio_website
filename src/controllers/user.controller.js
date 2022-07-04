import { hashPassword } from "../helpers/passwordSecurity";
import { newUserServices, userExist } from "../services/userServices";

export class userController{
     static async register(req, res) {
        try {
            const existUser=await userExist(req.body.email);
       if(existUser)
       {
        res.status(400).send({message:"the user are exist"});
       }
       else{
        const userInfo={
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            password: await hashPassword(req.body.password)
        }
        const newUser=await newUserServices(userInfo);
        res.status(201).json({ status: 201, message: "user registered successfully", user: newUser })
       }
            
        } catch (error) {
            res.status(500).send({message:error});
            console.log(error)
        }
      
    }
}