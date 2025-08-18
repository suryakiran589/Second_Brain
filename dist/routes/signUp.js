// import bcrypt from "bcrypt";
import express from "express";
const router = express.Router();
import userModel from "../models/users.db.js";
// router.get("/",async (req:Request,res:Response) => {
//   const users = await userModel.find()
//   res.json(users)
// })
router.post("/", async (req, res) => {
    // console.log(req.body)
    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const saltRounds = 10; // security level
    try {
        // const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = await userModel.create({ name: name,
            email: email,
            username: username,
            password: password,
        });
        // console.log(user)
        res.status(200);
    }
    catch {
        res.status(500).json({ success: false });
    }
});
router.put("/", async (req, res) => {
});
export default router;
