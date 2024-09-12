const express = require('express')
const cors = require('cors')
const user = require('./controllers/user')
const app = express();
app.use(express.json());
app.use(cors());
const db = require("./config/db");
user(app);
app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servier is running on ${PORT}`);
});
