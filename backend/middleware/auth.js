const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function (app) {
  const auth_base_url = "/api/auth";

  const authenticateToken = (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ message: "Access Denied: No Token Provided" });
    }
    try {
      const verified = jwt.verify(token, process.env.SECRET_KEY);
      req.user = verified;
      next();
    } catch (error) {
      res.status(400).json({ message: "Invalid Token" });
    }
  };

  app.get(`${auth_base_url}`, authenticateToken, (req, res) => {
    res.json({ message: "Welcome, you are authenticated!" });
  });
};
