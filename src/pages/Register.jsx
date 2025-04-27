import React, { useState } from "react";
import "../App.css"
const Register = () => {
  const [form, setForm] = useState({ email: "", password: "", role: "student" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    alert("User registered");
  };

  return (
    <form onSubmit={handleSubmit} className="register">
      <h2>Register</h2>
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
      <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
        <option value="admin">Admin</option>
        <option value="teacher">Teacher</option>
        <option value="student">Student</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;