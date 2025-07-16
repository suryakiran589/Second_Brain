import {Request,Response} from "express"
import userModel from "../models/users.db.js"
import {User} from "../types/user.type..js"
import jwt from 'jsonwebtoken';


export interface LoginUser extends User{
    
}
const JSON_PASSWORD ="12345"

export const loginHandler =async (req:Request<{},{},LoginUser>,res:Response)=>{
    try{

        const {username,password} = req.body
        const user= await userModel.findOne({username:username})
        if(!user){
           res.status(404).send({"message" : "user not found"})
           return ;
        }
        
        const token = jwt.sign({id:user._id},JSON_PASSWORD)
        res.status(200).json({token})
        return ;
    }catch(error){
         res.status(500).send("internal server error")
         return ;
    }
}

