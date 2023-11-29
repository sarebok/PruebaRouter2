import { createContext, useState } from "react";

export const PizzaContext = createContext();

const ContextProvider = ({ children }) => {
  const [pizzaData, setPizzaData] = useState();
  const [selectedPizza, setSelectedPizza] = useState("");
  const [cartItems, setCartItems] = useState([]);

  ////
  const addToCart = (pizza) => {
    // Check if an item with the same name already exists in the cart
    const existingItemIndex = cartItems.findIndex((item) => item.name === pizza.name);

    if (existingItemIndex !== -1) {
      // If it exists, update the quantity instead of adding a duplicate
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      // If it doesn't exist, add the item to the cart
      setCartItems([...cartItems, { ...pizza, quantity: 1 }]);
    }
  };
  ///

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.name !== item);
    setCartItems(updatedCart);
  };

  /* const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  }; */

  const calculateTotalPrice = () => {
    // Calculate the total price by considering quantities
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const state = { pizzaData, setPizzaData, selectedPizza, setSelectedPizza, cartItems, addToCart, removeFromCart, calculateTotalPrice };

  return <PizzaContext.Provider value={state}>{children}</PizzaContext.Provider>;
};

export default ContextProvider;
