import express,{Request,Response} from "express";
import connectDB from "./config/db.js"
import userRouter from "./routes/users.js"

const app = express()
app.use(express.json());


await connectDB()

app.use("/api/v1/users",userRouter)
app.get('/api/v1/',(req:Request,res:Response) =>{
    res.send("response")
})

app.post('/api/v1/',(req,res)=>{
    // console.log(req.body)
    res.json(req.body)
})

app.listen(3000,() =>{
    console.log("server running at port 3000")

})
