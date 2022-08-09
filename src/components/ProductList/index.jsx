import { useContext } from "react";
import { ProductsContext } from "../../providers/product";
import Product from "../Product";
import "./styles.css";

const ProductsList = () => {
  const { products } = useContext(ProductsContext);
  return (
    <ul className="container--products">
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </ul>
  );
};

export default ProductsList;
