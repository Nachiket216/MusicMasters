import {
    ADD_TO_CART,
    ADD_TO_WISHLIST,
    DECREASE_ITEM_QUANTITY,
    REMOVE_FROM_CART,
    REMOVE_FROM_WISHLIST,
  } from "./action-types";
  
  export const cartReducer = (state, { type, payload }) => {
    switch (type) {
      case ADD_TO_CART:
        return {
          ...state,
          quantity: state.quantity + 1,
          mycart: [...state.mycart,payload],
        };
  
      case REMOVE_FROM_CART:
        return {
          ...state,
          quantity: state.quantity - state.mycart.find(item => item._id === payload._id).qty,
          // mycart: payload.cart
          mycart: state.mycart.filter((payload) => payload._id !== state.mycart._id)
        };
  
      case DECREASE_ITEM_QUANTITY:
        return {
          ...state,
          quantity: state.quantity - 1,
          mycart: payload.cart
        };
  
      case ADD_TO_WISHLIST:
        return {
          ...state,
          wishlist: [...state.wishlist,payload],
        };
  
      case REMOVE_FROM_WISHLIST:
        return {
          ...state,
          wishlist: payload,
        };
  
      default:
        return state;
    }
  };
  