import mongoose, { Schema,Document,Model } from "mongoose";
// import { LoginUser } from "../controllers/login.js";
import { User } from "../types/user.type.js";

export interface IUser extends User,Document {
    
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username:{
      type:String,
      required:true,
      unique:true
    },
    password:{
      type:String,
      required:true
    },
    age: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const userModel= mongoose.model<IUser>("User", UserSchema);
export default userModel;
