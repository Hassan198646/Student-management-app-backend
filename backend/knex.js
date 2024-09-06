import knex from "knex";
import knexfile from "./knexfile";
const environment = 'development';

export  default knex(knexfile[environment])