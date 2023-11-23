import React, { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

const Card = () => {
  const { pizzaData } = useContext(PizzaContext);
  return (
    <>
      {pizzaData?.map(({ id, img, name, ingredients }) => {
        return (
          <div key={id} className="pizza-card">
            <img className="card-img" src={img} alt="" />
            <p>{name}</p>
            <p>Ingredientes:</p>
            {/*             {ingredients.foreach((ingredient) => {
              <p>{ingredient}</p>;
            })} */}
          </div>
        );
      })}
    </>
  );
};

export default Card;
