const express = require('express')
const cors = require('cors')
const app = express();
require('dotenv').config();
const user = require('./controllers/user')
const middleware = require('./middleware/auth')
app.use(express.json());
app.use(cors());
user(app);
middleware(app);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servier is running on ${PORT}`);
});
