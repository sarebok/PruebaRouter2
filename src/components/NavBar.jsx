import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h1>LOGO</h1>
      <div>
        <NavLink className={({ isActive }) => (isActive ? "nombre-de-la-clase" : undefined)} to="/">
          Home
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "nombre-de-la-clase" : undefined)} to="/pizza">
          Pizza
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "nombre-de-la-clase" : undefined)} to="/cart">
          Cart
        </NavLink>
      </div>
      <h3>monto</h3>
    </nav>
  );
};

export default NavBar;
