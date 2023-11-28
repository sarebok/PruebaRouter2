import React from "react";
import Card from "./Card";
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

const Gallery = () => {
  const { pizzaData } = useContext(PizzaContext);
  if (!pizzaData) return;
  return (
    <div className="gallery">
      {pizzaData?.map(({ id, name, img, price }) => {
        {
          return (
            <div key={id} className="pizza-card">
              <Card pizza={name} img={img} price={price} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Gallery;
