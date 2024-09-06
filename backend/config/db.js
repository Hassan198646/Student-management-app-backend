const knex = require("knex");
const db = knex({
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "root",
    password: "hassan19864650",
    database: "student_mangement",
  },
  pool: { min: 2, max: 10 },
  acquireConnectionTimeout: 10000,
});

module.exports = db;
