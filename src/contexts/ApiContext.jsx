import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("/api/products");
      const {
        status,
        data: { products },
      } = response;
      if (status === 200) {
        setProducts(products);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <ApiContext.Provider value={{ products }}>{children}</ApiContext.Provider>
  );
};
