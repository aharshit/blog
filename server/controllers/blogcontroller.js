import blogmodel from "../models/blogmodel.js";
class BlogController{
static getallblogs=async(req,res)=>{
    try {
        const fetchall=await blogmodel.find({user:req.user._id});
        res.status(200).json(fetchall);
    } catch (error) {
        res.status(400).json({message:error.message});
    }

}
static addnewblog=async(req,res)=>{
    const {title,category,description}=req.body;
    try {
        if(title && category && description){
            const blogg=new blogmodel({
                title:title,
                category:category,
                description:description,
                thumbnail:req.file.filename,
                user:req.user._id,
            });
            const addb=await blogg.save();
            if (addb){
                res.status(200).json({message:"added successfully"});
            }
        }
        else{
            res.status(400).json({message:"all fields required"});
        }
        
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}
static getsingleblog=async(req,res)=>{
   const {id}=req.params;
   try {
    if(id){
        const fetchid=await blogmodel.findById(id);
        res.status(200).json(fetchid);

    }
    else{
        res.status(400).json("required");
    }
    
   } catch (error) {
    res.status(400).json({message:error.message});
   }
}
}
export default BlogController