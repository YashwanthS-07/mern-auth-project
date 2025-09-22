import React from "react";

function ForgotPassword() {
  return (
    <div className="auth-container">
      <h2>Forgot Password?</h2>
      <form>
        <label>Email</label>
        <input type="email" placeholder="Enter your email address" />

        <button type="submit">Send Reset Link →</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
