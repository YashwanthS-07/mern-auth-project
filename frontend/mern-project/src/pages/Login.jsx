import React from "react";

function Login() {
  return (
    <div className="auth-container">
      <h2>Welcome Back!</h2>
      <form>
        <label>Email</label>
        <input type="email" placeholder="Enter your email address" />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" />

        <button type="submit">Login →</button>
      </form>
    </div>
  );
}

export default Login;
