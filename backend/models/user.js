const knex = require ('../knex');
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
  module.exports = {
    createUser,
  };

