const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  PORT: process.env.PORT,
  JWT_KEY: process.env.JWT_KEY,
  SALT: process.env.SALT
};
