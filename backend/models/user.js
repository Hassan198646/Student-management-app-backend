const knex = require ('knex');
export default function user() {
  async function createUser(args) {
    try {
      const response = await knex("user").insert({
        id: args.id,
        username: args.username,
        email: args.email,
        password: args.password,
        created_at: args.created_at,
        updated_at: args.updated_at,
      });
      return { status: true, response: response };
    } catch (err) {
      return { status: false, error: err };
    }
  }
  return {
    createUser,
  };
}
