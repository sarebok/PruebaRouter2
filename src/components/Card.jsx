import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { useNavigate } from "react-router-dom";
import Pizza from "../views/Pizza";
import AddRemoveButtons from "./AddRemoveButtons";

const Card = ({ pizza, img, price, id }) => {
  const navigate = useNavigate();

  const handleClick = (pizza) => {
    navigate(`/pizza/${pizza}`);
  };

  const { addToCart, removeFromCart } = useContext(PizzaContext);
  const handleAddToCart = (pizza) => {
    addToCart(pizza);
  };
  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };
  return (
    <>
      <img src={img} alt="" className="card-img" />
      <h3>{pizza}</h3>
      <h4>${price}</h4>
      <button onClick={() => handleClick(pizza)}>Ver detalle</button>
      <AddRemoveButtons id={id} pizza={pizza} price={price} img={img} />
    </>
  );
};

export default Card;
