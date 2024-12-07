const task = require("../models/task");

module.exports = function (app) {
  const { createTask, getTask, updateTask, deleteTask } = task;
  const task_base_url = "/api/task";

  app.post(`${task_base_url}`, async (req, res) => {
    try {
      const response = await createTask(req.body);
      console.log(response);
      res.status(200).send(response);
    } catch (err) {
      console.error(err);
      res.status(500).json({ status: false, error: "Internal Server Error" });
    }
  });

  app.get(`${task_base_url}`, async (req, res) => {
    try {
      const response = await getTask();
      res.status(200).send(response);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      res.status(500).json({ status: false, error: error.message });
    }
  });

  app.get(`${task_base_url}/:id`, async (req, res) => {
    try {
      const response = await getTask();
      res.status(200).send(response);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      res.status(500).json({ status: false, error: error.message });
    }
  });

  app.get(`${task_base_url}/:id`, async (req, res) => {
    try {
      const id = req.params.id;
      const response = await getTaskById(id);
      res.status(200).send(response);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      res.status(500).json({ status: false, error: error.message });
    }
  });

  app.put(`${task_base_url}/:id`, async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id);
      const taskData = req.body;

      if (!id) {
        return res
          .status(400)
          .json({ status: false, error: "Task ID is required" });
      }

      if (!taskData) {
        return res
          .status(400)
          .json({ status: false, error: "No data provided for update" });
      }

      // Call the update function with ID and data
      const response = await updateTask(id, taskData);

      // Send the success response
      res.sendStatus(200).send(response);
      console.log("Task updated:", response);
    } catch (error) {
      // Handle errors
      console.error("Error updating task:", error);
      res.status(500).json({ status: false, error: error.message });
    }
  });

  app.delete(`${task_base_url}/:id`, async (req, res) => {
    try {
      const {id} = req.params;
      const response = await deleteTask(id);
      res.status(200).send(response);
    } catch (error) {
      console.error("Error delete tasks:", error);
      res.status(500).json({ status: false, error: error.message });
    }
  });
};
