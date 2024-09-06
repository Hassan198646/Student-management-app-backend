// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "mysql2",
    connection: {
      filename: "./config/db",
    },
  },

  staging: {
    client: "mysql2",
    connection: {
      host: "localhost",
      user: "root",
      password: "hassan19864650",
      database: "student_mangement",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "User",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
