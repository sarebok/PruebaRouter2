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
        <h3>Ingredientes</h3>
        <ul>
          {selectedPizza[0]?.ingredients?.map((ingredient, index) => {
            return <li key={index}>{ingredient}</li>;
          })}
        </ul>

        <h2>Precio: ${selectedPizza[0]?.price}</h2>
      </div>
    </div>
  );
};

export default DetailedCard;
