const {StatusCodes, getReasonPhrase} = require("http-status-codes");
const blogService = require("../Services/blogService");
const blogServiceObj = new blogService();
const createBlog = async (req, res) => {
  const data = req.body;
  const userId = req.user.id;
  try {
    const response = await blogServiceObj.createBlog(data, userId);
    return res.status(201).json({
      data: response,
      status: true,
      message: "Created the blog",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: null,
      status: false,
      message: "Blog generation failed",
      err: err.message,
    });
  }
};
const getBlogs = async (req, res) => {
  try {
    const response = await blogServiceObj.getAllBlogs();

    return res.status(200).json({
      data: response,
      status: true,
      message: "fetched the blog",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      status: false,
      message: "Cannot signUp",
      err: err.message,
    });
  }
};
const getBlogById = async (req, res) => {
  try {
    const blog = await blogServiceObj.getBlogById(req.params.id);
    return res.status(StatusCodes.ACCEPTED).send({
      data: blog,
      success: true,
      details: getReasonPhrase(StatusCodes.ACCEPTED),
      message: `Blog with  ${req.user.id} id- fetched successfully!`,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      data: null,
      success: false,
      details: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
      message: error.message,
    });
  }
};

const userBlogs = async (req, res) => {
  try {
    const response = await blogServiceObj.getUserBlogs(req.user.id);
    return res.status(200).json({
      data: response,
      status: true,
      message: "User Related blogs success",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: null,
      status: false,
      message: "Something went wrong",
      err: error.message,
    });
  }
};

const blogsSeeder = async (req, res) => {
  try {
    const response = await blogServiceObj.seedBlogs(req.body);
    return res.status(201).json({
      data: response,
      status: true,
      message: "Seeded posts",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      status: false,
      message: "Err while seeding blogs.",
      err: err.message,
    });
  }
};


module.exports = {
  createBlog,
  getBlogs,
  getBlogById,
  blogsSeeder,
  userBlogs,
};
