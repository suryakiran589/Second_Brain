import { Request,Response,NextFunction } from "express";
import jwt from "jsonwebtoken"
import { JSON_PASSWORD } from "../utils/constants.js";

export default  function userMiddleware(req:Request,res:Response,next:NextFunction){
    const header = req.headers["authourisation"]
    const decoded = jwt.verify(header as string,JSON_PASSWORD)
    if(decoded){
        //@ts-ignore
        req.userId = decoded.id
        next()
    }
    else{
        res.status(403).json({
            msg:"you are not logged in"
        })
    }
}
