import User from "../models/User";
export const userExist=async(email)=>{
    const user= await User.findOne({email:email})
 if(user){
    return user;
 }
 else{
    return false;
 }
}
export const newUserServices=async(userInfomation)=>{
   const userCreated = await User(userInfomation)
    userCreated.save()
    return userCreated

}