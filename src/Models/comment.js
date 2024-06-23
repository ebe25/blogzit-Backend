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
      name: {
        type: String,
        required: true,
      },
      picture: {
        type: String, //s3 url
      },
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Comment = mongoose.model("Comment", commentSchema);
module.exports = {Comment, commentSchema}
