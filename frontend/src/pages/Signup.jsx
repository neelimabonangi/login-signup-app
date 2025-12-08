import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";
import { useAuth } from "../AuthContext";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  if (!form.agree)
    return setError("You must agree to the terms of service");
  if (form.password !== form.confirmPassword)
    return setError("Passwords do not match");

  try {
    await axios.post(`${API_BASE}/api/auth/signup`, {
      name: form.name,
      email: form.email,
      password: form.password,
    });

    navigate("/login"); // ✅ Redirect to login after signup
  } catch (err) {
    setError(err.response?.data?.message || "Signup failed");
  }
};

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <h2>CREATE ACCOUNT</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Repeat your password"
            onChange={handleChange}
            required
          />

          <label className="checkbox">
            <input
              type="checkbox"
              name="agree"
              onChange={handleChange}
            />
            I agree to all statements in <span>Terms of service</span>
          </label>

          <button className="gradient-btn">SIGN UP</button>
        </form>

        <p className="switch-text">
          Have already an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;



