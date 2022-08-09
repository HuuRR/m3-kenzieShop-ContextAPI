import { useContext } from "react";
import { CartContext } from "../../providers/cart";
import "./styles.css";

const ProductCart = ({ product }) => {
  const { removeCart } = useContext(CartContext);
  const { id, name, price, img, qtde } = product;

  return (
    <li className="container--prod--cart">
      <img src={img} alt={name} />
      <div className="name--qtde">
        <h3>{name}</h3>
        <span>{qtde} und</span>
      </div>
      <span className="cart--price">R$ {price * qtde},00</span>
      <button onClick={() => removeCart(id)}>🗑️</button>
    </li>
  );
};

export default ProductCart;
