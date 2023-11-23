import { createContext } from "react";

export const PizzaContext = createContext();

const contextProvider = ({ children }) => {
  const state = undefined;
  return <PizzaContext.Provider value={state}>{children}</PizzaContext.Provider>;
};

export default myContext;
