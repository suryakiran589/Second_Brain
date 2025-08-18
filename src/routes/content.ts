import express,{Request} from "express";
const router = express.Router()
import { content } from "../types/content.type";
import contentModel from "../models/content.db.js";
import userMiddleware from "../middlewares/userMiddleware.js";

router.post("/",userMiddleware,async (req:Request<{},{},content>,res)=>{
   try{

    const title = req.body.title
    const description =req.body.description
    const createdAt =req.body.createdAt
    const userId = req.userId
       const link = req.body.link
       //@ts-ignore
       const data= await contentModel.create<content>({
           title:title,
           link:link,
           userId:userId,
           description:description ,
           createdAt:createdAt
        })
        
        res.json({
            msg:"content added",
            userId
        })
    }catch(error){
        console.log(error)
    }
})

router.get("/",userMiddleware,async (req,res)=>{
    const userId = req.userId
    const data = await contentModel.find({userId:userId})
    res.json({result:data})
})

router.delete("/:id",userMiddleware,async (req,res)=>{
    const {id} = req.params
    await contentModel.deleteOne({_id:id})
    res.status(201).json({msg:"deletion successful"})
})

router.put("/:id",userMiddleware,async (req,res)=>{
    const {id} = req.params
    const title = req.body.title
    const link= req.body.link
    const description = req.body.description
    await contentModel.updateOne({_id:id},{$set:{title:title,link:link,description:description}})
    
})

export default router

