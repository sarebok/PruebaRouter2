import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import { useEffect } from "react";
import AddRemoveButtons from "./AddRemoveButtons";

const DetailedCard = () => {
  const { pizzaData, selectedPizza, setSelectedPizza } = useContext(PizzaContext);
  const { nombrepizza } = useParams();
  if (!pizzaData) return;
  useEffect(() => {
    setSelectedPizza(pizzaData?.filter((pizza) => pizza.name === nombrepizza));
  }, []);
  if (!selectedPizza) return;
  const { img, name, desc, ingredients, price, id } = selectedPizza[0];
  return (
    <div className="detailed-card-container">
      {console.log(selectedPizza)}
      <img src={img} alt="" />
      <div>
        <h2>{name}</h2>
        <p>{desc}</p>
        <h3>Ingredientes</h3>
        <ul>
          {ingredients?.map((ingredient, index) => {
            return <li key={index}>{ingredient}</li>;
          })}
        </ul>
        <h2>Precio: ${price}</h2>

        <AddRemoveButtons id={id} pizza={name} price={price} img={img} />
      </div>
    </div>
  );
};
export default DetailedCard;
