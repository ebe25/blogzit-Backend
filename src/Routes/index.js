const router=require("express").Router();
const userController=require("../Controllers/userController");
const blogController=require("../Controllers/blogController");
const middleware=require("../Middleware/userMiddleware")

router.post("/users/register",userController.signUp);
router.post("/users/login",userController.signIn);
router.get("/users",userController.getUserByEmail);
router.post("/create",middleware,blogController.createBlog);
// router.post("/seed/blogs",blogController.blogsSeeder);
router.get("/blogs",blogController.getBlog);
router.get("/blogs/:id",blogController.getBlogById);
module.exports=router;