import validator from 'validator';
import userModel from "../models/userModels.js";

export const userRegistration = async (req,res)=>{
 try{
    const {name,email, password}=req.body;

    //Email validation
    if(!validator.isEmail(email)){
        return res.json({success:false, message:"Please enter a valid email"});
    };
    //Check user status
    const existingUser = await userModel.findOne({email});
    if(existingUser){
        return res.json({success:true, message:"User already exists"});
    };
    // Password validation
    if(password.length<8){
        return res.json({success:true, message:"Password length should be equal or greater than 8"})
    };


    //Hasing user password
 }catch{

 }
}