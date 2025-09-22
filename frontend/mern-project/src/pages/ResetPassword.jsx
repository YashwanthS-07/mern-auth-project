import React from "react";

function ResetPassword() {
  return (
    <div className="auth-container">
      <h2>Reset Password</h2>
      <form>
        <label>New Password</label>
        <input type="password" placeholder="Enter new password" />

        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm new password" />

        <button type="submit">Reset Password →</button>
      </form>
    </div>
  );
}

export default ResetPassword;
