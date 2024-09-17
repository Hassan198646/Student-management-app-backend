const knex = require("../knex");
const bycrypt = require("bcryptjs");
async function createUser(args) {
  try {
    const response = await knex("user").insert({
      id: args.id,
      username: args.username,
      email: args.email,
      password: args.password,
    });
    return { status: true, message: response };
  } catch (err) {
    return { status: false, error: err };
  }
}

async function loginUser(email, password) {
  try {
    const user = await knex
      .select("email", "password")
      .from("user")
      .where("email", email)
      .first();
    if (!user) {
      return { staus: false, user: "User Not Found" };
    }
    const isPasswordCorrect = await bycrypt.compare(password, user.password);
    if (isPasswordCorrect) {
      return { status: true, message: "Login Successfuly" };
    } else {
      return { status: false, message: "Invalid Password" };
    }
  } catch (err) {
    return { status: false, error: err };
  }
}

module.exports = {
  createUser,
  loginUser,
};
