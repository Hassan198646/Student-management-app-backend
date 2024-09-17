const knex = require("../knex");
async function createUser(args) {
  try {
    const response = await knex("user").insert({
      id: args.id,
      username: args.username,
      email: args.email,
      password: args.password,
    });
    return { status: true, response: response };
  } catch (err) {
    return { status: false, error: err };
  }
}

async function loginUser(email) {
  try {
    const response = await knex
      .select("email")
      .from("user")
      .where("email", email);
    if (response.length > 0) {
      return { status: true, user: response[0] }; 
    } else {
      return { status: false, message: "User not found" }; 
    }
  } catch (err) {
    return { status: false, error: err };
  }
}


module.exports = {
  createUser,
  loginUser
};
