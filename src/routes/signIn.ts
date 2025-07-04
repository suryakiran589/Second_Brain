import express,{Request,Response} from "express"
import {loginHandler} from "../controllers/login.js"
const router = express.Router()



router.post("/",loginHandler)

export default router

