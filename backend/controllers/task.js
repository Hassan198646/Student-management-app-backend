const task = require("../models/task");

module.exports = function (app) {
  const { createTask,getTask } = task;
  const task_base_url = "/api/task";

  app.post(`${task_base_url}`, async (req, res) => {
    try {
      const response = await createTask(req.body);
      console.log(response);
      res.status(200).json(response);
    } catch (err) {
      console.error(err);
      res.status(500).json({ status: false, error: "Internal Server Error" });
    }
  });

  app.get(`${task_base_url}`, async (req, res) => {
    try {
      const response = await getTask(); 
      res.json({ status: true, response }); 
    } catch (error) {
      console.error("Error fetching tasks:", error);
      res.status(500).json({ status: false, error: error.message }); 
    }
  });
  
};
