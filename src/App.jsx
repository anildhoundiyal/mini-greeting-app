import { useState } from "react";

export function App() {
  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Validation logic
  const nameError = name.length < 2 ? "Name must be at least 2 characters" : "";
  const emailError = !/^\S+@\S+\.\S+$/.test(email) ? "Enter a valid email" : "";
  const passwordError =
    password.length < 8 ? "Password must be at least 8 characters" : "";
  const confirmError =  
    confirmPassword !== password ? "Passwords do not match" : "";

  const isFormValid =
    name &&
    email &&
    password &&
    confirmPassword 
    !nameError &&
    !emailError &&
    !passwordError &&
    !confirmError;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div  style={{ maxWidth: "400px", margin: "40px auto", fontFamily: "Arial", border: "1px solid #ddd", padding: "20px 40px", borderRadius: "8px", background: "#333" }}>
      <h2>Mini Greeting App 🎉</h2>

      {submitted && (
        <p style={{ color: "green", fontWeight: "bold" }}>
          ✅ Registration successful! Welcome, {name}!
          <h1 style={{color:"white"}}>Wecome in Cepialabs</h1>
        </p>
      )}

      {!submitted && (
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <p style={{ color: "red" }}>{nameError}</p>

          {/* Email */}
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@mail.com"
          />
          <p style={{ color: "red" }}>{emailError}</p>

          {/* Password */}
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <p style={{ color: "red" }}>{passwordError}</p>

          {/* Confirm Password */}
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
          />
          <p style={{ color: "red" }}>{confirmError}</p>

          {/* Submit Button */}
          <button type="submit" disabled={!isFormValid}>
            Register
          </button>
        </form>
      )}

      <style>{`
        input {
          width: 100%;
          padding: 8px;
          margin: 5px 0 0 0;
          border-radius: 4px;
          border: 1px solid #aaa;
        }
        button {
          width: 100%;
          padding: 10px;
          margin-top: 10px;
          background: #4caf50;
          color: white;
          border: none;
          font-size: 16px;
          border-radius: 4px;
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