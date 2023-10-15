import  jwt from "jsonwebtoken";
import authmodel from "../models/auth.js";

const check=async(req,res,next)=>{
let token;
const {authorization}=req.headers;
if (authorization && authorization.startsWith("Bearer")){
    try {
        token=authorization.split(" ")[1];
        const { userId }=jwt.verify(token,"hello");
        req.user=await authmodel.findById(userId).select("--password");
        next();
    } catch (error) {
        res.status(401).json({message:"unauthorized"});
    }
}
else{
    res.status(401).json({message:"unauthorized"});
}
}
export default check;