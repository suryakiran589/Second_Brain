import express,{Request,Response} from "express"
const router = express.Router()
import userModel, { IUser } from "../models/users.js"

export type User ={
    name:string,
    email:string,
    age?:number
}


router.get("/",async (req:Request,res:Response) => {
  const users = await userModel.find()

  res.json(users)
})

router.post("/",async (req:Request,res:Response) => {
  const user =  await userModel.create<User>(req.body);

  res.json(user)
})

router.put("/",async (req:Request,res:Response) =>{
  
} )

export default router