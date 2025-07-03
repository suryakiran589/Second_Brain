import mongoose,{Schema}  from "mongoose";

const UserSchema = new Schema ({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,

    }
},
{
    timestamps:true
}
)

const userModel = mongoose.model('User',UserSchema)
export default userModel;