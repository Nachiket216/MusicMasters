import React, { createContext, useReducer, useState } from "react";
import { reducer } from "../reducers/filter-reducer";
import { useContext } from "react";
import { ApiContext } from "./ApiContext";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const { products } = useContext(ApiContext);

  const initState = {
    products,
    sortByPrice: "",
    search: "",
    range: 5000,
    inStock: false,
    fastDelivery: false,
    onSale: false,
    categories: {
      paperCutting: false,
      shadowBox: false,
      quilling: false,
      layering: false,
      origami: false,
      kirigami: false,
      origami3d: false,
      miniatures: false,
    },
    ratings: "",
  };

  const [state, dispatch] = useReducer(reducer, initState);
  const [display, setDisplay] = useState("");
  const toggleFilter = (e) => {
    e.preventDefault();
    setDisplay(display === "flex" ? "none" : "flex");
  };
  return (
    <ProductContext.Provider
      value={{ state, dispatch, display, setDisplay, toggleFilter }}
    >
      {children}
    </ProductContext.Provider>
  );
};
