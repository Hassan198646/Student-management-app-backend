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
    return { status: true, response: response };
  } catch (err) {
    return { status: false, error: err };
  }
}

async function getTask() {
  try {
    const response = await knex.select("").from("task");
    return { status: true, response };
  } catch (error) {
    return { status: false, error: error };
  }
}

async function getTaskById(id) {
  try {
    const response = knex.select("").from("task").where("id", id);
    return { status: true, response: response };
  } catch (error) {
    return { status: false, error: error };
  }
}

async function updateTask(id, args) {
  try {
    const response = await knex("task")
      .where("id", id)
      .update({
        ...args, // Assuming args contains the new date
      });

    console.log("Rows updated:", response);
    return response;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
}

async function deleteTask(id) {
  try {
    const response = await knex("task").del().where("id", id);
    return { status: true, response: response };
  } catch (error) {
    return { status: false, error: error };
  }
}

module.exports = {
  createTask,
  getTask,
  getTaskById,
  updateTask,
  deleteTask,
};
