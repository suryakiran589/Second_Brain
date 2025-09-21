import mongoose, { Document, Schema,Types } from "mongoose";


export interface IBrain extends Document {
  title: string;
  description: string;
  link?: string;
  category?: string;
  shareLink: string;
  createdAt: Date;
  userId: Types.ObjectId;
}


const contentSchema = new Schema<IBrain>({
  title: { type: String, required: true },
  link: { type: String },
  description: { type: String },
  category: { type: String },
  shareLink: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now }, // <-- no parentheses
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

// Create the model
const contentModel = mongoose.model<IBrain>("Content", contentSchema);

export default contentModel;
