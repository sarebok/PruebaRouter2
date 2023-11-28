import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import { useEffect } from "react";

const DetailedCard = () => {
  const { pizzaData, selectedPizza, setSelectedPizza } = useContext(PizzaContext);
  const { nombrepizza } = useParams();
  if (!pizzaData) return;
  useEffect(() => {
    setSelectedPizza(pizzaData?.filter((pizza) => pizza.name === nombrepizza));
  }, []);

  return (
    <div className="detailed-card-container">
      <img src={selectedPizza[0]?.img} alt="" />
      <div>
        <h2>{selectedPizza[0]?.name}</h2>
        <p>{selectedPizza[0]?.desc}</p>
        <h2>{selectedPizza[0]?.price}</h2>
      </div>
    </div>
  );
};

export default DetailedCard;
