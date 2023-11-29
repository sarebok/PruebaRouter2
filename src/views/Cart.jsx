import React, { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import AddRemoveButtons from "../components/AddRemoveButtons";

const Cart = () => {
  const { cartItems, calculateTotalPrice } = useContext(PizzaContext);
  return (
    <main>
      <h1>Carrito</h1>
      {console.log("cartItems", cartItems)}
      {cartItems.map(({ id, name, price, quantity }) => {
        return (
          <div key={id} className="carrito-card">
            <h2>Pizza {name},</h2>
            <h2>precio: {price}</h2>
            <h2>Cantidad: {quantity}</h2>
            <AddRemoveButtons id={id} pizza={name} price={price} />
          </div>
        );
      })}
      <h1>Total Pedido: ${calculateTotalPrice()}</h1>
    </main>
  );
};

export default Cart;
