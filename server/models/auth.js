import mongoose from "mongoose";
const authschema=mongoose.Schema({
    username:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
});

const authmodel=mongoose.model("users",authschema);
 export default authmodel;