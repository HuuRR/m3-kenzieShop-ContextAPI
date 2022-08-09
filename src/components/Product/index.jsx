import { useContext } from "react";
import { CartContext } from "../../providers/cart";
import "./styles.css";

const Product = ({ product }) => {
  const { addCart } = useContext(CartContext);

  const { name, desc, price, img } = product;

  return (
    <li className="cart--prod--home">
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>{desc}</p>
      <span>R$ {price},00</span>
      <button onClick={() => addCart(product)}>Adicionar</button>
    </li>
  );
};

export default Product;
