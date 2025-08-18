import jwt from "jsonwebtoken";
import { JSON_PASSWORD } from "../utils/constants.js";
export default function userMiddleware(req, res, next) {
    const header = req.headers["authorization"];
    if (!header) {
        res.status(401).json({ message: "No token provided" });
        return;
    }
    // console.log("Authorization header received:", header);
    const token = header?.split(" ")[1];
    if (!token) {
        res.status(401).json({ msg: "unautthorised" });
        return;
    }
    // console.log("Token extracted:", token);
    try {
        const decoded = jwt.verify(token, JSON_PASSWORD);
        if (typeof decoded === "string") {
            res.status(401).json({ message: "Invalid token format" });
            return;
        }
        req.userId = decoded.id;
        next();
    }
    catch {
        res.status(401).json({ message: "Invalid token" });
        return;
    }
}
