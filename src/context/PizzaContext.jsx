import { createContext, useState } from "react";

export const PizzaContext = createContext();

const ContextProvider = ({ children }) => {
  const [pizzaData, setPizzaData] = useState();
  const [selectedPizza, setSelectedPizza] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (pizza) => {
    const existingItemIndex = cartItems.findIndex((item) => item.name === pizza.name);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...pizza, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.name === item);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      const updatedItem = { ...updatedCart[existingItemIndex] };
      updatedItem.quantity -= 1;

      if (updatedItem.quantity <= 0) {
        updatedCart.splice(existingItemIndex, 1);
      } else {
        updatedCart[existingItemIndex] = updatedItem;
      }

      setCartItems(updatedCart);
    }
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const state = { pizzaData, setPizzaData, selectedPizza, setSelectedPizza, cartItems, addToCart, removeFromCart, calculateTotalPrice };

  return <PizzaContext.Provider value={state}>{children}</PizzaContext.Provider>;
};

export default ContextProvider;
