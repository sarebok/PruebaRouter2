import React from "react";
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

const AddRemoveButtons = ({ id, pizza, price }) => {
  const { addToCart, removeFromCart } = useContext(PizzaContext);
  const handleAddToCart = (pizza) => {
    addToCart(pizza);
  };
  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  return (
    <div>
      <button onClick={() => handleAddToCart({ id: id, name: pizza, price })}>Agregar</button>
      <button onClick={() => handleRemoveFromCart(pizza)}>Eliminar</button>
    </div>
  );
};

export default AddRemoveButtons;
