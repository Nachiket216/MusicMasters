import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductCategoryContext = createContext();

export const ProductCategoryProvider = ({ children }) => {
  const [category, setCategory] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("/api/categories");
      const {
        status,
        data: { categories },
      } = response;
      if (status === 200) {
        setCategory(categories);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <ProductCategoryContext.Provider value={{ category }}>
      {children}
    </ProductCategoryContext.Provider>
  );
};
