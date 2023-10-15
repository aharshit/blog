import connections from "./configure/db.js";
import express from "express";
import router from "./routes/route.js";
import cors from "cors";
const app=express();
const PORT=9000;
app.use(cors());
app.use(express.json());
connections();
app.get('/',(req,res)=>{
    res.send("working slowly");
})

app.use("/v1",router);
app.listen(PORT,()=>{
    console.log("listening ");
})
