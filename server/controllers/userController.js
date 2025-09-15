import validator from 'validator';
import userModel from "../models/userModels.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const createToken = (user)=>{
    return jwt.sign({
        _id: user._id,
        name:user.name,
        email:user.email 
    }, process.env.JWT_SECRET,{expiresIn:"2h"}) 
}


import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const createToken = (user)=>{
    return jwt.sign({
        _id: user._id,
        name:user.name,
        email:user.email 
    }, process.env.JWT_SECRET,{expiresIn:"2h"}) 
}



export const userRegister = async (req,res)=>{
 try{
     const { name, email, password } = req.body;

    // Validation
    if (!name) return res.json({ success: false, message: "Name is required" });
    if (!email) return res.json({ success: false, message: "Email is required" });
    if (!password) return res.json({ success: false, message: "Password is required" });

    // Email validation
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter a valid email" });
    }

    // Check if user exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    // Password length validation
    if (password.length < 8) {
      return res.json({ success: false, message: "Password must be at least 8 characters long" });
    }
     const { name, email, password } = req.body;

    // Validation
    if (!name) return res.json({ success: false, message: "Name is required" });
    if (!email) return res.json({ success: false, message: "Email is required" });
    if (!password) return res.json({ success: false, message: "Password is required" });

    // Email validation
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter a valid email" });
    }

    // Check if user exists
    const existingUser = await userModel.findOne({ email});
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    // Password length validation
    if (password.length < 8) {
      return res.json({ success: false, message: "Password must be at least 8 characters long" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save new user
    // Save new user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword   // ✅ Save in correct field
      name,
      email,
      password: hashedPassword   // ✅ Save in correct field
    });

    await newUser.save();

    res.json({ success: true, message: "User registered successfully" });


    await newUser.save();

    res.json({ success: true, message: "User registered successfully" });


 }catch(error){
   console.log("user Register Error",error);
   res.json({success:true, message:error?.message});

 }
}

export const userLogin = async (req, res)=>{
 try{
    const {email, password}= req.body;

    if (!email) {
        return res.json({ success: false, message: "Email is required"});
    }
    if (!password) {
        return res.json({ success: false, message: "Password is required"});
    }
    // user existing
    const existingUser = await userModel.findOne({email});

    if(!existingUser){
        return res.json({success:false, message:"User not found"});
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);
     
    if(isMatch){
        const token = createToken(existingUser);
        return res.json({success:true, message:"user password matched",token});
    } else{
        return res.json({success:false, message:"Invalid credientals, try again"});
    }
    
 } catch(error){
   console.log("user REgister Error",error);
   res.json({success:true, message:error?.message});

 }
 try{
    const {email, password}= req.body;

    if (!email) {
        return res.json({ success: false, message: "Email is required"});
    }
    if (!password) {
        return res.json({ success: false, message: "Password is required"});
    }
    // user existing
    const existingUser = await userModel.findOne({email});

    if(!existingUser){
        return res.json({success:false, message:"User not found"});
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);
     
    if(isMatch){
        const token = createToken(existingUser);
        return res.json({success:true, message:"user password matched",token});
    } else{
        return res.json({success:false, message:"Invalid credientals, try again"});
    }
    
 } catch(error){
   console.log("user REgister Error",error);
   res.json({success:true, message:error?.message});

 }
}

export const getUsers = async (req, res)=>{
    try{
      const total = await userModel.countDocuments({});
      const users = await userModel.find({})

   
    res.json({success:true, message:"All users get successfully", total, users});

  }catch(error){
   console.log("All users Error",error);
   res.json({success:true, message:error?.message});

 }
    try{
      const total = await userModel.countDocuments({});
      const users = await userModel.find({})

   
    res.json({success:true, message:"All users get successfully", total, users});

  }catch(error){
   console.log("All users Error",error);
   res.json({success:true, message:error?.message});

 }
}

export const updateUser = async (req, res)=>{
  try{
     const { _id, name, email, password } = req.body;

    const user = await userModel.findById(_id);
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    // name update
    if (name) {
      user.name = name;
    }

    // email update
    if (email) {
      if (!validator.isEmail(email)) {
        return res.json({
          success: false,
          message: "Please enter a valid email address",
        });
      }
      user.email = email;
    }

    // password update
    if (password) {
      if (password.length < 8) {
        return res.json({
          success: false,
          message: "Password length should be at least 8 characters",
        });
      }
      user.password = await bcrypt.hash(password, 10);
    }

    // save updates
    await user.save();

    return res.json({
      success: true,
      message: "User updated successfully",
    });
  } catch (error) {
    console.error("Update user error:", error);
    return res.json({
      success: false,
      message: error?.message || "Something went wrong",
    });
  }
  try{
     const { _id, name, email, password } = req.body;

    const user = await userModel.findById(_id);
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    // name update
    if (name) {
      user.name = name;
    }

    // email update
    if (email) {
      if (!validator.isEmail(email)) {
        return res.json({
          success: false,
          message: "Please enter a valid email address",
        });
      }
      user.email = email;
    }

    // password update
    if (password) {
      if (password.length < 8) {
        return res.json({
          success: false,
          message: "Password length should be at least 8 characters",
        });
      }
      user.password = await bcrypt.hash(password, 10);
    }

    // save updates
    await user.save();

    return res.json({
      success: true,
      message: "User updated successfully",
    });
  } catch (error) {
    console.error("Update user error:", error);
    return res.json({
      success: false,
      message: error?.message || "Something went wrong",
    });
  }
}

export const removeUser = async (req, res)=>{
  try{
    await userModel.findByIdAndDelete(req.body._id);
    res.json({success:true, message:"User deleted successfully"})

  }catch(error){
   console.log("admin login Error",error);
   res.json({success:true, message:error?.message});

 }
  try{
    await userModel.findByIdAndDelete(req.body._id);
    res.json({success:true, message:"User deleted successfully"})

  }catch(error){
   console.log("admin login Error",error);
   res.json({success:true, message:error?.message});

 }
    
}

export const adminLogin = async (req, res)=>{
  try{
    const {email, password}= req.body;

    if(email===process.env.ADMIN_EMAIL && 
      password===process.env.ADMIN_PASSWORD)
      {
        const token = jwt.sign(email + password, process.env.JWT_SECRET);
        res.json({success:true, message:"Admin Login successfull", token});
    }else{
      res.json({success:false, message:"Invalid credentials"})
    }


  }catch(error){
   console.log("admin login Error",error);
   res.json({success:true, message:error?.message});

 }
  try{
    const {email, password}= req.body;

    if(email===process.env.ADMIN_EMAIL && 
      password===process.env.ADMIN_PASSWORD)
      {
        const token = jwt.sign(email + password, process.env.JWT_SECRET);
        res.json({success:true, message:"Admin Login successfully", token});
    }else{
      res.json({success:false, message:"Invalid credentials"})
    }


  }catch(error){
   console.log("admin login Error",error);
   res.json({success:true, message:error?.message});

 }
    
}