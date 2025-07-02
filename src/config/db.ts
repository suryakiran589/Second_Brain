import mongoose from "mongoose";

const connectDB = async () =>{
    try{

        await mongoose.connect('mongodb://127.0.0.1:27017/Second-brain')
        console.log('success')
    }
    catch(error){
        console.log(error)
    }
}

export default connectDB