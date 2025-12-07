const express = require("express");
const cors = require("cors");
require("dotenv").config();
const pool = require("./db");

const app = express();

// ✅ FINAL DEV CORS (ALLOW ALL ORIGINS)
app.use(
  cors({
    origin: true, // ✅ allows ALL localhost ports (5173–5199 etc)
    credentials: true,
  })
);

app.use(express.json());

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

// ✅ DB test
app.get("/db-test", async (req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ message: "DB Connected ✅" });
  } catch (err) {
    console.error("DB error:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Auth routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});









