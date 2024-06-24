const router = require("express").Router();
const userController = require("../Controllers/userController");
const blogController = require("../Controllers/blogController");
const authValidator = require("../Middleware/authMiddleware");
const createBlogValidator = require("../Middleware/blogMiddleWare");

router.post("/users/register", userController.signUp);
router.post("/users/login", userController.signIn);
router.get("/users", userController.getUserByEmail);
router.get("/users/:id", userController.getUser);

router.post(
  "/blogs/create",
  authValidator,
  createBlogValidator,
  blogController.createBlog
);
// router.post("/seed/blogs",blogController.blogsSeeder);
router.get("/blogs", blogController.getBlogs);
router.get("/blogs/:id", authValidator,blogController.getBlogById);
router.get("/blogs/user",authValidator, blogController.userBlogs);
module.exports = router;
