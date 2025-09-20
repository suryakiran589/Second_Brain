import mongoose, { Schema } from "mongoose";
import { ref } from "process";
import userModel from "./users.db";


const contentSchema = new Schema({
    title:{
        type:String
    },
    link:String,
    description:{
        type:String},
    category:String,
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    // tags:[{type:mongoose.Types.ObjectId,ref:Tag}],
    userId:{type:mongoose.Types.ObjectId,ref:"User"}   
})

const contentModel = mongoose.model("Content",contentSchema)
export default contentModel