import React from "react";

function Signup() {
  return (
    <div className="auth-container">
      <h2>Say Hello!</h2>
      <form>
        <label>Full Name</label>
        <input type="text" placeholder="Enter your name" />

        <label>Email</label>
        <input type="email" placeholder="Enter your email address" />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" />

        <label>Phone</label>
        <input type="tel" placeholder="Enter your phone number" />

        <button type="submit">Signup →</button>
      </form>
    </div>
  );
}

export default Signup;
