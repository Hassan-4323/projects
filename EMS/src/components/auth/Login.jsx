import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    const success = handleLogin(email, password);

    if (!success) {
      setError("Invalid email or password.");
      return;
    }

    setError("");
  };

  return (
    <div className="login-page">
      <div className="login-background-shape shape-one"></div>
      <div className="login-background-shape shape-two"></div>

      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">
            <span>EMS</span>
          </div>

          <h1>Welcome Back</h1>
          <p>Sign in to access your workspace</p>
        </div>

        <form onSubmit={submitHandler} className="login-form">
          <div className="input-group">
            <label>Email Address</label>

            <div className="input-wrapper">
              <span className="input-icon">✉</span>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
              />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>

            <div className="input-wrapper">
              <span className="input-icon">🔒</span>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
              />
            </div>
          </div>

          {error && <div className="login-error">{error}</div>}

          <button type="submit" className="login-button">
            Sign In
            <span>→</span>
          </button>
        </form>

        <div className="login-footer">
          <span>Employee Management System</span>
        </div>
      </div>
    </div>
  );
};

export default Login;