const express = require('express')
const user = require('./controllers/user')
const app = express();
const db = require("./config/db");
user(app);
app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servier is running on ${PORT}`);
});
