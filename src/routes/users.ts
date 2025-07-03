import express from "express"
const router = express.Router()
import userModel from "../models/users"

router.get("/",(req,res) => {
    res.send("users")
})

export default router