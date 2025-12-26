require("dotenv").config(); // load env first

const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

// ✅ CORS (allow Netlify + localhost)
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://login-signupapp.netlify.app"
    ],
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
    console.error("❌ DB error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Auth routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// ✅ Start server (Render-safe)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});











