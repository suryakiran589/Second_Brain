import express,{Request,Response} from "express"
const router = express.Router()
import userModel from "../models/users.db.js"
import { User } from "../types/user.type..js" 


// router.get("/",async (req:Request,res:Response) => {
//   const users = await userModel.find()
//   res.json(users)
// })

router.post("/",async (req:Request<{},{},User>,res:Response) => {
  // console.log(req.body)
  const name = req.body.name
  const email= req.body.email
  const username= req.body.username
  const password =req.body.password
  const user =  await userModel.create<User>({name:name,
    email:email,
    username:username,
    password:password,
  });
  console.log(user)
  res.json(req.body)
})

router.put("/",async (req:Request,res:Response) =>{
  
} )

export default router