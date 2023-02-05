import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {logIn} from "../../utils/CheckLogin";
const EmployeeLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      username: email,
      password: password,
    };
    axios.post("http://localhost:8100/token", requestBody).then((response) => {
      console.log(response.data.token);
      const token = `Bearer ${response.data.token}`;
      logIn(token);
      navigate("/news-feed");
      alert("Login Successful"); 
      window.location.reload();
    }).catch((err) => {
      alert("Invalid Credentials");
    });
  };

  return (
    <div class="content">
      <div class="text">Login Form</div>

      <div class="field">
        <span class="fas fa-user"></span>
        <input
          id="empid"
          type="text"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>Employee Email ID</label>
      </div>
      <div class="field">
        <span class="fas fa-lock"></span>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <label>Password</label>
      </div>
      <div class="forgot-pass">
        <a href="/">Forgot Password?</a>
      </div>

      <button onClick={(e) => handleSubmit(e)}>Sign in</button>
      <p>
        Are you an admin?
        <span />
        <Link to={"/admin-login"}>Click Here</Link>
      </p>
      <span />
    </div>
  );
};

export default EmployeeLogin;
