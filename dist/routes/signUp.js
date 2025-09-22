import bcrypt from "bcrypt";
import express from "express";
const router = express.Router();
import userModel from "../models/users.db.js";
import jwt from 'jsonwebtoken';
import { JSON_PASSWORD } from "../utils/constants.js";
// router.get("/",async (req:Request,res:Response) => {
//   const users = await userModel.find()
//   res.json(users)
// })
router.post("/", async (req, res) => {
    // console.log(req.body)
    try {
        const name = req.body.name;
        const email = req.body.email;
        const username = req.body.username;
        const password = req.body.password;
        const saltRounds = 10; // security level
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = await userModel.create({ name: name,
            email: email,
            username: username,
            password: hashedPassword,
        });
        const token = jwt.sign({ id: user._id }, JSON_PASSWORD);
        res.status(200).json({ msg: "user created successfully", token });
    }
    catch (error) {
        res.status(500).json(error);
    }
});
router.put("/", async (req, res) => {
});
export default router;
