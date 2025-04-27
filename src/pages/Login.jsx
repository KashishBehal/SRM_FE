import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext"

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    // Mock user roles
    const mockUser = {
      email,
      role: email.includes("admin")
        ? "admin"
        : email.includes("teacher")
        ? "teacher"
        : "student",
    };

    login(mockUser);
    navigate(`/${mockUser.role}`);
  };

  return (
    <form onSubmit={handleSubmit} className="register">
      <h2>LogIn</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;