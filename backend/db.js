const mysql = require("mysql2/promise");

// ✅ Safety check (prevents silent crashes)
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in environment variables");
}

// ✅ Create MySQL connection pool using Railway public URL
const pool = mysql.createPool({
  uri: process.env.DATABASE_URL,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// ✅ Optional: Test connection on startup (recommended)
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log("✅ MySQL connected successfully");
    connection.release();
  } catch (error) {
    console.error("❌ MySQL connection failed:", error.message);
  }
})();

module.exports = pool;








