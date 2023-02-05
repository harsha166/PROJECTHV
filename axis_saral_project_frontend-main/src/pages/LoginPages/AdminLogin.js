import React from "react";
import "../style.css";
const AdminLogin = () => {
  return (
    <div class="content">
      <div class="text">Admin Login</div>

      <div class="field">
        <span class="fas fa-user"></span>
        <input type="text" required />
        <label>User name</label>
      </div>
      <div class="field">
        <span class="fas fa-lock"></span>
        <input type="password" />
        <label>Password</label>
      </div>
      <div class="forgot-pass">
        <a href="/">Forgot Password?</a>
      </div>
      <button>Sign in</button>
      <p>
        Are you a Employee?
        <span />
        <a href="/employee-login" >Click Here</a>
      </p>
      <span />
    </div>
  );
};
export default AdminLogin;
