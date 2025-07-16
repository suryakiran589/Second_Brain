import {Request,Response} from "express"
import userModel from "../models/users.db.js"
import {User} from "../types/user.type..js"
import jwt from 'jsonwebtoken';
import { JSON_PASSWORD } from "../utils/constants.js";

export interface LoginUser extends User{
    
}


export const loginHandler =async (req:Request<{},{},LoginUser>,res:Response)=>{
    try{

        const {username} = req.body
        const user= await userModel.findOne({username:username})
        if(!user){
           res.status(404).send({"message" : "user not found"})
           return ;
        }
        
        const token = jwt.sign({id:user._id},JSON_PASSWORD)
        res.status(200).json({token})
        return ;
    }catch(error){
         res.status(500).send(error)
         return ;
    }
}

