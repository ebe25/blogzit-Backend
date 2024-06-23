const mongoose = require("mongoose");
const {commentSchema} = require("./comment")

const BlogSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    name: {
      type: String,
    },
    tags: {
      type: [String],
      required: true,
    },
    likes: {
      type: Number,
    },
    comments: {
      type: [commentSchema],
      ref: "comment",
    },
    views: {
      type: Number,
      default: undefined,
    },
    category: {
      type: String,
      required: true,
    },
    picture: {
        type:String, //s3 blog cover image,
        required: true
    },
    status: {
      type: String,
      enum: ["published", "draft"],
    },
  },
  {
    timestamps: true,
  }
);
const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;

/**
 *  {
      "id": "745cb13a0ec4b96789ba7247",
      "content": "Angular is a platform for building mobile and desktop web applications. This guide covers Angular's key features, including components, services, and dependency injection, and shows how to build a basic application.",
      "title": "Getting Started with Angular",
      "name": "Emily Davis",
      "createdAt": "2023-10-10T11:25:30.567+00:00",
      "updatedAt": "2023-10-10T11:25:30.567+00:00",
      "tags": ["Angular", "JavaScript", "Web Development"],
      "likes": 140,
      "comments": [
        {
          "id": "17",
          "user": "Peter Parker",
          "comment": "Angular seems complicated, but this guide breaks it down well.",
          "createdAt": "2023-10-10T12:00:00.000+00:00"
        },
        {
          "id": "18",
          "user": "Rachel Adams",
          "comment": "Thanks for the step-by-step instructions on building an app.",
          "createdAt": "2023-10-10T12:30:00.000+00:00"
        }
      ],
      "views": 1800,
      "authorBio": "Emily Davis is a software engineer with a passion for Angular and front-end development, dedicated to creating high-performance web applications.",
      "category": "Web Development",
      "status": "published"
    },
 */
