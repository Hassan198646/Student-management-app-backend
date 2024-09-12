 const knex = require('knex');
 const knexfile = require('../knexfile');
 const environment = 'development';
 const db = knex(knexfile[environment]);
 
module.exports = db;