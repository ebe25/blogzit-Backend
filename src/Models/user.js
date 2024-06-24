const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_KEY, SALT_ROUND } = require("../Config/server");
const { BlogSchema } = require("./blog");


const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    picture: {
      type: String, //s3 url
    },
    bio: {
      type: String,
    },
    blogs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
      }
    ]
  },
  {timestamps: true, timeseries: true}
);
userSchema.pre("save", function (next) {
  const user = this;
  const salt = bcrypt.genSaltSync(SALT_ROUND);

  const hashPassword = bcrypt.hashSync(user.password, salt);

  user.password = hashPassword;

  next();
});
userSchema.methods.verifyPassword = function c(incomingPassword) {
  console.log(incomingPassword, this.password);
  return bcrypt.compareSync(incomingPassword, this.password);
};
userSchema.methods.generateToken = function () {
  return jwt.sign({id: this._id, email: this.email}, JWT_KEY, { //add refresh token 
    expiresIn: "1 day",
  });
};
const User = mongoose.model("User", userSchema);
module.exports = User;
