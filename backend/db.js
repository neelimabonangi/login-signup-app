const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "appuser",
  password: "Appuser@123",
  database: "auth_app",
});

module.exports = pool;





