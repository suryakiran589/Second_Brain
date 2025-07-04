import mongoose, { Schema,Document,Model } from "mongoose";


export interface IUser extends Document {
    name:string,
    email:string,
    age?:number
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
