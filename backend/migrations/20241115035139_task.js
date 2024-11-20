/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("task", function (table) {
    table.increments("id").primary();
    table.string("title", 255).notNullable();
    table.string("priorityLevel", 255).notNullable();
    table.string("status", 255).notNullable();
    table.date("date").notNullable();
    table.string("description").notNullable();
    table.binary("image");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("task");
};
