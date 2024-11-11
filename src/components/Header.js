import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  console.log("header");
  return (
    <div>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/users">Users</NavLink>
    </div>
  );
};

export default React.memo(Header);

//
