import express,{Request,Response} from "express";
import connectDB from "./config/db.js"
import signUpRouter from "./routes/signUp.js"
import signInRouter from "./routes/signIn.js"

const app = express()   
app.use(express.json());


await connectDB()

app.use("/api/v1/signup",signUpRouter)
app.use("/api/v1/signin",signInRouter)


app.listen(3000,() =>{
    console.log("server running at port 3000")

})
