const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const user = require("./controllers/user");
const middleware = require("./middleware/auth");
const task = require("./controllers/task");
app.use(express.json({ limit: "10mb" })); // For JSON requests
app.use(express.urlencoded({ limit: "10mb", extended: true })); // For URL-encoded requests
app.use(cors());
user(app);
middleware(app);
task(app,express);


app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
