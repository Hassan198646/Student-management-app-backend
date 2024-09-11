/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('user', function(table) {
      table.increments('id').primary();  
      table.string('username', 255).notNullable().unique();  
      table.string('email', 255).notNullable().unique();  
      table.string('password', 255).notNullable();  
      table.timestamps(true, true);  
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('user');    // Drop user table second (if it exists)
};
