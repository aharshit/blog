import express from "express";
import Authcontroller from "../controllers/authcontroller.js";
import BlogController from "../controllers/blogcontroller.js";
import CategoryController from "../controllers/categorycontroller.js";
import multer from "multer";
import check from "../middleware/authmiddleware.js";

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'public/upload/');
    },
    filename:function(req,file,cb){
        cb(null,`${Date.now()}-${file.originalname}`)
    },

});
const upload=multer({storage:storage});
const router=express.Router();
router.post("/user/login",Authcontroller.userlogin);
router.post("/user/register",Authcontroller.userregistration);

router.get("/get/allblogs",check,BlogController.getallblogs);
router.post("/add/blog",upload.single("thumbnail"),check,BlogController.addnewblog);
router.get("/get/blog/:id",check,BlogController.getsingleblog);

router.post("/add/category",check,CategoryController.addnewcategory);
router.get("/get/categories",check,CategoryController.getallcategories);

export default router