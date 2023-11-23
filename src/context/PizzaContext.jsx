import { createContext, useState } from "react";

export const PizzaContext = createContext();

const ContextProvider = ({ children }) => {
  const [pizzaData, setPizzaData] = useState();
  const state = { pizzaData, setPizzaData };

  return <PizzaContext.Provider value={state}>{children}</PizzaContext.Provider>;
};

export default ContextProvider;
