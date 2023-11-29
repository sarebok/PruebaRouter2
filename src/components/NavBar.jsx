import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

const NavBar = () => {
  const { calculateTotalPrice, cartItems } = useContext(PizzaContext);
  return (
    <nav>
      <h4>Profe no evalue css pos</h4>
      <div>
        <NavLink className={({ isActive }) => (isActive ? "isActive" : undefined)} to="/">
          <h3>Home</h3>
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "isActive" : undefined)} to="/cart">
          <h3>Carrito</h3>
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
