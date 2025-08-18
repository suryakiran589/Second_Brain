import mongoose, { Schema, model } from "mongoose";
const linkSchema = new Schema({
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    hash: {
        type: String
    }
});
const linkModel = model("Link", linkSchema);
export default linkModel;
