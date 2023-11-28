import React from "react";
import Gallery from "../components/Gallery";
import { useEffect } from "react";
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

const Home = () => {
  const { setPizzaData, pizzaData } = useContext(PizzaContext);
  //api call
  async function getPizzaData(signal) {
    try {
      const url = "/pizzas.json";
      const response = await fetch(url, { signal });
      const data = await response.json();
      setPizzaData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    if (pizzaData) return;
    getPizzaData(signal);
    //cleanup
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <main>
      <h1>Home Pizzeria</h1>
      <Gallery />
    </main>
  );
};

export default Home;
