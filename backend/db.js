const mysql = require("mysql2/promise");

// ❗ Safety check – prevents silent crashes
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in Render environment variables");
}

// ✅ Create MySQL pool using Railway public URL
const pool = mysql.createPool({
  uri: process.env.DATABASE_URL,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;







