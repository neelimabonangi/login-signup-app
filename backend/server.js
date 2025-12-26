require("dotenv").config(); // ✅ load env FIRST

const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

// ✅ DEV CORS (allows all localhost ports)
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

// ✅ DB test route
app.get("/db-test", async (req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ message: "DB Connected ✅" });
  } catch (err) {
    console.error("❌ DB error:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Auth routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// ✅ Start server (MATCH .env)
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});










