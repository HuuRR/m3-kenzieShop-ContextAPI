import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("@CART")) || []
  );

  const addCart = (product) => {
    const alreadyExists = cart.find((item) => item.id === product.id);
    if (alreadyExists) {
      const newCart = cart.map((product) => {
        if (product.id === alreadyExists.id) {
          const { qtde, ...rest } = product;
          return { ...rest, qtde: qtde + 1 };
        }
        return product;
      });
      setCart(newCart);
      localStorage.setItem("@CART", JSON.stringify(newCart));
    } else {
      const newCart = [...cart, { ...product, qtde: 1 }];
      setCart(newCart);
      localStorage.setItem("@CART", JSON.stringify(newCart));
    }
  };

  const removeCart = (id) => {
    const filtroCart = cart.filter((item) => item.id !== id);
    setCart(filtroCart);
    localStorage.setItem("@CART", JSON.stringify(filtroCart));
  };

  return (
    <CartContext.Provider value={{ cart, addCart, removeCart }}>
      {children}
    </CartContext.Provider>
  );
};
