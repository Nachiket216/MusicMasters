import React, { useContext } from "react";
import { createContext, useReducer, useEffect, useState } from "react";
import { cartReducer } from "../reducers/cart-reducer/reducer";

export const CartContext = createContext();

const initState = {
  quantity: 0,
  mycart: [],
  wishlist: [],
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
