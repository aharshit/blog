import authmodel from "../models/auth.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
class Authcontroller{
    static userregistration=async(req,res)=>{
        const {username,email,password}=req.body;
        try {
            if (username && email && password){
                const userexists=await authmodel.findOne({email:email});
                if (!userexists){
                    const gensalt=await bcryptjs.genSalt(10);
                    const hashpassword=await bcryptjs.hash(password,gensalt);

                    const newuser=new authmodel({
                        username,
                        email,
                        password:hashpassword,

                    });

                    const saveuser= await newuser.save();
                    if (saveuser){
                        return res.status(200).json({message:"user registered"});
                    }
                    
                }
                else{
                    return res.status(400).json({message:"user present"});
                }

            }
            else{
                return res.status(400).json({message:"all fields must be filled"});
            }
        } catch (error) {
            return res.status(400).json({message:error.message});
        }
        
    }
    static userlogin=async(req,res)=>{
        const{email,password}=req.body
        try {
            
        const findemail= await authmodel.findOne({email:email});
        if(email && password){
        if (!findemail){
            res.status(400).json("email doesnt exists");
        }
        else{
            if(findemail.email===email && await (bcryptjs.compare(password,findemail.password))){
                const token=jwt.sign({userId:findemail._id},"hello",{expiresIn:"2d"});
                res.status(200).json({
                    message:"login successfully",
                    token,
                    name:findemail.username,

                });
            }
            else{
                res.status(400).json("wrong password");
            }

        }}
        else{
            res.status(400).json("both fields are required");
        }
    }
        catch (error) {
            res.status(400).json({message:error.message})
        }

    }
}
export default Authcontroller