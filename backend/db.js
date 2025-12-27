const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: { rejectUnauthorized: false },
  family: 4 // 👈 FORCE IPv4 (THIS FIXES ENETUNREACH)
});

// Test connection
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























