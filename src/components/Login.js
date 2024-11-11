import React from "react";
import { Link } from "react-router-dom";

const Login = ({ setIsLogin }) => {
  const handleLogin = () => {
    // change isLogin = true
    setIsLogin(true);
  };

  return (
    <div>
      <h2>Login</h2>
      <Link to="/home">
        <button onClick={handleLogin}>Login</button>
      </Link>
    </div>
  );
};

export default Login;
