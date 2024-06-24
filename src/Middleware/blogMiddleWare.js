const blogZodSchema = require("../Zod-validator-Schemas/blogs");
const {StatusCodes} = require("http-status-codes");
const {ZodError} = require("zod");
const createBlogValidator = async (req, res, next) => {
  try {
    blogZodSchema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      const errorMessages = error.errors.map((issue) => ({
        message: `${issue.path.join(".")} is ${issue.message}`,
      }));
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({error: "Invalid data", details: errorMessages});
    } else {
      console.log(error);
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({error: "Internal Server Error", details: error.message});
    }
  }
};

module.exports = createBlogValidator;
