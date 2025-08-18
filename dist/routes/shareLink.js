import express from "express";
import userMiddleware from "../middlewares/userMiddleware.js";
import linkModel from "../models/link.db.js";
import userModel from "../models/users.db.js";
import contentModel from "../models/content.db.js";
import { random } from "../utils/random.js";
const router = express.Router();
router.post("/brain/share", userMiddleware, async (req, res) => {
    const share = req.body.share;
    if (share) {
        const existingLink = await linkModel.findOne({
            //@ts-ignore
            userId: req.userId
        });
        if (existingLink) {
            res.json({
                hash: existingLink.hash
            });
            return;
        }
        const hash = random();
        await linkModel.create({
            //@ts-ignore
            userId: req.userId,
            hash: hash
        });
        res.json({
            hash
        });
    }
    else {
        await linkModel.deleteOne({
            //@ts-ignore
            userId: req.userId
        });
        res.json({
            message: "Removed link"
        });
    }
});
router.get("/brain/:shareLink", async (req, res) => {
    const hash = req.params.shareLink;
    const link = await linkModel.findOne({
        hash
    });
    if (!link) {
        res.status(411).json({
            message: "Sorry incorrect input"
        });
        return;
    }
    // userId
    const content = await contentModel.find({
        userId: link.userId
    });
    console.log(link);
    const user = await userModel.findOne({
        _id: link.userId
    });
    if (!user) {
        res.status(411).json({
            message: "user not found, error should ideally not happen"
        });
        return;
    }
    res.json({
        username: user.username,
        content: content
    });
});
export default router;
