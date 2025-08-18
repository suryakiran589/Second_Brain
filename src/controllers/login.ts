import bcrypt from "bcrypt"
import {Request,Response} from "express"
import userModel from "../models/users.db.js"
import {User} from "../types/user.type.js"
import jwt from 'jsonwebtoken';
import { JSON_PASSWORD } from "../utils/constants.js";

export interface LoginUser extends User{
    
}


export const loginHandler =async (req:Request,res:Response)=>{
    try{

        const {email} = req.body
        const {password} =req.body
        const user= await userModel.findOne({email:email})
        if(!user){
          res.status(404).json({"message" : "user not found"});
          return
        }
         const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
     res.status(401).json({ success: false, message: "incorrect Password " });
     return
  }
    const token = jwt.sign({id:user._id},JSON_PASSWORD)
        res.status(200).json({token,user})
        return
    }catch(error){
          res.status(500).json({msg:"failed"})
          return
    }
}

