
const authenticate = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const data = jwt.verify(token, JWT_KEY);

  req.body = {
    ...req.body,
    userId: data.id,
  };

  next();
};
module.exports = authenticate;
