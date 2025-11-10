// src/App.jsx
import React, { useState } from "react";

export function App() {
  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Validation logic (real-time)
  const nameError = name && name.length < 2 ? "Name must be at least 2 characters" : "";
  const emailError = email && !/^\S+@\S+\.\S+$/.test(email) ? "Enter a valid email" : "";
  const passwordError = password && password.length < 8 ? "Password must be at least 8 characters" : "";
  const confirmError =
    confirmPassword && confirmPassword !== password ? "Passwords do not match" : "";

  // Form valid only if all fields non-empty and no errors
  const isFormValid =
    name &&
    email &&
    password &&
    confirmPassword &&
    !nameError &&
    !emailError &&
    !passwordError &&
    !confirmError;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    setSubmitted(true);
    // here you can also send data to server / localStorage etc.
  };

  return (
    <div style={{ maxWidth: "430px", margin: "40px auto", fontFamily: "Arial, sans-serif", border: "1px solid #ddd", padding: "24px", borderRadius: "8px", background: "#333" }}>
      <h2 style={{ marginTop: 0 }}>Mini Greeting App 🎉</h2>

      {submitted ? (
        <div style={{ padding: 12, background: "#e6ffed", borderRadius: 6 }}>
          <p style={{ color: "green", fontWeight: 700, margin: 0 }}>
            ✅ Registration successful! Welcome, {name}!
          </p>
          <p style={{ marginTop: 8 }}>Wecome in Cepialabs</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <label style={{ display: "block", marginTop: 12 }}>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => { setName(e.target.value); }}
            placeholder="Enter your name"
            required
          />
          <p style={{ color: "red", minHeight: "18px", margin: "6px 0 0" }}>{nameError}</p>

          <label style={{ display: "block", marginTop: 12 }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); }}
            placeholder="example@mail.com"
            required
          />
          <p style={{ color: "red", minHeight: "18px", margin: "6px 0 0" }}>{emailError}</p>

          <label style={{ display: "block", marginTop: 12 }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); }}
            placeholder="Enter password (min 8 chars)"
            required
          />
          <p style={{ color: "red", minHeight: "18px", margin: "6px 0 0" }}>{passwordError}</p>

          <label style={{ display: "block", marginTop: 12 }}>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => { setConfirmPassword(e.target.value); }}
            placeholder="Confirm password"
            required
          />
          <p style={{ color: "red", minHeight: "18px", margin: "6px 0 0" }}>{confirmError}</p>

          <button type="submit" disabled={!isFormValid} style={{ marginTop: 14 }}>
            Register
          </button>
        </form>
      )}

      <style>{`
        input {
          width: 100%;
          padding: 10px;
          margin-top: 6px;
          border-radius: 6px;
          border: 1px solid #aaa;
          box-sizing: border-box;
        }
        button {
          width: 100%;
          padding: 10px;
          margin-top: 10px;
          background: #4caf50;
          color: white;
          border: none;
          font-size: 16px;
          border-radius: 6px;
          cursor: pointer;
        }
        button:disabled {
          background: gray;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}

export default App;
