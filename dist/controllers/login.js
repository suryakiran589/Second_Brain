import userModel from "../models/users.db.js";
import jwt from 'jsonwebtoken';
import { JSON_PASSWORD } from "../utils/constants.js";
export const loginHandler = async (req, res) => {
    try {
        const { email } = req.body;
        // const {password} =req.body
        const user = await userModel.findOne({ email: email });
        if (!user) {
            res.status(404).json({ "message": "user not found" });
            return;
        }
        //          const isMatch = await bcrypt.compare(password, user.password);
        //   if (!isMatch) {
        //     return res.json({ success: false, message: "Password incorrect" });
        //   }
        const token = jwt.sign({ id: user._id }, JSON_PASSWORD);
        res.status(200).json({ token, user });
        return;
    }
    catch (error) {
        res.status(500).json({ msg: "failed" });
        return;
    }
};
