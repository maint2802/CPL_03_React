import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const nav = useNavigate();

  const handleNavToLogin = () => {
    nav("/login");
  };

  return (
    <div>
      <h2>Home</h2>
      {/* cach1 */}
      <Link to="/login">
        <button>Nav to Login page</button>
      </Link>
      {/* cach2 */}
      <button onClick={handleNavToLogin}>Nav to Login page</button>
    </div>
  );
};

export default Home;
