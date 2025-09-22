import express,{Request} from "express";
const router = express.Router()
import crypto from "crypto";
import { content } from "../types/content.type.js";
import contentModel from "../models/content.db.js";
import userMiddleware from "../middlewares/userMiddleware.js";

router.post("/",userMiddleware,async (req:Request<{},{},content>,res)=>{
   try{

    const title = req.body.title
    const description =req.body.description
    const createdAt =req.body.createdAt
    const category = req.body.category
    
    const userId = req.userId
       const link = req.body.link
       //@ts-ignore
       const data= await contentModel.create<content>({
           title:title,
           link:link,
           userId:userId,
           description:description ,
           category:category,
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

router.get("/brains/:id",async (req,res) =>{
    const {id} = req.params
    const data= await contentModel.findOne({_id:id})

    res.json({data})
})
router.post("/brain/share",userMiddleware, async (req:any, res:any) => {
  const { share,id } = req.body;
  
  const brain = await contentModel.findOne({_id:id});

  if (!brain) return res.status(404).send("Brain not found");

  if (share) {
    //@ts-ignore
    brain.shareLink =  crypto.randomBytes(6).toString("hex") 
  } else {
    //@ts-ignore
    brain.shareLink = "";
  }
  //@ts-ignore
  await brain.save();
  //@ts-ignore
  res.send({ hash: brain.shareLink });
});

router.get("/brain/public/:hash", async (req:any, res:any) => {
  const { hash } = req.params;
  const brain = await contentModel.findOne({ shareLink: hash });

  if (!brain) return res.status(404).send("Brain not found");

  // Send only public info
  res.send({
    title: brain.title,
    description: brain.description,
    link: brain.link,
    category: brain.category,
  });
});

export default router

