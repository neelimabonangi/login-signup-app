const mysql = require("mysql2/promise");

// ✅ Railway + Render: use public database URL
const pool = mysql.createPool(process.env.DATABASE_URL);

module.exports = pool;






