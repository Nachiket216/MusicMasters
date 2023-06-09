import React from "react";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    // case "SEARCH":
    //   return { ...state, search: action.search };

    case "OUT_OF_BOX_FILTER":
      return { ...state, outOfStock: !state.outOfStock };

    case "FAST_DELIVERT":
      return { ...state, fastDelivery: !state.fastDelivery };

    // case "HIGH_TO_LOW":
    //   return { ...state, state.products: state.products.sort((a, b) => a.price - b.price) };

    // case "LOW_TO_HIGH":
    //   return { ...state, state.products: state.products.sort((a, b) => b.price - a.price) };
    default:
      return state;
  }
};
