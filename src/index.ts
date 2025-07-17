import express,{Request,Response} from "express";
import connectDB from "./config/db.js"
import signUpRouter from "./routes/signUp.js"
import signInRouter from "./routes/signIn.js"
import contentRouter from "./routes/content.js"
import linkRouter from "./routes/shareLink.js"

const app = express()   
app.use(express.json());


await connectDB()

app.use("/api/v1/signup",signUpRouter)
app.use("/api/v1/signin",signInRouter)
app.use("/api/v1/content",contentRouter)
app.use("/api/v1/",linkRouter)

app.listen(3000,() =>{
    console.log("server running at port 3000")

})
