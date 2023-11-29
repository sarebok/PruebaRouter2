import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

const NavBar = () => {
  const { calculateTotalPrice, cartItems } = useContext(PizzaContext);
  return (
    <nav>
      <h1>LOGO</h1>
      <div>
        <NavLink className={({ isActive }) => (isActive ? "nombre-de-la-clase" : undefined)} to="/">
          Home
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "nombre-de-la-clase" : undefined)} to="/cart">
          Cart
        </NavLink>
      </div>
      <div>
        <p>Total Pedido: ${calculateTotalPrice()}</p>
        {/* <p>Unidades: {cartItems.length}</p> */}
      </div>
    </nav>
  );
};

export default NavBar;
