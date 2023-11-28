import { useNavigate } from "react-router-dom";

const Card = ({ pizza, img, price }) => {
  const navigate = useNavigate();

  const handleClick = (pizza) => {
    navigate(`/pizza/${pizza}`);
  };
  return (
    <>
      <img src={img} alt="" className="card-img" />
      <h3>{pizza}</h3>
      <h4>{price}</h4>
      <button onClick={() => handleClick(pizza)}>Ver detalle</button>
      <button onClick={() => handleClick(pizza)}>Agregar al carrito</button>
      <button onClick={() => handleClick(pizza)}>Eliminar al carrito</button>
    </>
  );
};

export default Card;
