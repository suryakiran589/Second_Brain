import express,{Request,Response} from "express";
import connectDB from "./config/db.js"
import signUpRouter from "./routes/signUp.js"
import signInRouter from "./routes/signIn.js"
import contentRouter from "./routes/content.js"
import linkRouter from "./routes/shareLink.js"
import cors from "cors"
const app = express()   
app.use(cors({
  origin: "http://localhost:3000",
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

await connectDB()

app.use("/api/v1/signup",signUpRouter)
app.use("/api/v1/signin",signInRouter)
app.use("/api/v1/content",contentRouter)
app.use("/api/v1/",linkRouter)

app.get("/api/v1/",(req,res)=>{
    res.json({"msg":"success"})
})
app.listen(3000,() =>{
    console.log("server running at port 3000")
})  
