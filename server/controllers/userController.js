import validator from 'validator';
import userModel from "../models/userModels.js";

export const userRegister = async (req,res)=>{
 try{
    const {name,email, password}=req.body;
    if(!name){
        return res.json({success:false, message:"Name is required"});
    }
    if(!email){
        return res.json({success:false, message: "Email is required"});
    }
    if(!password){
        return res.json({success:false, message: "Password is required"});
    }
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

    // Register a new user
    const newUser = new userModel({
        name,
        email,
        password,
    });
      res.json({success:true, message:"User Register Succesful"})
// save user in database
 await newUser.save();

 }catch(error){
   console.log("user REgister Error",error);
   res.json({success:true, message:error?.message});

 }
}

export const userLogin = async (req, res)=>{

}

export const getUsers = async (req, res)=>{
    
}

export const updateUser = async (req, res)=>{
    
}

export const removeUser = async (req, res)=>{
    
}

export const adminLogin = async (req, res)=>{
    
}