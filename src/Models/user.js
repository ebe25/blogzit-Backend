const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SALT_ROUND = 10;
const JWT_KEY = "ancalcnaajvnaddajvnkvadvdjb";

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
  return bcrypt.compareSync(incomingPassword, this.password);
};
userSchema.methods.generateToken = function () {
  return jwt.sign({id: this._id, email: this.email}, JWT_KEY, {
    expiresIn: "1h",
  });
};
const User = mongoose.model("User", userSchema);
module.exports = User;
