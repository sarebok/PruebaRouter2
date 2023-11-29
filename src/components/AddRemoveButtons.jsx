import React from "react";
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

const AddRemoveButtons = ({ id, pizza, price, img }) => {
  const { addToCart, removeFromCart } = useContext(PizzaContext);
  const handleAddToCart = (pizza) => {
    addToCart(pizza);
  };
  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  return (
    <div>
      <button className="anadir" onClick={() => handleAddToCart({ id: id, name: pizza, price, img })}>
        Agregar
      </button>
      <button className="eliminar" onClick={() => handleRemoveFromCart(pizza)}>
        Eliminar
      </button>
    </div>
  );
};

export default AddRemoveButtons;
