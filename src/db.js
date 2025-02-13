const { Client } = require('pg');

async function connectDB() {
  const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres', 
    password: 'xxXX1234',          
    port: 5432,
  });

  await client.connect();
  return client;
}

module.exports = connectDB;