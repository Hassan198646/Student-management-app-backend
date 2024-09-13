const user = require("../models/user");
const hashedPassword = require("bcryptjs");
module.exports = function (app) {
  const { createUser } = user;
  const user_base_url = "/api/user";

  app.post(`${user_base_url}`, async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const userPassword = await hashedPassword.hash(password, 10);
      const newUser = { username, email, password: userPassword };
      const response = await createUser(newUser);
      console.log(response);
      res.status(200).json(response);
    } catch (err) {
      console.error(err);
      res.status(500).json({ status: false, error: "Internal Server Error" });
    }
  });
};
