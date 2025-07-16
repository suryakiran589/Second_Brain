import express,{Request} from "express";
const router = express.Router()
import { content } from "../types/content.type";
import contentModel from "../models/content.db.js";
import userMiddleware from "../middlewares/userMiddleware.js";

router.post("/",userMiddleware,async (req:Request<{},{},content>,res)=>{
    const title = req.body.title
    const link = req.body.link
    const userId = req.body.userId
    await contentModel.create<content>({
        title:title,
        link:link,
        //@ts-ignore
        userId:req.userId
    })
    res.json({
        msg:"content added"
    })
})

export default router

