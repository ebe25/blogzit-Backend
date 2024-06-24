const {StatusCodes, getReasonPhrase} = require("http-status-codes");
const jwt = require("jsonwebtoken");
const {JWT_KEY} = require("../Config/server");
const authenticate = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(StatusCodes.BAD_REQUEST).send({
        error: "Token not provided",
        status: false,
        details: getReasonPhrase(StatusCodes.BAD_REQUEST),
      });
    }
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, JWT_KEY);
    if (!user) {
      {
        return res.status(StatusCodes.UNAUTHORIZED).json({
          messsage: "Token expired or invalid token",
          status: false,
          details: getReasonPhrase(StatusCodes.UNAUTHORIZED),
        });
      }
    } else {
      req.user = user;
      next();
    }
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: error.message,
      details: error.name,
      status: false,
    });
  }
};
module.exports = authenticate;
