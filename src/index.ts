import express,{Request,Response} from "express";
import connectDB from "./config/db"
import mongoose from "mongoose";

const app = express()
app.use(express.json());


await mongoose.connect('mongodb://127.0.0.1:27017/Second-brain')
  .then(() => console.log('Connected!'));

app.get('/',(req:Request,res:Response) =>{
    res.json({name:"sury"})
})

app.listen(3000,() =>{
    console.log("server running at port 3000")

})
