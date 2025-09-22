import mongoose, { Schema } from "mongoose";
const contentSchema = new Schema({
    title: { type: String, required: true },
    link: { type: String },
    description: { type: String },
    category: { type: String },
    shareLink: { type: String, default: "" },
    createdAt: { type: Date, default: Date.now }, // <-- no parentheses
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});
// Create the model
const contentModel = mongoose.model("Content", contentSchema);
export default contentModel;
