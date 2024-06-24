const blogRepository = require("../Repository/blogRepository");
const UserRepository = require("../Repository/userRepo");
class blogService {
  constructor() {
    this.blogRepositoryObj = new blogRepository();
    this.UserRepositoryObj = new UserRepository();
  }
  async createBlog(data, userId) {
    try {
      const populateBlogsData = {
        ...data,
        author: userId,
        likes: 100, 
        views: 100,
      };

      const result = await this.blogRepositoryObj.create(populateBlogsData);
      return result;
    } catch (err) {
      throw err;
    }
  }
  async getAllBlogs() {
    try {
      const result = await this.blogRepositoryObj.getAllTweet();

      return result;
    } catch (err) {
      return err;
    }
  }
  async getBlogById(id) {
    try {
      const result = await this.blogRepositoryObj.get(id);
      return result;
    } catch (err) {
      throw err;
    }
  }

  async getUserBlogs(userId) {
    try {
      const blogs = await this.getAllBlogs();
      const userBlogs = blogs.filter((blog) => blog.author == userId);
      return userBlogs;
    } catch (error) {
      throw error;
    }
  }

  async seedBlogs(payload) {
    try {
      const result = await this.blogRepositoryObj.seed(payload);
      return result;
    } catch (err) {
      throw err;
    }
  }
}
module.exports = blogService;
