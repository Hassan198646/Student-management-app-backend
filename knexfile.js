// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: "localhost",
      user: "root",
      password: "hassan19864650",
      database: "student_mangement",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./backend/migrations", // Specify the directory where your migration files are located
      tableName: "Student", // Specify the name of the migrations table
    },
  },

  // staging: {
  //   client: "mysql2",
  //   connection: {
  //     host: "localhost",
  //     user: "root",
  //     password: "hassan19864650",
  //     database: "student_mangement",
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: "user",
  //     directory:'./backend/migrations',
  //   },
  // },

  // production: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password",
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: "knex_migrations",
  //   },
  // },
};
