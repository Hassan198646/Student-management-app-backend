const knex = require("../knex");
async function createTask(args) {
  try {
    const response = await knex("task").insert({
      id: args.id,
      title: args.title,
      priorityLevel: args.priorityLevel,
      status: args.status,
      date: args.date,
      description: args.description,
    });
    return { status: true, message: response };
  } catch (err) {
    return { status: false, error: err };
  }
}

async function getTask() {
  try {
    const response = await knex.select("").from("task");
    return { status: true,  response };
  } catch (error) {
    return { status: false, error: error };
  }
}
module.exports = {
  createTask,
  getTask,
};
