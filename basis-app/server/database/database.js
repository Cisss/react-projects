const { Client } = require('pg');

// Database connection configuration
const dbConfig = {
  user: 'postgres',
  password: 'Vergeeten1?',
  host: 'localhost',
  port: 6578,
  database: 'postgres',
};

// Create a new PostgreSQL client
const client = new Client(dbConfig);

module.exports = client;
