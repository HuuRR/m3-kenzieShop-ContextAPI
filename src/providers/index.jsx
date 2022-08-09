import { CartProvider } from "./cart";
import { ProductsProvider } from "./product";

export const Providers = ({ children }) => {
  return (
    <CartProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </CartProvider>
  );
};
