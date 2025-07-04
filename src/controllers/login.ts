import {Request,Response} from "express"
import userModel from "../models/users.js"

export const loginHandler =async (req:Request,res:Response)=>{
    try{

        const {name} = req.body
        const user= await userModel.findOne({name:name})
        if(!user){
           res.status(404).send({"message" : "user not found"})
           return ;
        }
        res.status(200).send("login successful")
        return ;
    }catch(error){
         res.status(500).send("internal server error")
         return ;
    }
}

