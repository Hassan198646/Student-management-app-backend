const express = require('express')
const cors = require('cors')
const user = require('./controllers/user')
const app = express();
app.use(express.json());
app.use(cors());
require('dotenv').config();
user(app);
app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servier is running on ${PORT}`);
});
