const router=require("express").Router();
const userController=require("../Controllers/userController");
const blogController=require("../Controllers/blogController");
const middleware=require("../Middleware/userMiddleware")

router.post("/signUp",userController.signUp);
router.get("/signIn",userController.signIn);
router.post("/create",middleware,blogController.createBlog);
router.get("/blogs",blogController.getBlog);
router.get("/blogs/:id",blogController.getBlogById);
module.exports=router;