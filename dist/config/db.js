import mongoose from "mongoose";
const connectDB = async () => {
    try {
        const mongo_url = process.env.MONGO_URI;
        if (!mongo_url) {
            throw new Error("MONGO_URI is not defined in environment variables");
        }
        await mongoose.connect(mongo_url);
        console.log('success');
    }
    catch (error) {
        console.log(error);
    }
};
export default connectDB;
