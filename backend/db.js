const { Pool } = require("pg");

// Create PostgreSQL connection using Supabase DB_URL
const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false, // required for Supabase
  },
});

// Test connection once on startup
pool
  .connect()
  .then(client => {
    console.log("✅ PostgreSQL connected successfully");
    client.release();
  })
  .catch(err => {
    console.error("❌ PostgreSQL connection failed:", err.message);
  });

module.exports = pool;






















