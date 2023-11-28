import { createContext, useState } from "react";

export const PizzaContext = createContext();

const ContextProvider = ({ children }) => {
  const [pizzaData, setPizzaData] = useState();
  const [selectedPizza, setSelectedPizza] = useState("");
  const [cartItems, setCartItems] = useState();
  const state = { pizzaData, setPizzaData, selectedPizza, setSelectedPizza };

  return <PizzaContext.Provider value={state}>{children}</PizzaContext.Provider>;
};

export default ContextProvider;
