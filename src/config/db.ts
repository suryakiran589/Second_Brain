import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        const mongo_url:string = process.env.MONGO_URI || ""

        await mongoose.connect(mongo_url)
        console.log('success')
    }
    catch(error){
        console.log(error)
    }
}

export default connectDB