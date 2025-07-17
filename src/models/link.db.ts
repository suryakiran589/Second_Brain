import mongoose, { Schema ,model} from "mongoose";
import userModel from "./users.db";

const linkSchema = new Schema({
    userId:{type:mongoose.Types.ObjectId ,ref:"User"},
    hash:{
        type:String
    }
})

const linkModel = model("Link",linkSchema)
export default linkModel