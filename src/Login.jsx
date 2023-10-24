import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // usestate to update the value of username
  const [username, setUsername] = useState("");
  // usestate to update the value of password
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Can Handle authentication logic here
    console.log("Username: ", username);
    console.log("Password: ", password);
  };

  return (
    <div className="login-container-custom">
      <h2 className="custom-heading">Login</h2>
      <form>
        <div className="input-container-custom">
          <input
            type="text"
            placeholder="Username"
            className="custom-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)} //to return the target value .What value you tpye will be returned
          />
        </div>
        <div className="input-container-custom">
          <input
            type="password"
            placeholder="Password"
            className="custom-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" className="custom-button" onClick={handleLogin}>
          Login
        </button>
        <Link to="/register">
          <button type="button" className="custom-button">
            Register
          </button>
        </Link>
        <Link to="/">
          <button type="button" className="custom-button">
            Guest
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
