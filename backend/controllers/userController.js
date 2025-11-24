import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import validator from 'validator';

//login user

const loginUser=async(req,res)=>{

}

//register user
const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}


const registerUser=async(req,res)=>{
    const {name,password,email}=req.body;
    try {
        const exits= await userModel.findOne({email});
        if(exits){
            return res.json({success:false,message:"user already exits"})
        }
        //validating email format & strong password

        if(!validator.isEmail(email)){
                        return res.json({success:false,message:"please enter valid email"})


        }
        if(password.length <8){
            return res.json({success:false,message:"please enter a strong password"})
        }
        //hashing user password
        const salt= await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt);
        const newUser=new userModel({
            name:name,
            email:email,
            password:hashedPassword

        })
       const user= await newUser.save();
    const token=createToken(user._id)
    res.json({success:true,token})


        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
        
    }

}

export {loginUser,registerUser}