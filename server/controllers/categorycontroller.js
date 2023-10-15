import categorymodel from "../models/categorymodel.js";
class CategoryController{
    static getallcategories=async(req,res)=>{
       try {
        const fetchall=await categorymodel.find({});
        res.status(200).json(fetchall)
        
       } catch (error) {
        res.status(400).json({message:error.message});
       }
    }
    static addnewcategory=async(req,res)=>{
       const{title}=req.body;
       try {
        if(title){
                const categoryobj=new categorymodel({
                    title,
                });
                const addcat=await categoryobj.save();
            if(addcat){
                res.status(200).json("added successfully");
            }
        }
        else{
            res.status(400).json({message:"All field required"});
        }
        
       } catch (error) {
        res.status(400).json({message:error.message});
       }
    }
    }
    export default CategoryController