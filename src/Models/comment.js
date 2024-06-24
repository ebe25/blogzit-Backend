const mongoose = require("mongoose");

/**
 *  "comment": 
        {
          "id": "17",
          "user": "Peter Parker",
          "comment": "Angular seems complicated, but this guide breaks it down well.",
          "createdAt": "2023-10-10T12:00:00.000+00:00"
        },
        
      
 */

const commentSchema = mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "User",
    },

    content: {
      type: String,
      required: true,
    },
    blogId: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "Blog",
    },
  },
  {
    timestamps: true,
  }
);
const Comment = mongoose.model("Comment", commentSchema);
module.exports = {Comment, commentSchema};
