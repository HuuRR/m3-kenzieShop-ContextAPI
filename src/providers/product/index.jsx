import ourogold from "../../images/ourogold.png";
import aotc from "../../images/aotc.webp";
import ksm from "../../images/ksm.webp";
import treskm from "../../images/treskm.webp";
import { createContext, useState } from "react";

export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Gold - Azralon Horda",
      desc: "100.000 Gold Azralon Horda",
      price: 50,
      img: ourogold,
    },
    {
      id: 2,
      name: "Gold - Azralon Alliance",
      desc: "100.000 Gold Azralon Alliance",
      price: 75,
      img: ourogold,
    },
    {
      id: 3,
      name: "Gold - Nemesis Horda",
      desc: "100.000 Gold Nemesis Horda",
      price: 60,
      img: ourogold,
    },
    {
      id: 4,
      name: "Gold - Nemesis Alliance",
      desc: "100.000 Gold Nemesis Alliance",
      price: 55,
      img: ourogold,
    },
    {
      id: 5,
      name: "AOTC - Alliance",
      desc: "AOTC Alliance - All realms",
      price: 100,
      img: aotc,
    },
    {
      id: 6,
      name: "AOTC - Horda",
      desc: "AOTC Horda - All realms",
      price: 100,
      img: aotc,
    },
    {
      id: 7,
      name: "KSM - Horda",
      desc: "KSM Horda - All realms",
      price: 200,
      img: ksm,
    },
    {
      id: 8,
      name: "KSM - Alliance",
      desc: "KSM Alliance - All realms",
      price: 200,
      img: ksm,
    },
    {
      id: 9,
      name: "3k M+ Rating - Alliance",
      desc: "3000 Rating M+ - Alliance",
      price: 400,
      img: treskm,
    },
    {
      id: 10,
      name: "3k M+ Rating - Horda",
      desc: "3000 Rating M+ - Horda",
      price: 400,
      img: treskm,
    },
  ]);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
